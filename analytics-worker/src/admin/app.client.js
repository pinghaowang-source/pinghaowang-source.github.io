const elements = {
  range: document.querySelector('#range'),
  refresh: document.querySelector('#refresh'),
  status: document.querySelector('#status'),
  updated: document.querySelector('#updated'),
  pages: document.querySelector('#pages-body'),
  visitors: document.querySelector('#visitors-body'),
  identity: document.querySelector('#identity'),
  chart: document.querySelector('#trend-chart'),
  dialog: document.querySelector('#reveal-dialog'),
  revealForm: document.querySelector('#reveal-form'),
  revealReason: document.querySelector('#reveal-reason'),
  revealError: document.querySelector('#reveal-error'),
  revealConfirm: document.querySelector('#reveal-confirm')
};

let selectedVisitor = null;
let loading = false;

const numberFormatter = new Intl.NumberFormat('zh-CN');
const dateFormatter = new Intl.DateTimeFormat('zh-CN', {
  month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
});
const countryNames = typeof Intl.DisplayNames === 'function'
  ? new Intl.DisplayNames(['zh-CN'], { type: 'region' })
  : null;

function asNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value) {
  return numberFormatter.format(asNumber(value));
}

function formatPercent(value) {
  return `${Math.min(100, Math.max(0, asNumber(value))).toFixed(1)}%`;
}

function formatDate(epochSeconds) {
  return epochSeconds ? dateFormatter.format(new Date(asNumber(epochSeconds) * 1000)) : '—';
}

async function fetchJson(path, options) {
  const response = await fetch(path, {
    credentials: 'same-origin',
    cache: 'no-store',
    headers: { Accept: 'application/json', ...(options && options.headers) },
    ...options
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || `请求失败（${response.status}）`);
  return body;
}

function setStatus(message) {
  elements.status.textContent = message || '';
  elements.status.hidden = !message;
}

function textCell(value, className) {
  const cell = document.createElement('td');
  if (className) cell.className = className;
  cell.textContent = value;
  return cell;
}

function renderSummary(summary) {
  const metrics = summary.metrics || {};
  document.querySelector('#metric-views').textContent = formatNumber(metrics.pageViews);
  document.querySelector('#metric-visitors').textContent = formatNumber(metrics.uniqueVisitors);
  document.querySelector('#metric-ctr').textContent = formatPercent(metrics.ctr);
  document.querySelector('#metric-clicks').textContent = formatNumber(metrics.clicks);
  document.querySelector('#metric-conversions').textContent = formatNumber(metrics.conversions);
  document.querySelector('#metric-sessions').textContent = formatNumber(metrics.viewingSessions);
  document.querySelector('#visitor-label').textContent = summary.visitorMetricLabel || '基于 IP + 浏览器特征估算';
  elements.identity.textContent = `已登录：${summary.identity && summary.identity.email ? summary.identity.email : '管理员'}`;
  elements.updated.textContent = `更新于 ${new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`;
  renderTrend(summary.trend || []);
}

function svgElement(name, attributes) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attributes || {}).forEach(([key, value]) => element.setAttribute(key, String(value)));
  return element;
}

