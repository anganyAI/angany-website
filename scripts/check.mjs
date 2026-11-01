import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { output } from './build.mjs';
import fr from '../src/content/fr.js';
import en from '../src/content/en.js';

const errors = [];
function compare(a, b, path = 'content') {
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) { errors.push(`Translation shape differs at ${path}`); return; }
  if (a && typeof a === 'object') {
    for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!(key in a) || !(key in b)) errors.push(`Missing translation: ${path}.${key}`);
      else compare(a[key], b[key], `${path}.${key}`);
    }
  }
}
compare(fr, en);
for (const file of ['assets/main.js', 'src/template.js', 'scripts/build.mjs', 'scripts/dev.mjs']) execFileSync(process.execPath, ['--check', file]);
for (const route of ['/', '/en/', '/confidentialite/', '/en/privacy/', '/404.html', '/en/404.html']) {
  const file = join(output, route.endsWith('.html') ? route : route + 'index.html');
  const html = await readFile(file, 'utf8');
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${route}: expected one h1`);
  if (/href=["']#["']/.test(html)) errors.push(`${route}: empty link`);
  if (/lorem ipsum|your headline|\{\{.+\}\}/i.test(html)) errors.push(`${route}: placeholder content`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  if (new Set(ids).size !== ids.length) errors.push(`${route}: duplicate IDs`);
  for (const [, link] of html.matchAll(/(?:href|src)="([^" ]+)"/g)) {
    if (!link.startsWith('/') && !link.startsWith('#')) continue;
    const [path, fragment] = link.split('#');
    if (!path) { if (fragment && !ids.includes(fragment)) errors.push(`${route}: missing #${fragment}`); continue; }
    const target = join(output, path.endsWith('/') ? path + 'index.html' : path);
    try {
      await stat(target);
      if (fragment && target.endsWith('.html') && !(await readFile(target, 'utf8')).includes(`id="${fragment}"`)) errors.push(`${route}: missing anchor ${link}`);
    } catch { errors.push(`${route}: missing local destination ${link}`); }
  }
}
const css = await readFile('assets/styles.css', 'utf8');
for (const [, asset] of css.matchAll(/url\(['"]?(\/[^)'" ]+)['"]?\)/g)) {
  try { await stat(join(output, asset)); } catch { errors.push(`Missing CSS asset ${asset}`); }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log('OK: translations, JavaScript syntax, HTML structure, local links, anchors and assets.');
