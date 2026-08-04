import { AccessValidationError, verifyAccessRequest, type AccessIdentity } from "./access";
import {
  cleanupExpiredData,
  getBreakdowns,
  getPages,
  getSummary,
  getVisitors,
  revealVisitorIp,
  storeEvents,
} from "./database";
import type { Env } from "./env";
import {
  MAX_BODY_BYTES,
  allowedOrigins,
  isOriginAllowed,
  isValidCfIp,
  looksLikeBot,
  normalizeConfiguredHost,
  validateEventEnvelope,
} from "./lib";
import adminHtml from "./admin/index.html";
import adminCss from "./admin/style.css";
import adminJs from "./admin/app.client.js";

const ADMIN_CSP = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "style-src-attr 'unsafe-inline'",
  "img-src 'self' data:",
  "connect-src 'self'",
  "font-src 'self'",
  "base-uri 'none'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

function sharedHeaders(): Headers {
  return new Headers({
    "Cache-Control": "no-store",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  });
}

function adminHeaders(contentType: string): Headers {
  const headers = sharedHeaders();
  headers.set("Content-Type", contentType);
  headers.set("Content-Security-Policy", ADMIN_CSP);
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return headers;
}

function json(body: unknown, status = 200, additionalHeaders?: HeadersInit): Response {
  const headers = sharedHeaders();
  headers.set("Content-Type", "application/json; charset=UTF-8");
  if (additionalHeaders) {
    new Headers(additionalHeaders).forEach((value, key) => headers.set(key, value));
  }
  return new Response(JSON.stringify(body), { status, headers });
}

function plain(message: string, status: number): Response {
  const headers = sharedHeaders();
  headers.set("Content-Type", "text/plain; charset=UTF-8");
  return new Response(message, { status, headers });
}

function corsHeaders(request: Request, env: Env): Headers | null {
  const origin = request.headers.get("Origin");
  if (!isOriginAllowed(origin, allowedOrigins(env.ALLOWED_ORIGINS))) return null;
  const headers = new Headers({
    "Access-Control-Allow-Origin": origin as string,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  });
  return headers;
}

function isCollectorPath(pathname: string): boolean {
  return pathname === "/v1/events" || pathname === "/api/events";
}

function isLocalDevelopmentHost(hostname: string, env: Env): boolean {
  if (env.ALLOW_LOCAL_DEV_HOSTS !== "true") return false;
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

function countryCode(request: Request): string | null {
  const value = (request.cf as unknown as { country?: unknown } | undefined)?.country;
  return typeof value === "string" && /^[A-Z]{2}$/.test(value) ? value : null;
}

async function collect(request: Request, env: Env, url: URL): Promise<Response> {
  if (!isCollectorPath(url.pathname)) return plain("Not found", 404);
  const cors = corsHeaders(request, env);
  if (!cors) return plain("Origin not allowed", 403);

  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (request.method !== "POST") {
    cors.set("Allow", "POST, OPTIONS");
    return json({ error: "Method not allowed" }, 405, cors);
  }

  const declaredLength = Number.parseInt(request.headers.get("Content-Length") ?? "0", 10);
  if (declaredLength > MAX_BODY_BYTES) return json({ error: "Payload too large" }, 413, cors);
  const contentType = (request.headers.get("Content-Type") ?? "").toLowerCase();
  if (!contentType.startsWith("application/json") && !contentType.startsWith("text/plain")) {
    return json({ error: "Content-Type must be application/json or text/plain" }, 415, cors);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
    return json({ error: "Payload too large" }, 413, cors);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ error: "Invalid JSON" }, 400, cors);
  }
  const events = validateEventEnvelope(payload);
  if (!events) return json({ error: "Invalid analytics event" }, 400, cors);

  const userAgent = request.headers.get("User-Agent");
  if (env.COLLECT_BOTS !== "true" && looksLikeBot(userAgent)) {
    return json({ accepted: 0, duplicates: 0, filtered: true }, 202, cors);
  }

  // Do not fall back to X-Forwarded-For or a client-provided body field. This
  // header is injected by Cloudflare at the trusted edge.
  const ip = request.headers.get("CF-Connecting-IP");
  if (!isValidCfIp(ip)) return json({ error: "Collection temporarily unavailable" }, 503, cors);

  try {
    const result = await storeEvents(env, events, {
      ip,
      userAgent,
      countryCode: countryCode(request),
      now: Math.floor(Date.now() / 1000),
    });
    return json(result, 202, cors);
  } catch (error) {
    console.error("Analytics collection failed", error instanceof Error ? error.message : "unknown error");
    return json({ error: "Collection temporarily unavailable" }, 503, cors);
  }
}

function sameAdminOrigin(request: Request): boolean {
  const origin = request.headers.get("Origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin.toLowerCase() === new URL(request.url).origin.toLowerCase();
  } catch {
    return false;
  }
}

