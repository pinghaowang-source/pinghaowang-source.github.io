import { decryptIp, encryptIp, createVisitorId } from "./crypto";
import type { Env } from "./env";
import {
  clampLimit,
  maskIp,
  parseReportingRange,
  parseRetentionDays,
  sanitizeAuditReason,
  sanitizeVisitorId,
  startDay,
  summarizeUserAgent,
  utcDay,
  type AnalyticsEventInput,
} from "./lib";

const DAY_SECONDS = 24 * 60 * 60;

interface CollectionContext {
  ip: string;
  userAgent: string | null;
  countryCode: string | null;
  now: number;
}

interface ReportingContext {
  range: ReturnType<typeof parseReportingRange>;
  now: number;
  start: number;
  startDay: string;
  endDay: string;
  detailed: boolean;
}

interface AccessIdentity {
  email: string;
  subject: string;
}

function detailRetentionDays(env: Env): number {
  return parseRetentionDays(env.EVENT_RETENTION_DAYS, 30, 1, 90);
}

function ipRetentionDays(env: Env): number {
  return parseRetentionDays(env.IP_RETENTION_DAYS, 30, 1, 90);
}

function aggregateRetentionDays(env: Env): number {
  return parseRetentionDays(env.AGGREGATE_RETENTION_DAYS, 395, 90, 730);
}

function reportingContext(url: URL, env: Env): ReportingContext {
  const range = parseReportingRange(url.searchParams.get("range"));
  const now = Math.floor(Date.now() / 1000);
  const start = now - range.seconds;
  return {
    range,
    now,
    start,
    startDay: startDay(start),
    endDay: utcDay(now),
    detailed: range.seconds <= detailRetentionDays(env) * DAY_SECONDS,
  };
}

function numberValue(value: unknown): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function rowValue(row: Record<string, unknown> | null, key: string): number {
  return numberValue(row?.[key]);
}

function percent(numerator: number, denominator: number): number {
  if (denominator <= 0) return 0;
  return Math.min(100, Math.max(0, (numerator / denominator) * 100));
}

function resultRows(result: D1Result<Record<string, unknown>>): Record<string, unknown>[] {
  return Array.isArray(result.results) ? result.results : [];
}

export async function storeEvents(
  env: Env,
  events: AnalyticsEventInput[],
  context: CollectionContext,
): Promise<{ accepted: number; duplicates: number }> {
  const visitorId = await createVisitorId(context.ip, context.userAgent, env.IP_HASH_SECRET);
  const encryptedIp = await encryptIp(context.ip, visitorId, env.IP_ENCRYPTION_KEY);
  const eventDay = utcDay(context.now);
  const statements: D1PreparedStatement[] = events.map((event) =>
    env.DB.prepare(
      `INSERT OR IGNORE INTO analytics_events (
        event_id, received_at, event_day, event_type, page_path, page_title,
        target_path, target_key, visitor_id, session_id, referrer_host,
        country_code, language_code, device_category, section_key, product_key
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING event_id`,
    ).bind(
      event.eventId,
      context.now,
      eventDay,
      event.eventType,
      event.pagePath,
      event.pageTitle,
      event.targetPath,
      event.targetKey,
      visitorId,
      event.sessionId,
      event.referrerHost,
      context.countryCode,
      event.language,
      event.device,
      event.section,
      event.product,
    ),
  );

  const expiry = context.now + ipRetentionDays(env) * DAY_SECONDS;
  statements.push(
    env.DB.prepare(
      `INSERT INTO analytics_ip_retention (
        visitor_id, ip_ciphertext, ip_iv, ip_masked, first_seen_at, last_seen_at,
        expires_at, country_code, user_agent_summary, last_page_path
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(visitor_id) DO UPDATE SET
        ip_ciphertext = excluded.ip_ciphertext,
        ip_iv = excluded.ip_iv,
        ip_masked = excluded.ip_masked,
        last_seen_at = excluded.last_seen_at,
        expires_at = excluded.expires_at,
        country_code = COALESCE(excluded.country_code, analytics_ip_retention.country_code),
        user_agent_summary = COALESCE(excluded.user_agent_summary, analytics_ip_retention.user_agent_summary),
        last_page_path = excluded.last_page_path`,
    ).bind(
      visitorId,
      encryptedIp.ciphertext,
      encryptedIp.iv,
      maskIp(context.ip),
      context.now,
      context.now,
      expiry,
      context.countryCode,
      summarizeUserAgent(context.userAgent),
      events.at(-1)?.pagePath ?? null,
    ),
  );

  const results = await env.DB.batch<Record<string, unknown>>(statements);
  // D1's meta.changes includes writes performed by the aggregation trigger,
  // so it cannot be used to count accepted source events. RETURNING yields one
  // row only when INSERT OR IGNORE actually inserts the event.
  const accepted = results.slice(0, events.length).reduce((total, result) => {
    return total + (resultRows(result).length > 0 ? 1 : 0);
  }, 0);
  return { accepted, duplicates: events.length - accepted };
}

