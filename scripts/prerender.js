import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const locations = JSON.parse(readFileSync(join(__dirname, '../src/data/locations.json'), 'utf8'));
const services = JSON.parse(readFileSync(join(__dirname, '../src/data/services.json'), 'utf8'));

const distDir = join(__dirname, '../dist');
const indexHtmlPath = join(distDir, 'index.html');
const SITE = 'https://handymanprinceton.com';

if (!existsSync(distDir)) {
  console.log('⚠️  dist directory not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = readFileSync(indexHtmlPath, 'utf8');

const ensureDir = (dir) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
};

// Schema.org priceRange must be a single tier; strip ranges to lower bound.
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

const buildFaqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

// Generate per-page HTML by overwriting the head tags of dist/index.html.
// The body stays as the SPA root div; React hydrates client-side.
// This is the same pattern East Brunswick uses. It's not as strong as full
// SSR (Cause #3 not solved) but it ships unique <head> tags per URL, which
// is what fixes Causes #1 and #2.
const generateHtml = (title, description, url, extraSchemaBlocks = []) => {
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

  return html;
};

let generatedCount = 0;

// Service x location pages
services.forEach((service) => {
  locations.forEach((location) => {
    const url = `/${service.slug}/${location.slug}`;
    const title = `${service.name} in ${location.name}, ${location.state} | Princeton Handyman`;
    const description = `Professional ${service.name.toLowerCase()} services in ${location.name}, NJ. ${service.description} Licensed, insured. Free estimates!`;

    const breadcrumb = buildBreadcrumbList([
      { name: 'Home', item: SITE },
      { name: 'Service Areas', item: `${SITE}/service-areas` },
      { name: location.name, item: `${SITE}/service-areas/${location.slug}` },
      { name: service.name, item: `${SITE}${url}` },
    ]);
    const blocks = [breadcrumb, buildServiceSchema(service, location)];
    if (Array.isArray(service.faqs) && service.faqs.length > 0) {
      blocks.push(buildFaqSchema(service.faqs));
    }

    const html = generateHtml(title, description, url, blocks);
    const pageDir = join(distDir, service.slug, location.slug);
    ensureDir(pageDir);
    writeFileSync(join(pageDir, 'index.html'), html, 'utf8');
    generatedCount++;
  });
});

// Location pages
locations.forEach((location) => {
  const url = `/service-areas/${location.slug}`;
  const title = `Handyman ${location.name} NJ | Licensed Local Repairs & Remodels`;
  const description = `Professional handyman services in ${location.name}, NJ. Kitchen remodels, bathroom remodels, home repairs, and more. Licensed & insured. Free estimates!`;

  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', item: SITE },
    { name: 'Service Areas', item: `${SITE}/service-areas` },
    { name: location.name, item: `${SITE}${url}` },
  ]);

  const html = generateHtml(title, description, url, [breadcrumb]);
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
  'Service Areas | Princeton Handyman - Central NJ',
  'We serve Princeton, South Brunswick, Cranbury, Plainsboro, East Windsor, West Windsor, Lawrence Township, Robbinsville, Pennington, and Montgomery. Professional handyman services in your neighborhood.',
  '/service-areas',
  [serviceAreasBreadcrumb],
);
const serviceAreasDir = join(distDir, 'service-areas');
ensureDir(serviceAreasDir);
writeFileSync(join(serviceAreasDir, 'index.html'), serviceAreasHtml, 'utf8');
generatedCount++;

