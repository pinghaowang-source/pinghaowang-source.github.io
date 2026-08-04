# SCOVION website

Open `index.html` in a browser to preview the static site. The site defaults to English and remembers a visitor's selection in the browser. Available languages are English, Simplified Chinese, Traditional Chinese, Bahasa Melayu and Thai.

Pages: Home, AI Healthcare, Medical AI Agent, Custom AI Solutions, About, and Contact. The AI Agriculture source page is temporarily parked: it is excluded from navigation and search indexing, and its former URL redirects to the homepage while the source remains available for a later restoration. Product and case-study imagery uses original conceptual visuals without third-party branding. Regulatory labels should be confirmed for the intended product version and local market before publishing.

Products with a supplied product manual link to a dedicated detail experience. Products without a supporting manual remain in the portfolio without a detail-page link until source material is available.

The Contact page sends enquiries through an AJAX form endpoint. The receiving address is not displayed in the page content.

## Website analytics

The public pages load `analytics.js` after their page-specific scripts. Analytics starts only after a visitor allows it, honours supported browser privacy signals, stores only a random session ID in the browser, and never sends contact-form values. Product-detail URLs are normalised to independent page keys such as `/product/thorax-planning`.

The protected backend lives in `analytics-worker/`. It is designed for Cloudflare Workers, D1 and Access, with separate `collect.scovion.com` and `analytics.scovion.com` hosts. Deployment, secret creation, D1 migration and Access configuration are documented in `analytics-worker/README.md`; no production credentials belong in this repository.
