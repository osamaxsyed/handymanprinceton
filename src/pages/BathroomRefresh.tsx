import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BathroomRefreshConfigurator from "@/components/BathroomRefreshConfigurator";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BathroomRefresh = () => {
  const navigate = useNavigate();

  const process = [
    { num: "01", title: "Configure", body: "Select your service level and vanity size in our calculator." },
    { num: "02", title: "Shop Lowe's", body: "Choose your fixtures online and add them to your cart." },
    { num: "03", title: "Text Screenshot", body: "Send us your Lowe's cart screenshot to finalize." },
    { num: "04", title: "Transform", body: "We complete your bathroom in one day. Done." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="1-Day Bathroom Refresh Service"
        description="Transform your bathroom in just one day. Single-sink specialty with zero-hassle Lowe's concierge pickup. Get your instant estimate."
        canonical="/bathroom-refresh"
        keywords="bathroom refresh, one day bathroom remodel, bathroom remodel, single sink vanity, Lowe's bathroom, bathroom upgrade, quick bathroom makeover"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Calendar className="inline h-3 w-3 mr-2" />
              Productized Service
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              1-Day Bathroom
              <br />
              <span className="text-background/70">Refresh.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Transform your bathroom in a single day. Single-sink specialists with Lowe's concierge pickup and zero-hassle install.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Single-Day Completion",
                "Lowe's Concierge Pickup",
                "Pro-Grade Materials",
              ].map((badge) => (
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

        {/* Configurator */}
        <section className="py-16 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-8">
              <div className="brutalist-section-eyebrow">Get Your Estimate</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground">Configure Your Refresh</h2>
            </div>
            <BathroomRefreshConfigurator />
          </div>
        </section>

        {/* Full remodel CTA */}
        <section className="py-16 bg-muted heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="bento-card bg-background p-8 md:p-12 grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="brutalist-section-eyebrow">Bigger Project?</div>
                <h3 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-3">
                  Planning a Complete Bathroom Remodel?
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  For full renovations with tile work, custom features, and luxury finishes, use our Premium Bathroom Remodel Calculator for detailed pricing.
                </p>
              </div>
              <button onClick={() => navigate("/bathroom-remodel-calculator")} className="brutalist-cta whitespace-nowrap">
                Full Remodel Calculator <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Why Choose This</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Why The 1-Day Refresh?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                ["Single-Sink Specialists", "We've perfected single-sink transformations. Focused expertise = faster, cleaner results."],
                ["Zero-Hassle Lowe's Pickup", "Shop online; we handle pickup, inspection, and transport. No rental trucks, no heavy lifting."],
                ["Pro-Grade Materials", "We supply high-grade valves, supply lines, and sealants separately. Pro materials prevent leaks."],
                ["Transparent Pricing", "Estimate covers labor and logistics only. Fixtures billed at actual Lowe's retail + tax. No markup."],
              ].map(([title, body]) => (
                <div key={title} className="bento-card p-6">
                  <h3 className="brutalist-headline text-lg text-foreground mb-3">{title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <div className="brutalist-section-eyebrow">How It Works</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Four Simple Steps</h2>
              <div className="w-24 h-1 bg-foreground mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 heavy-border bg-background">
              {process.map((p, i) => (
                <div
                  key={p.num}
                  className={`p-8 md:p-10 relative group hover:bg-muted transition-colors ${
                    i < process.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-foreground" : ""
                  }`}
                >
                  <div className="absolute top-4 right-4 font-headline font-black text-5xl md:text-6xl text-foreground/10 group-hover:text-foreground/30 transition-colors">
                    {p.num}
                  </div>
                  <h3 className="brutalist-headline text-xl text-foreground mb-3 mt-2">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BathroomRefresh;
