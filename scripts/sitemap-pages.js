// Single list of sitemap URLs, shared by generate-sitemap.js (build) and
// gen-lastmod.mjs (manual, needs full git history). `entry` is the page's own
// route component; gen-lastmod follows its local imports (minus shared chrome)
// to find the content/data files whose git dates become that URL's lastmod.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const locations = JSON.parse(readFileSync(join(__dirname, '../src/data/locations.json'), 'utf8'));

const P = (name) => `src/pages/${name}.tsx`;

// Static pages (same set as EBH; no bath/kitchen/portfolio pages exist here).
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly', entry: P('Index') },
  { url: '/handyman', priority: '0.9', changefreq: 'monthly', entry: P('Handyman') },
  { url: '/commercial-handyman', priority: '0.8', changefreq: 'monthly', entry: P('CommercialHandyman') },
  { url: '/property-managers', priority: '0.7', changefreq: 'monthly', entry: P('PropertyManagers') },
  { url: '/carpentry', priority: '0.8', changefreq: 'monthly', entry: P('Carpentry') },
  { url: '/doors', priority: '0.8', changefreq: 'monthly', entry: P('CoreServicePage') },
  { url: '/tv-mounting', priority: '0.8', changefreq: 'monthly', entry: P('CoreServicePage') },
  { url: '/deck-fence-repair', priority: '0.8', changefreq: 'monthly', entry: P('CoreServicePage') },
  { url: '/tile-grout-caulk', priority: '0.8', changefreq: 'monthly', entry: P('CoreServicePage') },
  { url: '/fixture-swaps', priority: '0.8', changefreq: 'monthly', entry: P('CoreServicePage') },
  { url: '/painting-touch-ups', priority: '0.8', changefreq: 'monthly', entry: P('CoreServicePage') },
  { url: '/home-maintenance', priority: '0.8', changefreq: 'monthly', entry: P('CoreServicePage') },
  { url: '/drywall-repair', priority: '0.8', changefreq: 'monthly', entry: P('DrywallRepair') },
  { url: '/storage-sheds', priority: '0.7', changefreq: 'monthly', entry: P('StorageSheds') },
  { url: '/grab-bar-installation', priority: '0.9', changefreq: 'monthly', entry: P('GrabBarInstallation') },
  { url: '/shower-doors', priority: '0.8', changefreq: 'monthly', entry: P('ShowerDoors') },
  { url: '/backsplash', priority: '0.8', changefreq: 'monthly', entry: P('Backsplash') },
  { url: '/book', priority: '0.9', changefreq: 'monthly', entry: P('Book') },
  { url: '/about', priority: '0.7', changefreq: 'monthly', entry: P('AboutPage') },
  { url: '/faq', priority: '0.7', changefreq: 'monthly', entry: P('FAQPage') },
  { url: '/service-areas', priority: '0.9', changefreq: 'monthly', entry: P('ServiceAreasPage') },
  { url: '/careers', priority: '0.6', changefreq: 'monthly', entry: P('Careers') },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly', entry: P('PrivacyPolicy') },
  { url: '/terms', priority: '0.3', changefreq: 'yearly', entry: P('TermsOfService') },
];

// Generate location pages
const locationPages = locations.map(location => ({
  url: `/service-areas/${location.slug}`,
  priority: location.priority.toString(),
  changefreq: 'monthly',
  entry: P('LocationPage'),
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
  changefreq: 'monthly',
  entry: P('ServiceLocationPage'),
}));

export { staticPages, locationPages, serviceLocationPages };
export const allPages = [...staticPages, ...locationPages, ...serviceLocationPages];
