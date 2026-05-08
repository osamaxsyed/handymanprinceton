import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import kitchenBeforeImage from "@/assets/kitchen-remodel-before.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import bathroomBeforeImage from "@/assets/bathroom-remodel-before.jpg";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useNavigate } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Modern Kitchen Renovation",
      location: "Central NJ",
      description: "Complete kitchen transformation with new cabinets, quartz countertops, subway tile backsplash, and stainless steel appliances.",
      image: kitchenImage,
      beforeImage: kitchenBeforeImage,
      hasSlider: true,
      timeline: "3 Weeks",
      services: ["Kitchen Remodel", "Electrical", "Plumbing", "Painting"],
    },
    {
      title: "Luxury Bathroom Upgrade",
      location: "Central NJ",
      description: "Master bathroom remodel featuring Kohler bathtub, vanity, porcelain floors, and custom tile work.",
      image: bathroomImage,
      beforeImage: bathroomBeforeImage,
      hasSlider: true,
      timeline: "2 Weeks",
      services: ["Bathroom Remodel", "Tiling", "Plumbing", "Electrical"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Project Portfolio | Princeton Handyman"
        description="See completed kitchen remodels, bathroom remodels, and home repair projects across Princeton, Plainsboro, West Windsor & Central NJ. Before & after photos."
        canonical="/portfolio"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Recent Builds</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Portfolio.
              <br />
              <span className="text-background/70">Real Builds, Real Homes.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
              A close look at the kitchens, bathrooms, and renovations we've built. Real photos, real timelines, real materials.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 space-y-16">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className={`heavy-border bg-background grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div
                  className={`relative h-80 lg:h-auto min-h-[420px] border-b-2 lg:border-b-0 ${
                    i % 2 === 1 ? "lg:col-start-2 lg:border-l-2" : "lg:border-r-2"
                  } border-foreground`}
                >
                  {p.hasSlider && p.beforeImage ? (
                    <BeforeAfterSlider beforeImage={p.beforeImage} afterImage={p.image} alt={p.title} />
                  ) : (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-headline font-black uppercase tracking-wider text-[10px] bg-foreground text-background px-3 py-1">
                      {p.location}
                    </span>
                    <span className="font-headline font-black uppercase tracking-wider text-[10px] bg-muted text-foreground px-3 py-1 border-2 border-foreground">
                      {p.timeline}
                    </span>
                  </div>
                  <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-4">{p.title}</h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{p.description}</p>

                  <div className="mb-6">
                    <div className="brutalist-section-eyebrow mb-3">Services Provided</div>
                    <div className="flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <span
                          key={s}
                          className="font-headline font-bold uppercase tracking-wider text-[10px] text-foreground border-2 border-foreground px-2 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button onClick={() => navigate("/get-estimate")} className="brutalist-cta-secondary w-fit">
                    Start Your Project <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Ready to Build?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Let's discuss your project and what's possible. Free estimate, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
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

export default Portfolio;
