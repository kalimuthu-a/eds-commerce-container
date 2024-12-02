export function getLang() {
  return document.documentElement.lang;
}

export function getPlaceholderDataFor(key) {
  const lang = getLang();
  return window.placeholders?.[lang]?.[key] || window.placeholders?.default?.[key];
}