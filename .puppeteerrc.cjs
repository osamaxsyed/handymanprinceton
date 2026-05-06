const { join } = require('path');

/**
 * Place Puppeteer's Chrome download inside node_modules so it gets
 * picked up by Vercel's build cache (which caches node_modules).
 * The default cache path (~/.cache/puppeteer) lives outside node_modules
 * and gets discarded between Vercel builds, breaking the prerender step.
 */
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
};
