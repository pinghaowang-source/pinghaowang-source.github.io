PRAGMA foreign_keys = ON;

-- Detailed events are deliberately short-lived. They never contain the raw IP.
CREATE TABLE analytics_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id TEXT NOT NULL UNIQUE,
  received_at INTEGER NOT NULL,
  event_day TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('page_view', 'click', 'conversion')),
  page_path TEXT NOT NULL,
  page_title TEXT,
  target_path TEXT,
  target_key TEXT,
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  referrer_host TEXT,
  country_code TEXT,
  language_code TEXT,
  device_category TEXT,
  section_key TEXT,
  product_key TEXT
);

CREATE INDEX idx_events_received_at
  ON analytics_events(received_at);
CREATE INDEX idx_events_page_received
  ON analytics_events(page_path, received_at);
CREATE INDEX idx_events_visitor_received
  ON analytics_events(visitor_id, received_at);
CREATE INDEX idx_events_page_session_received
  ON analytics_events(page_path, session_id, received_at);

-- The only table that can yield a full visitor IP. The IP is AES-GCM encrypted;
-- visitor_id is an HMAC and cannot be reversed without its separate secret.
CREATE TABLE analytics_ip_retention (
  visitor_id TEXT PRIMARY KEY,
  ip_ciphertext BLOB NOT NULL,
  ip_iv BLOB NOT NULL,
  ip_masked TEXT NOT NULL,
  first_seen_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  country_code TEXT,
  user_agent_summary TEXT,
  last_page_path TEXT
);

CREATE INDEX idx_ip_retention_expires
  ON analytics_ip_retention(expires_at);
CREATE INDEX idx_ip_retention_last_seen
  ON analytics_ip_retention(last_seen_at DESC);

-- Anonymous, page-level daily totals. These can outlive event details.
CREATE TABLE analytics_daily_page_metrics (
  metric_day TEXT NOT NULL,
  page_path TEXT NOT NULL,
  page_title TEXT,
  page_views INTEGER NOT NULL DEFAULT 0,
  clicks INTEGER NOT NULL DEFAULT 0,
  conversions INTEGER NOT NULL DEFAULT 0,
  unique_visitors INTEGER NOT NULL DEFAULT 0,
  viewing_sessions INTEGER NOT NULL DEFAULT 0,
  clicked_sessions INTEGER NOT NULL DEFAULT 0,
  converted_sessions INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (metric_day, page_path)
);

CREATE INDEX idx_daily_pages_day
  ON analytics_daily_page_metrics(metric_day);

CREATE TABLE analytics_daily_site_metrics (
  metric_day TEXT PRIMARY KEY,
  page_views INTEGER NOT NULL DEFAULT 0,
  clicks INTEGER NOT NULL DEFAULT 0,
  conversions INTEGER NOT NULL DEFAULT 0,
  unique_visitors INTEGER NOT NULL DEFAULT 0,
  viewing_sessions INTEGER NOT NULL DEFAULT 0,
  clicked_sessions INTEGER NOT NULL DEFAULT 0,
  converted_sessions INTEGER NOT NULL DEFAULT 0
);

-- Anonymous long-term breakdowns. Values are bounded server-side and contain
-- no IP, visitor ID, session ID, query string, or free-form form content.
CREATE TABLE analytics_daily_dimensions (
  metric_day TEXT NOT NULL,
  dimension_type TEXT NOT NULL CHECK (
    dimension_type IN ('referrer', 'country', 'device', 'language', 'section', 'product', 'click_target')
  ),
  dimension_value TEXT NOT NULL,
  page_views INTEGER NOT NULL DEFAULT 0,
  clicks INTEGER NOT NULL DEFAULT 0,
  conversions INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (metric_day, dimension_type, dimension_value)
);

CREATE INDEX idx_daily_dimensions_type_day
  ON analytics_daily_dimensions(dimension_type, metric_day);

-- Short-lived helper tables make daily unique/session figures idempotent. They
-- are purged with detailed events and are not part of long-term reporting.
CREATE TABLE analytics_daily_page_visitors (
  metric_day TEXT NOT NULL,
  page_path TEXT NOT NULL,
  visitor_id TEXT NOT NULL,
  PRIMARY KEY (metric_day, page_path, visitor_id)
);