function renderTrend(rows) {
  elements.chart.replaceChildren();
  if (!rows.length) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = '当前时间范围内暂无趋势数据';
    elements.chart.appendChild(empty);
    return;
  }

  const width = 1000;
  const height = 250;
  const padding = { left: 42, right: 14, top: 15, bottom: 32 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(1, ...rows.flatMap(row => [asNumber(row.pageViews), asNumber(row.clicks)]));
  const x = index => padding.left + (rows.length === 1 ? innerWidth / 2 : index * innerWidth / (rows.length - 1));
  const y = value => padding.top + innerHeight - asNumber(value) / maxValue * innerHeight;
  const svg = svgElement('svg', { class: 'trend-svg', viewBox: `0 0 ${width} ${height}`, role: 'img' });

  const defs = svgElement('defs');
  const gradient = svgElement('linearGradient', { id: 'trend-fill', x1: '0', y1: '0', x2: '0', y2: '1' });
  gradient.append(svgElement('stop', { offset: '0%', 'stop-color': '#42c4b7', 'stop-opacity': '.22' }));
  gradient.append(svgElement('stop', { offset: '100%', 'stop-color': '#42c4b7', 'stop-opacity': '0' }));
  defs.append(gradient);
  svg.append(defs);

  for (let index = 0; index <= 4; index += 1) {
    const gridY = padding.top + innerHeight * index / 4;
    svg.append(svgElement('line', { class: 'grid', x1: padding.left, x2: width - padding.right, y1: gridY, y2: gridY }));
    const label = svgElement('text', { x: padding.left - 9, y: gridY + 4, 'text-anchor': 'end' });
    label.textContent = formatNumber(Math.round(maxValue * (1 - index / 4)));
    svg.append(label);
  }

  const viewPoints = rows.map((row, index) => `${x(index)},${y(row.pageViews)}`).join(' ');
  const clickPoints = rows.map((row, index) => `${x(index)},${y(row.clicks)}`).join(' ');
  const areaPoints = `${padding.left},${padding.top + innerHeight} ${viewPoints} ${x(rows.length - 1)},${padding.top + innerHeight}`;
  svg.append(svgElement('polygon', { class: 'area', points: areaPoints }));
  svg.append(svgElement('polyline', { class: 'view-line', points: viewPoints }));
  svg.append(svgElement('polyline', { class: 'click-line', points: clickPoints }));

  const labelIndexes = new Set([0, Math.floor((rows.length - 1) / 2), rows.length - 1]);
  labelIndexes.forEach(index => {
    const label = svgElement('text', { x: x(index), y: height - 8, 'text-anchor': index === 0 ? 'start' : index === rows.length - 1 ? 'end' : 'middle' });
    label.textContent = String(rows[index].day || '');
    svg.append(label);
  });
  elements.chart.append(svg);
}

function renderPages(rows) {
  elements.pages.replaceChildren();
  if (!rows.length) {
    const row = document.createElement('tr');
    const cell = textCell('当前时间范围内暂无页面数据', 'empty');
    cell.colSpan = 7;
    row.append(cell);
    elements.pages.append(row);
    return;
  }

  rows.forEach(item => {
    const row = document.createElement('tr');
    const page = document.createElement('td');
    const path = document.createElement('span');
    path.className = 'path';
    path.textContent = item.pagePath || '/';
    page.append(path);
    if (item.pageTitle) {
      const title = document.createElement('span');
      title.className = 'page-title';
      title.textContent = item.pageTitle;
      page.append(title);
    }
    row.append(page);
    row.append(textCell(formatNumber(item.pageViews)));
    row.append(textCell(formatNumber(item.viewingSessions)));
    row.append(textCell(formatNumber(item.clickedSessions)));
    const ctr = document.createElement('td');
    const badge = document.createElement('span');
    badge.className = 'ctr-pill';
    badge.textContent = formatPercent(item.ctr);
    ctr.append(badge);
    row.append(ctr);
    row.append(textCell(formatNumber(item.clicks)));
    row.append(textCell(formatNumber(item.conversions)));
    elements.pages.append(row);
  });
}

function countryLabel(code) {
  if (!code || code === 'XX') return '未知地区';
  try { return `${countryNames ? countryNames.of(code) : code} · ${code}`; }
  catch { return code; }
}

function deviceLabel(value) {
  return { desktop: '桌面设备', mobile: '手机', tablet: '平板', other: '其他设备' }[value] || value;
}

function renderBars(containerId, rows, labelMapper) {
  const container = document.querySelector(`#${containerId}`);
  container.replaceChildren();
  if (!rows.length) {
    const empty = document.createElement('p');
    empty.className = 'bar-empty';
    empty.textContent = '暂无数据';
    container.append(empty);
    return;
  }
  const maximum = Math.max(1, ...rows.map(row => asNumber(row.count)));
  rows.slice(0, 8).forEach(row => {
    const item = document.createElement('div');
    item.className = 'bar-row';
    const label = document.createElement('span');
    label.className = 'bar-label';
    label.title = String(row.value || '');
    label.textContent = labelMapper ? labelMapper(row.value) : (row.value === '(direct)' ? '直接访问' : row.value || '未知');
    const value = document.createElement('span');
    value.className = 'bar-value';
    value.textContent = formatNumber(row.count);
    const track = document.createElement('span');
    track.className = 'bar-track';
    const fill = document.createElement('span');
    fill.className = 'bar-fill';
    fill.style.width = `${Math.max(2, asNumber(row.count) / maximum * 100)}%`;
    track.append(fill);
    item.append(label, value, track);
    container.append(item);
  });
}

