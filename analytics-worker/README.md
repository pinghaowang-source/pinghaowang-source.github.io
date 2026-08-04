# SCOVION 网站数据中心

这是一个由两项 Cloudflare workers.dev Worker 共用一套代码和同一个 D1 数据库的分析服务，供静态网站安全收集第一方访问数据并提供受保护的中文管理后台。公共采集与管理后台使用不同 Worker 和主机名，应用层还会再次严格校验 Host：

- `collect.pinghao-wang.workers.dev`：公开采集 Worker，只接受事件，不提供任何查询接口。
- `analytics.pinghao-wang.workers.dev`：管理 Worker，只提供后台及管理 API，不接受公开采集，并由 Cloudflare Access 保护。

后台不使用自建密码。`/admin` 与所有 `/api/admin/*` 请求都必须通过 Cloudflare Access JWT 的 JWKS 签名、issuer、AUD、有效期和管理员邮箱白名单验证。

## 数据与隐私设计

- 只从 Cloudflare 注入的 `CF-Connecting-IP` 读取访客 IP；不信任 `X-Forwarded-For`，也不接受客户端在事件中提交 IP。
- 原始 IP 使用 AES-256-GCM 加密后保存，IV 每次随机生成；访客编号使用独立 HMAC-SHA-256 密钥生成。
- 后台默认只返回掩码 IP。查看完整 IP 必须向 `POST /api/admin/visitors/reveal` 提交理由；解密尝试会先写入 `admin_audit_log`，再执行解密并记录结果。页面会在 30 秒后重新隐藏完整 IP。
- 详细事件、可解密 IP 及去重辅助记录默认保留 30 天。只包含日级计数的匿名汇总默认保留 395 天（约 13 个月）。计划任务每日自动清理。
- 事件只接受固定字段；URL 查询参数和 hash 会在服务端丢弃。不会接收输入框值、联系表单内容、邮件地址或电话号码。
- CTR 定义为“发生至少一次点击且浏览过该来源页面的独立会话数 ÷ 浏览该页面的独立会话数”，所以不会因重复点击超过 100%。后台另行展示原始点击次数。
- “估算独立访客”由 IP 与浏览器 User-Agent 的 HMAC 结果计算，只用于趋势估算，不等同于真实自然人数；共享设备、共享网络、IP 变化和浏览器变化都会影响该数字。
- `conversion` 独立于 `click`，可用于 `contact-form-success` 等明确业务结果。

上线前仍应确认网站隐私说明、同意管理与数据主体请求流程符合实际运营地区的要求。本项目提供技术控制，不构成法律意见。

## 首次部署

不要求把 `scovion.com` 接入 Cloudflare，但 Cloudflare 账户必须已启用 Workers、D1、`pinghao-wang.workers.dev` 子域与 Zero Trust Access。

1. 安装依赖并复制配置：

   ```bash
   cd analytics-worker
   pnpm install
   cp wrangler.collector.example.jsonc wrangler.collector.jsonc
   cp wrangler.admin.example.jsonc wrangler.admin.jsonc
   ```

   两份实际配置已被 `.gitignore` 排除。模板没有填写 D1 ID、Access AUD 或任何 secret。

2. 创建 D1 数据库：

   ```bash
   pnpm exec wrangler login
   pnpm exec wrangler d1 create scovion-analytics
   ```

   把 Cloudflare 返回的真实 `database_id` 写入两份实际配置中的 `d1_databases` 区块。两份配置必须使用完全相同的 `database_name` 与 `database_id`，然后应用迁移：

   ```bash
   pnpm run db:migrate:remote
   ```

3. 先部署两个 Worker。配置中的 Worker 名称 `collect` 与 `analytics` 会分别生成要求的 workers.dev 地址：

   ```bash
   pnpm run deploy:collector
   pnpm run deploy:admin
   ```

   部署后确认公开地址分别为：

   - `https://collect.pinghao-wang.workers.dev`
   - `https://analytics.pinghao-wang.workers.dev`

   在密钥与 Access 完成配置前，采集会安全地返回 503，管理端会拒绝访问。

4. 创建两把彼此独立的密钥。不要把输出写入 Git，并临时保存在安全的密码管理器中：

   ```bash
   openssl rand -base64 48
   openssl rand -base64 32
   ```

   第一份作为不可逆访客编号的 HMAC secret，第二份作为 AES-256-GCM key。采集 Worker 需要两者，管理 Worker 必须使用同一份 AES key 才能解密保留期内的 IP：

   ```bash
   pnpm exec wrangler secret put IP_HASH_SECRET --config wrangler.collector.jsonc
   pnpm exec wrangler secret put IP_ENCRYPTION_KEY --config wrangler.collector.jsonc
   pnpm exec wrangler secret put IP_ENCRYPTION_KEY --config wrangler.admin.jsonc
   ```

