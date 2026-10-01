import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const locations = JSON.parse(readFileSync(join(__dirname, '../src/data/locations.json'), 'utf8'));
const services = JSON.parse(readFileSync(join(__dirname, '../src/data/services.json'), 'utf8'));

const distDir = join(__dirname, '../dist');
const indexHtmlPath = join(distDir, 'index.html');
const serverEntryPath = join(__dirname, '../dist-server/entry-server.js');
const SITE = 'https://handymanprinceton.com';
const BRAND = 'Princeton Handyman';

if (!existsSync(distDir)) {
  console.log('⚠️  dist directory not found. Run build first.');
  process.exit(1);
}
if (!existsSync(serverEntryPath)) {
  console.log('⚠️  dist-server/entry-server.js not found. Run "npm run build:ssr" first.');
  process.exit(1);
}

const { render } = await import(serverEntryPath);

const baseHtml = readFileSync(indexHtmlPath, 'utf8');

const ensureDir = (dir) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
};

// Schema.org priceRange must be a single tier — strip ranges to lower bound.
const normalizePriceRange = (raw) => {
  if (!raw) return '$$';
  const m = String(raw).match(/^(\$+)/);
  return m ? m[1] : '$$';
};

const renderJsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

const buildBreadcrumbList = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.item,
  })),
});

const buildServiceSchema = (service, location) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  name: `${service.name} in ${location.name}, ${location.state}`,
  description: service.description,
  provider: { '@id': `${SITE}/#business` },
  areaServed: {
    '@type': 'City',
    name: location.name,
    containedInPlace: { '@type': 'State', name: 'New Jersey' },
  },
  priceRange: normalizePriceRange(service.priceRange),
  url: `${SITE}/${service.slug}/${location.slug}`,
});

// NOTE: FAQPage schema is deliberately NOT emitted on service+location pages.
// The same FAQ set repeated across town URLs gets flagged as duplicate
// FAQPage markup in GSC. The FAQ content itself still renders in the page body.

const generateHtml = (title, description, url, extraSchemaBlocks = [], bodyHtml = '') => {
  const canonical = `${SITE}${url || ''}`;
  let html = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${description}"`)
    .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${canonical}"`)
    .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${canonical}"`)
    .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${title}"`)
    .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${description}"`)
    .replace(/<meta name="twitter:url" content=".*?"/, `<meta name="twitter:url" content="${canonical}"`)
    .replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${title}"`)
    .replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${description}"`);

  if (extraSchemaBlocks.length > 0) {
    const blocks = extraSchemaBlocks.map(renderJsonLd).join('\n    ');
    html = html.replace('</head>', `    ${blocks}\n  </head>`);
  }

  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', () => `<div id="root">${bodyHtml}</div>`);
  }

  return html;
};

// Rotate meta description phrasing so the service+location pages do not
// share a single stamped formula. Index by (service, location) so each page
// gets a stable variant across builds.
const serviceLocationDescription = (service, location, variant) => {
  const svc = service.name;
  const svcLower = svc.toLowerCase();
  const city = location.name;
  const templates = [
    `${svc} for ${city}, NJ homes at one flat price. $345 visit covers up to 2 hours, fixed before we start. NJ HIC #13VH13918800. Call or text (609) 375-0098.`,
    `Looking for ${svcLower} in ${city}, NJ? Flat-rate visits from $345, settled before the truck arrives. Licensed, bonded, insured, NJ HIC #13VH13918800.`,
    `${city} ${svcLower} from a registered NJ contractor. $345 visit, $595 half day, $1,095 full day. One-year labor warranty, materials quoted up front.`,
    `${svcLower.charAt(0).toUpperCase() + svcLower.slice(1)} in ${city}, NJ with no hourly meter. Price agreed first. NJ HIC #13VH13918800. Text a photo to (609) 375-0098.`,
  ];
  return templates[variant % templates.length];
};

const serviceLocationTitle = (service, location, variant) => {
  const templates = [
    `${service.name} in ${location.name}, NJ | ${BRAND}`,
    `${service.name} ${location.name} NJ | Flat-Rate, Licensed`,
    `${location.name} ${service.name} | Registered NJ Contractor`,
  ];
  return templates[variant % templates.length];
};

const renderRoute = (url) => {
  try {
    return render(url);
  } catch (err) {
    console.error(`✗ SSR failed for ${url}: ${err.message}`);
    throw err;
  }
};