export async function getSummary(env: Env, url: URL, identity: AccessIdentity): Promise<object> {
  const context = reportingContext(url, env);
  let totals: Record<string, unknown> | null;
  let trendResult: D1Result<Record<string, unknown>>;

  if (context.detailed) {
    [totals, trendResult] = await Promise.all([
      env.DB.prepare(
        `WITH scoped AS (
          SELECT event_type, visitor_id, session_id
            FROM analytics_events
           WHERE received_at >= ? AND received_at <= ?
        ), session_rollup AS (
          SELECT session_id,
                 MAX(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS has_view,
                 MAX(CASE WHEN event_type = 'click' THEN 1 ELSE 0 END) AS has_click,
                 MAX(CASE WHEN event_type = 'conversion' THEN 1 ELSE 0 END) AS has_conversion
            FROM scoped
           GROUP BY session_id
        )
        SELECT
          (SELECT COUNT(*) FROM scoped WHERE event_type = 'page_view') AS page_views,
          (SELECT COUNT(*) FROM scoped WHERE event_type = 'click') AS clicks,
          (SELECT COUNT(*) FROM scoped WHERE event_type = 'conversion') AS conversions,
          (SELECT COUNT(DISTINCT visitor_id) FROM scoped WHERE event_type = 'page_view') AS unique_visitors,
          COALESCE((SELECT SUM(has_view) FROM session_rollup), 0) AS viewing_sessions,
          COALESCE((SELECT SUM(CASE WHEN has_view = 1 AND has_click = 1 THEN 1 ELSE 0 END) FROM session_rollup), 0) AS clicked_sessions,
          COALESCE((SELECT SUM(CASE WHEN has_view = 1 AND has_conversion = 1 THEN 1 ELSE 0 END) FROM session_rollup), 0) AS converted_sessions`,
      ).bind(context.start, context.now).first<Record<string, unknown>>(),
      env.DB.prepare(
        `SELECT event_day AS day,
                SUM(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS page_views,
                SUM(CASE WHEN event_type = 'click' THEN 1 ELSE 0 END) AS clicks,
                SUM(CASE WHEN event_type = 'conversion' THEN 1 ELSE 0 END) AS conversions
           FROM analytics_events
          WHERE received_at >= ? AND received_at <= ?
          GROUP BY event_day
          ORDER BY event_day ASC`,
      ).bind(context.start, context.now).all<Record<string, unknown>>(),
    ]);
  } else {
    [totals, trendResult] = await Promise.all([
      env.DB.prepare(
        `SELECT COALESCE(SUM(page_views), 0) AS page_views,
                COALESCE(SUM(clicks), 0) AS clicks,
                COALESCE(SUM(conversions), 0) AS conversions,
                COALESCE(SUM(unique_visitors), 0) AS unique_visitors,
                COALESCE(SUM(viewing_sessions), 0) AS viewing_sessions,
                COALESCE(SUM(clicked_sessions), 0) AS clicked_sessions,
                COALESCE(SUM(converted_sessions), 0) AS converted_sessions
           FROM analytics_daily_site_metrics
          WHERE metric_day >= ? AND metric_day <= ?`,
      ).bind(context.startDay, context.endDay).first<Record<string, unknown>>(),
      env.DB.prepare(
        `SELECT metric_day AS day, page_views, clicks, conversions
           FROM analytics_daily_site_metrics
          WHERE metric_day >= ? AND metric_day <= ?
          ORDER BY metric_day ASC`,
      ).bind(context.startDay, context.endDay).all<Record<string, unknown>>(),
    ]);
  }

  const viewingSessions = rowValue(totals, "viewing_sessions");
  const clickedSessions = rowValue(totals, "clicked_sessions");
  return {
    range: { key: context.range.key, label: context.range.label, start: context.start, end: context.now },
    reportingMode: context.detailed ? "detailed" : "daily_aggregate",
    visitorMetricLabel: context.detailed ? "基于 IP + 浏览器特征估算" : "每日估算访客数之和",
    identity: { email: identity.email },
    metrics: {
      pageViews: rowValue(totals, "page_views"),
      clicks: rowValue(totals, "clicks"),
      conversions: rowValue(totals, "conversions"),
      uniqueVisitors: rowValue(totals, "unique_visitors"),
      viewingSessions,
      clickedSessions,
      convertedSessions: rowValue(totals, "converted_sessions"),
      ctr: percent(clickedSessions, viewingSessions),
    },
    trend: resultRows(trendResult).map((row) => ({
      day: String(row.day ?? ""),
      pageViews: rowValue(row, "page_views"),
      clicks: rowValue(row, "clicks"),
      conversions: rowValue(row, "conversions"),
    })),
    retention: {
      eventDays: detailRetentionDays(env),
      ipDays: ipRetentionDays(env),
      aggregateDays: aggregateRetentionDays(env),
    },
  };
}

