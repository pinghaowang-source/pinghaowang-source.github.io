export const MAX_BATCH_SIZE = 20;
export const MAX_BODY_BYTES = 64 * 1024;

export type AnalyticsEventType = "page_view" | "click" | "conversion";

export interface AnalyticsEventInput {
  eventId: string;
  eventType: AnalyticsEventType;
  pagePath: string;
  pageTitle: string | null;
  targetPath: string | null;
  targetKey: string | null;
  sessionId: string;
  referrerHost: string | null;
  language: string | null;
  device: "desktop" | "mobile" | "tablet" | "other";
  section: string | null;
  product: string | null;
}

export interface ReportingRange {
  key: "24h" | "7d" | "30d" | "90d" | "13mo";
  seconds: number;
  label: string;
}

const REPORTING_RANGES: Record<ReportingRange["key"], ReportingRange> = {
  "24h": { key: "24h", seconds: 24 * 60 * 60, label: "过去 24 小时" },
  "7d": { key: "7d", seconds: 7 * 24 * 60 * 60, label: "过去 7 天" },
  "30d": { key: "30d", seconds: 30 * 24 * 60 * 60, label: "过去 30 天" },
  "90d": { key: "90d", seconds: 90 * 24 * 60 * 60, label: "过去 90 天" },
  "13mo": { key: "13mo", seconds: 395 * 24 * 60 * 60, label: "过去 13 个月" },
};

export function parseReportingRange(value: string | null): ReportingRange {
  if (value && Object.prototype.hasOwnProperty.call(REPORTING_RANGES, value)) {
    return REPORTING_RANGES[value as ReportingRange["key"]];
  }
  return REPORTING_RANGES["30d"];
}

export function parseRetentionDays(
  value: string | undefined,
  fallback: number,
  minimum: number,
  maximum: number,
): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < minimum || parsed > maximum) return fallback;
  return parsed;
}

export function normalizeConfiguredHost(value: string | undefined): string | null {
  if (!value) return null;
  const candidate = value.trim().toLowerCase().replace(/\.$/, "");
  if (!candidate || candidate.includes("/") || candidate.includes(":")) return null;
  if (!/^[a-z0-9.-]+$/.test(candidate)) return null;
  return candidate;
}

export function normalizeOrigin(value: string): string | null {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    if (url.username || url.password || url.pathname !== "/" || url.search || url.hash) return null;
    return url.origin.toLowerCase();
  } catch {
    return null;
  }
}

export function allowedOrigins(value: string | undefined): Set<string> {
  const origins = new Set<string>();
  for (const item of (value ?? "").split(",")) {
    const normalized = normalizeOrigin(item);
    if (normalized) origins.add(normalized);
  }
  return origins;
}

export function isOriginAllowed(origin: string | null, configured: Set<string>): boolean {
  if (!origin) return false;
  const normalized = normalizeOrigin(origin);
  return normalized !== null && configured.has(normalized);
}

function safeText(value: unknown, maximum: number): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned || cleaned.length > maximum) return null;
  return cleaned;
}

export function sanitizePagePath(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const candidate = value.trim();
  if (!candidate.startsWith("/") || candidate.startsWith("//") || candidate.length > 1024) return null;
  try {
    const url = new URL(candidate, "https://analytics.invalid");
    const path = url.pathname.replace(/\/{2,}/g, "/");
    if (!path.startsWith("/") || path.length > 240) return null;
    return path;
  } catch {
    return null;
  }
}

export function sanitizeTargetPath(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const candidate = value.trim();
  if (!candidate || candidate.length > 1024) return null;

  if (candidate.startsWith("/") && !candidate.startsWith("//")) {
    return sanitizePagePath(candidate);
  }

  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const path = url.pathname.replace(/\/{2,}/g, "/");
    const result = `${url.hostname.toLowerCase()}${path}`;
    return result.length <= 300 ? result : null;
  } catch {
    return null;
  }
}

export function sanitizeHostname(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const candidate = value.trim();
  if (!candidate || candidate.length > 253) return null;
  try {
    const url = candidate.includes("://") ? new URL(candidate) : new URL(`https://${candidate}`);
    const hostname = url.hostname.toLowerCase().replace(/\.$/, "");
    if (!hostname || !/^[a-z0-9.-]+$/.test(hostname)) return null;
    return hostname;
  } catch {
    return null;
  }
}

function sanitizeId(value: unknown, minimum: number, maximum: number): string | null {
  if (typeof value !== "string") return null;
  const candidate = value.trim();
  if (candidate.length < minimum || candidate.length > maximum) return null;
  return /^[A-Za-z0-9_-]+$/.test(candidate) ? candidate : null;
}

export function sanitizeVisitorId(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const candidate = value.trim().toLowerCase();
  return /^[a-f0-9]{64}$/.test(candidate) ? candidate : null;
}

export function sanitizeAuditReason(value: unknown): string | null {
  return safeText(value, 160);
}