// Combo-page indexing allowlist: the combos that were in the previous live
// sitemap stay indexable. Every other service+location page ships
// noindex,follow. Reversible; revisit after 6 weeks of GSC data.
const INDEXED_COMBOS = new Set([
  'door-installation/west-windsor',
  'door-installation/princeton',
  'drywall-repair/robbinsville',
  'deck-staining/east-windsor',
  'deck-staining/princeton',
  'fence-repair/south-brunswick',
  'fence-repair/princeton',
]);
const NOINDEX_STANDALONES = new Set([]);
const addNoindex = (html) =>
  html.replace('</title>', '</title>\n    <meta name="robots" content="noindex, follow" />');

let generatedCount = 0;

// Service × location pages
services.forEach((service, si) => {
  locations.forEach((location, li) => {
    const url = `/${service.slug}/${location.slug}`;
    const title = serviceLocationTitle(service, location, si + li);
    const description = serviceLocationDescription(service, location, si * 3 + li);

    const breadcrumb = buildBreadcrumbList([
      { name: 'Home', item: SITE },
      { name: 'Service Areas', item: `${SITE}/service-areas` },
      { name: location.name, item: `${SITE}/service-areas/${location.slug}` },
      { name: service.name, item: `${SITE}${url}` },
    ]);
    const serviceSchema = buildServiceSchema(service, location);

    let html = generateHtml(title, description, url, [breadcrumb, serviceSchema], renderRoute(url));
    if (!INDEXED_COMBOS.has(`${service.slug}/${location.slug}`)) html = addNoindex(html);
    const pageDir = join(distDir, service.slug, location.slug);
    ensureDir(pageDir);
    writeFileSync(join(pageDir, 'index.html'), html, 'utf8');
    generatedCount++;
  });
});

// Location pages
locations.forEach((location, li) => {
  const url = `/service-areas/${location.slug}`;
  const titles = [
    `Flat-Rate Handyman in ${location.name}, NJ | ${BRAND}`,
    `${location.name} NJ Handyman | Doors, Drywall, Decks, Mounting`,
    `Handyman Services ${location.name} NJ | $345 Visit, Licensed & Insured`,
  ];
  const descriptions = [
    `Doors, drywall, TV mounting, decks, trim, and the small-repair list in ${location.name}, NJ. $345 flat-rate visit, price fixed up front. NJ HIC #13VH13918800.`,
    `Your ${location.name} handyman for repairs, carpentry, mounting, and the to-do list. Flat prices, our own crew, no hourly meter. Call (609) 375-0098.`,
    `Home repairs for ${location.name} homeowners at one agreed price. Registered and insured, NJ HIC #13VH13918800. Nothing starts until the number is settled.`,
  ];
  const title = titles[li % titles.length];
  const description = descriptions[li % descriptions.length];

  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', item: SITE },
    { name: 'Service Areas', item: `${SITE}/service-areas` },
    { name: location.name, item: `${SITE}${url}` },
  ]);

  const html = generateHtml(title, description, url, [breadcrumb], renderRoute(url));
  const pageDir = join(distDir, 'service-areas', location.slug);
  ensureDir(pageDir);
  writeFileSync(join(pageDir, 'index.html'), html, 'utf8');
  generatedCount++;
});

// Service Areas hub
const serviceAreasBreadcrumb = buildBreadcrumbList([
  { name: 'Home', item: SITE },
  { name: 'Service Areas', item: `${SITE}/service-areas` },
]);
const serviceAreasHtml = generateHtml(
  `Towns We Serve | ${BRAND} - Princeton & Mercer County NJ`,
  'Flat-rate handyman for Princeton, West Windsor, Plainsboro, Lawrence Township, Montgomery, Pennington, and the towns around them. $345 visit, price fixed before we start.',
  '/service-areas',
  [serviceAreasBreadcrumb],
  renderRoute('/service-areas'),
);
const serviceAreasDir = join(distDir, 'service-areas');
ensureDir(serviceAreasDir);
writeFileSync(join(serviceAreasDir, 'index.html'), serviceAreasHtml, 'utf8');
generatedCount++;