export async function getPages(env: Env, url: URL): Promise<object> {
  const context = reportingContext(url, env);
  const limit = clampLimit(url.searchParams.get("limit"), 100, 250);
  let result: D1Result<Record<string, unknown>>;

  if (context.detailed) {
    result = await env.DB.prepare(
      `WITH scoped AS (
        SELECT event_type, page_path, page_title, visitor_id, session_id
          FROM analytics_events
         WHERE received_at >= ? AND received_at <= ?
      ), event_rollup AS (
        SELECT page_path,
               MAX(page_title) AS page_title,
               SUM(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS page_views,
               SUM(CASE WHEN event_type = 'click' THEN 1 ELSE 0 END) AS clicks,
               SUM(CASE WHEN event_type = 'conversion' THEN 1 ELSE 0 END) AS conversions,
               COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN visitor_id END) AS unique_visitors
          FROM scoped
         GROUP BY page_path
      ), session_rollup AS (
        SELECT page_path, session_id,
               MAX(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS has_view,
               MAX(CASE WHEN event_type = 'click' THEN 1 ELSE 0 END) AS has_click,
               MAX(CASE WHEN event_type = 'conversion' THEN 1 ELSE 0 END) AS has_conversion
          FROM scoped
         GROUP BY page_path, session_id
      ), session_totals AS (
        SELECT page_path,
               SUM(has_view) AS viewing_sessions,
               SUM(CASE WHEN has_view = 1 AND has_click = 1 THEN 1 ELSE 0 END) AS clicked_sessions,
               SUM(CASE WHEN has_view = 1 AND has_conversion = 1 THEN 1 ELSE 0 END) AS converted_sessions
          FROM session_rollup
         GROUP BY page_path
      )
      SELECT events.*, sessions.viewing_sessions, sessions.clicked_sessions, sessions.converted_sessions
        FROM event_rollup events
        LEFT JOIN session_totals sessions USING (page_path)
       ORDER BY events.page_views DESC, events.clicks DESC
       LIMIT ?`,
    ).bind(context.start, context.now, limit).all<Record<string, unknown>>();
  } else {
    result = await env.DB.prepare(
      `SELECT page_path,
              MAX(page_title) AS page_title,
              SUM(page_views) AS page_views,
              SUM(clicks) AS clicks,
              SUM(conversions) AS conversions,
              SUM(unique_visitors) AS unique_visitors,
              SUM(viewing_sessions) AS viewing_sessions,
              SUM(clicked_sessions) AS clicked_sessions,
              SUM(converted_sessions) AS converted_sessions
         FROM analytics_daily_page_metrics
        WHERE metric_day >= ? AND metric_day <= ?
        GROUP BY page_path
        ORDER BY page_views DESC, clicks DESC
        LIMIT ?`,
    ).bind(context.startDay, context.endDay, limit).all<Record<string, unknown>>();
  }

  return {
    reportingMode: context.detailed ? "detailed" : "daily_aggregate",
    rows: resultRows(result).map((row) => {
      const viewingSessions = rowValue(row, "viewing_sessions");
      const clickedSessions = rowValue(row, "clicked_sessions");
      return {
        pagePath: String(row.page_path ?? "/"),
        pageTitle: row.page_title ? String(row.page_title) : null,
        pageViews: rowValue(row, "page_views"),
        clicks: rowValue(row, "clicks"),
        conversions: rowValue(row, "conversions"),
        uniqueVisitors: rowValue(row, "unique_visitors"),
        viewingSessions,
        clickedSessions,
        convertedSessions: rowValue(row, "converted_sessions"),
        ctr: percent(clickedSessions, viewingSessions),
      };
    }),
  };
}