// All non-dynamic routes from src/App.tsx. Each gets unique <head> tags and
// a self-referencing canonical, ensuring no route falls through to the SPA
// shell with the homepage canonical.
const standalonePages = [
  {
    slug: 'handyman-services',
    title: 'Handyman Services in Princeton & Central NJ | Princeton Handyman',
    description: 'Full list of handyman services: plumbing repairs, electrical work, carpentry, painting, drywall, and more. Licensed and insured. Serving Princeton, West Windsor, Lawrence, Montgomery, and surrounding NJ towns.',
  },
  {
    slug: 'remodels',
    title: 'Kitchen & Bathroom Remodels in Princeton & Central NJ | Princeton Handyman',
    description: 'Expert kitchen and bathroom remodeling services in Princeton and Central NJ. Full renovations, tile work, vanity installs, cabinet upgrades, and more. Licensed and insured. Free estimates.',
  },
  {
    slug: 'about',
    title: 'About | Princeton Handyman',
    description: 'Princeton Handyman is operated by Osama Syed under Central Jersey Home Services LLC. Licensed, insured, and locally accountable. NJ HIC #13VH13918800.',
  },
  {
    slug: 'portfolio',
    title: 'Project Portfolio | Princeton Handyman',
    description: 'See our completed kitchen remodels, bathroom remodels, and home repair projects across Princeton, West Windsor, Montgomery, and Central NJ. Before and after photos included.',
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions | Princeton Handyman',
    description: 'Got questions about our handyman services? Find answers about pricing, scheduling, service areas, and what to expect from Princeton Handyman.',
  },
  {
    slug: 'get-estimate',
    title: 'Get a Free Estimate | Princeton Handyman',
    description: 'Request a free, no-obligation estimate for handyman services, kitchen remodels, bathroom remodels, and home repairs in Princeton and Central NJ.',
  },
  {
    slug: 'bathroom-refresh',
    title: '1-Day Bathroom Refresh Service | Princeton Handyman',
    description: "Transform your bathroom in just one day. Single-sink specialty with zero-hassle Lowe's concierge pickup. Get your instant estimate for labor and logistics.",
  },
  {
    slug: 'bathroom-remodel',
    title: 'Bathroom Remodel in Princeton & Central NJ | Princeton Handyman',
    description: 'Bathroom remodels in Princeton and Central NJ. Tile, vanities, fixtures, lighting, tub-to-shower conversions. Licensed and insured. Free estimates.',
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling in Princeton & Central NJ | Princeton Handyman',
    description: 'Licensed kitchen remodeling in Princeton and Central NJ. Cabinets, countertops, tile, plumbing and electrical coordination, finish carpentry. NJ HIC #13VH13918800.',
  },
  {
    slug: 'aging-in-place',
    title: 'Aging-in-Place Home Modifications in Central NJ | Princeton Handyman',
    description: 'Aging-in-place home modifications across Central New Jersey. Walk-in showers, grab bars, wider doorways, no-step entries. Licensed NJ contractor pursuing CAPS certification. NJ HIC #13VH13918800.',
  },
  {
    slug: 'bathroom-remodel-calculator',
    title: 'Bathroom Remodel Cost Calculator | Princeton Handyman',
    description: 'Get an instant estimate for your bathroom remodel. Premium bathroom remodels for Princeton, Cranbury, Montgomery, and Central NJ. Calculate your project cost in seconds.',
  },
  {
    slug: 'rack-configurator',
    title: 'Custom Garage Storage Rack Builder | Princeton Handyman',
    description: 'Build your perfect garage storage solution in seconds. Pick your size, see your price instantly, and transform your cluttered garage into an organized workspace.',
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy | Princeton Handyman',
    description: 'Read the privacy policy for Princeton Handyman. Learn how we collect, use, and protect your personal information.',
  },
  {
    slug: 'terms',
    title: 'Terms of Service | Princeton Handyman',
    description: 'Terms of service for Princeton Handyman. Review the terms and conditions that apply to our handyman and home remodeling services in Central NJ.',
  },
  {
    slug: 'sitemap',
    title: 'Sitemap | Princeton Handyman',
    description: 'Browse all pages on the Princeton Handyman website, services, service areas, and more.',
  },
];

standalonePages.forEach((page) => {
  const url = `/${page.slug}`;
  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', item: SITE },
    { name: page.title.split(' | ')[0], item: `${SITE}${url}` },
  ]);
  const html = generateHtml(page.title, page.description, url, [breadcrumb]);
  const pageDir = join(distDir, page.slug);
  ensureDir(pageDir);
  writeFileSync(join(pageDir, 'index.html'), html, 'utf8');
  generatedCount++;
});

console.log(`✅ Prerendering completed!`);
console.log(`📄 Generated ${generatedCount} HTML files`);
console.log(`   - Service-location pages: ${services.length * locations.length}`);
console.log(`   - Location pages: ${locations.length}`);
console.log(`   - Hub pages: 1`);
console.log(`   - Standalone pages: ${standalonePages.length}`);
