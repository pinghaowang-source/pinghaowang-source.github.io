import { LANGUAGES, SUPPORTED, browserLocale, countryLocale, validPreference } from './locale.mjs?v=20261019';

const ASSET_ROOT = new URL('.', import.meta.url);
const SITE_ROOT = ASSET_ROOT.pathname.replace(/i18n\/$/, '');
const VERSION = '20261019-review';
const PREFERENCE_KEY = 'vp.language.preference.v1';
const COUNTRY_KEY = 'vp.language.country.v1';
const UNIT_TAGS = new Set(['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'BLOCKQUOTE', 'FIGCAPTION', 'LI', 'A', 'BUTTON', 'SPAN', 'STRONG', 'SMALL', 'OPTION', 'LABEL', 'SUMMARY', 'DT', 'DD']);
const INLINE_TAGS = new Set(['EM', 'STRONG', 'SMALL', 'SPAN', 'I', 'BR']);
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'SVG']);
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const normalize = value => value.replace(/\s+/g, ' ').trim();
const unitRecords = new Map();
const attributeRecords = new Map();
const cache = new Map();
let english = {};
let lookup = new Map();
let current = 'en';
let preference = 'auto';
let committedPreference = 'auto';
let dictionary = {};
let requestId = 0;
let queued = false;
let catalogReady = false;
let pendingChoice = null;
let countryRequest;
let originalTitle = document.title;
let originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
let renderedTitle = originalTitle;
let renderedDescription = originalDescription;
const initialHash = location.hash;
let alignInitialHash = Boolean(initialHash);
// Wait for translation reflow before positioning a linked section. Never
// override a visitor who has already started scrolling or interacting.
for (const event of ['pointerdown', 'keydown', 'wheel', 'touchstart']) {
  window.addEventListener(event, () => { alignInitialHash = false; }, { once: true, passive: true });
}

function readStorage(storage, key) { try { return storage.getItem(key); } catch { return null; } }
function writeStorage(storage, key, value) { try { storage.setItem(key, value); } catch { /* Private browsing still supports a session choice. */ } }
function localStorageOrNull() { try { return window.localStorage; } catch { return null; } }
function sessionStorageOrNull() { try { return window.sessionStorage; } catch { return null; } }

function sourceFor(node) {
  return normalize([...node.childNodes].map(child => {
    if (child.nodeType === Node.TEXT_NODE) return escape(child.nodeValue || '');
    if (child.nodeType !== Node.ELEMENT_NODE) return '';
    if (child.tagName === 'BR') return '<br>';
    return `<${child.tagName.toLowerCase()}>${sourceFor(child)}</${child.tagName.toLowerCase()}>`;
  }).join(''));
}

function canTranslate(node) {
  return [...node.childNodes].every(child => child.nodeType !== Node.ELEMENT_NODE || (INLINE_TAGS.has(child.tagName) && canTranslate(child)));
}

function discover() {
  for (const node of unitRecords.keys()) if (!node.isConnected) unitRecords.delete(node);
  for (const node of attributeRecords.keys()) if (!node.isConnected) attributeRecords.delete(node);
  function visit(node, selected = false) {
    if (node.nodeType !== Node.ELEMENT_NODE || SKIP_TAGS.has(node.tagName) || node.hasAttribute('data-no-translate') || node.getAttribute('translate') === 'no') return;
    let attributes = attributeRecords.get(node);
    for (const name of ['alt', 'aria-label', 'placeholder', 'title']) {
      const original = node.getAttribute(name);
      const key = original && lookup.get(normalize(escape(original)));
      if (key && (!attributes?.[name] || attributes[name].key !== key)) { attributes ||= {}; attributes[name] = { key, original }; }
    }
    if (attributes) attributeRecords.set(node, attributes);
    const candidate = !selected && UNIT_TAGS.has(node.tagName) && canTranslate(node);
    if (candidate) {
      const source = sourceFor(node);
      const key = lookup.get(source);
      const record = unitRecords.get(node);
      if (key && (!record || node.innerHTML !== record.rendered)) unitRecords.set(node, { key, source, original: node.innerHTML, rendered: node.innerHTML, locale: 'en' });
    }
    for (const child of node.children) visit(child, selected || candidate);
  }
  visit(document.body);
}

function textOnly(value) {
  const template = document.createElement('template');
  template.innerHTML = value;
  return template.content.textContent || '';
}

function translatedFragment(message, original) {
  const translated = document.createElement('template');
  const source = document.createElement('template');
  translated.innerHTML = message;
  source.innerHTML = original;
  const originals = new Map();
  for (const node of source.content.querySelectorAll('*')) {
    const list = originals.get(node.tagName) || [];
    list.push(node);
    originals.set(node.tagName, list);
  }
  const index = new Map();
  function clone(node) {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.nodeValue || '');
    if (node.nodeType !== Node.ELEMENT_NODE || !INLINE_TAGS.has(node.tagName)) throw new Error('Invalid translation markup');
    const count = index.get(node.tagName) || 0;
    index.set(node.tagName, count + 1);
    const originalNode = originals.get(node.tagName)?.[count];
    const result = originalNode ? originalNode.cloneNode(false) : document.createElement(node.tagName.toLowerCase());
    for (const child of node.childNodes) result.appendChild(clone(child));
    return result;
  }
  const result = document.createDocumentFragment();
  for (const child of translated.content.childNodes) result.appendChild(clone(child));
  return result;
}