// Standalone pages (prerender each at /<slug>/index.html). Covers every
// non-dynamic route in src/App.tsx so each URL ships unique <head> tags, a
// self-referencing canonical, and real server-rendered body content.
const standalonePages = [
  {
    slug: 'handyman',
    title: 'Handyman Services in Princeton NJ | $345 Flat-Rate Visit, No Hourly Meter',
    description:
      'A $345 visit covers up to two hours of repairs: doors, drywall, fixtures, mounts, the whole list. Princeton, West Windsor, Plainsboro, Lawrence, Montgomery. NJ HIC #13VH13918800.',
  },
  {
    slug: 'doors',
    title: 'Door Repair & Replacement in Princeton NJ | Locks, Storm Doors, Flat Rate',
    description:
      'Interior and exterior doors replaced in the same opening, sticking doors adjusted, storm doors, deadbolts and keypad locks. $345 flat-rate visits in Princeton, West Windsor, Plainsboro, Lawrence. NJ HIC #13VH13918800.',
  },
  {
    slug: 'tv-mounting',
    title: 'TV Mounting & Furniture Assembly in Princeton NJ | $345 Flat-Rate Visit',
    description:
      'TV mounting into studs or masonry, cable concealment, IKEA and flat-pack assembly, grills, shelving, mirrors, blinds and curtain rods. One flat price in Princeton, West Windsor, Plainsboro and Mercer County NJ.',
  },
  {
    slug: 'deck-fence-repair',
    title: 'Deck & Fence Repair in Princeton NJ | Boards, Railings, Posts, Gates, Stain',
    description:
      'Deck board replacement, railing and stair fixes, cleaning and staining, fence post resets, panel and gate repair. Written price up front in Princeton, West Windsor, Lawrence, Plainsboro NJ. NJ HIC #13VH13918800.',
  },
  {
    slug: 'tile-grout-caulk',
    title: 'Tile Repair, Regrouting & Caulking in Princeton NJ | No-Demo Bathroom Fixes',
    description:
      'Showers and tubs regrouted and recaulked, cracked tiles replaced, grab bars anchored, shower doors installed. Flat-rate bathroom fixes without demolition in Princeton, West Windsor, Lawrence and Mercer County NJ. NJ HIC #13VH13918800.',
  },
  {
    slug: 'fixture-swaps',
    title: 'Faucet, Toilet & Light Fixture Replacement in Princeton NJ | Flat-Rate Handyman',
    description:
      'Like-for-like swaps of faucets, toilets, vanities, light fixtures, ceiling fans, switches and outlets. Ordinary maintenance under NJ code, no permit. $345 visits in Princeton, West Windsor, Plainsboro, Lawrence NJ. NJ HIC #13VH13918800.',
  },
  {
    slug: 'painting-touch-ups',
    title: 'Painting Touch-Ups & Small Room Painting in Princeton NJ | Flat-Rate Handyman',
    description:
      'Touch-ups after drywall repair, trim and door painting, powder rooms, hallways and single bedrooms. Flat pricing in Princeton, West Windsor, Lawrence, Montgomery and Mercer County NJ. NJ HIC #13VH13918800.',
  },
  {
    slug: 'home-maintenance',
    title: 'Home Maintenance Handyman in Princeton NJ | Dryer Vents, Screens, Squeaks, Drafts',
    description:
      'Dryer vent cleaning, weatherstripping, screen repair, attic ladders, floor squeaks, smoke detectors, mailboxes, and the seasonal list. Flat-rate visits in Princeton, West Windsor, Plainsboro, Lawrence and Mercer County NJ.',
  },
  {
    slug: 'commercial-handyman',
    title: 'Commercial Handyman in Princeton & Mercer County NJ | Offices, Medical Suites',
    description:
      'Punch lists, drywall, doors, and fixture swaps for offices, medical practices, and small retail around Princeton and Route 1. Evenings and weekends available. NJ HIC #13VH13918800.',
  },
  {
    slug: 'book',
    title: 'Request a Handyman Visit in Princeton NJ | Flat-Rate, Reply by Text',
    description:
      'Choose a flat-rate block, send your list, and tell us which days work. We text you a time, usually the same business day. Princeton, West Windsor, Plainsboro, Lawrence and Mercer County.',
  },
  {
    slug: 'property-managers',
    title: 'Handyman for Property Managers in Princeton & Mercer County NJ | Turnovers',
    description:
      'Standing punch-list accounts, unit turnovers, and tenant scheduling for property managers around Princeton, Plainsboro, and Lawrence. One vendor, photo reports, COI on file.',
  },
  {
    slug: 'carpentry',
    title: 'Small-Job Carpenter in Princeton NJ | Trim, Shelving, Railings, Rot Repair',
    description:
      'The carpenter who takes the small jobs: casing, baseboard, built-in shelving, loose railings, rotted trim, doors. Princeton, West Windsor, Lawrence, Montgomery NJ. NJ HIC #13VH13918800.',
  },
  {
    slug: 'drywall-repair',
    title: 'Drywall & Plaster Repair in Princeton NJ | Patches That Disappear',
    description:
      'Holes, cracks, water damage, ceilings, and plaster in older homes, taped and blended so the repair vanishes under paint. Princeton, West Windsor, Plainsboro, Lawrence NJ. NJ HIC #13VH13918800.',
  },
  {
    slug: 'storage-sheds',
    title: 'Storage Shed Assembly & Repair in Princeton NJ | Level Base, Doors That Close',
    description:
      'Prefab shed assembly, gravel or paver base prep, and shed repairs in Princeton, Montgomery, West Windsor, and Mercer County NJ. One written price. NJ HIC #13VH13918800.',
  },
  {
    slug: 'grab-bar-installation',
    title: 'Grab Bar Installation in Princeton NJ | Into Studs, Usually One Visit',
    description:
      'Grab bars anchored into framing or rated backing for showers, tubs, and toilets, plus handheld shower heads and raised seats. Princeton, Plainsboro, West Windsor, Lawrence NJ. NJ HIC #13VH13918800.',
  },
  {
    slug: 'shower-doors',
    title: 'Shower Door Installation in Princeton NJ | Measured First, Sealed Clean',
    description:
      'Framed, semi-frameless, and frameless shower doors measured, hung, and sealed. Princeton, West Windsor, Plainsboro, Lawrence Township, and Montgomery NJ.',
  },
  {
    slug: 'backsplash',
    title: 'Backsplash Installation in Princeton NJ | One to Two Days of Tile Work',
    description:
      'Kitchen and bath backsplash tile set straight: layout, outlet cuts, grout, sealed edges. Princeton, West Windsor, Plainsboro, Montgomery NJ. Registered and insured contractor.',
  },
  {
    slug: 'about',
    title: 'About Princeton Handyman | Central Jersey Home Services LLC',
    description:
      'Princeton Handyman is run by Osama Syed under Central Jersey Home Services LLC, a registered, bonded, and insured NJ contractor. Flat-rate small-job repairs for Princeton and Mercer County. NJ HIC #13VH13918800.',
  },
  {
    slug: 'faq',
    title: 'FAQ | Princeton Handyman Pricing, Scheduling & Service Area',
    description:
      'Straight answers on flat-rate pricing, deposits, warranty, which towns we cover, and what happens on the day. Princeton Handyman, Mercer County NJ.',
  },
  {
    slug: 'careers',
    title: 'Handyman Jobs Princeton NJ | $34-40/hr W-2 Flexible | Princeton Handyman',
    description:
      'Hiring one handyman technician for Princeton, Mercer County, and our Middlesex County routes. $34–40/hr W-2, flexible 1–3 days/week, weekly bonuses. Text HANDY to (609) 375-0098.',
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy | Princeton Handyman',
    description:
      'How Princeton Handyman collects, uses, and protects the information you share with us, including your phone number and text-message consent.',
  },
  {
    slug: 'terms',
    title: 'Terms of Service | Princeton Handyman',
    description:
      'The terms that apply to Princeton Handyman repair services in Princeton and Mercer County NJ: pricing, deposits, warranty, and text messaging.',
  },
  {
    slug: 'sitemap',
    title: 'Sitemap | Princeton Handyman',
    description:
      'Every page on the Princeton Handyman site: services, towns served, booking, and company information.',
  },
];

