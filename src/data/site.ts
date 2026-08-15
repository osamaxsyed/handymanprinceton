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

  // Primary market plus the towns that actually carry search demand,
  // ordered by 90d GSC impressions (see REBUILD_SPEC.md).
  primaryCity: "Princeton",
  towns: [
    "Princeton",
    "West Windsor",
    "Robbinsville",
    "Lawrence Township",
    "Plainsboro",
    "South Brunswick",
  ],

  // Flat pricing ladder. Matches EBH exactly (confirmed by owner 2026-08-15).
  // No hourly rate anywhere: the FAQ sells against hourly billing.
  pricing: {
    visit: "$295",
    halfDay: "$525",
    fullDay: "$995",
    visitScope: "Up to 2 hours of skilled work",
  },

  // Reviews shown on this site are real reviews of Central Jersey Home Services
  // LLC earned by the East Brunswick operation. They must ALWAYS be attributed
  // as such. Never present them as Princeton customers and never show an
  // aggregate star rating implying a Princeton rating. Princeton customers will
  // be asked for reviews on the Princeton GBP once it exists (owner, 2026-08-15).
  reviewAttribution:
    "Reviews for Central Jersey Home Services LLC, from our East Brunswick service area.",
} as const;

export default site;
