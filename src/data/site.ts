// Single source of truth for brand, contact, and license details.
//
// The published phone is Handyman Princeton's dedicated Quo line,
// (609) 303-8627. To change it, update phoneDisplay and phoneRaw here and
// every page that reads site.* picks it up.

export const site = {
  brand: "Princeton Handyman",
  legalName: "Central Jersey Home Services LLC",
  license: "NJ HIC #13VH13918800",

  phoneDisplay: "(609) 303-8627",
  phoneRaw: "6093038627",
  get phoneHref() {
    return `tel:${this.phoneRaw}`;
  },
  // Opens a new text to our line with the first words already written (SYS-16).
  get smsHref() {
    return `sms:+1${this.phoneRaw}?&body=${encodeURIComponent("Hi, I need a price for: ")}`;
  },

  domain: "handymanprinceton.com",
  url: "https://handymanprinceton.com",
  email: "osama@handymanprinceton.com",

  primaryCity: "Princeton",

  // Public pricing (2026-11-16, matches EBH): $345 minimum covering up to 2
  // hours, one written price for bigger jobs. No hourly rate anywhere.
  pricing: {
    minimum: "$345",
    minimumScope: "Up to 2 hours of work",
  },

  // Reviews shown on this site are real reviews of Central Jersey Home Services
  // LLC earned through the East Brunswick operation. They must ALWAYS be
  // attributed as such. Never present them as Princeton customers and never show
  // an aggregate star rating implying a Princeton rating. Princeton customers
  // will be asked for reviews on the Princeton GBP once it exists (owner, 2026-08-15).
  reviewAttribution:
    "Google reviews for Central Jersey Home Services LLC, collected through our East Brunswick Handyman brand. Same crew, same license.",
} as const;

export default site;
