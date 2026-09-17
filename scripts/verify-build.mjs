import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const BASE = '/git-guide/';
const ORIGIN = 'https://joao-sintra.github.io';
const output = path.resolve('dist');
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? walk(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}

const files = await walk(output);
const pages = files.filter(file => file.endsWith('.html'));
assert.ok(pages.length >= 24, 'Build must contain the home and eleven lessons in both languages.');

for (const file of pages) {
  const relative = path.relative(output, file).split(path.sep).join('/');
  const current = new URL(BASE + relative.replace(/index\.html$/, ''), ORIGIN);
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:data:|mailto:|tel:|javascript:)/.test(value)) continue;
    const target = new URL(value, current);
    if (target.origin !== ORIGIN) continue;
    if (!target.pathname.startsWith(BASE)) {
      errors.push(`${relative}: link escapes the deployment base: ${value}`);
      continue;
    }
    const destination = decodeURIComponent(target.pathname.slice(BASE.length));
    const diskPath = path.join(output, destination.endsWith('/') || !destination ? `${destination}index.html` : destination);
    try {
      await access(diskPath);
      if (target.hash && diskPath.endsWith('.html')) {
        const linkedHTML = diskPath === file ? html : await readFile(diskPath, 'utf8');
        const id = decodeURIComponent(target.hash.slice(1));
        if (!linkedHTML.includes(`id="${id}"`)) errors.push(`${relative}: missing anchor ${value}`);
      }
    } catch {
      errors.push(`${relative}: missing local target ${value}`);
    }
  }
}

const lessons = (await readdir('src/content/docs')).filter(file => /\.mdx?$/.test(file) && file !== '404.md');
for (const lesson of lessons) {
  await access(`src/content/docs/pt-pt/${lesson}`);
  const slug = lesson.replace(/\.mdx?$/, '');
  const suffix = slug === 'index' ? '' : `${slug}/`;
  for (const [prefix, other, lang] of [['', 'pt-pt/', 'en'], ['pt-pt/', '', 'pt-PT']]) {
    const html = await readFile(path.join(output, prefix, suffix, 'index.html'), 'utf8');
    assert.ok(html.includes(`lang="${lang}"`), `${prefix}${slug}: wrong document language`);
    assert.ok(html.includes(`href="${BASE}${other}${suffix}"`), `${prefix}${slug}: counterpart link missing`);
    assert.ok(!html.includes('This content is not available in your language'), `${prefix}${slug}: untranslated fallback`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${pages.length} HTML pages, all local links/assets, and ${lessons.length} translated page pairs.`);
}
