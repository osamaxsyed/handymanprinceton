import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { CORE_TOWNS } from "@/data/coreServices";
import { site } from "@/data/site";

const Footer = () => {
  const services = [
    { name: "Handyman Visit", href: "/handyman" },
    { name: "Drywall Repair", href: "/drywall-repair" },
    { name: "Doors & Locks", href: "/doors" },
    { name: "TV Mounting & Assembly", href: "/tv-mounting" },
    { name: "Deck & Fence Repair", href: "/deck-fence-repair" },
    { name: "Tile, Grout & Caulk", href: "/tile-grout-caulk" },
    { name: "Fixture & Faucet Swaps", href: "/fixture-swaps" },
    { name: "Commercial Handyman", href: "/commercial-handyman" },
    { name: "Property Managers", href: "/property-managers" },
  ];

  const serviceAreas = CORE_TOWNS;

  return (
    <footer className="bg-background border-t border-border" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/mark-truck-red.png" alt="Illustration of the red Toyota Tacoma work truck" className="w-[132px] h-auto mb-3.5" />
          <p className="font-body text-[12.5px] tracking-[0.2em] uppercase text-[#795B41] font-semibold mb-0.5">
            Princeton
          </p>
          <p className="font-headline font-bold text-2xl tracking-[-0.01em] text-foreground mb-3.5">
            Handyman<span className="text-primary">.</span>
          </p>
          <p className="font-body text-[17px] leading-relaxed text-muted-foreground">
            Small-job repairs for Princeton and Mercer County at a price you know before we start.
            On-my-way texts, a one-year labor warranty, and a real person on the phone.
            Operated by {site.legalName}.
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
          <p className="brutalist-section-eyebrow mb-3">Towns We Serve</p>
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
          <p className="brutalist-section-eyebrow mb-3">Reach Us</p>
          <p className="mb-1">
            <a href={site.phoneHref} className="font-body text-xl font-semibold text-primary hover:text-[#7E1215] no-underline">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mb-4">
            <a href={site.smsHref} className="font-body text-[17px] text-muted-foreground hover:text-primary no-underline">
              Text us a photo of the job
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
            &copy; {new Date().getFullYear()} {site.brand}. Quotes are free. The labor price is
            settled before any work starts; materials are part of the same quote.
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
