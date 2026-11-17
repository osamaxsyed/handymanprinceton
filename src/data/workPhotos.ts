// Photos from our own jobs (Osama's "ebhm photos" folder, 2026-11-16). Resized,
// auto-rotated and stripped of EXIF/GPS before going into public/photos/work.
// Captions describe the work only: no towns, because the same photos appear on
// all three handyman sites and the jobs were in Middlesex County.
export type WorkPhoto = { src: string; alt: string; caption: string };

const p = (file: string, alt: string, caption: string): WorkPhoto => ({
  src: `/photos/work/${file}.jpg`,
  alt,
  caption,
});

export const PHOTOS = {
  deckStained: p("deck-stained-stairs-lattice", "Stained wood deck with stairs, railings and lattice skirting", "Deck, stairs and railings"),
  deckStainedWide: p("deck-stained-wide", "Stained wood deck with railings and stairs off a sliding door", "Deck and railings, stained"),
  deckComposite: p("deck-composite-black-rail", "Composite deck with black metal balusters and steps", "Composite deck and railing"),
  deckCompositeSteps: p("deck-composite-steps", "Composite steps and railing at a side door", "Composite steps and railing"),
  stairsRailing: p("stairs-pressure-treated-railing", "Pressure-treated back stairs with railings on both sides", "Back stairs and railings"),
  stairsBuild: p("stairs-pressure-treated-build", "New pressure-treated stairs being built at a back door", "New stairs, mid-build"),
  gate: p("fence-chain-link-gate", "Chain-link fence and double gate along a house", "Chain-link fence and gate"),
  shedNew: p("shed-new-barn", "New barn-style storage shed with black hinges", "New barn-style shed"),
  shedReroof1: p("shed-reroof-1-framing", "Shed with the old roof removed down to the framing", "1. Old roof off, framing exposed"),
  shedReroof2: p("shed-reroof-2-underlayment", "Shed roof with new sheathing and underlayment", "2. Sheathing and underlayment"),
  shedReroof3: p("shed-reroof-3-shingles", "New shingles and ridge cap going on a shed roof", "3. Shingles and ridge cap"),
  shedReroof4: p("shed-reroof-4-finished", "Finished shed with a new shingle roof", "4. Finished"),
  tubDoor: p("shower-door-sliding-tub", "Framed sliding glass door on a tiled tub", "Sliding tub door"),
  showerGlass: p("shower-glass-enclosure", "Frameless glass shower enclosure in a tiled bathroom", "Glass shower enclosure"),
} as const;

export const HOME_PHOTOS: WorkPhoto[] = [
  PHOTOS.deckStained,
  PHOTOS.shedReroof4,
  PHOTOS.deckComposite,
  PHOTOS.shedNew,
  PHOTOS.stairsRailing,
  PHOTOS.tubDoor,
];

export const SHED_REROOF: WorkPhoto[] = [PHOTOS.shedReroof1, PHOTOS.shedReroof2, PHOTOS.shedReroof3, PHOTOS.shedReroof4];

/** Extra photo sets on CoreServicePage, keyed by service slug. */
export const SERVICE_PHOTOS: Record<string, WorkPhoto[]> = {
  "deck-fence-repair": [
    PHOTOS.deckStainedWide,
    PHOTOS.deckComposite,
    PHOTOS.deckCompositeSteps,
    PHOTOS.stairsRailing,
    PHOTOS.stairsBuild,
    PHOTOS.gate,
  ],
};
