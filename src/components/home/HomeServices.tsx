import { Link } from "react-router-dom";
import { ArrowRight, Hammer, DoorOpen, Ruler, Tv, Fence, Grid3x3, PaintRoller, Wrench, Droplets } from "lucide-react";

// Homepage service grid. Same nine categories and links as coreServices, but
// the homepage keeps its own wording so it does not repeat /handyman verbatim.
const SERVICES = [
  { href: "/drywall-repair", icon: Hammer, name: "Drywall & Plaster", blurb: "Holes from doorknobs and old anchors, cracks over doorways, water marks on a ceiling. Patched, sanded, and primed to match." },
  { href: "/doors", icon: DoorOpen, name: "Doors & Locks", blurb: "Interior and exterior doors that stick or will not latch, planed or rehung. New slabs fitted to the frame you have. Deadbolts and keypads." },
  { href: "/carpentry", icon: Ruler, name: "Carpentry & Trim", blurb: "Baseboard and casing replaced, a wobbly banister made solid, shelves and closet rods put up, a cabinet hinge or drawer slide fixed." },
  { href: "/tv-mounting", icon: Tv, name: "TV Mounting & Assembly", blurb: "Screens fastened to studs, not drywall. Furniture boxes built, mirrors and art leveled, curtain hardware and blinds hung." },
  { href: "/deck-fence-repair", icon: Fence, name: "Deck & Fence Repair", blurb: "Soft deck boards swapped, wobbly railings tightened, a fence post reset, a gate rehung so it closes on its own." },
  { href: "/tile-grout-caulk", icon: Grid3x3, name: "Tile, Grout & Caulk", blurb: "Mildewed caulk cut out and redone, tired grout refreshed, a cracked tile replaced, shower doors and grab bars put in." },
  { href: "/fixture-swaps", icon: Droplets, name: "Fixture & Faucet Swaps", blurb: "An old faucet, toilet, light fixture, switch, or outlet exchanged for a similar one. Ceiling fans on fan-rated boxes." },
  { href: "/painting-touch-ups", icon: PaintRoller, name: "Painting Touch-Ups", blurb: "Repairs painted out so they disappear, a scuffed door or trim run refreshed, one small room repainted. Not whole houses." },
  { href: "/home-maintenance", icon: Wrench, name: "Home Maintenance", blurb: "Weatherstripping, window screens, smoke and CO detectors, an attic ladder, a dryer vent, the list you keep meaning to get to." },
];

const BIGGER = [
  { href: "/backsplash", name: "Backsplash tile, kitchen or bath", days: "one or two days" },
  { href: "/storage-sheds", name: "Shed kits built or repaired", days: "one or two days" },
  { href: "/drywall-repair", name: "Drywall across several rooms", days: "two or three days" },
  { href: "/deck-fence-repair", name: "Deck boards resurfaced and stained", days: "one to three days" },
];

const NOT_OURS = [
  { name: "Work inside walls", detail: "Running new pipe or wire, adding circuits or outlets, panels. Those need a permit and a licensed plumber or electrician." },
  { name: "Gas, heating, cooling, water heaters", detail: "All licensed trades. We will say so up front rather than after you have bought the part." },
  { name: "Remodels", detail: "Gutting a bathroom or kitchen, converting a tub to a shower. Small bathroom fixes, yes. Renovations, no." },
  { name: "Roofing and gutter cleaning", detail: "Different crews with different ladders. We are glad to suggest who to call." },
];

const HomeServices = () => (
  <section id="services" className="py-20 md:py-28 bg-background scroll-mt-24">
    <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
      <div className="mb-12 pb-6 heavy-border-b flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="brutalist-section-eyebrow">What We Fix</div>
          <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
            A Princeton Handyman for the Small Stuff
          </h2>
        </div>
        <p className="font-body text-base md:text-lg text-muted-foreground md:max-w-md">
          Nine kinds of repair, each with its own page. Mix items from several of them in one trip; the price covers the whole list.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
        {SERVICES.map(({ href, icon: Icon, name, blurb }) => (
          <Link key={href} to={href} className="bento-card p-6 flex flex-col group">
            <Icon className="h-7 w-7 text-primary mb-4" />
            <h3 className="font-headline font-semibold text-xl text-foreground mb-2">{name}</h3>
            <p className="font-body text-base text-muted-foreground mb-4">{blurb}</p>
            <span className="mt-auto font-body font-semibold text-base text-foreground inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
              Details <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="bento-card bg-muted p-6 md:p-8">
          <div className="brutalist-section-eyebrow">Longer Jobs</div>
          <h3 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-2">More than a day, priced once.</h3>
          <p className="font-body text-base text-muted-foreground mb-5">
            You get a single written figure. Fifty percent reserves the start date; the balance is paid when the work is complete.
          </p>
          <ul className="space-y-2">
            {BIGGER.map((j) => (
              <li key={j.name}>
                <Link to={j.href} className="font-body text-lg text-foreground hover:text-primary inline-flex items-baseline gap-2">
                  {j.name} <span className="font-body text-sm text-muted-foreground">{j.days}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bento-card bg-foreground text-background p-6 md:p-8 flex flex-col">
          <div className="brutalist-section-eyebrow text-background/70">Outside Our Lane</div>
          <h3 className="brutalist-headline text-2xl md:text-3xl text-background mb-2">Four things we send elsewhere.</h3>
          <ul className="space-y-3 mb-5">
            {NOT_OURS.map((n) => (
              <li key={n.name} className="font-body text-base text-background/80">
                <span className="font-semibold text-background">{n.name}.</span> {n.detail}
              </li>
            ))}
          </ul>
          <Link to="/handyman" className="brutalist-cta-on-dark mt-auto w-fit">
            Packages and examples <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeServices;