function translated(source) { const key = lookup.get(normalize(escape(source))); return key && dictionary[key] ? textOnly(dictionary[key]) : source; }
function setStatus(source) { for (const node of document.querySelectorAll('[data-language-status]')) node.textContent = source ? translated(source) : ''; }

function updateControls() {
  const name = LANGUAGES.find(([locale]) => locale === current)?.[1] || 'English';
  for (const node of document.querySelectorAll('[data-language-current]')) { node.textContent = name; node.lang = current; }
  for (const button of document.querySelectorAll('[data-language-choice]')) button.setAttribute('aria-pressed', String(button.dataset.languageChoice === (preference === 'auto' ? 'auto' : current)));
  for (const node of document.querySelectorAll('.language-switcher summary')) node.setAttribute('aria-label', translated('Choose your language'));
  for (const node of document.querySelectorAll('.language-panel')) node.setAttribute('aria-label', translated('Language'));
  for (const node of document.querySelectorAll('[data-language-title]')) node.textContent = translated('Language');
  for (const node of document.querySelectorAll('[data-language-auto-label]')) node.textContent = translated('Automatic language');
  for (const node of document.querySelectorAll('[data-language-note]')) node.textContent = translated('Location detection uses an external country lookup. You can choose any language manually.');
}

function updateLinks() {
  for (const link of document.querySelectorAll('a[href]')) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || !/^(?:\/|https?:)/.test(href)) continue;
    const url = new URL(href, location.href);
    if (url.origin !== location.origin || !url.pathname.startsWith(SITE_ROOT) || /\.[a-z0-9]{2,5}$/i.test(url.pathname)) continue;
    url.searchParams.set('lang', preference === 'auto' ? 'auto' : current);
    link.setAttribute('href', url.pathname + url.search + url.hash);
    link.setAttribute('data-vp-language-link', 'true');
  }
}

const observer = new MutationObserver(() => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; apply(); });
});

function apply() {
  observer.disconnect();
  try {
    if (document.title !== renderedTitle && lookup.has(escape(normalize(document.title)))) originalTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    if (description && description.content !== renderedDescription && lookup.has(escape(normalize(description.content)))) originalDescription = description.content;
    discover();
    for (const [node, record] of unitRecords) {
      const message = current === 'en' ? null : dictionary[record.key];
      if (record.locale === current) continue;
      if (!message || message === record.source) node.innerHTML = record.original;
      else node.replaceChildren(translatedFragment(message, record.original));
      record.locale = current;
      record.rendered = node.innerHTML;
    }
    for (const [node, attributes] of attributeRecords) for (const [name, record] of Object.entries(attributes)) node.setAttribute(name, current === 'en' ? record.original : textOnly(dictionary[record.key] || escape(record.original)));
    document.documentElement.lang = current;
    document.documentElement.dir = 'ltr';
    document.documentElement.dataset.siteLanguage = current;
    const titleKey = lookup.get(escape(normalize(originalTitle)));
    document.title = current === 'en' ? originalTitle : textOnly(dictionary[titleKey] || escape(originalTitle));
    renderedTitle = document.title;
    const descriptionKey = lookup.get(escape(normalize(originalDescription)));
    if (description) description.content = current === 'en' ? originalDescription : textOnly(dictionary[descriptionKey] || escape(originalDescription));
    renderedDescription = description?.content || '';
    updateControls();
    updateLinks();
  } finally {
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    observer.observe(document.head, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['content'] });
  }
}

async function loadDictionary(locale) {
  if (locale === 'en') return english;
  if (!cache.has(locale)) {
    const promise = fetch(new URL(`${locale}.json?v=${VERSION}`, ASSET_ROOT), { credentials: 'same-origin' })
      .then(response => { if (!response.ok) throw new Error('Language unavailable'); return response.json(); })
      .then(value => { if (!value || typeof value !== 'object' || Object.keys(english).some(key => typeof value[key] !== 'string')) throw new Error('Incomplete translation'); return value; })
      .catch(error => { cache.delete(locale); throw error; });
    cache.set(locale, promise);
  }
  return cache.get(locale);
}

async function show(locale, id) {
  if (!SUPPORTED.has(locale)) return false;
  try {
    const next = await loadDictionary(locale);
    if (id !== requestId) return false;
    current = locale;
    dictionary = next;
    apply();
    setStatus('');
    window.dispatchEvent(new CustomEvent('vp:languagechange', { detail: { locale, preference } }));
    return true;
  } catch {
    if (id === requestId) { updateControls(); setStatus('Language unavailable. Please try again.'); }
    return false;
  }
}

