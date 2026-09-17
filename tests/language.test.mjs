import test from 'node:test';
import assert from 'node:assert/strict';

// These cases catch losing the lesson or deployment prefix when changing language.
test('language links preserve the lesson under the GitHub Pages prefix', async () => {
  const { languageHref } = await import('../src/lib/language.mjs');
  assert.equal(languageHref('/git-guide/commits/', 'pt-pt', '/git-guide/'), '/git-guide/pt-pt/commits/');
  assert.equal(languageHref('/git-guide/pt-pt/commits/', 'en', '/git-guide/'), '/git-guide/commits/');
  assert.equal(languageHref('/git-guide/pt-pt/commits/', 'pt-pt', '/git-guide/'), '/git-guide/pt-pt/commits/');
});

test('homepages and root deployments have valid language counterparts', async () => {
  const { languageHref } = await import('../src/lib/language.mjs');
  assert.equal(languageHref('/git-guide/', 'pt-pt', '/git-guide'), '/git-guide/pt-pt/');
  assert.equal(languageHref('/git-guide/pt-pt/', 'en', '/git-guide'), '/git-guide/');
  assert.equal(languageHref('/git-guide/pt-pt/404/', 'en', '/git-guide'), '/git-guide/');
  assert.equal(languageHref('/git-guide/404/', 'pt-pt', '/git-guide'), '/git-guide/pt-pt/');
  assert.equal(languageHref('/branches/', 'pt-pt', '/'), '/pt-pt/branches/');
  assert.equal(languageHref('/pt-pt/branches/', 'en', '/'), '/branches/');
});

test('the static 404 page links to real homepages instead of nonexistent translations', async () => {
  const { languageHref } = await import('../src/lib/language.mjs');
  assert.equal(languageHref('/git-guide/404/', 'pt-pt', '/git-guide/'), '/git-guide/pt-pt/');
  assert.equal(languageHref('/git-guide/404.html', 'en', '/git-guide/'), '/git-guide/');
});