function renderBreakdowns(data) {
  renderBars('referrers', data.referrers || []);
  renderBars('countries', data.countries || [], countryLabel);
  renderBars('devices', data.devices || [], deviceLabel);
  renderBars('targets', data.targets || []);
}

function openReveal(visitor, cell) {
  selectedVisitor = { visitor, cell };
  elements.revealReason.value = '';
  elements.revealError.hidden = true;
  elements.revealError.textContent = '';
  elements.dialog.showModal();
  elements.revealReason.focus();
}

function renderVisitors(rows) {
  elements.visitors.replaceChildren();
  if (!rows.length) {
    const row = document.createElement('tr');
    const cell = textCell('当前保留期内暂无访问记录', 'empty');
    cell.colSpan = 7;
    row.append(cell);
    elements.visitors.append(row);
    return;
  }

  rows.forEach(item => {
    const row = document.createElement('tr');
    const ipCell = textCell(item.maskedIp || '已掩码', 'ip-value');
    row.append(ipCell);
    row.append(textCell(countryLabel(item.countryCode)));
    row.append(textCell(item.userAgentSummary || '未知设备'));
    row.append(textCell(item.lastPagePath || '—'));
    row.append(textCell(formatNumber(item.eventCount)));
    row.append(textCell(formatDate(item.lastSeenAt)));
    const action = document.createElement('td');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'reveal-button';
    button.textContent = '查看完整 IP';
    button.addEventListener('click', () => openReveal(item, ipCell));
    action.append(button);
    row.append(action);
    elements.visitors.append(row);
  });
}

async function loadDashboard() {
  if (loading) return;
  loading = true;
  elements.refresh.disabled = true;
  setStatus('');
  const range = encodeURIComponent(elements.range.value);
  try {
    const [summary, pages, visitors, breakdowns] = await Promise.all([
      fetchJson(`/api/admin/summary?range=${range}`),
      fetchJson(`/api/admin/pages?range=${range}&limit=100`),
      fetchJson(`/api/admin/visitors?range=${range}&limit=100`),
      fetchJson(`/api/admin/breakdowns?range=${range}&limit=8`)
    ]);
    renderSummary(summary);
    renderPages(pages.rows || []);
    renderVisitors(visitors.rows || []);
    renderBreakdowns(breakdowns);
    if (summary.reportingMode === 'daily_aggregate') {
      setStatus('该时间范围使用匿名日汇总；估算访客为每日去重估算值之和，不代表跨日全局去重或真实自然人数。');
    }
  } catch (error) {
    setStatus(error instanceof Error ? error.message : '载入数据失败，请稍后重试。');
  } finally {
    loading = false;
    elements.refresh.disabled = false;
  }
}

elements.revealForm.addEventListener('submit', async event => {
  if (event.submitter && event.submitter.value === 'cancel') {
    selectedVisitor = null;
    return;
  }
  event.preventDefault();
  if (!selectedVisitor) return;
  const reason = elements.revealReason.value.trim();
  if (reason.length < 3) {
    elements.revealError.textContent = '请填写至少 3 个字的查看原因。';
    elements.revealError.hidden = false;
    return;
  }

  elements.revealConfirm.disabled = true;
  elements.revealError.hidden = true;
  try {
    const result = await fetchJson('/api/admin/visitors/reveal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitorId: selectedVisitor.visitor.visitorId, reason })
    });
    const { cell, visitor } = selectedVisitor;
    cell.textContent = result.ip;
    cell.title = '完整 IP 将在 30 秒后重新隐藏';
    elements.dialog.close();
    window.setTimeout(() => {
      cell.textContent = visitor.maskedIp || '已掩码';
      cell.removeAttribute('title');
    }, 30000);
    selectedVisitor = null;
  } catch (error) {
    elements.revealError.textContent = error instanceof Error ? error.message : '无法查看完整 IP。';
    elements.revealError.hidden = false;
  } finally {
    elements.revealConfirm.disabled = false;
  }
});

elements.range.addEventListener('change', loadDashboard);
elements.refresh.addEventListener('click', loadDashboard);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && Date.now() - Number(document.body.dataset.loadedAt || 0) > 300000) {
    document.body.dataset.loadedAt = String(Date.now());
    loadDashboard();
  }
});
document.body.dataset.loadedAt = String(Date.now());
loadDashboard();
