// EBH footer, ported for Princeton: truck mark, services, towns by GSC demand
// order, contact column, LLC attribution.
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import site from "@/data/site";

const Footer = () => {
  const services = [
    { name: "Tub-to-Shower Conversion", href: "/tub-to-shower-conversion" },
    { name: "Bathroom Remodeling", href: "/bathroom-remodel" },
    { name: "Walk-In Showers", href: "/walk-in-showers" },
    { name: "Grab Bar Installation", href: "/grab-bar-installation" },
    { name: "Handyman Visit ($295)", href: "/handyman" },
    { name: "Drywall Repair", href: "/drywall-repair" },
    { name: "Commercial Handyman", href: "/commercial-handyman" },
    { name: "Property Managers", href: "/property-managers" },
  ];

  // Demand order from GSC (REBUILD_SPEC): Princeton via the homepage itself.
  const serviceAreas = [
    { name: "Princeton", slug: "princeton" },
    { name: "West Windsor", slug: "west-windsor" },
    { name: "Robbinsville", slug: "robbinsville" },
    { name: "Lawrence Township", slug: "lawrence-township" },
    { name: "Plainsboro", slug: "plainsboro" },
    { name: "South Brunswick", slug: "south-brunswick" },
  ];

  return (
    <footer className="bg-background border-t border-border" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/mark-truck-red.png" alt="Illustration of the red work truck" className="w-[132px] h-auto mb-3.5" />
          <p className="font-body text-[12.5px] tracking-[0.2em] uppercase text-[#795B41] font-semibold mb-0.5">
            Princeton
          </p>
          <p className="font-headline font-bold text-2xl tracking-[-0.01em] text-foreground mb-3.5">
            Handyman<span className="text-primary">.</span>
          </p>
          <p className="font-body text-[17px] leading-relaxed text-muted-foreground">
            Owner-led craftsmanship with big-company systems: flat prices, on-my-way texts, a
            one-year warranty. Operated by {site.legalName}.
          </p>
        </div>

        <div>
          <p className="brutalist-section-eyebrow mb-3">Services</p>
          <ul className="space-y-2 list-none p-0 m-0">
            {services.map((s) => (
              <li key={s.href}>
                <Link to={s.href} className="font-body text-[17px] text-muted-foreground hover:text-primary transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="brutalist-section-eyebrow mb-3">Where I work</p>
          <ul className="space-y-2 list-none p-0 m-0">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link to={`/service-areas/${a.slug}`} className="font-body text-[17px] text-muted-foreground hover:text-primary transition-colors">
                  {a.name}, NJ
                </Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className="font-body text-[17px] font-semibold text-foreground hover:text-primary transition-colors">
                All towns &rarr;
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="brutalist-section-eyebrow mb-3">Reach me</p>
          <p className="mb-1">
            <a href={site.phoneHref} className="font-body text-xl font-semibold text-primary hover:text-[#7E1215] no-underline">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mb-4">
            <a href={site.smsHref} className="font-body text-[17px] text-muted-foreground hover:text-primary no-underline">
              Text a photo of your job
            </a>
          </p>
          <p className="inline-flex items-center gap-2 font-body text-[17px] text-[#2E4A3B] font-semibold mb-1.5">
            <ShieldCheck className="h-[19px] w-[19px]" />
            Licensed &amp; Insured
          </p>
          <p className="font-body text-[17px] text-muted-foreground m-0">{site.license}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-8 pb-8">
        <div className="pt-5 border-t border-border flex flex-wrap justify-between gap-3">
          <p className="font-body text-[16px] text-muted-foreground m-0">
            &copy; {new Date().getFullYear()} {site.brand}. Estimates are free and the
            price is agreed before work starts.
          </p>
          <p className="font-body text-[16px] text-muted-foreground m-0">
            <Link to="/careers" className="hover:text-primary">We're Hiring</Link>
            {" "}&middot;{" "}
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            {" "}&middot;{" "}
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
