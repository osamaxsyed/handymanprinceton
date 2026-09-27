// Single source of truth for brand, contact, and license details.
//
// Phone is shared with East Brunswick Handyman by owner decision (2026-08-15).
// Both operations run under Central Jersey Home Services LLC. If a dedicated
// Princeton tracking number is ever provisioned, change PHONE_DISPLAY and
// PHONE_RAW here and every page picks it up.

export const site = {
  brand: "Princeton Handyman",
  legalName: "Central Jersey Home Services LLC",
  license: "NJ HIC #13VH13918800",

  phoneDisplay: "(609) 375-0098",
  phoneRaw: "6093750098",
  get phoneHref() {
    return `tel:${this.phoneRaw}`;
  },
  get smsHref() {
    return `sms:${this.phoneRaw}`;
  },

  domain: "handymanprinceton.com",
  url: "https://handymanprinceton.com",
  email: "osama@handymanprinceton.com",

  primaryCity: "Princeton",

  // Flat pricing ladder. Matches EBH (raised 2026-09 to $345/$595/$1,095).
  // No hourly rate anywhere: the FAQ sells against hourly billing.
  pricing: {
    visit: "$345",
    halfDay: "$595",
    fullDay: "$1,095",
    visitScope: "Up to 2 hours of general repairs",
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
