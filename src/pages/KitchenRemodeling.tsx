import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link, useNavigate } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const KitchenRemodeling = () => {
  const navigate = useNavigate();

  const cities = [
    "princeton",
    "south-brunswick",
    "cranbury",
    "plainsboro",
    "east-windsor",
    "west-windsor",
    "lawrence-township",
    "robbinsville",
    "pennington",
    "montgomery",
  ];

  const formatCity = (slug: string) =>
    slug
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Kitchen Remodeling in Princeton & Central NJ | Princeton Handyman"
        description="Licensed kitchen remodeling in Princeton and Central NJ. Cabinets, countertops, tile, plumbing and electrical coordination, finish carpentry. NJ HIC #13VH13918800."
        canonical="/kitchen-remodeling"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-foreground text-background py-20 md:py-28 heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Service</div>
            <h1 className="brutalist-headline text-4xl md:text-6xl text-background mb-6 leading-tight">
              Kitchen Remodeling
              <br />
              <span className="text-background/70">in Princeton & Central NJ</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/90 max-w-3xl border-l-4 border-background pl-5 py-1 leading-relaxed">
              Full kitchen renovations across Central New Jersey, handled by a fully licensed New Jersey home improvement contractor. From layout planning through cabinet install, countertops, tile, and final detailing, every step is coordinated and accountable. NJ HIC #13VH13918800.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 space-y-14">
            <div>
              <div className="brutalist-section-eyebrow">Scope</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                What's Included in a Kitchen Remodel
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                A typical kitchen remodel includes design consultation, demolition, cabinetry, countertops, tile backsplash, plumbing and electrical coordination, appliance installation, and finish carpentry. Trade specialties (plumbing, electrical, countertop fabrication) are coordinated through trusted subcontractors so the project moves on a single timeline.
              </p>
            </div>

            <div>
              <div className="brutalist-section-eyebrow">Timeline</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                Typical Timeline
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Most full kitchen remodels run 4 to 8 weeks from demo to final detailing. Timelines vary based on cabinet lead times, structural work, and finish complexity. A clear week-by-week schedule is part of every estimate.
              </p>
            </div>

            <div>
              <div className="brutalist-section-eyebrow">Pricing</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                Pricing Range
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Kitchen remodels typically range from $25,000 to $80,000+ depending on scope, finish tier, and structural changes. Estimates are itemized so you can see exactly where the money goes and adjust scope before signing.
              </p>
            </div>

            <div>
              <div className="brutalist-section-eyebrow">Service Area</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                Where We Work
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                We serve Princeton and surrounding Mercer-area towns. Click your town for local kitchen remodeling details:
              </p>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Link
                    key={city}
                    to={`/kitchen-remodeling/${city}`}
                    className="px-4 py-2 bg-muted text-foreground hover:bg-foreground hover:text-background border-2 border-foreground font-headline font-bold uppercase tracking-wider text-[11px] transition-colors"
                  >
                    {formatCity(city)}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background heavy-border p-8 md:p-10 text-center">
              <h3 className="brutalist-headline text-2xl md:text-3xl text-background mb-3">
                Schedule a Free Kitchen Estimate
              </h3>
              <p className="font-body text-base text-background/80 mb-6 max-w-md mx-auto">
                Walk through your project, see itemized pricing, and get a clear timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                  Get Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="tel:6095160098"
                  className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground active:translate-y-0.5 transition-all rounded-none"
                >
                  <Phone className="h-4 w-4" />
                  (609) 516-0098
                </a>
              </div>
            </div>

            {/* Related */}
            <div className="border-t-2 border-foreground pt-8">
              <div className="brutalist-section-eyebrow mb-4">Related Services</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/bathroom-remodel"
                  className="block p-5 border-2 border-foreground bg-muted hover:bg-foreground hover:text-background transition-colors group"
                >
                  <div className="brutalist-headline text-lg mb-1">Bathroom Remodeling</div>
                  <div className="font-body text-sm opacity-80">Full bathroom renovations.</div>
                </Link>
                <Link
                  to="/aging-in-place"
                  className="block p-5 border-2 border-foreground bg-muted hover:bg-foreground hover:text-background transition-colors group"
                >
                  <div className="brutalist-headline text-lg mb-1">Aging-in-Place</div>
                  <div className="font-body text-sm opacity-80">Modifications for long-term accessibility.</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KitchenRemodeling;
