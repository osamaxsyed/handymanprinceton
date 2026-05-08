import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link, useNavigate } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const AgingInPlace = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Aging-in-Place Home Modifications in Central NJ | Princeton Handyman"
        description="Aging-in-place home modifications across Central New Jersey. Walk-in showers, grab bars, wider doorways, no-step entries. Licensed NJ contractor pursuing CAPS certification. NJ HIC #13VH13918800."
        canonical="/aging-in-place"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-foreground text-background py-20 md:py-28 heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Service</div>
            <h1 className="brutalist-headline text-4xl md:text-6xl text-background mb-6 leading-tight">
              Aging-in-Place
              <br />
              <span className="text-background/70">Home Modifications</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/90 max-w-3xl border-l-4 border-background pl-5 py-1 leading-relaxed">
              Aging-in-place is the practice of adapting a home so its residents can stay there safely and comfortably as they age. We work with homeowners 55 and up, and with adult children helping aging parents, to plan and build modifications that preserve independence and prevent the most common in-home injuries. NJ HIC #13VH13918800.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 space-y-14">
            <div>
              <div className="brutalist-section-eyebrow">Common Modifications</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                What's Typically Included
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                The most common modifications cluster around mobility, balance, and bathroom safety:
              </p>
              <ul className="space-y-2 font-body text-base md:text-lg text-muted-foreground list-disc pl-6 leading-relaxed">
                <li>Walk-in and curbless showers with proper waterproofing</li>
                <li>Comfort-height toilets and reinforced wall blocking for grab bars</li>
                <li>Lever-style door handles in place of round knobs</li>
                <li>Wider doorways for walker and wheelchair access</li>
                <li>First-floor primary suites and no-step entries</li>
                <li>Improved lighting and non-slip flooring throughout</li>
              </ul>
            </div>

            <div>
              <div className="brutalist-section-eyebrow">Specialist</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                Why Choose a Specialist
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Aging-in-place work requires understanding both construction and the specific accessibility needs of older adults. We are pursuing CAPS (Certified Aging-in-Place Specialist) certification through the National Association of Home Builders, the recognized credential for this niche. Course completion is targeted for Summer 2026. Until then, we work closely with occupational therapists and elder care professionals to make sure every modification is grounded in real-world accessibility research, not guesswork.
              </p>
            </div>

            <div>
              <div className="brutalist-section-eyebrow">Bathroom-First</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                Bathroom-Focused Modifications
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                The bathroom is the highest-priority room for aging-in-place. Falls in the bathroom account for the largest share of in-home injuries among older adults, and most are preventable with the right modifications. Our{" "}
                <Link to="/bathroom-remodel" className="text-foreground font-semibold underline underline-offset-4 hover:no-underline">
                  bathroom remodeling
                </Link>{" "}
                work frequently includes aging-in-place elements: curbless showers, anti-scald valves, grab bar reinforcement, and improved lighting. If aging-in-place is the primary goal, the bathroom is usually where we start.
              </p>
            </div>

            <div>
              <div className="brutalist-section-eyebrow">Service Area</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
                Where We Work
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                We serve Princeton, South Brunswick, Cranbury, Plainsboro, East Windsor, West Windsor, Lawrence Township, Robbinsville, Pennington, and Montgomery Township. If you're nearby and don't see your town listed, give us a call.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background heavy-border p-8 md:p-10 text-center">
              <h3 className="brutalist-headline text-2xl md:text-3xl text-background mb-3">
                Schedule a Home Assessment
              </h3>
              <p className="font-body text-base text-background/80 mb-6 max-w-md mx-auto">
                Walk through your home with a licensed contractor and identify the modifications that matter most.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                  Schedule Assessment
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
                  <div className="font-body text-sm opacity-80">Where most aging-in-place projects start.</div>
                </Link>
                <Link
                  to="/about"
                  className="block p-5 border-2 border-foreground bg-muted hover:bg-foreground hover:text-background transition-colors group"
                >
                  <div className="brutalist-headline text-lg mb-1">About Us</div>
                  <div className="font-body text-sm opacity-80">Licensed, local, and accountable.</div>
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

export default AgingInPlace;