type DimensionType = "referrer" | "country" | "device" | "language" | "section" | "product" | "click_target";

const detailedDimensionSql: Record<DimensionType, string> = {
  referrer: `SELECT COALESCE(referrer_host, '(direct)') AS value, COUNT(*) AS count
               FROM analytics_events
              WHERE received_at >= ? AND received_at <= ? AND event_type = 'page_view'
              GROUP BY COALESCE(referrer_host, '(direct)') ORDER BY count DESC LIMIT ?`,
  country: `SELECT COALESCE(country_code, 'XX') AS value, COUNT(*) AS count
              FROM analytics_events
             WHERE received_at >= ? AND received_at <= ? AND event_type = 'page_view'
             GROUP BY COALESCE(country_code, 'XX') ORDER BY count DESC LIMIT ?`,
  device: `SELECT COALESCE(device_category, 'other') AS value, COUNT(*) AS count
             FROM analytics_events
            WHERE received_at >= ? AND received_at <= ? AND event_type = 'page_view'
            GROUP BY COALESCE(device_category, 'other') ORDER BY count DESC LIMIT ?`,
  language: `SELECT COALESCE(language_code, 'unknown') AS value, COUNT(*) AS count
               FROM analytics_events
              WHERE received_at >= ? AND received_at <= ? AND event_type = 'page_view'
              GROUP BY COALESCE(language_code, 'unknown') ORDER BY count DESC LIMIT ?`,
  section: `SELECT section_key AS value, COUNT(*) AS count
              FROM analytics_events
             WHERE received_at >= ? AND received_at <= ? AND section_key IS NOT NULL
             GROUP BY section_key ORDER BY count DESC LIMIT ?`,
  product: `SELECT product_key AS value, COUNT(*) AS count
              FROM analytics_events
             WHERE received_at >= ? AND received_at <= ? AND product_key IS NOT NULL
             GROUP BY product_key ORDER BY count DESC LIMIT ?`,
  click_target: `SELECT COALESCE(target_key, target_path) AS value, COUNT(*) AS count
                   FROM analytics_events
                  WHERE received_at >= ? AND received_at <= ? AND event_type = 'click'
                    AND COALESCE(target_key, target_path) IS NOT NULL
                  GROUP BY COALESCE(target_key, target_path) ORDER BY count DESC LIMIT ?`,
};

