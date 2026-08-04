(() => {
  'use strict';

  const DEFAULT_ENDPOINT = 'https://collect.pinghao-wang.workers.dev/v1/events';
  const CONSENT_KEY = 'scovion-analytics-consent';
  const SESSION_KEY = 'scovion-analytics-session';
  const MAX_VALUE_LENGTH = 160;
  const config = window.SCOVION_ANALYTICS_CONFIG || {};
  const endpoint = String(config.endpoint || DEFAULT_ENDPOINT).trim();

  const copy = {
    en: {
      notice: 'Help us understand page visits and improve the website experience. Analytics is enabled only after you choose to allow it.',
      allow: 'Allow analytics',
      decline: 'Decline',
      privacy: 'Privacy & analytics',
      settings: 'Analytics settings'
    },
    'zh-cn': {
      notice: '帮助我们了解页面访问与使用情况，持续改进网站体验。只有在您选择允许后才会启用访问分析。',
      allow: '允许访问分析',
      decline: '拒绝',
      privacy: '隐私与访问分析',
      settings: '分析设置'
    },
    'zh-tw': {
      notice: '協助我們了解頁面造訪與使用情況，持續改善網站體驗。只有在您選擇允許後才會啟用造訪分析。',
      allow: '允許造訪分析',
      decline: '拒絕',
      privacy: '私隱與造訪分析',
      settings: '分析設定'
    },
    ms: {
      notice: 'Bantu kami memahami lawatan dan penggunaan halaman untuk menambah baik pengalaman laman. Analitik hanya diaktifkan selepas anda membenarkannya.',
      allow: 'Benarkan analitik',
      decline: 'Tolak',
      privacy: 'Privasi & analitik',
      settings: 'Tetapan analitik'
    },
    th: {
      notice: 'ช่วยให้เราเข้าใจการเข้าชมและการใช้งานหน้าเว็บเพื่อปรับปรุงประสบการณ์บนเว็บไซต์ ระบบวิเคราะห์จะเปิดใช้งานเมื่อคุณเลือกอนุญาตเท่านั้น',
      allow: 'อนุญาตการวิเคราะห์',
      decline: 'ปฏิเสธ',
      privacy: 'ความเป็นส่วนตัวและการวิเคราะห์',
      settings: 'ตั้งค่าการวิเคราะห์'
    }
  };

  let pageViewSent = false;
  let banner = null;

  function currentLanguage() {
    const language = String(document.documentElement.lang || 'en').toLowerCase();
    return copy[language] ? language : 'en';
  }

  function text() {
    return copy[currentLanguage()];
  }

  function privacySignalEnabled() {
    const signal = navigator.doNotTrack || window.doNotTrack;
    return navigator.globalPrivacyControl === true || signal === '1' || signal === 'yes';
  }

  function readStorage(key, storage = localStorage) {
    try {
      return storage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeStorage(key, value, storage = localStorage) {
    try {
      storage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function consent() {
    if (privacySignalEnabled()) return 'denied';
    const value = readStorage(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : 'unset';
  }

  function sessionId() {
    let value = readStorage(SESSION_KEY, sessionStorage);
    if (value) return value;
    value = typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 14)}`;
    writeStorage(SESSION_KEY, value, sessionStorage);
    return value;
  }

  function clean(value, maxLength = MAX_VALUE_LENGTH) {
    return String(value || '').trim().replace(/\s+/g, ' ').slice(0, maxLength);
  }

  function productId(search = window.location.search) {
    const value = new URLSearchParams(search).get('product');
    return value && /^[a-z0-9-]{1,80}$/i.test(value) ? value.toLowerCase() : '';
  }

  function pageKey(locationLike = window.location) {
    let path = locationLike.pathname || '/';
    path = path.replace(/\/index\.html$/i, '/') || '/';
    if (/\/product\.html$/i.test(path)) {
      const product = productId(locationLike.search || '');
      return product ? `/product/${product}` : '/product';
    }
    return path.startsWith('/') ? path : `/${path}`;
  }

  function referrerHost() {
    if (!document.referrer) return '';
    try {
      return new URL(document.referrer).hostname.slice(0, 120);
    } catch {
      return '';
    }
  }

  function deviceCategory() {
    const width = window.innerWidth || document.documentElement.clientWidth || 0;
    if (width < 640) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  function send(event) {
    if (!endpoint || consent() !== 'granted') return false;
    const target = clean(event.target, 100);
    const payload = JSON.stringify({
      eventId: typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 14)}`,
      eventType: clean(event.type, 32),
      pagePath: pageKey(),
      pageTitle: clean(document.title, 120),
      targetPath: target.startsWith('/') ? target : null,
      targetKey: target && !target.startsWith('/') ? target : null,
      section: clean(event.section, 80),
      product: productId(),
      language: clean(document.documentElement.lang || 'en', 12),
      referrerHost: referrerHost(),
      sessionId: sessionId(),
      device: deviceCategory()
    });

    try {
      if (navigator.sendBeacon) {
        const body = new Blob([payload], { type: 'text/plain;charset=UTF-8' });
        if (navigator.sendBeacon(endpoint, body)) return true;
      }
      fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        cache: 'no-store',
        keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: payload
      }).catch(() => {});
      return true;
    } catch {
      return false;
    }
  }

  function sendPageView() {
    if (pageViewSent || consent() !== 'granted') return;
    pageViewSent = send({ type: 'page_view' });
  }

  function sectionKey(element) {
    const region = element.closest('section[id], main[id], header, footer, section, main');
    if (!region) return '';
    if (region.id) return region.id;
    if (region.matches('header')) return 'header';
    if (region.matches('footer')) return 'footer';
    const index = [...document.querySelectorAll(region.tagName.toLowerCase())].indexOf(region);
    return `${region.tagName.toLowerCase()}-${index + 1}`;
  }

  function normalizedInternalTarget(url) {
    const locationLike = { pathname: url.pathname, search: url.search };
    const destination = pageKey(locationLike);
    if (url.hash && url.origin === window.location.origin && destination === pageKey()) {
      return `section/${clean(url.hash.slice(1), 80)}`;
    }
    return destination;
  }

  function targetKey(element) {
    const explicit = element.dataset.analyticsId;
    if (explicit) return clean(explicit);

    if (element.matches('a[href]')) {
      const href = element.getAttribute('href') || '';
      if (/^mailto:/i.test(href)) return 'mailto';
      if (/^tel:/i.test(href)) return 'telephone';
      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin) return normalizedInternalTarget(url);
        return `external/${clean(url.hostname, 100)}`;
      } catch {
        return 'link';
      }
    }

    if (element.matches('button')) {
      if (element.type === 'submit') {
        const form = element.closest('form');
        return `form/${clean(form?.id || 'unknown', 80)}/submit`;
      }
      return clean(element.id || element.name || 'button');
    }

    return clean(element.id || element.getAttribute('role') || 'interaction');
  }

  function handleClick(event) {
    const source = event.target instanceof Element ? event.target : event.target?.parentElement;
    const element = source?.closest('a[href], button, [role="button"], [data-analytics-id]');
    if (!element || element.closest('[data-analytics-ignore]')) return;
    if (element.matches('.menu, .analytics-settings-button')) return;
    send({ type: 'click', target: targetKey(element), section: sectionKey(element) });
  }

  function injectStyles() {
    if (document.querySelector('#scovion-analytics-styles')) return;
    const style = document.createElement('style');
    style.id = 'scovion-analytics-styles';
    style.textContent = `
      .analytics-consent{position:fixed;z-index:9999;left:clamp(16px,3vw,40px);right:clamp(16px,3vw,40px);bottom:clamp(16px,3vw,32px);display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;align-items:center;max-width:1040px;margin:auto;padding:22px 24px;border:1px solid rgba(14,40,48,.15);border-radius:18px;background:rgba(250,252,251,.97);box-shadow:0 18px 60px rgba(8,31,38,.18);backdrop-filter:blur(14px);color:#17343b;font:500 14px/1.55 Inter,system-ui,sans-serif}
      .analytics-consent[hidden]{display:none}.analytics-consent p{margin:0;max-width:760px}.analytics-consent-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.analytics-consent button{min-height:42px;padding:0 18px;border-radius:999px;border:1px solid #0e6e6e;background:#0e6e6e;color:#fff;font:700 13px/1 system-ui,sans-serif;cursor:pointer}.analytics-consent button+button{background:transparent;color:#17343b;border-color:rgba(14,40,48,.28)}
      .analytics-privacy-links{display:inline-flex;gap:12px;align-items:center;flex-wrap:wrap}.analytics-privacy-links a,.analytics-privacy-links button{border:0;padding:0;background:none;color:inherit;text-decoration:underline;text-underline-offset:3px;font:inherit;cursor:pointer}
      @media(max-width:720px){.analytics-consent{grid-template-columns:1fr;padding:18px}.analytics-consent-actions{justify-content:flex-start}}
    `;
    document.head.appendChild(style);
  }

  function updateBannerLanguage() {
    if (!banner) return;
    const strings = text();
    banner.querySelector('[data-analytics-notice]').textContent = strings.notice;
    banner.querySelector('[data-analytics-allow]').textContent = strings.allow;
    banner.querySelector('[data-analytics-decline]').textContent = strings.decline;
    const footerLink = document.querySelector('[data-analytics-privacy]');
    const settingsButton = document.querySelector('[data-analytics-settings]');
    if (footerLink) footerLink.textContent = strings.privacy;
    if (settingsButton) settingsButton.textContent = strings.settings;
  }

  function closeBanner() {
    if (banner) banner.hidden = true;
  }

  function openPreferences() {
    if (privacySignalEnabled()) return;
    if (!banner) createPrivacyUi();
    banner.hidden = false;
    banner.querySelector('button')?.focus({ preventScroll: true });
  }

  function chooseConsent(value) {
    writeStorage(CONSENT_KEY, value);
    closeBanner();
    if (value === 'granted') sendPageView();
  }

  function createPrivacyUi() {
    if (!banner) {
      banner = document.createElement('aside');
      banner.className = 'analytics-consent';
      banner.setAttribute('aria-label', 'Analytics preferences');
      banner.setAttribute('aria-live', 'polite');
      banner.setAttribute('data-analytics-ignore', '');
      banner.innerHTML = '<p data-analytics-notice></p><div class="analytics-consent-actions"><button type="button" data-analytics-allow></button><button type="button" data-analytics-decline></button></div>';
      banner.querySelector('[data-analytics-allow]').addEventListener('click', () => chooseConsent('granted'));
      banner.querySelector('[data-analytics-decline]').addEventListener('click', () => chooseConsent('denied'));
      document.body.appendChild(banner);
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.querySelector('.analytics-privacy-links')) {
      const links = document.createElement('span');
      links.className = 'analytics-privacy-links';
      links.setAttribute('data-analytics-ignore', '');
      links.innerHTML = '<a href="privacy.html" data-analytics-privacy></a><button class="analytics-settings-button" type="button" data-analytics-settings></button>';
      links.querySelector('button').addEventListener('click', openPreferences);
      footer.appendChild(links);
    }

    updateBannerLanguage();
    banner.hidden = consent() !== 'unset';
  }

  function init() {
    injectStyles();
    createPrivacyUi();
    document.addEventListener('click', handleClick, true);
    document.addEventListener('scovion:languagechange', updateBannerLanguage);
    document.addEventListener('scovion:analytics', event => {
      const detail = event.detail || {};
      send({ type: detail.type || 'conversion', target: detail.id || '', section: detail.section || '' });
    });
    sendPageView();
  }

  window.ScovionAnalytics = Object.freeze({
    openPreferences,
    track(type, id, section = '') {
      return send({ type, target: id, section });
    },
    pageKey
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
