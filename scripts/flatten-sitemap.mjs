// Merge @astrojs/sitemap's chunk files (sitemap-0.xml, …) into a single
// dist/sitemap.xml — robots.txt and the SEO gates expect the sitemap at /sitemap.xml.
// The chunk files and sitemap-index.xml are left in place.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const chunks = readdirSync(dist)
  .filter((f) => /^sitemap-\d+\.xml$/.test(f))
  .sort();
if (chunks.length === 0) {
  console.error('flatten-sitemap: no sitemap-N.xml chunks in dist/ — did @astrojs/sitemap run?');
  process.exit(1);
}

const opening = readFileSync(new URL(chunks[0], dist), 'utf8').match(/<urlset[^>]*>/);
const urls = chunks.flatMap(
  (f) => readFileSync(new URL(f, dist), 'utf8').match(/<url>.*?<\/url>/gs) ?? []
);
writeFileSync(
  new URL('sitemap.xml', dist),
  `<?xml version="1.0" encoding="UTF-8"?>\n${opening[0]}${urls.join('')}</urlset>\n`
);
console.log(`flatten-sitemap: dist/sitemap.xml written — ${urls.length} URLs from ${chunks.length} chunk(s)`);
