import { Link } from "react-router-dom";
import { ArrowRight, Hammer, DoorOpen, Ruler, Tv, Fence, Grid3x3, PaintRoller, Wrench, Droplets } from "lucide-react";
import { coreServices, biggerJobs, notOffered } from "@/data/coreServices";

// Homepage "Core Services" block: the nine repair categories an HIC-registered
// crew can do in New Jersey without a permit. Renovations are off the menu,
// said plainly.
const ICONS: Record<string, typeof Hammer> = {
  "drywall-repair": Hammer,
  doors: DoorOpen,
  carpentry: Ruler,
  "tv-mounting": Tv,
  "deck-fence-repair": Fence,
  "tile-grout-caulk": Grid3x3,
  "fixture-swaps": Droplets,
  "painting-touch-ups": PaintRoller,
  "home-maintenance": Wrench,
};

const ServicesOverview = () => (
  <section id="services" className="py-20 md:py-28 bg-background scroll-mt-24">
    <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
      <div className="mb-12 pb-6 heavy-border-b flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="brutalist-section-eyebrow">Core Services</div>
          <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
            Small Jobs, Done Properly.
          </h2>
        </div>
        <p className="font-body text-base md:text-lg text-muted-foreground md:max-w-md">
          The repairs that keep a Princeton house working, priced before we arrive. Send everything on the list at once.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
        {coreServices.map((s) => {
          const Icon = ICONS[s.slug] || Wrench;
          return (
            <Link key={s.slug} to={s.href} className="bento-card p-6 flex flex-col group">
              <Icon className="h-7 w-7 text-primary mb-4" />
              <h3 className="font-headline font-semibold text-xl text-foreground mb-2">{s.name}</h3>
              <p className="font-body text-base text-muted-foreground mb-4">{s.short}</p>
              <span className="mt-auto font-body font-semibold text-base text-foreground inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                What's covered <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="bento-card bg-muted p-6 md:p-8">
          <div className="brutalist-section-eyebrow">Bigger Jobs</div>
          <h3 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-2">A day or three. Still one written price.</h3>
          <p className="font-body text-base text-muted-foreground mb-5">
            Half down holds the date, the balance is due when it is finished. No draw schedules, no permits, no demolition.
          </p>
          <ul className="space-y-2">
            {biggerJobs.map((j) => (
              <li key={j.href + j.name}>
                <Link to={j.href} className="font-body text-lg text-foreground hover:text-primary inline-flex items-baseline gap-2">
                  {j.name} <span className="font-body text-sm text-muted-foreground">{j.days}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bento-card bg-foreground text-background p-6 md:p-8 flex flex-col">
          <div className="brutalist-section-eyebrow text-background/70">What We Don't Do</div>
          <h3 className="brutalist-headline text-2xl md:text-3xl text-background mb-2">Better to say it here than at your door.</h3>
          <ul className="space-y-3 mb-5">
            {notOffered.map((n) => (
              <li key={n.name} className="font-body text-base text-background/80">
                <span className="font-semibold text-background">{n.name}.</span> {n.detail}
              </li>
            ))}
          </ul>
          <Link to="/handyman" className="brutalist-cta-on-dark mt-auto w-fit">
            The full menu <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesOverview;