export function validateEvent(value: unknown): AnalyticsEventInput | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  const eventId = sanitizeId(record.eventId ?? record.id, 12, 64);
  const sessionId = sanitizeId(record.sessionId, 8, 64);
  const eventType = record.eventType ?? record.type;
  const pagePath = sanitizePagePath(record.pagePath ?? record.page);

  if (
    !eventId ||
    !sessionId ||
    !pagePath ||
    (eventType !== "page_view" && eventType !== "click" && eventType !== "conversion")
  ) {
    return null;
  }

  const legacyTarget = record.target;
  const targetPath = sanitizeTargetPath(record.targetPath ?? legacyTarget);
  const targetKeyCandidate = safeText(record.targetKey ?? (targetPath ? null : legacyTarget), 100);
  const targetKey =
    targetKeyCandidate && /^[A-Za-z0-9][A-Za-z0-9._:/-]*$/.test(targetKeyCandidate)
      ? targetKeyCandidate
      : null;
  const languageCandidate = safeText(record.language, 12);
  const language =
    languageCandidate && /^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})?$/.test(languageCandidate)
      ? languageCandidate.toLowerCase()
      : null;
  const device =
    record.device === "desktop" || record.device === "mobile" || record.device === "tablet"
      ? record.device
      : "other";
  const sectionCandidate = safeText(record.section, 80);
  const section =
    sectionCandidate && /^[A-Za-z0-9][A-Za-z0-9._:/-]*$/.test(sectionCandidate)
      ? sectionCandidate
      : null;
  const productCandidate = safeText(record.product, 80);
  const product =
    productCandidate && /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(productCandidate)
      ? productCandidate.toLowerCase()
      : null;

  if (eventType === "click" && !targetPath && !targetKey) return null;
  if (eventType === "conversion" && !targetKey) return null;

  return {
    eventId,
    eventType,
    pagePath,
    pageTitle: safeText(record.pageTitle ?? record.title, 120),
    targetPath,
    targetKey,
    sessionId,
    referrerHost: sanitizeHostname(record.referrerHost),
    language,
    device,
    section,
    product,
  };
}

export function validateEventEnvelope(value: unknown): AnalyticsEventInput[] | null {
  let candidates: unknown[];
  if (Array.isArray(value)) {
    candidates = value;
  } else if (value && typeof value === "object" && Array.isArray((value as { events?: unknown }).events)) {
    candidates = (value as { events: unknown[] }).events;
  } else {
    candidates = [value];
  }

  if (candidates.length === 0 || candidates.length > MAX_BATCH_SIZE) return null;
  const events = candidates.map(validateEvent);
  return events.every((event): event is AnalyticsEventInput => event !== null) ? events : null;
}

export function isValidCfIp(value: string | null): value is string {
  if (!value || value.length > 45) return false;
  if (value.includes(":")) {
    if (!/^[0-9a-fA-F:.]+$/.test(value)) return false;
    const dottedTail = value.split(":").at(-1);
    return !dottedTail?.includes(".") || isValidIpv4(dottedTail);
  }
  return isValidIpv4(value);
}

function isValidIpv4(value: string): boolean {
  const parts = value.split(".");
  return (
    parts.length === 4 &&
    parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) >= 0 && Number(part) <= 255)
  );
}

export function maskIp(ip: string): string {
  if (!ip.includes(":")) {
    const parts = ip.split(".");
    return parts.length === 4 ? `${parts[0]}.${parts[1]}.${parts[2]}.xxx` : "已掩码";
  }

  const normalized = ip.toLowerCase();
  const groups = normalized.split(":").filter(Boolean).slice(0, 4);
  return groups.length ? `${groups.join(":")}::/64` : "IPv6 /64";
}

export function summarizeUserAgent(userAgent: string | null): string | null {
  if (!userAgent) return null;
  const browser =
    /Edg\/([\d.]+)/.exec(userAgent)?.[1] ? "Edge" :
    /Chrome\/([\d.]+)/.exec(userAgent)?.[1] ? "Chrome" :
    /Firefox\/([\d.]+)/.exec(userAgent)?.[1] ? "Firefox" :
    /Version\/([\d.]+).*Safari\//.exec(userAgent)?.[1] ? "Safari" : "其他浏览器";
  const platform =
    /Android/i.test(userAgent) ? "Android" :
    /iPhone|iPad|iPod/i.test(userAgent) ? "iOS" :
    /Macintosh|Mac OS X/i.test(userAgent) ? "macOS" :
    /Windows/i.test(userAgent) ? "Windows" :
    /Linux/i.test(userAgent) ? "Linux" : "其他系统";
  return `${browser} · ${platform}`;
}

export function looksLikeBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return /bot|crawler|spider|slurp|headless|preview|facebookexternalhit|bingpreview/i.test(userAgent);
}

export function utcDay(epochSeconds: number): string {
  return new Date(epochSeconds * 1000).toISOString().slice(0, 10);
}

export function startDay(epochSeconds: number): string {
  return utcDay(epochSeconds);
}

export function clampLimit(value: string | null, fallback: number, maximum: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, maximum);
}