async function dimensionRows(
  env: Env,
  context: ReportingContext,
  type: DimensionType,
  limit: number,
): Promise<Array<{ value: string; count: number }>> {
  let result: D1Result<Record<string, unknown>>;
  if (context.detailed) {
    result = await env.DB.prepare(detailedDimensionSql[type])
      .bind(context.start, context.now, limit)
      .all<Record<string, unknown>>();
  } else {
    const metric = type === "click_target" ? "clicks" : "page_views";
    const sql = `SELECT dimension_value AS value, SUM(${metric}) AS count
                   FROM analytics_daily_dimensions
                  WHERE metric_day >= ? AND metric_day <= ? AND dimension_type = ?
                  GROUP BY dimension_value ORDER BY count DESC LIMIT ?`;
    result = await env.DB.prepare(sql)
      .bind(context.startDay, context.endDay, type, limit)
      .all<Record<string, unknown>>();
  }
  return resultRows(result).map((row) => ({ value: String(row.value ?? "未知"), count: rowValue(row, "count") }));
}

export async function getBreakdowns(env: Env, url: URL): Promise<object> {
  const context = reportingContext(url, env);
  const limit = clampLimit(url.searchParams.get("limit"), 8, 25);
  const [referrers, countries, devices, languages, sections, products, targets] = await Promise.all([
    dimensionRows(env, context, "referrer", limit),
    dimensionRows(env, context, "country", limit),
    dimensionRows(env, context, "device", limit),
    dimensionRows(env, context, "language", limit),
    dimensionRows(env, context, "section", limit),
    dimensionRows(env, context, "product", limit),
    dimensionRows(env, context, "click_target", limit),
  ]);
  return { reportingMode: context.detailed ? "detailed" : "daily_aggregate", referrers, countries, devices, languages, sections, products, targets };
}

export async function getVisitors(env: Env, url: URL): Promise<object> {
  const context = reportingContext(url, env);
  const limit = clampLimit(url.searchParams.get("limit"), 100, 250);
  const retainedStart = Math.max(context.start, context.now - ipRetentionDays(env) * DAY_SECONDS);
  const result = await env.DB.prepare(
    `SELECT ip.visitor_id, ip.ip_masked, ip.first_seen_at, ip.last_seen_at,
            ip.expires_at, ip.country_code, ip.user_agent_summary, ip.last_page_path,
            (SELECT COUNT(*) FROM analytics_events events
              WHERE events.visitor_id = ip.visitor_id AND events.received_at >= ?) AS event_count
       FROM analytics_ip_retention ip
      WHERE ip.last_seen_at >= ? AND ip.expires_at > ?
      ORDER BY ip.last_seen_at DESC
      LIMIT ?`,
  ).bind(retainedStart, retainedStart, context.now, limit).all<Record<string, unknown>>();

  return {
    maskedByDefault: true,
    retainedFrom: retainedStart,
    rows: resultRows(result).map((row) => ({
      visitorId: String(row.visitor_id ?? ""),
      maskedIp: String(row.ip_masked ?? "已掩码"),
      firstSeenAt: rowValue(row, "first_seen_at"),
      lastSeenAt: rowValue(row, "last_seen_at"),
      expiresAt: rowValue(row, "expires_at"),
      countryCode: row.country_code ? String(row.country_code) : "XX",
      userAgentSummary: row.user_agent_summary ? String(row.user_agent_summary) : null,
      lastPagePath: row.last_page_path ? String(row.last_page_path) : null,
      eventCount: rowValue(row, "event_count"),
    })),
  };
}

