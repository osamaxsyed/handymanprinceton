import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import data
const locations = JSON.parse(readFileSync(join(__dirname, '../src/data/locations.json'), 'utf8'));

const baseUrl = 'https://handymanprinceton.com';
// No lastmod: stamping every URL with the build date on each deploy teaches
// Google to distrust the sitemap. lastmod is optional; omit it entirely.

// Static pages (same set as EBH; no bath/kitchen/portfolio pages exist here).
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/handyman', priority: '0.9', changefreq: 'monthly' },
  { url: '/commercial-handyman', priority: '0.8', changefreq: 'monthly' },
  { url: '/property-managers', priority: '0.7', changefreq: 'monthly' },
  { url: '/carpentry', priority: '0.8', changefreq: 'monthly' },
  { url: '/doors', priority: '0.8', changefreq: 'monthly' },
  { url: '/tv-mounting', priority: '0.8', changefreq: 'monthly' },
  { url: '/deck-fence-repair', priority: '0.8', changefreq: 'monthly' },
  { url: '/tile-grout-caulk', priority: '0.8', changefreq: 'monthly' },
  { url: '/fixture-swaps', priority: '0.8', changefreq: 'monthly' },
  { url: '/painting-touch-ups', priority: '0.8', changefreq: 'monthly' },
  { url: '/home-maintenance', priority: '0.8', changefreq: 'monthly' },
  { url: '/drywall-repair', priority: '0.8', changefreq: 'monthly' },
  { url: '/storage-sheds', priority: '0.7', changefreq: 'monthly' },
  { url: '/grab-bar-installation', priority: '0.9', changefreq: 'monthly' },
  { url: '/shower-doors', priority: '0.8', changefreq: 'monthly' },
  { url: '/backsplash', priority: '0.8', changefreq: 'monthly' },
  { url: '/book', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/service-areas', priority: '0.9', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
];

// Generate location pages
const locationPages = locations.map(location => ({
  url: `/service-areas/${location.slug}`,
  priority: location.priority.toString(),
  changefreq: 'monthly'
}));

// Service-location pages: only the combos that were in the previous live
// sitemap (the ones that had earned impressions) are indexable; everything
// else ships noindex via prerender.js, so only these belong here.
const INDEXED_COMBOS = [
  'door-installation/west-windsor',
  'door-installation/princeton',
  'drywall-repair/robbinsville',
  'deck-staining/east-windsor',
  'deck-staining/princeton',
  'fence-repair/south-brunswick',
  'fence-repair/princeton',
];
const serviceLocationPages = INDEXED_COMBOS.map(path => ({
  url: `/${path}`,
  priority: '0.6',
  changefreq: 'monthly'
}));

// Combine all pages
const allPages = [...staticPages, ...locationPages, ...serviceLocationPages];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
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