CREATE TABLE analytics_daily_site_visitors (
  metric_day TEXT NOT NULL,
  visitor_id TEXT NOT NULL,
  PRIMARY KEY (metric_day, visitor_id)
);

CREATE TABLE analytics_daily_page_sessions (
  metric_day TEXT NOT NULL,
  page_path TEXT NOT NULL,
  session_id TEXT NOT NULL,
  has_view INTEGER NOT NULL DEFAULT 0 CHECK (has_view IN (0, 1)),
  has_click INTEGER NOT NULL DEFAULT 0 CHECK (has_click IN (0, 1)),
  has_conversion INTEGER NOT NULL DEFAULT 0 CHECK (has_conversion IN (0, 1)),
  PRIMARY KEY (metric_day, page_path, session_id)
);

CREATE TABLE analytics_daily_site_sessions (
  metric_day TEXT NOT NULL,
  session_id TEXT NOT NULL,
  has_view INTEGER NOT NULL DEFAULT 0 CHECK (has_view IN (0, 1)),
  has_click INTEGER NOT NULL DEFAULT 0 CHECK (has_click IN (0, 1)),
  has_conversion INTEGER NOT NULL DEFAULT 0 CHECK (has_conversion IN (0, 1)),
  PRIMARY KEY (metric_day, session_id)
);

CREATE TABLE admin_audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  occurred_at INTEGER NOT NULL,
  admin_email TEXT NOT NULL,
  action TEXT NOT NULL,
  subject_visitor_id TEXT,
  reason TEXT NOT NULL,
  outcome TEXT NOT NULL DEFAULT 'attempted' CHECK (outcome IN ('attempted', 'succeeded', 'failed'))
);

CREATE INDEX idx_admin_audit_occurred
  ON admin_audit_log(occurred_at DESC);

