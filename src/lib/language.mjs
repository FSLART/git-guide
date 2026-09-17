/** Build a counterpart link from the site pathname, keeping the deployment base. */
export function languageHref(pathname, language, base = '/') {
  const normalizedBase = base.replace(/\/+$/, '') || '/';
  const resolvedPath = pathname.startsWith('http') ? new URL(pathname).pathname : pathname;
  const trimmed = resolvedPath.replace(/\/+$/, '') || '/';
  const relative = trimmed.startsWith(normalizedBase === '/' ? '/' : normalizedBase)
    ? trimmed.slice(normalizedBase === '/' ? 0 : normalizedBase.length).replace(/^\//, '')
    : trimmed.replace(/^\//, '');

  const lesson = relative
    .replace(/^pt-pt(?:\/|$)/, '')
    .replace(/^404(?:\/|\.html)?$/, '')
    .replace(/\/+$/, '')
    .replace(/^\/+/, '');

  const localePrefix = language === 'pt-pt' ? 'pt-pt/' : '';
  const suffix = lesson ? `${lesson}/` : '';

  return normalizedBase === '/'
    ? `/${localePrefix}${suffix}`.replace(/\/+/g, '/')
    : `${normalizedBase}/${localePrefix}${suffix}`.replace(/\/+/g, '/');
}
