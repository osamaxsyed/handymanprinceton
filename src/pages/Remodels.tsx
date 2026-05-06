import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Droplets, Hammer, Building, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import kitchenBeforeImage from "@/assets/kitchen-remodel-before.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import bathroomBeforeImage from "@/assets/bathroom-remodel-before.jpg";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useNavigate } from "react-router-dom";

const Remodels = () => {
  const navigate = useNavigate();

  const remodelServices = [
    { icon: Home, title: "Kitchen Remodels", description: "Updated countertops, custom cabinets, modern backsplash, and improved functionality." },
    { icon: Droplets, title: "Bathroom Remodels", description: "New tiles, modern fixtures, stylish vanities, and improved lighting." },
    { icon: Building, title: "Basement Remodels", description: "Convert unfinished basements into home offices, gyms, or additional living space." },
    { icon: Hammer, title: "Deck Rebuilds", description: "Restore or rebuild outdoor decks for entertaining and outdoor living." },
  ];

  const processSteps = [
    { num: "01", title: "Share Your Vision", body: "Submit your remodel ideas through our inquiry form or call to discuss goals." },
    { num: "02", title: "Walkthrough", body: "On-site walkthrough — we discuss vision, take measurements, provide recommendations." },
    { num: "03", title: "Estimate & Retainer", body: "Comprehensive written estimate. 20% retainer secures your spot on our schedule." },
    { num: "04", title: "Build", body: "Demolition to final touches, with regular communication every step of the way." },
  ];

  const projects = [
    { title: "Kitchen Remodel", image: kitchenImage, beforeImage: kitchenBeforeImage, category: "Kitchen" },
    { title: "Bathroom Renovation", image: bathroomImage, beforeImage: bathroomBeforeImage, category: "Bathroom" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Kitchen & Bathroom Remodels in Central NJ | Princeton Handyman"
        description="Expert kitchen and bathroom remodeling services in Princeton & Central NJ. Full renovations, tile work, vanity installs, cabinet upgrades & more."
        canonical="/remodels"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Small to Medium Renovations</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Remodels.
              <br />
              <span className="text-background/70">Excited to be Home Again.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              You don't need to buy a new house to love your space. A thoughtful remodel transforms how you feel about your home — kitchens, baths, basements, decks.
            </p>
            <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
              Inquire About Remodel Options <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Positioning */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-6">
            <div className="bento-card p-8 bg-muted">
              <div className="brutalist-section-eyebrow">The Challenge</div>
              <h2 className="brutalist-headline text-2xl text-foreground mb-4">Big shops won't take small jobs.</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Most remodel contractors focus on large-scale projects, leaving homeowners with modest remodels stuck doing it themselves or waiting indefinitely.
              </p>
            </div>
            <div className="bento-card p-8 bg-foreground text-background">
              <div className="brutalist-section-eyebrow text-background/70">Our Solution</div>
              <h2 className="brutalist-headline text-2xl text-background mb-4">We specialize in small to medium remodels.</h2>
              <p className="font-body text-background/85 leading-relaxed mb-4">
                Licensed, bonded, and insured general contractors who care about projects of all sizes — from a single bathroom to full basement build-outs.
              </p>
              <div className="flex items-center gap-2 font-headline font-bold uppercase tracking-wider text-xs">
                <CheckCircle2 className="h-4 w-4" />
                Licensed • Bonded • Insured
              </div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">What We Remodel</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Four Specialties</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {remodelServices.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="bento-card p-6 md:p-8 min-h-[260px] flex flex-col">
                    <Icon className="h-8 w-8 text-foreground mb-5" />
                    <h3 className="brutalist-headline text-lg md:text-xl text-foreground mb-3">{s.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-auto">{s.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent projects */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Recent Builds</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Before & After</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {projects.map((p) => (
                <div key={p.title} className="bento-card bg-background overflow-hidden">
                  <div className="relative h-72 border-b-2 border-foreground">
                    <BeforeAfterSlider beforeImage={p.beforeImage} afterImage={p.image} alt={p.title} />
                    <div className="absolute top-4 left-4 z-10 bg-foreground text-background font-headline font-black uppercase tracking-wider text-[10px] px-3 py-1">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="brutalist-headline text-xl text-foreground">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button onClick={() => navigate("/portfolio")} className="brutalist-cta-secondary">
                View Full Portfolio <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <div className="brutalist-section-eyebrow">The Process</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">From Vision to Build</h2>
              <div className="w-24 h-1 bg-foreground mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 heavy-border bg-background">
              {processSteps.map((p, i) => (
                <div
                  key={p.num}
                  className={`p-8 md:p-10 relative group hover:bg-muted transition-colors ${
                    i < processSteps.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-foreground" : ""
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

        {/* Pricing & Scheduling */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <div className="brutalist-section-eyebrow">No Surprises</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Pricing & Scheduling</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                ["Timeline", "Most remodels scheduled within 10 weeks of retainer. Flexible based on workload."],
                ["Materials", "We handle purchases for your convenience, or you can provide your own."],
                ["Payment", "Multiple payment methods accepted. 20% retainer secures your spot."],
                ["Communication", "Detailed estimates upfront. We communicate any changes before proceeding."],
              ].map(([title, body]) => (
                <div key={title} className="bento-card bg-background p-6">
                  <h3 className="brutalist-headline text-xl text-foreground mb-3">{title}</h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Ready to Start?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Free consultation. We'll discuss your vision and what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:6095160098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 516-0098
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Remodels;
