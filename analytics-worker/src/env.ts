import type { AccessEnvironment } from "./access";

export interface Env extends AccessEnvironment {
  DB: D1Database;
  COLLECT_HOST?: string;
  ADMIN_HOST?: string;
  ALLOWED_ORIGINS?: string;
  IP_HASH_SECRET?: string;
  IP_ENCRYPTION_KEY?: string;
  IP_RETENTION_DAYS?: string;
  EVENT_RETENTION_DAYS?: string;
  AGGREGATE_RETENTION_DAYS?: string;
  AUDIT_RETENTION_DAYS?: string;
  COLLECT_BOTS?: string;
  ALLOW_LOCAL_DEV_HOSTS?: string;
}
