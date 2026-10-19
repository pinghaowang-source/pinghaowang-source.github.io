export const LANGUAGES = [
  ['en', 'English'], ['zh-Hans', '简体中文'], ['zh-Hant', '繁體中文'],
  ['ja', '日本語'], ['ko', '한국어'], ['ms', 'Bahasa Melayu'],
  ['id', 'Bahasa Indonesia'], ['th', 'ไทย'], ['vi', 'Tiếng Việt'],
  ['fil', 'Filipino'], ['km', 'ភាសាខ្មែរ'], ['lo', 'ລາວ'],
  ['my', 'မြန်မာ'], ['ta', 'தமிழ்'], ['tet', 'Tetun'], ['pt', 'Português'],
];

export const SUPPORTED = new Set(LANGUAGES.map(([locale]) => locale));

export function matchLocale(value) {
  if (typeof value !== 'string') return null;
  const raw = value.trim().toLowerCase().replaceAll('_', '-');
  if (/^zh(?:-|$)/.test(raw)) {
    if (/(?:^|-)hant(?:-|$)/.test(raw)) return 'zh-Hant';
    if (/(?:^|-)hans(?:-|$)/.test(raw)) return 'zh-Hans';
    return /(?:^|-)(?:tw|hk|mo)(?:-|$)/.test(raw) ? 'zh-Hant' : 'zh-Hans';
  }
  const language = raw.split('-')[0];
  const locale = ({ tl: 'fil', in: 'id', bur: 'my', kh: 'km' })[language] || language;
  return SUPPORTED.has(locale) ? locale : null;
}

export function browserLocale(languages = []) {
  return languages.map(matchLocale).find(Boolean) || 'en';
}

const countryLanguages = {
  CN: ['zh-Hans', 'zh-Hant'], TW: ['zh-Hant', 'zh-Hans'], HK: ['zh-Hant', 'en', 'zh-Hans'], MO: ['zh-Hant', 'pt', 'zh-Hans'],
  JP: ['ja'], KR: ['ko'], KP: ['ko'],
  PT: ['pt'], BR: ['pt'], AO: ['pt'], MZ: ['pt'], CV: ['pt'], GW: ['pt'], ST: ['pt'],
  SG: ['en', 'zh-Hans', 'zh-Hant', 'ms', 'ta'],
  MY: ['ms', 'en', 'zh-Hans', 'zh-Hant', 'ta'], BN: ['ms', 'en'],
  ID: ['id'], TH: ['th'], VN: ['vi'], PH: ['fil', 'en'],
  KH: ['km'], LA: ['lo'], MM: ['my'], TL: ['tet', 'pt', 'en'],
};

export function countryLocale(country, languages = []) {
  const choices = countryLanguages[String(country || '').toUpperCase()];
  if (!choices) return browserLocale(languages);
  const matching = languages.map(matchLocale).find(locale => choices.includes(locale));
  return matching || choices[0];
}

export function validPreference(value) {
  return typeof value === 'string' && value.trim().toLowerCase() === 'auto' ? 'auto' : matchLocale(value);
}
