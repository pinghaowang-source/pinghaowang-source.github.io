export interface AccessEnvironment {
  ACCESS_TEAM_DOMAIN?: string;
  ACCESS_AUD?: string;
  ADMIN_EMAILS?: string;
}

export interface AccessIdentity {
  email: string;
  subject: string;
}

export class AccessValidationError extends Error {
  constructor(
    public readonly status: 401 | 403 | 503,
    message: string,
  ) {
    super(message);
  }
}

interface AccessJwtHeader {
  alg?: unknown;
  kid?: unknown;
}

interface AccessJwtClaims {
  aud?: unknown;
  email?: unknown;
  exp?: unknown;
  iat?: unknown;
  iss?: unknown;
  nbf?: unknown;
  sub?: unknown;
}

interface AccessJwk extends JsonWebKey {
  kid?: string;
}

interface JwksResponse {
  keys?: AccessJwk[];
}

interface CachedJwks {
  origin: string;
  expiresAt: number;
  keys: AccessJwk[];
}

let cachedJwks: CachedJwks | null = null;
const encoder = new TextEncoder();

function teamOrigin(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/") return null;
    return url.origin;
  } catch {
    return null;
  }
}

function base64UrlBytes(value: string): Uint8Array {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function exactBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.slice().buffer as ArrayBuffer;
}

function decodeJson<T>(value: string): T {
  return JSON.parse(new TextDecoder().decode(base64UrlBytes(value))) as T;
}

function jwtFromRequest(request: Request): string | null {
  const assertion = request.headers.get("Cf-Access-Jwt-Assertion");
  if (assertion) return assertion;
  const cookie = request.headers.get("Cookie") ?? "";
  for (const part of cookie.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === "CF_Authorization") {
      try {
        return decodeURIComponent(rest.join("="));
      } catch {
        return rest.join("=");
      }
    }
  }
  return null;
}

async function fetchJwks(origin: string, force = false): Promise<AccessJwk[]> {
  const now = Date.now();
  if (!force && cachedJwks?.origin === origin && cachedJwks.expiresAt > now) return cachedJwks.keys;

  const response = await fetch(`${origin}/cdn-cgi/access/certs`, {
    headers: { Accept: "application/json" },
    cf: { cacheTtl: 300, cacheEverything: true },
  });
  if (!response.ok) throw new AccessValidationError(503, "Unable to load Access signing keys");
  const body = (await response.json()) as JwksResponse;
  if (!Array.isArray(body.keys) || body.keys.length === 0) {
    throw new AccessValidationError(503, "Access signing keys are malformed");
  }
  cachedJwks = { origin, keys: body.keys, expiresAt: now + 5 * 60 * 1000 };
  return body.keys;
}

function configuredValues(value: string | undefined, lowercase = false): Set<string> {
  return new Set(
    (value ?? "")
      .split(",")
      .map((item) => lowercase ? item.trim().toLowerCase() : item.trim())
      .filter(Boolean),
  );
}

function claimAudiences(value: unknown): string[] {
  if (typeof value === "string") return [value];
  return Array.isArray(value) && value.every((item) => typeof item === "string") ? value : [];
}

export async function verifyAccessRequest(
  request: Request,
  env: AccessEnvironment,
): Promise<AccessIdentity> {
  const origin = teamOrigin(env.ACCESS_TEAM_DOMAIN);
  const allowedAudiences = configuredValues(env.ACCESS_AUD);
  const allowedEmails = configuredValues(env.ADMIN_EMAILS, true);
  if (!origin || allowedAudiences.size === 0 || allowedEmails.size === 0) {
    throw new AccessValidationError(503, "Cloudflare Access is not fully configured");
  }

  const token = jwtFromRequest(request);
  if (!token) throw new AccessValidationError(401, "Cloudflare Access assertion is missing");
  const parts = token.split(".");
  if (parts.length !== 3) throw new AccessValidationError(401, "Cloudflare Access assertion is malformed");

  let header: AccessJwtHeader;
  let claims: AccessJwtClaims;
  let signature: Uint8Array;
  try {
    header = decodeJson<AccessJwtHeader>(parts[0]);
    claims = decodeJson<AccessJwtClaims>(parts[1]);
    signature = base64UrlBytes(parts[2]);
  } catch {
    throw new AccessValidationError(401, "Cloudflare Access assertion cannot be decoded");
  }

  if (header.alg !== "RS256" || typeof header.kid !== "string") {
    throw new AccessValidationError(401, "Cloudflare Access assertion uses an unsupported algorithm");
  }

  let keys = await fetchJwks(origin);
  let jwk = keys.find((candidate) => candidate.kid === header.kid);
  if (!jwk) {
    keys = await fetchJwks(origin, true);
    jwk = keys.find((candidate) => candidate.kid === header.kid);
  }
  if (!jwk) throw new AccessValidationError(401, "Cloudflare Access signing key was not found");

  let validSignature = false;
  try {
    const key = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"],
    );
    validSignature = await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      key,
      exactBuffer(signature),
      encoder.encode(`${parts[0]}.${parts[1]}`),
    );
  } catch {
    validSignature = false;
  }
  if (!validSignature) throw new AccessValidationError(401, "Cloudflare Access signature is invalid");

  const now = Math.floor(Date.now() / 1000);
  const skew = 60;
  if (typeof claims.exp !== "number" || claims.exp < now - skew) {
    throw new AccessValidationError(401, "Cloudflare Access assertion has expired");
  }
  if (typeof claims.nbf === "number" && claims.nbf > now + skew) {
    throw new AccessValidationError(401, "Cloudflare Access assertion is not active");
  }
  if (typeof claims.iat === "number" && claims.iat > now + skew) {
    throw new AccessValidationError(401, "Cloudflare Access assertion has an invalid issue time");
  }
  if (claims.iss !== origin) throw new AccessValidationError(401, "Cloudflare Access issuer is invalid");
  if (!claimAudiences(claims.aud).some((audience) => allowedAudiences.has(audience))) {
    throw new AccessValidationError(403, "Cloudflare Access audience is not allowed");
  }

  const email = typeof claims.email === "string" ? claims.email.trim().toLowerCase() : "";
  if (!email || !allowedEmails.has(email)) {
    throw new AccessValidationError(403, "This identity is not an analytics administrator");
  }
  return {
    email,
    subject: typeof claims.sub === "string" ? claims.sub : email,
  };
}