async function parseSmallJson(request: Request): Promise<unknown | null> {
  const contentType = (request.headers.get("Content-Type") ?? "").toLowerCase();
  if (!contentType.startsWith("application/json")) return null;
  const length = Number.parseInt(request.headers.get("Content-Length") ?? "0", 10);
  if (length > 2048) return null;
  const text = await request.text();
  if (new TextEncoder().encode(text).length > 2048) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

async function adminApi(
  request: Request,
  env: Env,
  url: URL,
  identity: AccessIdentity,
): Promise<Response> {
  if (request.method === "GET" && url.pathname === "/api/admin/summary") {
    return json(await getSummary(env, url, identity));
  }
  if (request.method === "GET" && url.pathname === "/api/admin/pages") {
    return json(await getPages(env, url));
  }
  if (request.method === "GET" && url.pathname === "/api/admin/visitors") {
    return json(await getVisitors(env, url));
  }
  if (request.method === "GET" && url.pathname === "/api/admin/breakdowns") {
    return json(await getBreakdowns(env, url));
  }
  if (url.pathname === "/api/admin/visitors/reveal") {
    if (request.method !== "POST") return json({ error: "仅支持 POST 请求" }, 405, { Allow: "POST" });
    if (!sameAdminOrigin(request)) return json({ error: "请求来源验证失败" }, 403);
    const payload = await parseSmallJson(request);
    if (!payload) return json({ error: "请求内容无效" }, 400);
    const revealed = await revealVisitorIp(env, identity, payload);
    if (!revealed) return json({ error: "访客编号或查看原因无效" }, 400);
    if ("expired" in revealed) return json({ error: "该 IP 已过保留期或不存在" }, 410);
    return json(revealed);
  }
  return json({ error: "Not found" }, 404);
}

async function admin(request: Request, env: Env, url: URL): Promise<Response> {
  if (url.pathname === "/health" && request.method === "GET") {
    return json({ status: "ok", service: "scovion-analytics-admin" });
  }
  if (url.pathname === "/" && request.method === "GET") {
    return new Response(null, { status: 302, headers: { Location: "/admin", "Cache-Control": "no-store" } });
  }

  const isAdminRoute = url.pathname === "/admin" || url.pathname.startsWith("/admin/") || url.pathname.startsWith("/api/admin/");
  if (!isAdminRoute) return plain("Not found", 404);

  let identity: AccessIdentity;
  try {
    identity = await verifyAccessRequest(request, env);
  } catch (error) {
    if (error instanceof AccessValidationError) {
      return url.pathname.startsWith("/api/")
        ? json({ error: error.status === 503 ? "管理员身份验证尚未配置" : "管理员身份验证失败" }, error.status)
        : plain(error.status === 503 ? "管理员身份验证尚未配置" : "管理员身份验证失败", error.status);
    }
    console.error("Cloudflare Access validation failed");
    return plain("管理员身份验证失败", 401);
  }

  try {
    if (url.pathname.startsWith("/api/admin/")) return await adminApi(request, env, url, identity);
    if (request.method !== "GET" && request.method !== "HEAD") return plain("Method not allowed", 405);
    const body = request.method === "HEAD" ? null :
      url.pathname === "/admin/style.css" ? adminCss :
      url.pathname === "/admin/app.js" ? adminJs :
      adminHtml;
    const contentType =
      url.pathname === "/admin/style.css" ? "text/css; charset=UTF-8" :
      url.pathname === "/admin/app.js" ? "application/javascript; charset=UTF-8" :
      "text/html; charset=UTF-8";
    return new Response(body, { status: 200, headers: adminHeaders(contentType) });
  } catch (error) {
    console.error("Analytics admin request failed", error instanceof Error ? error.message : "unknown error");
    return url.pathname.startsWith("/api/")
      ? json({ error: "数据暂时无法读取，请稍后重试" }, 500)
      : plain("数据中心暂时无法打开", 500);
  }
}

async function handleRequest(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  const collectHost = normalizeConfiguredHost(env.COLLECT_HOST);
  const adminHost = normalizeConfiguredHost(env.ADMIN_HOST);
  if (!collectHost || !adminHost || collectHost === adminHost) {
    return plain("Analytics host configuration is invalid", 503);
  }

  if (hostname === collectHost) {
    if (url.pathname === "/health" && request.method === "GET") {
      return json({ status: "ok", service: "scovion-analytics-collector" });
    }
    return collect(request, env, url);
  }
  if (hostname === adminHost) return admin(request, env, url);
  if (isLocalDevelopmentHost(hostname, env)) {
    return isCollectorPath(url.pathname) ? collect(request, env, url) : admin(request, env, url);
  }
  return plain("Not found", 404);
}

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    return handleRequest(request, env);
  },
  scheduled(_controller: ScheduledController, env: Env, context: ExecutionContext): void {
    context.waitUntil(
      cleanupExpiredData(env).catch((error) => {
        console.error("Analytics retention cleanup failed", error instanceof Error ? error.message : "unknown error");
        throw error;
      }),
    );
  },
} satisfies ExportedHandler<Env>;
