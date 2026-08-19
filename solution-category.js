(() => {
  'use strict';

  const categories = new Set(['radiology', 'surgery', 'hospital', 'bone', 'rehab']);
  const aliases = Object.freeze({
    in: 'id',
    tl: 'fil',
    zh: 'zh-cn',
    'zh-hans': 'zh-cn',
    'zh-sg': 'zh-cn',
    'zh-hant': 'zh-tw',
    'zh-hk': 'zh-tw',
    'zh-mo': 'zh-tw'
  });
  let pendingLanguage = null;

  function availableLocales() {
    return globalThis.SCOVION_SOLUTION_CATEGORY_LOCALES || {};
  }

  function normaliseLanguage(requested) {
    const locales = availableLocales();
    const language = String(requested || 'en').trim().toLowerCase().replaceAll('_', '-');
    const aliased = aliases[language] || language;
    if (locales[aliased]) return aliased;
    const base = aliases[aliased.split('-')[0]] || aliased.split('-')[0];
    return locales[base] ? base : 'en';
  }

  function updateMetadata(copy) {
    const category = document.body?.dataset.solutionCategory;
    if (!categories.has(category)) return;
    const title = copy[`${category}HeroTitle`];
    const description = copy[`${category}HeroText`];
    if (title) document.title = `${title} — SCOVION`;
    if (!description) return;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta && document.head) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta?.setAttribute('content', description);
  }

  function centreCurrentCategory() {
    const rail = document.querySelector('.category-switcher');
    const current = rail?.querySelector('[aria-current="page"]');
    if (!rail || !current || rail.scrollWidth <= rail.clientWidth + 1) return;
    const target = Math.max(0, current.offsetLeft - ((rail.clientWidth - current.offsetWidth) / 2));
    if (typeof rail.scrollTo === 'function') {
      rail.scrollTo({ left: target, behavior: 'auto' });
    } else {
      rail.scrollLeft = target;
    }
  }

  function applyLanguage(requested) {
    const locales = availableLocales();
    const english = locales.en;
    if (!english) return false;
    const language = normaliseLanguage(requested);
    const copy = locales[language] || english;

    document.querySelectorAll('[data-solution-i18n]').forEach(element => {
      const key = element.dataset.solutionI18n;
      const value = copy[key] ?? english[key];
      if (typeof value === 'string') element.textContent = value;
    });
    updateMetadata(copy);
    centreCurrentCategory();
    return true;
  }

  function initialise() {
    applyLanguage(pendingLanguage || document.documentElement.lang || 'en');
    pendingLanguage = null;
  }

  document.addEventListener('scovion:languagechange', event => {
    const requested = event.detail?.lang || document.documentElement.lang || 'en';
    if (document.readyState === 'loading') {
      pendingLanguage = requested;
      return;
    }
    applyLanguage(requested);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialise, { once: true });
  } else {
    initialise();
  }

  globalThis.SCOVION_SOLUTION_CATEGORY = Object.freeze({ applyLanguage });
})();