standalonePages.forEach((page) => {
  const url = `/${page.slug}`;
  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', item: SITE },
    { name: page.title.split(' | ')[0], item: `${SITE}${url}` },
  ]);
  let html = generateHtml(page.title, page.description, url, [breadcrumb], renderRoute(url));
  if (NOINDEX_STANDALONES.has(page.slug)) html = addNoindex(html);
  const pageDir = join(distDir, page.slug);
  ensureDir(pageDir);
  writeFileSync(join(pageDir, 'index.html'), html, 'utf8');
  generatedCount++;
});

// Homepage: keep its existing head, inject the server-rendered body.
const homeHtml = baseHtml.replace('<div id="root"></div>', () => `<div id="root">${renderRoute('/')}</div>`);
writeFileSync(indexHtmlPath, homeHtml, 'utf8');
generatedCount++;

// 404 page: real NotFound content, no canonical (it is not a canonical page),
// noindex so stray crawled 404s never enter the index. Vercel serves 404.html
// with HTTP 404 for unknown paths once the SPA catch-all rewrite is gone.
let notFoundHtml = generateHtml(
  `Page Not Found | ${BRAND}`,
  'That page is not here. Browse our services or text a photo of your job.',
  '/404',
  [],
  renderRoute('/__page_not_found__'),
);
notFoundHtml = notFoundHtml
  .replace(/\s*<link rel="canonical"[^>]*>/, '')
  .replace('</title>', '</title>\n    <meta name="robots" content="noindex" />');
writeFileSync(join(distDir, '404.html'), notFoundHtml, 'utf8');
generatedCount++;

console.log(`✅ Prerendering completed!`);
console.log(`📄 Generated ${generatedCount} HTML files (with server-rendered bodies)`);
console.log(`   - Service-location pages: ${services.length * locations.length}`);
console.log(`   - Location pages: ${locations.length}`);
console.log(`   - Hub pages: 1`);
console.log(`   - Standalone pages: ${standalonePages.length}`);
console.log(`   - Homepage + 404: 2`);