export async function revealVisitorIp(
  env: Env,
  identity: AccessIdentity,
  payload: unknown,
): Promise<object | null> {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
  const record = payload as Record<string, unknown>;
  const visitorId = sanitizeVisitorId(record.visitorId);
  const reason = sanitizeAuditReason(record.reason);
  if (!visitorId || !reason || reason.length < 3) return null;

  const now = Math.floor(Date.now() / 1000);
  const encrypted = await env.DB.prepare(
    `SELECT ip_ciphertext, ip_iv, ip_masked, expires_at
       FROM analytics_ip_retention
      WHERE visitor_id = ? AND expires_at > ?`,
  ).bind(visitorId, now).first<Record<string, unknown>>();
  if (!encrypted) return { expired: true };

  const audit = await env.DB.prepare(
    `INSERT INTO admin_audit_log (
      occurred_at, admin_email, action, subject_visitor_id, reason, outcome
    ) VALUES (?, ?, 'reveal_ip', ?, ?, 'attempted')`,
  ).bind(now, identity.email, visitorId, reason).run();
  if (!audit.success) throw new Error("IP reveal audit could not be written");
  const auditId = numberValue(audit.meta?.last_row_id);
  if (!auditId) throw new Error("IP reveal audit identifier is unavailable");

  let ip: string;
  try {
    ip = await decryptIp(encrypted.ip_ciphertext, encrypted.ip_iv, visitorId, env.IP_ENCRYPTION_KEY);
  } catch (error) {
    await env.DB.prepare("UPDATE admin_audit_log SET outcome = 'failed' WHERE id = ?")
      .bind(auditId)
      .run();
    throw error;
  }

  const completedAudit = await env.DB.prepare(
    "UPDATE admin_audit_log SET outcome = 'succeeded' WHERE id = ? AND outcome = 'attempted'",
  ).bind(auditId).run();
  if (!completedAudit.success || numberValue(completedAudit.meta?.changes) !== 1) {
    throw new Error("IP reveal audit could not be completed");
  }

  return {
    ip,
    maskedIp: String(encrypted.ip_masked ?? "已掩码"),
    revealedAt: now,
    expiresAt: rowValue(encrypted, "expires_at"),
  };
}

export async function cleanupExpiredData(env: Env, now = Math.floor(Date.now() / 1000)): Promise<void> {
  const detailCutoff = now - detailRetentionDays(env) * DAY_SECONDS;
  const detailCutoffDay = utcDay(detailCutoff);
  const aggregateCutoffDay = utcDay(now - aggregateRetentionDays(env) * DAY_SECONDS);
  const auditDays = parseRetentionDays(env.AUDIT_RETENTION_DAYS, 395, 30, 2555);
  const auditCutoff = now - auditDays * DAY_SECONDS;

  await env.DB.batch([
    env.DB.prepare("DELETE FROM analytics_ip_retention WHERE expires_at <= ?").bind(now),
    env.DB.prepare("DELETE FROM analytics_events WHERE received_at < ?").bind(detailCutoff),
    env.DB.prepare("DELETE FROM analytics_daily_page_visitors WHERE metric_day < ?").bind(detailCutoffDay),
    env.DB.prepare("DELETE FROM analytics_daily_site_visitors WHERE metric_day < ?").bind(detailCutoffDay),
    env.DB.prepare("DELETE FROM analytics_daily_page_sessions WHERE metric_day < ?").bind(detailCutoffDay),
    env.DB.prepare("DELETE FROM analytics_daily_site_sessions WHERE metric_day < ?").bind(detailCutoffDay),
    env.DB.prepare("DELETE FROM analytics_daily_page_metrics WHERE metric_day < ?").bind(aggregateCutoffDay),
    env.DB.prepare("DELETE FROM analytics_daily_site_metrics WHERE metric_day < ?").bind(aggregateCutoffDay),
    env.DB.prepare("DELETE FROM analytics_daily_dimensions WHERE metric_day < ?").bind(aggregateCutoffDay),
    env.DB.prepare("DELETE FROM admin_audit_log WHERE occurred_at < ?").bind(auditCutoff),
  ]);
}
