// Single source of truth for the core-services menu, mirrored from the East
// Brunswick Handyman structure (2026-09) with Princeton / Mercer County wording.
// Drives the homepage grid, /handyman catalog, header/footer nav, and the seven
// data-driven service pages rendered by src/pages/CoreServicePage.tsx.
// Same nine categories as EBH; the copy is written for this market.

export interface CoreService {
  slug: string;
  href: string;
  name: string;
  short: string;          // homepage tile blurb
  eyebrow: string;        // hero eyebrow
  h1: string;
  h1Sub: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  included: string[];
  notIncluded: string[];
  fits: { visit: string[]; halfDay: string[]; fullDay: string[] };
  faqs: { question: string; answer: string }[];
  related: string[];      // hrefs
  ownPage: boolean;       // false = existing hand-written page at href
  review?: { quote: string; name: string; detail: string }; // real Google review, verbatim
}

// One list of towns, consumed everywhere (footer, FAQ, booking, town grid, schema).
// Core = the Princeton ring we are in most often; extended = the outer ring.
export const CORE_TOWNS = [
  { name: "Princeton", slug: "princeton" },
  { name: "West Windsor", slug: "west-windsor" },
  { name: "Plainsboro", slug: "plainsboro" },
  { name: "Lawrence Township", slug: "lawrence-township" },
  { name: "Montgomery", slug: "montgomery" },
  { name: "Pennington", slug: "pennington" },
] as const;
export const EXTENDED_TOWNS = [
  { name: "South Brunswick", slug: "south-brunswick" },
  { name: "Cranbury", slug: "cranbury" },
  { name: "East Windsor", slug: "east-windsor" },
  { name: "Robbinsville", slug: "robbinsville" },
] as const;
export const townNames = (list: readonly { name: string }[]) =>
  list.map((t) => t.name).reduce((acc, n, i, arr) => (i === 0 ? n : i === arr.length - 1 ? `${acc}, and ${n}` : `${acc}, ${n}`), "");

// Live Google Business Profile figures for Central Jersey Home Services LLC
// (owner-confirmed 2026-08-25). These reviews were earned through the East
// Brunswick Handyman profile; every place they appear must say so.
export const RATING = { value: "5.0", count: 28 } as const;
export const RATING_NOTE = "via East Brunswick Handyman, our sister brand";
export const WARRANTY = "One-year labor warranty on every job";

export const PACKAGES = [
  { key: "visit", name: "Visit", price: "$345", sub: "Up to 2 hours of general repairs" },
  { key: "halfDay", name: "Half Day", price: "$595", sub: "Up to 4 hours on site" },
  { key: "fullDay", name: "Full Day", price: "$1,095", sub: "A full working day" },
] as const;