-- Aggregate only when a unique event_id is inserted. This keeps retries from
-- inflating counts and makes detail + aggregate writes atomic.
CREATE TRIGGER aggregate_analytics_event
AFTER INSERT ON analytics_events
BEGIN
  INSERT INTO analytics_daily_page_metrics (
    metric_day,
    page_path,
    page_title,
    page_views,
    clicks,
    conversions,
    unique_visitors,
    viewing_sessions,
    clicked_sessions,
    converted_sessions
  ) VALUES (
    NEW.event_day,
    NEW.page_path,
    NEW.page_title,
    CASE WHEN NEW.event_type = 'page_view' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'click' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'conversion' THEN 1 ELSE 0 END,
    CASE
      WHEN NEW.event_type = 'page_view'
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_page_visitors
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND visitor_id = NEW.visitor_id
       ) THEN 1 ELSE 0
    END,
    CASE
      WHEN NEW.event_type = 'page_view'
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_view = 1
       ) THEN 1 ELSE 0
    END,
    CASE
      WHEN NEW.event_type = 'click'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_view = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_click = 1
       ) THEN 1
      WHEN NEW.event_type = 'page_view'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_click = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_view = 1
       ) THEN 1
      ELSE 0
    END,
    CASE
      WHEN NEW.event_type = 'conversion'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_view = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_conversion = 1
       ) THEN 1
      WHEN NEW.event_type = 'page_view'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_conversion = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_page_sessions
          WHERE metric_day = NEW.event_day
            AND page_path = NEW.page_path
            AND session_id = NEW.session_id
            AND has_view = 1
       ) THEN 1
      ELSE 0
    END
  )
  ON CONFLICT(metric_day, page_path) DO UPDATE SET
    page_title = COALESCE(excluded.page_title, analytics_daily_page_metrics.page_title),
    page_views = analytics_daily_page_metrics.page_views + excluded.page_views,
    clicks = analytics_daily_page_metrics.clicks + excluded.clicks,
    conversions = analytics_daily_page_metrics.conversions + excluded.conversions,
    unique_visitors = analytics_daily_page_metrics.unique_visitors + excluded.unique_visitors,
    viewing_sessions = analytics_daily_page_metrics.viewing_sessions + excluded.viewing_sessions,
    clicked_sessions = analytics_daily_page_metrics.clicked_sessions + excluded.clicked_sessions,
    converted_sessions = analytics_daily_page_metrics.converted_sessions + excluded.converted_sessions;

  INSERT INTO analytics_daily_site_metrics (
    metric_day,
    page_views,
    clicks,
    conversions,
    unique_visitors,
    viewing_sessions,
    clicked_sessions,
    converted_sessions
  ) VALUES (
    NEW.event_day,
    CASE WHEN NEW.event_type = 'page_view' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'click' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'conversion' THEN 1 ELSE 0 END,
    CASE
      WHEN NEW.event_type = 'page_view'
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_site_visitors
          WHERE metric_day = NEW.event_day
            AND visitor_id = NEW.visitor_id
       ) THEN 1 ELSE 0
    END,
    CASE
      WHEN NEW.event_type = 'page_view'
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_view = 1
       ) THEN 1 ELSE 0
    END,
    CASE
      WHEN NEW.event_type = 'click'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_view = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_click = 1
       ) THEN 1
      WHEN NEW.event_type = 'page_view'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_click = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_view = 1
       ) THEN 1
      ELSE 0
    END,
    CASE
      WHEN NEW.event_type = 'conversion'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_view = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_conversion = 1
       ) THEN 1
      WHEN NEW.event_type = 'page_view'
       AND EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_conversion = 1
       )
       AND NOT EXISTS (
         SELECT 1 FROM analytics_daily_site_sessions
          WHERE metric_day = NEW.event_day
            AND session_id = NEW.session_id
            AND has_view = 1
       ) THEN 1
      ELSE 0
    END
  )
  ON CONFLICT(metric_day) DO UPDATE SET
    page_views = analytics_daily_site_metrics.page_views + excluded.page_views,
    clicks = analytics_daily_site_metrics.clicks + excluded.clicks,
    conversions = analytics_daily_site_metrics.conversions + excluded.conversions,
    unique_visitors = analytics_daily_site_metrics.unique_visitors + excluded.unique_visitors,
    viewing_sessions = analytics_daily_site_metrics.viewing_sessions + excluded.viewing_sessions,
    clicked_sessions = analytics_daily_site_metrics.clicked_sessions + excluded.clicked_sessions,
    converted_sessions = analytics_daily_site_metrics.converted_sessions + excluded.converted_sessions;

  INSERT INTO analytics_daily_dimensions (
    metric_day, dimension_type, dimension_value, page_views, clicks, conversions
  )
  SELECT
    NEW.event_day,
    'referrer',
    COALESCE(NEW.referrer_host, '(direct)'),
    1,
    0,
    0
   WHERE NEW.event_type = 'page_view'
  ON CONFLICT(metric_day, dimension_type, dimension_value) DO UPDATE SET
    page_views = analytics_daily_dimensions.page_views + excluded.page_views;

  INSERT INTO analytics_daily_dimensions (
    metric_day, dimension_type, dimension_value, page_views, clicks, conversions
  )
  SELECT NEW.event_day, 'country', COALESCE(NEW.country_code, 'XX'), 1, 0, 0
   WHERE NEW.event_type = 'page_view'
  ON CONFLICT(metric_day, dimension_type, dimension_value) DO UPDATE SET
    page_views = analytics_daily_dimensions.page_views + excluded.page_views;

  INSERT INTO analytics_daily_dimensions (
    metric_day, dimension_type, dimension_value, page_views, clicks, conversions
  )
  SELECT NEW.event_day, 'device', COALESCE(NEW.device_category, 'other'), 1, 0, 0
   WHERE NEW.event_type = 'page_view'
  ON CONFLICT(metric_day, dimension_type, dimension_value) DO UPDATE SET
    page_views = analytics_daily_dimensions.page_views + excluded.page_views;

  INSERT INTO analytics_daily_dimensions (
    metric_day, dimension_type, dimension_value, page_views, clicks, conversions
  )
  SELECT NEW.event_day, 'language', NEW.language_code, 1, 0, 0
   WHERE NEW.event_type = 'page_view' AND NEW.language_code IS NOT NULL
  ON CONFLICT(metric_day, dimension_type, dimension_value) DO UPDATE SET
    page_views = analytics_daily_dimensions.page_views + excluded.page_views;

  INSERT INTO analytics_daily_dimensions (
    metric_day, dimension_type, dimension_value, page_views, clicks, conversions
  )
  SELECT
    NEW.event_day,
    'section',
    NEW.section_key,
    CASE WHEN NEW.event_type = 'page_view' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'click' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'conversion' THEN 1 ELSE 0 END
   WHERE NEW.section_key IS NOT NULL
  ON CONFLICT(metric_day, dimension_type, dimension_value) DO UPDATE SET
    page_views = analytics_daily_dimensions.page_views + excluded.page_views,
    clicks = analytics_daily_dimensions.clicks + excluded.clicks,
    conversions = analytics_daily_dimensions.conversions + excluded.conversions;

  INSERT INTO analytics_daily_dimensions (
    metric_day, dimension_type, dimension_value, page_views, clicks, conversions
  )
  SELECT
    NEW.event_day,
    'product',
    NEW.product_key,
    CASE WHEN NEW.event_type = 'page_view' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'click' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'conversion' THEN 1 ELSE 0 END
   WHERE NEW.product_key IS NOT NULL
  ON CONFLICT(metric_day, dimension_type, dimension_value) DO UPDATE SET
    page_views = analytics_daily_dimensions.page_views + excluded.page_views,
    clicks = analytics_daily_dimensions.clicks + excluded.clicks,
    conversions = analytics_daily_dimensions.conversions + excluded.conversions;

  INSERT INTO analytics_daily_dimensions (
    metric_day, dimension_type, dimension_value, page_views, clicks, conversions
  )
  SELECT
    NEW.event_day,
    'click_target',
    COALESCE(NEW.target_key, NEW.target_path),
    0,
    1,
    0
   WHERE NEW.event_type = 'click'
     AND COALESCE(NEW.target_key, NEW.target_path) IS NOT NULL
  ON CONFLICT(metric_day, dimension_type, dimension_value) DO UPDATE SET
    clicks = analytics_daily_dimensions.clicks + excluded.clicks;

  INSERT INTO analytics_daily_page_sessions (
    metric_day, page_path, session_id, has_view, has_click, has_conversion
  ) VALUES (
    NEW.event_day,
    NEW.page_path,
    NEW.session_id,
    CASE WHEN NEW.event_type = 'page_view' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'click' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'conversion' THEN 1 ELSE 0 END
  )
  ON CONFLICT(metric_day, page_path, session_id) DO UPDATE SET
    has_view = MAX(analytics_daily_page_sessions.has_view, excluded.has_view),
    has_click = MAX(analytics_daily_page_sessions.has_click, excluded.has_click),
    has_conversion = MAX(analytics_daily_page_sessions.has_conversion, excluded.has_conversion);

  INSERT INTO analytics_daily_site_sessions (
    metric_day, session_id, has_view, has_click, has_conversion
  ) VALUES (
    NEW.event_day,
    NEW.session_id,
    CASE WHEN NEW.event_type = 'page_view' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'click' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'conversion' THEN 1 ELSE 0 END
  )
  ON CONFLICT(metric_day, session_id) DO UPDATE SET
    has_view = MAX(analytics_daily_site_sessions.has_view, excluded.has_view),
    has_click = MAX(analytics_daily_site_sessions.has_click, excluded.has_click),
    has_conversion = MAX(analytics_daily_site_sessions.has_conversion, excluded.has_conversion);

  INSERT OR IGNORE INTO analytics_daily_page_visitors (
    metric_day, page_path, visitor_id
  )
  SELECT NEW.event_day, NEW.page_path, NEW.visitor_id
   WHERE NEW.event_type = 'page_view';

  INSERT OR IGNORE INTO analytics_daily_site_visitors (
    metric_day, visitor_id
  )
  SELECT NEW.event_day, NEW.visitor_id
   WHERE NEW.event_type = 'page_view';
END;
