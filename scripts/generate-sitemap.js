import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import data
const locations = JSON.parse(readFileSync(join(__dirname, '../src/data/locations.json'), 'utf8'));
const services = JSON.parse(readFileSync(join(__dirname, '../src/data/services.json'), 'utf8'));

const baseUrl = 'https://handymanprinceton.com';
const currentDate = new Date().toISOString().split('T')[0];

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/handyman-services', priority: '0.9', changefreq: 'monthly' },
  { url: '/remodels', priority: '0.9', changefreq: 'monthly' },
  { url: '/get-estimate', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/book-repair', priority: '0.8', changefreq: 'monthly' },
  { url: '/bathroom-remodel', priority: '0.9', changefreq: 'monthly' },
  { url: '/bathroom-remodel-calculator', priority: '0.9', changefreq: 'monthly' },
  { url: '/bathroom-refresh', priority: '0.8', changefreq: 'monthly' },
  { url: '/pergolas', priority: '0.9', changefreq: 'monthly' },
  { url: '/custom-sheds', priority: '0.9', changefreq: 'monthly' },
  { url: '/backyard-studios', priority: '0.9', changefreq: 'monthly' },
  { url: '/service-areas', priority: '0.9', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
];

// Generate location pages
const locationPages = locations.map(location => ({
  url: `/service-areas/${location.slug}`,
  priority: location.priority.toString(),
  changefreq: 'monthly'
}));

// Generate service-location pages
const serviceLocationPages = [];
services.forEach(service => {
  locations.forEach(location => {
    serviceLocationPages.push({
      url: `/${service.slug}/${location.slug}`,
      priority: ((service.priority + location.priority) / 2).toFixed(1),
      changefreq: 'monthly'
    });
  });
});

// Combine all pages
const allPages = [...staticPages, ...locationPages, ...serviceLocationPages];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
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