export const coreServices: CoreService[] = [
  {
    slug: "drywall-repair",
    href: "/drywall-repair",
    name: "Drywall Repair",
    short: "Doorknob holes, settling cracks, ceiling stains, and nail pops, finished so the wall reads as one surface.",
    eyebrow: "Core Service",
    h1: "Drywall Repair",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro: "",
    seoTitle: "",
    seoDescription: "",
    included: [
      "Doorknob holes, anchor holes, and access cuts closed up",
      "Settling cracks, nail pops, and damaged corner bead",
      "Soft or stained board cut out and replaced after a leak",
      "Texture blended and primed, ready for paint",
      "Ceilings and multi-room patch lists",
    ],
    notIncluded: [],
    fits: { visit: [], halfDay: [], fullDay: [] },
    faqs: [],
    related: [],
    ownPage: false,
  },
  {
    slug: "doors",
    href: "/doors",
    name: "Doors & Locks",
    short: "Doors that drag, sag, or rattle, swapped in the existing frame. Deadbolts and keypad locks while we're there.",
    eyebrow: "Core Service",
    h1: "Door Repair, Replacement & Locks.",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro:
      "A bedroom door that scrapes the jamb every humid August, a front door with daylight under it, a bifold that jumped its track, a deadbolt that needs a shoulder to turn. We hang new doors in the opening you already have, which New Jersey treats as ordinary maintenance with no permit, and we tune the old ones until they latch with a fingertip.",
    seoTitle: "Door Repair & Replacement in Princeton NJ | Locks, Storm Doors, Flat Rate",
    seoDescription:
      "Interior and exterior doors replaced in the same opening, sticking doors adjusted, storm doors, deadbolts and keypad locks. $345 flat-rate visits in Princeton, West Windsor, Plainsboro, Lawrence. NJ HIC #13VH13918800.",
    included: [
      "Interior slab and prehung doors hung in the existing frame",
      "Entry and storm doors swapped in the same opening",
      "Rubbing, sagging, and latch-miss adjustments",
      "Bifold, pocket, and sliding closet doors put back on track",
      "Deadbolts, keypad locks, smart locks, and video doorbells on existing wiring or battery",
      "Sweeps, thresholds, and weatherstripping that actually seal",
      "Hinges, stops, knobs, and casing",
    ],
    notIncluded: [
      "Cutting a new doorway or widening one (that is framing, and it needs a permit)",
      "Glass inserts and lites in older doors",
      "Garage door openers, springs, and cables",
    ],
    fits: {
      visit: ["Tune up three doors that catch", "Put in a deadbolt or a keypad lock", "Re-track a closet door and add a new sweep"],
      halfDay: ["Hang one prehung interior door and case it", "Swap a storm door", "Set three slabs on existing frames"],
      fullDay: ["Replace every interior door on a floor", "Entry door plus storm door plus new hardware"],
    },
    faqs: [
      {
        question: "Is a permit required to swap a door in Princeton?",
        answer:
          "Not for a same-size replacement. The state construction code lists swapping a door or window in its existing opening under ordinary maintenance, so no permit and no inspector. The line is the framing: enlarge the opening or add a new one and it becomes permit work, which we will point out before anything is ordered.",
      },
      {
        question: "Should I buy a slab or a prehung door?",
        answer:
          "Square, solid jamb with good hinges: buy the slab, it is cheaper and quicker. Jamb that is twisted, split, or has never let the door close right: buy the prehung so the frame gets fixed with the door. Text us a photo of the door and the gap along the top and we will tell you which before you drive to the store.",
      },
      {
        question: "Can a sticking door be fixed without replacing it?",
        answer:
          "Most of the time. The usual culprits are a top hinge screw that has let go, a strike plate that has drifted a hair, or summer swelling that needs a pass with the plane. That is Visit-sized work, and two or three doors normally get sorted in one stop.",
      },
      {
        question: "Do you put in keypad and smart locks?",
        answer:
          "Yes. A battery keypad or smart deadbolt drops into the same bore as a standard deadbolt, no wiring involved. Video doorbells go on the existing bell wires or run on battery. Swapping a doorbell is ordinary maintenance; pulling new wire for one is not, and we would say so.",
      },
    ],
    related: ["/carpentry", "/home-maintenance", "/handyman"],
    review: {"quote": "I highly recommend reaching out to Osama if you need a reliable and professional handyman. Even though he was fully booked, he took the time to discuss my project, offered a very fair and transparent estimate, and gave me great advice.", "name": "Serhii K.", "detail": "Google review, East Brunswick Handyman"},
    ownPage: true,
  },
  {
    slug: "carpentry",
    href: "/carpentry",
    name: "Carpentry, Trim & Cabinet Repair",
    short: "Casing, baseboard, shelving, closet systems, loose railings, rot cut-outs, cabinet doors and drawers that work again.",
    eyebrow: "Core Service",
    h1: "Carpentry & Trim",
    h1Sub: "",
    intro: "",
    seoTitle: "",
    seoDescription: "",
    included: [
      "Casing, baseboard, and shoe replaced or repaired",
      "Pantry, closet, and garage shelving built in",
      "Cabinet hinges, drawer glides, and door alignment",
      "Banisters and railings refastened",
      "Rotted exterior trim cut out and rebuilt",
    ],
    notIncluded: [],
    fits: { visit: [], halfDay: [], fullDay: [] },
    faqs: [],
    related: [],
    ownPage: false,
  },
  {
    slug: "tv-mounting",
    href: "/tv-mounting",
    name: "TV Mounting & Assembly",
    short: "TVs anchored into framing, flat-pack furniture built, mirrors, shelves, blinds, and curtain rods hung straight.",
    eyebrow: "Core Service",
    h1: "TV Mounting, Assembly & Hanging.",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro:
      "Nearly all of this fits inside one $345 visit. We find the framing, pick anchors that suit the wall (plaster and lath in the older in-town houses, drywall in the newer ones), build the flat-pack with no leftover hardware, and hang everything level on the first try. Stack the boxes in the room they belong in and leave the rest to us.",
    seoTitle: "TV Mounting & Furniture Assembly in Princeton NJ | $345 Flat-Rate Visit",
    seoDescription:
      "TV mounting into studs or masonry, cable concealment, IKEA and flat-pack assembly, grills, shelving, mirrors, blinds and curtain rods. One flat price in Princeton, West Windsor, Plainsboro and Mercer County NJ.",
    included: [
      "TVs mounted on drywall, plaster, or brick, anchored into studs or masonry",
      "Fixed, tilting, and articulating mounts, yours or ours",
      "Cords hidden in a paintable raceway or run inside the wall to an existing outlet",
      "IKEA, Wayfair, and flat-pack furniture assembled",
      "Grills, patio sets, and outdoor furniture put together",
      "Floating shelves, bookcases, and closet organizers",
      "Mirrors, art, and gallery walls hung level",
      "Blinds, shades, and curtain rods",
    ],
    notIncluded: [
      "A new outlet behind the TV (new wiring is electrician work with a permit; we route to the outlet you have)",
      "Mounting over a working gas fireplace without a heat plan",
      "Home-theater wiring past plug-and-play",
    ],
    fits: {
      visit: ["Mount a TV and hide the cords", "Build a dresser or a desk", "Hang a mirror, a shelf, and blinds in two rooms"],
      halfDay: ["Two TVs plus a soundbar", "A full bedroom set from boxes", "A closet system installed"],
      fullDay: ["Move-in day: TVs, shelves, blinds, and a garage full of flat-pack"],
    },
    faqs: [
      {
        question: "What if there is no stud where I want the TV?",
        answer:
          "We would still rather hit framing, so we locate the studs first. If the spot you want falls between them, a mount with a wide plate reaches two studs at once. On plaster or brick we use masonry anchors rated well past the weight of the TV. Toggle anchors alone in drywall are for picture frames, not televisions.",
      },
      {
        question: "Can the cables be hidden?",
        answer:
          "Two options. A paintable surface raceway goes on any wall in minutes. Running the HDMI and power cord inside the wall works when there is already an outlet on that wall. Adding a new outlet behind the TV is new wiring, which we leave to a licensed electrician.",
      },
      {
        question: "Do I need to buy the mount first?",
        answer:
          "Only if you want to. If you have one, we use it. If not, the truck carries fixed and tilting mounts for common sizes, billed at cost on the invoice.",
      },
      {
        question: "Will you assemble IKEA furniture?",
        answer:
          "Every piece of it: PAX wardrobes, kitchen carts, bed frames, desks. Leave the boxes in the room where the piece will live. Tall units get anchored to the wall before we leave.",
      },
    ],
    related: ["/carpentry", "/doors", "/handyman"],
    review: {"quote": "Osama is amazing at what he does! He works with honesty, integrity, and leaves the customer with quality work! Highly recommend booking him for any handyman services and home improvements needed.", "name": "Tahir M.", "detail": "Google review, East Brunswick Handyman"},
    ownPage: true,
  },
  {
    slug: "deck-fence-repair",
    href: "/deck-fence-repair",
    name: "Deck & Fence Repair",
    short: "Spongy boards, loose rails, leaning posts, dragging gates, and a coat of stain so it lasts another ten years.",
    eyebrow: "Core Service",
    h1: "Deck & Fence Repair.",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro:
      "Most decks in West Windsor and Plainsboro were built in the same ten-year window and they are failing the same way: a handful of soft boards, a rail that moves when you lean on it, a gate that drags. That is repair work, not replacement. One to three days, one written price, half down to hold the date, the balance when it is done.",
    seoTitle: "Deck & Fence Repair in Princeton NJ | Boards, Railings, Posts, Gates, Stain",
    seoDescription:
      "Deck board replacement, railing and stair fixes, cleaning and staining, fence post resets, panel and gate repair. Written price up front in Princeton, West Windsor, Lawrence, Plainsboro NJ. NJ HIC #13VH13918800.",
    included: [
      "Soft or split deck boards replaced, whole surfaces re-decked",
      "Railings tightened, replaced, or brought up to code height",
      "Stair stringers and treads rebuilt",
      "Deck washing, staining, and sealing",
      "Leaning fence posts reset in fresh concrete or replaced",
      "Panels, pickets, and rails swapped",
      "Gates rehung, braced, and given latches that catch",
    ],
    notIncluded: [
      "New decks or ledger-board replacement (structural, permit required)",
      "Whole new fence runs",
      "Patios, retaining walls, and hardscape",
      "Anything higher than two stories",
    ],
    fits: {
      visit: ["Swap a few bad deck boards", "Rehang a dragging gate with a new latch", "Firm up a wobbly railing"],
      halfDay: ["Reset two posts and replace the panels between them", "Rebuild a short set of deck stairs", "Stain a small deck"],
      fullDay: ["Re-deck a mid-size deck", "Wash, repair, and stain in one go", "Replace a run of fence sections"],
    },
    faqs: [
      {
        question: "Do deck repairs in Mercer County need a permit?",
        answer:
          "Like-for-like repairs to boards, rails, and stairs count as ordinary maintenance, so no. Building a new deck, enlarging one, or replacing the ledger bolted to the house is structural work that needs a permit and an inspection, and that is not something we take on.",
      },
      {
        question: "Can you replace only the rotten boards?",
        answer:
          "That is the bulk of our deck work. When the joists underneath are still sound, we pull the soft and split boards, re-screw the loose ones, and the deck has years left in it. We check the framing while the boards are up and tell you straight if it has gone past the point of patching.",
      },
      {
        question: "What is the right season to stain a deck around Princeton?",
        answer:
          "Late spring or the first half of fall, with two dry days back to back and temperatures between roughly 50 and 85. The wood has to be clean and fully dry, so we wash on day one and stain on day two.",
      },
      {
        question: "My fence posts lean. Is that fixable?",
        answer:
          "Usually, as long as the post is not rotted through at grade. We dig it out, plumb it, and re-set it in new concrete. If the post has gone at ground level, we replace it and reuse the panels that are still good.",
      },
    ],
    related: ["/carpentry", "/home-maintenance", "/handyman"],
    review: {"quote": "We are very satisfied with the work done by Osama. From the very first contact, the entire service and communication process was seamless and smooth. The final finish on the projects looks absolutely perfect and professional.", "name": "Mei", "detail": "Google review, East Brunswick Handyman"},
    ownPage: true,
  },
  {
    slug: "tile-grout-caulk",
    href: "/tile-grout-caulk",
    name: "Tile, Grout & Caulk",
    short: "Fresh grout, clean silicone, cracked tiles swapped, grab bars, and shower doors. No demolition, no permit.",
    eyebrow: "Core Service",
    h1: "Tile Repair, Regrout & Caulk.",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro:
      "A bathroom that looks worn out rarely needs a remodel. It needs the blackened caulk cut out and replaced, the grout ground down and repacked, two cracked tiles swapped, and a grab bar screwed into framing. One visit, nothing torn out, no permit.",
    seoTitle: "Tile Repair, Regrouting & Caulking in Princeton NJ | No-Demo Bathroom Fixes",
    seoDescription:
      "Showers and tubs regrouted and recaulked, cracked tiles replaced, grab bars anchored, shower doors installed. Flat-rate bathroom fixes without demolition in Princeton, West Windsor, Lawrence and Mercer County NJ. NJ HIC #13VH13918800.",
    included: [
      "Old caulk cut out of tubs, showers, and backsplashes, replaced with mold-resistant silicone",
      "Grout removed and repacked, including a color change if you want one",
      "Cracked or loose floor and wall tiles replaced",
      "Grab bars anchored into studs or rated blocking",
      "Shower doors installed and adjusted",
      "Kitchen and bath backsplashes (a bigger job, see below)",
      "Shower heads, towel bars, and hooks swapped",
      "Faucets, toilets, and vanities swapped while we are there (see Fixture & Faucet Swaps)",
    ],
    notIncluded: [
      "Retiling a whole shower or floor, shower pans, and waterproofing (that is a remodel)",
      "Tub-to-shower conversions, walk-in showers, and full bathroom remodels (we do not do renovations)",
    ],
    fits: {
      visit: ["Recaulk a tub and a shower", "Swap two cracked tiles", "Anchor two grab bars and change a shower head"],
      halfDay: ["Regrout a whole shower", "Hang a shower door", "Regrout a bathroom floor"],
      fullDay: ["Regrout and recaulk two bathrooms", "Set a kitchen backsplash (most fit a day)"],
    },
    faqs: [
      {
        question: "Regrout or retile?",
        answer:
          "When the tile is solid and only the grout is cracked, stained, or missing, regrouting brings it back for a fraction of a retile and with no demolition. When tiles are loose across a whole wall, the wall behind is soft, or water has been getting behind the tile for years, that is a retile, which is a remodel and not our lane. We will tell you which one you have and you can bring in a bath contractor if needed.",
      },
      {
        question: "Why does my caulk go black again so fast?",
        answer:
          "Latex caulk, a bathroom with no real ventilation, or new caulk laid over old caulk instead of after cutting it out. We remove all of it, treat the joint, and use 100% silicone made for wet areas. That lasts years instead of months.",
      },
      {
        question: "Can grab bars go into a tiled shower?",
        answer:
          "Yes. We find the studs behind the tile, drill through with a tile bit, and screw into framing. Where the bar has to land between studs we use anchors engineered for grab bars, never drywall anchors.",
      },
      {
        question: "Will you swap a faucet or toilet while you are there?",
        answer:
          "Yes, like-for-like: faucet for faucet, toilet on the same flange, vanity where the supply lines stay put. The state code calls that ordinary maintenance, no permit. Anything that moves or adds plumbing is a licensed plumber's job, and we will say so before you buy parts.",
      },
    ],
    related: ["/fixture-swaps", "/home-maintenance", "/handyman"],
    review: {"quote": "We are very satisfied with the work done by Osama. From the very first contact, the entire service and communication process was seamless and smooth. The final finish on the projects looks absolutely perfect and professional.", "name": "Mei", "detail": "Google review, East Brunswick Handyman"},
    ownPage: true,
  },
  {
    slug: "fixture-swaps",
    href: "/fixture-swaps",
    name: "Fixture & Faucet Swaps",
    short: "Faucets, toilets, vanities, light fixtures, ceiling fans, dimmers, and outlets replaced like-for-like. No permit needed.",
    eyebrow: "Core Service",
    h1: "Fixture & Faucet Swaps.",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro:
      "A kitchen faucet that drips, a toilet that runs at 2 a.m., a brass dining-room light from the last owner. We put a like-for-like replacement in the same place on the same lines. New Jersey's construction code classifies that as ordinary maintenance: no permit, no inspection, almost always one visit.",
    seoTitle: "Faucet, Toilet & Light Fixture Replacement in Princeton NJ | Flat-Rate Handyman",
    seoDescription:
      "Like-for-like swaps of faucets, toilets, vanities, light fixtures, ceiling fans, switches and outlets. Ordinary maintenance under NJ code, no permit. $345 visits in Princeton, West Windsor, Plainsboro, Lawrence NJ. NJ HIC #13VH13918800.",
    included: [
      "Kitchen and bathroom faucets, cartridges, and sprayers",
      "Toilets on the existing flange, plus fill valves, flappers, and wax seals",
      "Vanities and sinks where the plumbing stays where it is",
      "Garbage disposals and dishwashers on existing hookups",
      "Shower heads, shower trim, and P-traps",
      "Light fixtures, pendants, and flush mounts, like-for-like",
      "Ceiling fans on an existing fan-rated box",
      "Switches, dimmers, receptacles, and GFCIs, like-for-like",
      "Bath exhaust fans that already vent outside",
    ],
    notIncluded: [
      "New or relocated water lines, or a fixture where there was none",
      "Water heaters, gas lines, and gas appliances",
      "New circuits, extra outlets, panel work, or wiring inside walls",
      "A ceiling fan where there is only a light box (it needs a fan-rated box first)",
    ],
    fits: {
      visit: ["Swap a kitchen faucet and a bathroom faucet", "Replace one toilet", "Change two light fixtures and a dimmer"],
      halfDay: ["Vanity, faucet, and toilet in one bathroom", "Disposal and dishwasher swapped", "Four fixtures and a ceiling fan"],
      fullDay: ["Move-in day: every tired faucet, fixture, fan, and switch plate in the house"],
    },
    faqs: [
      {
        question: "Do I need a permit to replace a faucet, toilet, or light in New Jersey?",
        answer:
          "No. N.J.A.C. 5:23-2.7 lists replacing faucets, valves, traps, and fixtures with a similar fixture, and replacing receptacles, switches, and lighting fixtures with a like item, as ordinary maintenance. No permit, no inspection, no notice to the township. The moment a job changes the piping or the wiring it leaves that category, and that is also where we stop.",
      },
      {
        question: "What does like-for-like actually mean?",
        answer:
          "Same location, same connections. Faucet for faucet, toilet for toilet on the same flange, a light on the existing box, a switch for a switch. Moving a sink, adding a second vanity, running a line for a fridge, or hanging a fan where only a light was is new work: permit, licensed trade, not us.",
      },
      {
        question: "Do I buy the fixture or do you?",
        answer:
          "Either works. If you have already picked one out, we install it. If not, tell us the look and the budget and we bring options at cost, itemized on the invoice. The truck stocks a couple of dependable toilets and faucets for the common cases.",
      },
      {
        question: "It is leaking right now. How soon can you get here?",
        answer:
          "Close the shutoff under the sink or behind the toilet and text us a photo. Most swaps get booked inside the week. If water is actively running somewhere it should not, call a plumber first and us for the repairs afterward.",
      },
    ],
    related: ["/tile-grout-caulk", "/home-maintenance", "/handyman"],
    review: {"quote": "I highly recommend reaching out to Osama if you need a reliable and professional handyman. Even though he was fully booked, he took the time to discuss my project, offered a very fair and transparent estimate, and gave me great advice.", "name": "Serhii K.", "detail": "Google review, East Brunswick Handyman"},
    ownPage: true,
  },
  {
    slug: "painting-touch-ups",
    href: "/painting-touch-ups",
    name: "Painting Touch-Ups",
    short: "Patches blended into the wall, scuffed trim freshened, a powder room or a hallway. Not a whole-house crew.",
    eyebrow: "Core Service",
    h1: "Painting Touch-Ups & Small Rooms.",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro:
      "The drywall patch that is still bright white. The stairwell the movers scraped. The powder room that has been builder beige since the house was sold. We paint the small jobs a painting company will not send a crew for, and we do it in the same visit as the repair.",
    seoTitle: "Painting Touch-Ups & Small Room Painting in Princeton NJ | Flat-Rate Handyman",
    seoDescription:
      "Touch-ups after drywall repair, trim and door painting, powder rooms, hallways and single bedrooms. Flat pricing in Princeton, West Windsor, Lawrence, Montgomery and Mercer County NJ. NJ HIC #13VH13918800.",
    included: [
      "Patches blended after drywall repair",
      "Scuffs, nail holes, and stains on move-out lists",
      "Trim, doors, and baseboard repainted",
      "Powder rooms, single bedrooms, and hallways",
      "Ceiling stains sealed once the leak is fixed",
      "Deck and fence staining (see Deck & Fence Repair)",
    ],
    notIncluded: [
      "Whole-house interiors or exteriors",
      "Cabinet refinishing and sprayed finishes",
      "Exterior work above two stories",
    ],
    fits: {
      visit: ["Blend three patches into the existing color", "Repaint a front door", "Touch up a move-out list"],
      halfDay: ["Paint a powder room or a small bedroom", "Repaint the trim and doors along a hallway"],
      fullDay: ["A bedroom with its trim and closet", "Repair and repaint a ceiling and wall after a leak"],
    },
    faqs: [
      {
        question: "Will the touch-up disappear into the wall?",
        answer:
          "With the original can of paint, almost always. Without it we can have a chip matched, but older flat paint that has faded makes a perfect spot match difficult; in that case we paint the whole wall corner to corner so there is no visible edge.",
      },
      {
        question: "Can you paint the same day you patch?",
        answer:
          "Small patches, yes: setting compound cures quickly enough to prime and paint in the same visit. Larger repairs need a day for the compound to dry, so those become a two-stop job and we price them that way from the start.",
      },
      {
        question: "Do you paint whole rooms?",
        answer:
          "Small ones. A powder room, a bedroom, or a hallway fits a Half Day or a Full Day. A whole floor or the outside of the house is work for a painting crew, and we will tell you so.",
      },
    ],
    related: ["/drywall-repair", "/carpentry", "/handyman"],
    review: {"quote": "Osama is amazing at what he does! He works with honesty, integrity, and leaves the customer with quality work! Highly recommend booking him for any handyman services and home improvements needed.", "name": "Tahir M.", "detail": "Google review, East Brunswick Handyman"},
    ownPage: true,
  },
  {
    slug: "home-maintenance",
    href: "/home-maintenance",
    name: "Home Maintenance",
    short: "Dryer vents, drafty doors, torn screens, attic ladders, squeaky floors, detectors, and the seasonal punch list.",
    eyebrow: "Core Service",
    h1: "Home Maintenance & Small Repairs.",
    h1Sub: "Princeton & Mercer County, NJ.",
    intro:
      "Every house carries a list that never reaches the top of a weekend. This is the visit that clears it: the dryer vent nobody has cleaned since closing day, the draft under the mudroom door, the screen the cat went through, the floorboard that squeaks outside the baby's room.",
    seoTitle: "Home Maintenance Handyman in Princeton NJ | Dryer Vents, Screens, Squeaks, Drafts",
    seoDescription:
      "Dryer vent cleaning, weatherstripping, screen repair, attic ladders, floor squeaks, smoke detectors, mailboxes, and the seasonal list. Flat-rate visits in Princeton, West Windsor, Plainsboro, Lawrence and Mercer County NJ.",
    included: [
      "Dryer vents cleaned end to end, exterior hoods replaced",
      "Weatherstripping, door sweeps, and draft sealing",
      "Window screens and screen doors repaired",
      "Attic ladders replaced",
      "Floor squeaks, loose boards, and transition strips",
      "Smoke and CO detectors replaced (battery, or like-for-like on existing wiring)",
      "Mailboxes, house numbers, and doorbells",
      "Caulk around windows, siding joints, and exterior trim",
      "Small drywall, door, and trim fixes on the same visit",
    ],
    notIncluded: [
      "New wiring, circuits, or plumbing lines (permit work for a licensed trade)",
      "Gutters, roofing, pressure washing, and anything above two stories",
      "Furnaces, boilers, AC, and water heaters",
    ],
    fits: {
      visit: ["Clean the dryer vent and replace the hood", "Weatherstrip two exterior doors", "Swap every battery detector and fix a screen"],
      halfDay: ["Replace an attic ladder", "Quiet the squeaks in two rooms and install transitions", "A seasonal list of six to eight small items"],
      fullDay: ["A move-in or move-out list, top to bottom"],
    },
    faqs: [
      {
        question: "How often does a dryer vent need cleaning?",
        answer:
          "Yearly for most houses, more often when the run is long or a load takes two cycles to dry. Lint in the duct is the leading cause of dryer fires. We clear the entire run from the dryer to the outside hood and then test airflow with the dryer running.",
      },
      {
        question: "Can you swap a smoke detector?",
        answer:
          "Yes. Battery units (we carry 10-year sealed ones) and like-for-like swaps of hardwired heads on the existing wiring, which the state code treats as ordinary maintenance. Adding a detector where there is no wiring is electrician work.",
      },
      {
        question: "How do I get the most out of a maintenance Visit?",
        answer:
          "Walk the house before we arrive and text us the list with photos. Two hours goes a long way when the parts are already on the truck and nobody is guessing what is needed.",
      },
    ],
    related: ["/doors", "/fixture-swaps", "/handyman"],
    review: {"quote": "Osama is amazing at what he does! He works with honesty, integrity, and leaves the customer with quality work! Highly recommend booking him for any handyman services and home improvements needed.", "name": "Tahir M.", "detail": "Google review, East Brunswick Handyman"},
    ownPage: true,
  },
];

