// A measured fallback for the rare headings that native text-wrap: balance
// cannot balance. Text, translation markup and intentional line breaks stay intact.
const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;
const MEANINGFUL = /[\p{Letter}\p{Number}]/u;
const HEADING_SELECTOR = 'h1, h2, h3, h4, blockquote, .bridge-profile-intro > p:last-child';
const SEGMENTERS = new Map();

export function headingOrphans(lines) {
  const issues = [];
  for (let index = 1; index < lines.length; index++) {
    const line = lines[index], previous = lines[index - 1];
    const shared = line.flows.filter(flow => previous.flows.includes(flow));
    if (!shared.length || lines[index + 1]?.flows.some(flow => shared.includes(flow))) continue;
    if (previous.graphemes <= 3 || !line.graphemes) continue;
    const comparable = lines.filter(candidate => candidate.flows.some(flow => shared.includes(flow)));
    const longest = Math.max(...comparable.map(candidate => candidate.width));
    const ratio = longest ? line.width / longest : 1;
    const words = line.text.trim().split(/\s+/u).filter(word => MEANINGFUL.test(word));
    let reason = null;
    if (CJK.test(line.text) && (line.graphemes === 1 || (line.graphemes <= 2 && ratio < 0.6))) reason = 'cjk-orphan';
    else if (!CJK.test(line.text) && line.graphemes <= 2 && ratio < 0.5) reason = 'short-orphan';
    else if (!CJK.test(line.text) && words.length === 1 && ratio < 0.25) reason = 'short-single-word';
    if (reason) issues.push({ index, reason, ratio });
  }
  return issues;
}

export function headingFontSizes(original) {
  if (!Number.isFinite(original) || original <= 0) return [];
  const floor = Math.min(original, Math.max(24, original * 0.6));
  const sizes = [];
  for (let step = 1; step <= 24; step++) {
    const size = Math.max(floor, original * (1 - step * 0.02));
    if (size >= original || sizes.at(-1) === size) break;
    sizes.push(size);
    if (size === floor) break;
  }
  return sizes;
}

export function restoreHeadingFont(heading, original) {
  if (original.value) heading.style.setProperty('font-size', original.value, original.priority);
  else heading.style.removeProperty('font-size');
}

function visible(element, view) {
  if (element.closest('[hidden], [aria-hidden="true"], .language-switcher, .language-panel, svg')) return false;
  const closed = element.closest('details:not([open])');
  if (closed && !closed.querySelector('summary')?.contains(element)) return false;
  const style = view.getComputedStyle(element);
  const box = element.getBoundingClientRect();
  // Opacity is deliberately ignored: scroll-reveal headings have real layout
  // while still transparent, and should already be balanced when revealed.
  return style.display !== 'none' && style.visibility !== 'hidden' && style.visibility !== 'collapse'
    && (style.display === 'contents' || (box.width > 0 && box.height > 0));
}

