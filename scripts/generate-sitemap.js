import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { staticPages, locationPages, serviceLocationPages, allPages } from './sitemap-pages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = 'https://handymanprinceton.com';
// lastmod comes from the committed manifest (npm run lastmod), never the build
// date: stamping every URL with the deploy time teaches Google to distrust the
// sitemap. URLs missing from the manifest use its fixed fallback date.
const lastmod = JSON.parse(readFileSync(join(__dirname, '../src/data/lastmod.json'), 'utf8'));

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod.pages[page.url] ?? lastmod.fallback}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public folder
const outputPath = join(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf8');

console.log(`✅ Sitemap generated successfully!`);
console.log(`📊 Total URLs: ${allPages.length}`);
console.log(`   - Static pages: ${staticPages.length}`);
console.log(`   - Location pages: ${locationPages.length}`);
console.log(`   - Service-location pages: ${serviceLocationPages.length}`);
console.log(`📝 Sitemap saved to: ${outputPath}`);