async function detectCountry() {
  try {
    const cached = JSON.parse(readStorage(sessionStorageOrNull(), COUNTRY_KEY) || 'null');
    if (cached && cached.expires > Date.now() && /^[A-Z]{2}$/.test(cached.country)) return cached.country;
  } catch { /* Ignore an expired or malformed cache. */ }
  const controller = new AbortController();
  countryRequest = controller;
  const timer = setTimeout(() => controller.abort(), 2200);
  try {
    const response = await fetch('https://api.country.is/', { signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store' });
    if (!response.ok) return null;
    const { country } = await response.json();
    if (!/^[A-Z]{2}$/.test(country)) return null;
    writeStorage(sessionStorageOrNull(), COUNTRY_KEY, JSON.stringify({ country, expires: Date.now() + 6 * 60 * 60 * 1000 }));
    return country;
  } catch { return null; }
  finally { clearTimeout(timer); if (countryRequest === controller) countryRequest = null; }
}

function updateUrl() {
  const url = new URL(location.href);
  url.searchParams.set('lang', preference === 'auto' ? 'auto' : current);
  history.replaceState(history.state, '', url.pathname + url.search + url.hash);
}

function commitPreference(persist) {
  committedPreference = preference;
  if (persist) writeStorage(localStorageOrNull(), PREFERENCE_KEY, preference);
  updateUrl();
  updateLinks();
}

async function choose(value, persist = true) {
  const nextPreference = validPreference(value);
  if (!nextPreference) return;
  if (!catalogReady) { pendingChoice = { value: nextPreference, persist }; return; }
  const id = ++requestId;
  countryRequest?.abort();
  preference = nextPreference;
  if (nextPreference === 'auto') {
    const languages = navigator.languages?.length ? [...navigator.languages] : [navigator.language || 'en'];
    const preferred = browserLocale(languages);
    if (!(await show(preferred, id)) && id === requestId) await show('en', id);
    if (id !== requestId) return;
    commitPreference(persist);
    setStatus('Detecting your region…');
    const country = await detectCountry();
    if (id !== requestId) return;
    let ok = await show(country ? countryLocale(country, languages) : preferred, id);
    if (!ok && id === requestId) ok = await show(preferred, id);
    if (!ok && id === requestId) ok = await show('en', id);
    if (ok && !country) setStatus('Using your browser language');
  } else if (!(await show(nextPreference, id))) {
    if (id !== requestId) return;
    preference = committedPreference;
    updateControls();
    return;
  }
  if (id !== requestId) return;
  commitPreference(persist);
}

// Full document navigation keeps the static publication and React preview
// consistent, including source text, metadata and a shared language URL.
document.addEventListener('click', event => {
  const link = event.target.closest?.('a[data-vp-language-link]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank' || link.hasAttribute('download')) return;
  event.preventDefault();
  event.stopPropagation();
  location.assign(link.href);
}, true);

document.addEventListener('click', event => {
  const button = event.target.closest?.('[data-language-choice]');
  if (button) {
    choose(button.dataset.languageChoice);
    const menu = button.closest('.language-switcher');
    menu.open = false;
    menu.querySelector('summary')?.focus({ preventScroll: true });
  }
  for (const menu of document.querySelectorAll('.language-switcher[open]')) if (!menu.contains(event.target)) menu.open = false;
});

document.addEventListener('keydown', event => {
  const menu = event.target.closest?.('.language-switcher');
  if (!menu?.open) return;
  if (event.key === 'Escape') { event.preventDefault(); menu.open = false; menu.querySelector('summary')?.focus(); }
  if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const buttons = [...menu.querySelectorAll('[data-language-choice]')];
  const index = buttons.indexOf(document.activeElement);
  const direction = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + direction + buttons.length) % buttons.length;
  buttons[next]?.focus();
});

window.addEventListener('popstate', () => {
  const value = validPreference(new URL(location.href).searchParams.get('lang'));
  if (value && value !== preference) choose(value, false);
  else apply();
});

async function start() {
  try {
    const response = await fetch(new URL(`en.json?v=${VERSION}`, ASSET_ROOT), { credentials: 'same-origin' });
    if (!response.ok) throw new Error('Catalog unavailable');
    english = await response.json();
    lookup = new Map(Object.entries(english).map(([key, source]) => [source, key]));
    dictionary = english;
    discover();
    catalogReady = true;
    const initialChoice = pendingChoice;
    pendingChoice = null;
    const query = validPreference(new URL(location.href).searchParams.get('lang'));
    const saved = validPreference(readStorage(localStorageOrNull(), PREFERENCE_KEY));
    window.VPLanguage = {
      get current() { return current; }, get preference() { return preference; },
      supported: LANGUAGES.map(([locale]) => locale), choose,
    };
    await choose(initialChoice?.value || query || saved || 'auto', initialChoice?.persist ?? true);
    if (alignInitialHash && location.hash === initialHash) {
      let id;
      try { id = decodeURIComponent(initialHash.slice(1)); } catch { id = initialHash.slice(1); }
      requestAnimationFrame(() => {
        if (alignInitialHash) document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
        alignInitialHash = false;
      });
    }
  } catch {
    setStatus('Language unavailable. Please try again.');
  }
}

start();
