import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BathroomRemodelCalculator from "@/components/BathroomRemodelCalculator";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BathroomRemodelCalculatorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Bathroom Remodel Cost Calculator | Princeton Handyman"
        description="Get an instant estimate for your bathroom renovation. Premium bathroom remodels for Princeton, Plainsboro, West Windsor, and Central NJ. Calculate your project cost in seconds."
        canonical="/bathroom-remodel-calculator"
        keywords="bathroom remodel cost, bathroom renovation calculator, bathroom remodel estimate, master bath remodel, luxury bathroom, bathroom cost calculator, NJ bathroom contractor"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Calendar className="inline h-3 w-3 mr-2" />
              Cost Calculator
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Bathroom Remodel
              <br />
              <span className="text-background/70">Cost Calculator.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Instant, personalized estimate for your bathroom renovation. From powder rooms to luxury master baths.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Free Estimate", "No Obligation", "Premium Results"].map((badge) => (
                <span
                  key={badge}
                  className="font-headline font-bold uppercase tracking-wider text-[10px] text-background border-2 border-background px-3 py-1.5"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-8">
              <div className="brutalist-section-eyebrow">Configure Your Project</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground">Build Your Estimate</h2>
            </div>
            <BathroomRemodelCalculator />
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Why Choose Us</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Why Princeton Handyman</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                ["15+ Years Experience", "Licensed and insured professionals with over 15 years of bathroom renovation experience throughout Central NJ."],
                ["Premium Quality", "Serving Princeton, Plainsboro, West Windsor, and surrounding affluent communities with high-end craftsmanship."],
                ["Transparent Pricing", "No hidden fees. Detailed quotes with clear breakdowns of materials, labor, and timeline."],
                ["Efficient Execution", "Most bathroom remodels completed in 1–3 weeks with minimal disruption to your daily routine."],
              ].map(([title, body]) => (
                <div key={title} className="bento-card bg-background p-6">
                  <h3 className="brutalist-headline text-lg text-foreground mb-3">{title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick refresh CTA */}
        <section className="py-16 bg-background heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="bento-card p-8 md:p-12 grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="brutalist-section-eyebrow">Smaller Project?</div>
                <h3 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-3">
                  Need a Quicker Bathroom Refresh?
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Not ready for a full remodel? Our 1-Day Bathroom Refresh offers fast, affordable updates starting at just $350.
                </p>
              </div>
              <button onClick={() => navigate("/bathroom-refresh")} className="brutalist-cta whitespace-nowrap">
                1-Day Refresh <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10 text-center">
            <div className="brutalist-section-eyebrow text-background/70">Premium Service Areas</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-8">
              Serving Premium Homes Throughout Central NJ
            </h2>
            <p className="font-body text-base text-background/80 mb-10">
              High-end bathroom renovations for discerning homeowners in:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Princeton", "Plainsboro", "West Windsor", "Lawrence Township", "Montgomery",
                "Skillman", "Hopewell Borough", "Pennington", "Kingston", "South Brunswick",
              ].map((city) => (
                <span
                  key={city}
                  className="font-headline font-bold uppercase tracking-wider text-xs text-background border-2 border-background px-4 py-2"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BathroomRemodelCalculatorPage;
