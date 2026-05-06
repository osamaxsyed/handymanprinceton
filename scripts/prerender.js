import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn } from 'child_process';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const locations = JSON.parse(readFileSync(join(__dirname, '../src/data/locations.json'), 'utf8'));
const services = JSON.parse(readFileSync(join(__dirname, '../src/data/services.json'), 'utf8'));

const distDir = join(__dirname, '../dist');
const SITE = 'https://handymanprinceton.com';
const PREVIEW_PORT = 4173;
const PREVIEW_URL = `http://localhost:${PREVIEW_PORT}`;

if (!existsSync(distDir)) {
  console.log('⚠️  dist directory not found. Run build first.');
  process.exit(1);
}

const ensureDir = (dir) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
};

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

// Inject per-page metadata into the rendered HTML
const injectMetadata = (html, { title, description, url, extraSchemaBlocks = [] }) => {
  const canonical = `${SITE}${url || ''}`;
  let out = html
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
    out = out.replace('</head>', `    ${blocks}\n  </head>`);
  }
  return out;
};

// Build the list of routes to prerender
const routes = [];

routes.push({
  path: '/',
  outputPath: join(distDir, 'index.html'),
  meta: null, // homepage keeps existing index.html metadata
});

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
    routes.push({
      path: url,
      outputPath: join(distDir, service.slug, location.slug, 'index.html'),
      meta: { title, description, url, extraSchemaBlocks: blocks },
    });
  });
});

locations.forEach((location) => {
  const url = `/service-areas/${location.slug}`;
  const title = `Handyman ${location.name} NJ | Licensed Local Repairs & Remodels`;
  const description = `Professional handyman services in ${location.name}, NJ. Kitchen remodels, bathroom renovations, home repairs, and more. Licensed & insured. Free estimates!`;
  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', item: SITE },
    { name: 'Service Areas', item: `${SITE}/service-areas` },
    { name: location.name, item: `${SITE}${url}` },
  ]);
  routes.push({
    path: url,
    outputPath: join(distDir, 'service-areas', location.slug, 'index.html'),
    meta: { title, description, url, extraSchemaBlocks: [breadcrumb] },
  });
});

routes.push({
  path: '/service-areas',
  outputPath: join(distDir, 'service-areas', 'index.html'),
  meta: {
    title: 'Service Areas | Princeton Handyman - Central NJ',
    description: 'We serve Princeton, Plainsboro, West Windsor, Lawrence Township, Montgomery, and surrounding Central NJ areas. Professional handyman services in your neighborhood.',
    url: '/service-areas',
    extraSchemaBlocks: [buildBreadcrumbList([
      { name: 'Home', item: SITE },
      { name: 'Service Areas', item: `${SITE}/service-areas` },
    ])],
  },
});

const standalonePages = [
  {
    slug: 'pergolas',
    title: 'Custom Pergolas in Central NJ | Princeton Handyman',
    description: 'Custom-built cedar and composite pergolas across Central New Jersey. Licensed, insured, and built by a 15-year construction veteran. Spring 2026 booking open with early-project pricing.',
  },
  {
    slug: 'custom-sheds',
    title: 'Custom Sheds in Central NJ | Princeton Handyman',
    description: 'Custom-built storage sheds and modern barn-style sheds across Central New Jersey. Licensed, insured, built by a 15-year construction veteran. Limited early-project pricing.',
  },
  {
    slug: 'backyard-studios',
    title: 'Backyard Studios & Home Offices in Central NJ | Princeton Handyman',
    description: 'Custom-built insulated backyard studios, home offices, and garden offices across Central New Jersey. Licensed, insured, built by a 15-year construction veteran. Limited early-project pricing.',
  },
];

standalonePages.forEach((page) => {
  const url = `/${page.slug}`;
  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', item: SITE },
    { name: page.title.split(' | ')[0], item: `${SITE}${url}` },
  ]);
  routes.push({
    path: url,
    outputPath: join(distDir, page.slug, 'index.html'),
    meta: {
      title: page.title,
      description: page.description,
      url,
      extraSchemaBlocks: [breadcrumb],
    },
  });
});

// Start vite preview server
console.log('🚀 Starting vite preview server...');
const previewServer = spawn('npx', ['vite', 'preview', '--port', String(PREVIEW_PORT)], {
  cwd: join(__dirname, '..'),
  stdio: ['ignore', 'pipe', 'pipe'],
});

const waitForServer = () =>
  new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Preview server failed to start in 30s')), 30000);
    previewServer.stdout.on('data', (data) => {
      const out = data.toString();
      if (out.includes('Local:') || out.includes(String(PREVIEW_PORT))) {
        clearTimeout(timeout);
        setTimeout(resolve, 500); // small grace period
      }
    });
    previewServer.stderr.on('data', (data) => {
      const err = data.toString();
      if (err.includes('EADDRINUSE')) {
        clearTimeout(timeout);
        reject(new Error(`Port ${PREVIEW_PORT} already in use`));
      }
    });
    previewServer.on('error', reject);
  });

const cleanup = () => {
  if (previewServer && !previewServer.killed) {
    previewServer.kill('SIGTERM');
  }
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

try {
  await waitForServer();
  console.log(`✅ Preview server running at ${PREVIEW_URL}`);

  console.log('🌐 Launching headless browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let generatedCount = 0;
  let failedCount = 0;
  const total = routes.length;
  const startTime = Date.now();

  // Process routes in small concurrent batches
  const concurrency = 4;
  for (let i = 0; i < routes.length; i += concurrency) {
    const batch = routes.slice(i, i + concurrency);
    await Promise.all(
      batch.map(async (route) => {
        const page = await browser.newPage();
        try {
          await page.goto(`${PREVIEW_URL}${route.path}`, {
            waitUntil: 'networkidle0',
            timeout: 30000,
          });
          // Wait for React hydration to populate the root element
          await page.waitForFunction(
            () => {
              const root = document.getElementById('root');
              return root && root.children.length > 0 && root.innerText.length > 100;
            },
            { timeout: 15000 },
          );

          let html = await page.content();
          if (route.meta) {
            html = injectMetadata(html, route.meta);
          }
          ensureDir(dirname(route.outputPath));
          writeFileSync(route.outputPath, html, 'utf8');
          generatedCount++;
          if (generatedCount % 25 === 0 || generatedCount === total) {
            const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
            console.log(`  📄 ${generatedCount}/${total} (${elapsed}s elapsed)`);
          }
        } catch (err) {
          failedCount++;
          console.error(`  ❌ ${route.path}: ${err.message}`);
        } finally {
          await page.close();
        }
      }),
    );
  }

  await browser.close();
  cleanup();

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
  console.log(`\n✅ Prerendering completed in ${elapsed}s`);
  console.log(`   📄 ${generatedCount} HTML files generated`);
  if (failedCount > 0) console.log(`   ❌ ${failedCount} routes failed`);
} catch (err) {
  console.error('Prerender failed:', err);
  cleanup();
  process.exit(1);
}
