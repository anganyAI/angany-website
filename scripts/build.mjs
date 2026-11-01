import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const output = join(root, 'dist');

export async function build() {
  // Cache bust source modules so the dependency-free dev server can rebuild copy.
  const revision = Date.now();
  const [{ default: fr }, { default: en }, { render }] = await Promise.all([
    import(`../src/content/fr.js?v=${revision}`),
    import(`../src/content/en.js?v=${revision}`),
    import(`../src/template.js?v=${revision}`),
  ]);
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(join(root, 'assets'), join(output, 'assets'), { recursive: true });
  const routes = [];
  for (const content of [fr, en]) {
    for (const page of ['home', 'privacy']) {
      const route = page === 'home' ? content.path : content.privacyPath;
      const directory = join(output, route);
      await mkdir(directory, { recursive: true });
      await writeFile(join(directory, 'index.html'), render(content, page));
      routes.push(route);
    }
  }
  await writeFile(join(output, '404.html'), render(fr, '404'));
  await writeFile(join(output, 'en/404.html'), render(en, '404'));
  await writeFile(join(output, 'CNAME'), 'angany.ai\n');
  await writeFile(join(output, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: https://angany.ai/sitemap.xml\n');
  await writeFile(join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>https://angany.ai${route}</loc></url>`).join('')}</urlset>\n`);
  console.log(`Built ${routes.length} pages + 2 localized 404 pages → dist/`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