// Jobs that run 1 to 3 days. Still one written price, 50% deposit to hold the date, balance on completion.
// No draws, no permits.
export const biggerJobs = [
  { name: "Kitchen & Bath Backsplash", href: "/backsplash", days: "1–2 days" },
  { name: "Storage Shed Assembly & Repair", href: "/storage-sheds", days: "1–2 days" },
  { name: "Multi-Room Drywall Repair", href: "/drywall-repair", days: "2–3 days" },
  { name: "Deck Resurfacing & Staining", href: "/deck-fence-repair", days: "1–3 days" },
];

// Honest "not on the menu" list. NJ licensing, not preference.
export const notOffered = [
  {
    name: "Anything inside the wall",
    detail: "New or moved plumbing lines, new circuits, extra outlets, panel or service work, wiring runs. That is permit work for a licensed trade, and we tell you before you shop for parts.",
  },
  {
    name: "Water heaters, gas, and HVAC",
    detail: "Water heater swaps, gas appliances and lines, furnaces, boilers, and air conditioning. Licensed trades with their own permits.",
  },
  {
    name: "Full bathroom and kitchen renovations",
    detail: "Tub-to-shower conversions, walk-in showers, gut baths, and kitchen remodels. We do the one-visit bathroom work instead: grab bars, shower doors, caulk, grout, and fixture swaps.",
  },
  {
    name: "Roofs, gutters, and pressure washing",
    detail: "Ladder trades with their own crews. Ask and we will point you to someone good.",
  },
];

export const getCoreService = (slug: string) => coreServices.find((s) => s.slug === slug);