export function measureHeadingLines(heading) {
  const doc = heading.ownerDocument, view = doc.defaultView;
  const locale = doc.documentElement.lang || undefined;
  if (!SEGMENTERS.has(locale)) SEGMENTERS.set(locale, typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function'
    ? new Intl.Segmenter(locale, { granularity: 'grapheme' }) : null);
  const segmenter = SEGMENTERS.get(locale);
  const split = value => segmenter ? [...segmenter.segment(value)] : [...value].reduce((items, segment) => {
    const previous = items.at(-1);
    if (previous && (/^[\p{Mark}\p{Emoji_Modifier}\uFE0E\uFE0F\u200D]$/u.test(segment) || previous.segment.endsWith('\u200D'))) previous.segment += segment;
    else items.push({ segment, index: previous ? previous.index + previous.segment.length : 0 });
    return items;
  }, []);
  const glyphs = [], range = doc.createRange();
  let flow = 0;
  function walk(node) {
    if (node.nodeType === 3) {
      for (const { segment, index } of split(node.nodeValue || '')) {
        range.setStart(node, index);
        range.setEnd(node, index + segment.length);
        const rects = [...range.getClientRects()].filter(rect => rect.width > 0.1 && rect.height > 0.1);
        if (!rects.length) continue;
        const rect = rects.reduce((largest, item) => item.width > largest.width ? item : largest);
        glyphs.push({ text: segment, flow, left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom });
      }
      return;
    }
    if (node.nodeType !== 1) return;
    if (node.tagName === 'BR') { flow++; return; }
    if (node.matches('small, .credentials, [aria-hidden="true"], script, style') || (node !== heading && !visible(node, view))) return;
    const display = view.getComputedStyle(node).display;
    const boundary = node !== heading && !['inline', 'contents', 'inline-block', 'inline-flex', 'inline-grid'].includes(display);
    if (boundary) flow++;
    for (const child of node.childNodes) walk(child);
    if (boundary) flow++;
  }
  walk(heading);
  const lines = [];
  for (const glyph of glyphs) {
    const height = glyph.bottom - glyph.top, center = (glyph.top + glyph.bottom) / 2;
    let line = lines.findLast(candidate => {
      const overlap = Math.min(candidate.bottom, glyph.bottom) - Math.max(candidate.top, glyph.top);
      return overlap > Math.min(candidate.bottom - candidate.top, height) * 0.6
        && Math.abs(candidate.center - center) < Math.max(2, height * 0.4);
    });
    if (!line) {
      line = { glyphs: [], left: glyph.left, right: glyph.right, top: glyph.top, bottom: glyph.bottom, center };
      lines.push(line);
    }
    line.glyphs.push(glyph);
    line.left = Math.min(line.left, glyph.left);
    line.right = Math.max(line.right, glyph.right);
    line.top = Math.min(line.top, glyph.top);
    line.bottom = Math.max(line.bottom, glyph.bottom);
  }
  return lines.sort((a, b) => a.top - b.top).map(line => {
    const content = line.glyphs.filter(glyph => MEANINGFUL.test(glyph.text));
    return {
      text: line.glyphs.map(glyph => glyph.text).join('').replace(/\s+/gu, ' ').trim(),
      width: line.right - line.left,
      graphemes: content.length,
      flows: [...new Set(content.map(glyph => glyph.flow))],
    };
  }).filter(line => line.text);
}

export function initHeadingTypography(doc = document) {
  const view = doc.defaultView;
  const adjusted = new Map();
  let frame = 0, disposed = false;
  function run() {
    frame = 0;
    if (disposed || !doc.body) return;
    // Always re-read the responsive baseline. A wider viewport or a different
    // translation must be able to recover the original design's font size.
    for (const [heading, original] of adjusted) restoreHeadingFont(heading, original);
    adjusted.clear();
    for (const heading of doc.querySelectorAll(HEADING_SELECTOR)) {
      if (!visible(heading, view) || heading.parentElement?.closest(HEADING_SELECTOR)) continue;
      if (!headingOrphans(measureHeadingLines(heading)).length) continue;
      const size = Number.parseFloat(view.getComputedStyle(heading).fontSize);
      const candidates = headingFontSizes(size);
      if (!candidates.length) continue;
      const original = { value: heading.style.getPropertyValue('font-size'), priority: heading.style.getPropertyPriority('font-size') };
      adjusted.set(heading, original);
      let resolved = false;
      for (const candidate of candidates) {
        heading.style.setProperty('font-size', `${candidate.toFixed(3)}px`, original.priority);
        if (!headingOrphans(measureHeadingLines(heading)).length) { resolved = true; break; }
      }
      if (!resolved) {
        // A font reduction that cannot improve the wrapping is not worth
        // sacrificing legibility. Keep the responsive CSS design in that case.
        restoreHeadingFont(heading, original);
        adjusted.delete(heading);
      }
    }
    doc.documentElement.setAttribute('data-heading-layout', `${doc.documentElement.lang}:${view.innerWidth}`);
  }
  function schedule() {
    if (!disposed && !frame) frame = view.requestAnimationFrame(run);
  }
  // No style-attribute observation: our own measured font adjustments cannot
  // trigger a mutation/measurement loop or interfere with language persistence.
  const observer = new view.MutationObserver(schedule);
  observer.observe(doc.documentElement, { childList: true, characterData: true, subtree: true });
  view.addEventListener('resize', schedule, { passive: true });
  view.addEventListener('vp:languagechange', schedule);
  doc.addEventListener('toggle', schedule, true);
  doc.fonts?.addEventListener('loadingdone', schedule);
  doc.fonts?.ready.then(schedule);
  schedule();
  return () => {
    disposed = true;
    observer.disconnect();
    view.removeEventListener('resize', schedule);
    view.removeEventListener('vp:languagechange', schedule);
    doc.removeEventListener('toggle', schedule, true);
    doc.fonts?.removeEventListener('loadingdone', schedule);
    if (frame) view.cancelAnimationFrame(frame);
    for (const [heading, original] of adjusted) restoreHeadingFont(heading, original);
    adjusted.clear();
  };
}

if (typeof document !== 'undefined' && document.defaultView) initHeadingTypography(document);