5. 在 Cloudflare Zero Trust 中创建 **Workers** 类型的 Access application，选择名为 `analytics` 的 Worker，并让策略只允许指定管理员邮箱或受控身份组。不要把 `collect` Worker 加入 Access，它需要接收网站的公开分析事件。

   将真实值通过 secret 命令写入管理 Worker；命令会交互式读取值，不会写入仓库：

   ```bash
   pnpm exec wrangler secret put ACCESS_TEAM_DOMAIN --config wrangler.admin.jsonc
   pnpm exec wrangler secret put ACCESS_AUD --config wrangler.admin.jsonc
   pnpm exec wrangler secret put ADMIN_EMAILS --config wrangler.admin.jsonc
   ```

   - `ACCESS_TEAM_DOMAIN`：实际团队地址，例如 `https://<team>.cloudflareaccess.com`
   - `ACCESS_AUD`：刚创建的 Workers Access application AUD；多个 AUD 可用逗号分隔
   - `ADMIN_EMAILS`：允许进入后台的真实邮箱；多个邮箱可用逗号分隔

   Worker 会再次验证 JWT 和邮箱，因此即使 Access 路由误配，管理 API 也不会退化为公开访问。

6. 检查生产配置：

   - `COLLECT_HOST=collect.pinghao-wang.workers.dev`
   - `ADMIN_HOST=analytics.pinghao-wang.workers.dev`
   - `ALLOWED_ORIGINS` 只列正式网站的精确 origin，不使用 `*`
   - 两份配置都关闭 `preview_urls`，避免额外预览主机；代码也会拒绝不匹配的 Host
   - 只有管理配置包含每日清理 Cron，避免两个 Worker 重复执行计划任务
   - 不要在生产设置 `ALLOW_LOCAL_DEV_HOSTS=true`

7. Secret 或 Access 策略调整后分别重新部署，并确认管理端登录与定时任务：

   ```bash
   pnpm run deploy:collector
   pnpm run deploy:admin
   ```

8. 如账户方案支持，建议为 `collect` Worker 配置 Workers Rate Limiting。应用本身还会限制 origin、方法、Content-Type、正文 64 KiB 和每批最多 20 个事件。

## 采集接口

推荐接口为 `POST https://collect.pinghao-wang.workers.dev/v1/events`。为兼容早期集成，同一采集主机也接受 `/api/events`。正文可为单个事件、最多 20 项的数组，或 `{ "events": [...] }`。

```json
{
  "eventId": "a3f672d2_7d5e_4b02_9c22_90fd31e8bb65",
  "eventType": "page_view",
  "pagePath": "/product/inferoperate-liver",
  "pageTitle": "InferOperate Liver Planning",
  "targetPath": null,
  "targetKey": null,
  "section": "product-overview",
  "product": "inferoperate-liver",
  "language": "zh-CN",
  "referrerHost": "www.google.com",
  "sessionId": "b58f2f77_444b_44e8_a90f_cfd7b9e9222a",
  "device": "desktop"
}
```

约束：

- `eventType`：`page_view`、`click` 或 `conversion`
- `eventId`：12–64 位字母、数字、`_` 或 `-`；用于幂等去重
- `sessionId`：8–64 位字母、数字、`_` 或 `-`
- `pagePath`：必须是站内 `/` 开头的路径；查询参数与 hash 不保存
- `click`：必须提供安全的 `targetPath` 或标识型 `targetKey`
- `conversion`：必须提供标识型 `targetKey`，例如 `contact-form-success`
- `targetKey`、`section`、`product` 只接受标识符，不接受自由文本或表单内容
- `device`：`desktop`、`mobile`、`tablet`，其他值归为 `other`

`navigator.sendBeacon()` 使用的 `text/plain;charset=UTF-8` 和标准 `application/json` 都受支持。CORS 只向 `ALLOWED_ORIGINS` 中的精确 origin 返回允许头。

## 管理接口

以下接口只在 `ADMIN_HOST` 生效，并且每次请求均验证 Cloudflare Access JWT：

- `GET /api/admin/summary?range=30d`：核心指标与访问趋势
- `GET /api/admin/pages?range=30d&limit=100`：页面浏览、会话 CTR、点击和转化
- `GET /api/admin/breakdowns?range=30d&limit=8`：来源域名、国家/地区、设备、语言、板块、产品和热门点击目标
- `GET /api/admin/visitors?range=30d&limit=100`：只返回掩码 IP 的近期访问记录
- `POST /api/admin/visitors/reveal`：带理由查看单个完整 IP，并写审计日志

范围支持 `24h`、`7d`、`30d`、`90d`、`13mo`。超出详细事件保留期时使用匿名日汇总，估算独立访客指标会明确标为“每日估算访客数之和”。

## 本地检查

```bash
pnpm run typecheck
pnpm test
pnpm run db:migrate:local
pnpm run dev:collector
pnpm run dev:admin
```

本地开发如需使用 `localhost`，可以仅在未提交的配置中设置 `ALLOW_LOCAL_DEV_HOSTS=true`。后台仍然要求有效 Access JWT；代码没有开发环境身份绕过。

## 运维注意事项

- 定期检查 Cron 执行日志与 D1 用量，确认清理任务成功。
- 密钥轮换前先制定数据迁移或等待 30 天保留期结束；直接轮换 AES key 会使保留期内旧 IP 无法解密。
- 不要在日志中打印事件正文、IP、JWT 或密钥。当前错误日志只记录固定上下文和异常消息。
- 如果需要导出数据，新增导出接口也必须经过同一 Access 校验，并对完整 IP 访问写审计日志。
