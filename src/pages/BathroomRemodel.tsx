import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, MapPin, Phone, Wrench, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import locations from "@/data/locations.json";
import services from "@/data/services.json";

const BathroomRemodel = () => {
  const navigate = useNavigate();
  const bathroomService = services.find((s) => s.slug === "bathroom-remodel");
  const faqs = bathroomService?.faqs ?? [];
  const features = bathroomService?.features ?? [];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Bathroom Remodel in Princeton & Central NJ | Princeton Handyman"
        description="Bathroom remodels in Princeton and Central NJ. Tile, vanities, fixtures, lighting, tub-to-shower conversions. Licensed and insured. Free estimates."
        canonical="/bathroom-remodel"
        keywords="bathroom remodel, bathroom remodel princeton, bathroom remodeling princeton nj, bathroom contractor princeton, tub to shower conversion, bathroom remodel cranbury, bathroom remodel west windsor"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Wrench className="inline h-3 w-3 mr-2" />
              Full-Scope Bathroom Remodel
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Bathroom Remodel.
              <br />
              <span className="text-background/70">Princeton & Central NJ.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Tile, vanities, fixtures, lighting, and full layout updates. Licensed, bonded, insured. Most projects finish in 1 to 2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                Get a Free Estimate <ArrowRight className="h-4 w-4" />
              </button>
              <a href="tel:6095160098" className="brutalist-cta-secondary">
                <Phone className="h-4 w-4" />
                (609) 516-0098
              </a>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              What We Handle.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="bento-card bg-background p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base">{f}</span>
                </div>
              ))}
              <div className="bento-card bg-background p-5 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                <span className="font-body text-base">Tub-to-shower conversions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Three paths */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Pick Your Path</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Three Project Sizes.
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bento-card bg-background p-8 flex flex-col">
                <Clock className="h-8 w-8 text-foreground mb-4" />
                <h3 className="brutalist-headline text-xl text-foreground mb-3">1-Day Refresh</h3>
                <p className="font-body text-base text-muted-foreground mb-6 flex-grow leading-relaxed">
                  Single-sink vanity swap or fixture refresh, completed in one day. Lowe's concierge pickup option.
                </p>
                <Link to="/bathroom-refresh" className="brutalist-cta-secondary w-fit">
                  Learn About Refresh <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bento-card bg-foreground text-background p-8 flex flex-col">
                <Wrench className="h-8 w-8 text-background mb-4" />
                <h3 className="brutalist-headline text-xl text-background mb-3">Full Remodel</h3>
                <p className="font-body text-base text-background/80 mb-6 flex-grow leading-relaxed">
                  Tile, plumbing rough-ins, new shower systems, lighting, and layout changes. Typically 1 to 2 weeks.
                </p>
                <button onClick={() => navigate("/get-estimate")} className="brutalist-cta-on-dark w-fit">
                  Get an Estimate <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="bento-card bg-background p-8 flex flex-col">
                <DollarSign className="h-8 w-8 text-foreground mb-4" />
                <h3 className="brutalist-headline text-xl text-foreground mb-3">Premium Calculator</h3>
                <p className="font-body text-base text-muted-foreground mb-6 flex-grow leading-relaxed">
                  Building a high-end bathroom in Princeton, Cranbury, or Montgomery? Use the calculator for detailed pricing.
                </p>
                <Link to="/bathroom-remodel-calculator" className="brutalist-cta-secondary w-fit">
                  Open Calculator <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* City directory */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">By Town</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-4">
              Bathroom Remodels Across Princeton-Area NJ.
            </h2>
            <p className="font-body text-base text-muted-foreground mb-10 max-w-2xl">
              Serving 10 towns across Mercer, Middlesex, and Somerset counties.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 heavy-border bg-background">
              {locations.map((loc, i) => (
                <Link
                  key={loc.slug}
                  to={`/bathroom-remodel/${loc.slug}`}
                  className={`group p-5 flex items-center justify-between font-headline font-bold uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-colors
                    ${i % 5 !== 4 ? "lg:border-r-2 lg:last:border-r-0" : ""}
                    ${i % 3 !== 2 ? "md:border-r-2 lg:border-r-2" : ""}
                    ${i % 2 !== 1 ? "border-r-2 md:border-r-2" : ""}
                    border-b-2 border-foreground`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    {loc.name}
                  </span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="py-20 bg-muted heavy-border-b">
            <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
              <div className="brutalist-section-eyebrow">FAQ</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
                Bathroom Remodel Questions.
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bento-card bg-background p-6 md:p-8">
                    <h3 className="brutalist-headline text-lg md:text-xl text-foreground mb-3">{faq.question}</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Ready to Talk About Your Bathroom?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Free estimate, no pressure. Tell us what you want and we'll tell you what it takes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </button>
              <a href="tel:6095160098" className="brutalist-cta-on-dark">
                <Phone className="h-4 w-4" />
                Call (609) 516-0098
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BathroomRemodel;
