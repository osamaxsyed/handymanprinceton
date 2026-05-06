import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Pergolas", href: "/pergolas" },
    { name: "Custom Sheds", href: "/custom-sheds" },
    { name: "Backyard Studios", href: "/backyard-studios" },
    { name: "Handyman Services", href: "/handyman-services" },
    { name: "Remodels", href: "/remodels" },
    { name: "Book Quick Repair", href: "/book-repair" },
  ];

  const serviceAreas = [
    { name: "Princeton", slug: "princeton" },
    { name: "Plainsboro", slug: "plainsboro" },
    { name: "West Windsor", slug: "west-windsor" },
    { name: "Lawrence Township", slug: "lawrence-township" },
    { name: "Montgomery", slug: "montgomery" },
    { name: "Pennington", slug: "pennington" },
  ];

  return (
    <footer className="bg-foreground text-background heavy-border-t" role="contentinfo">
      <div className="w-full px-6 md:px-10 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Brand */}
          <div>
            <div className="font-headline font-black italic tracking-tighter text-xl uppercase mb-6">
              Princeton / Handyman
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Licensed, bonded, insured. 15+ years building, repairing, and remodeling across Central New Jersey.
            </p>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <span className="font-headline font-bold uppercase tracking-wider text-xs">Licensed • Bonded • Insured</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-headline font-black uppercase tracking-wider text-sm mb-5 pb-3 border-b-2 border-background/20">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    to={s.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:underline underline-offset-4 decoration-2 transition-opacity"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-headline font-black uppercase tracking-wider text-sm mb-5 pb-3 border-b-2 border-background/20">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/service-areas/${a.slug}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:underline underline-offset-4 decoration-2 transition-opacity"
                  >
                    {a.name}, NJ
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm font-headline font-bold uppercase tracking-wider hover:underline underline-offset-4 decoration-2"
                >
                  All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline font-black uppercase tracking-wider text-sm mb-5 pb-3 border-b-2 border-background/20">
              Contact
            </h4>
            <div className="space-y-4 text-sm opacity-90">
              <a href="tel:6095160098" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="font-headline font-bold tracking-wider">(609) 516-0098</span>
              </a>
              <a
                href="mailto:eastbrunswickhandyman@gmail.com"
                className="flex items-center gap-3 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs">eastbrunswickhandyman@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Central NJ — Mercer County</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon–Fri 7AM–6PM</p>
                  <p className="opacity-75 text-xs">Sat 8AM–4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-background/20">
        <div className="w-full px-6 md:px-10 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-headline font-bold uppercase tracking-wider text-xs opacity-70">
            © {new Date().getFullYear()} Princeton Handyman. Forged in Central NJ.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <Link to="/privacy" className="font-headline font-bold uppercase tracking-wider opacity-70 hover:opacity-100 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link to="/terms" className="font-headline font-bold uppercase tracking-wider opacity-70 hover:opacity-100 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link to="/sitemap" className="font-headline font-bold uppercase tracking-wider opacity-70 hover:opacity-100 hover:underline underline-offset-4">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
