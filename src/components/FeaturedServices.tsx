import { Link } from "react-router-dom";
import { ArrowRight, Grid3x3, Sparkles } from "lucide-react";
import shelfEb from "@/assets/shelfEb.png";
import bathroomRemodel from "@/assets/bathroom-remodel.jpg";

const FeaturedServices = () => {
  const services = [
    {
      title: "Custom Garage Storage",
      eyebrow: "Specialty Build",
      description:
        "Custom-built storage racks engineered to your garage's exact dimensions. Configure dimensions and capacity in our interactive builder.",
      icon: Grid3x3,
      link: "/rack-configurator",
      image: shelfEb,
    },
    {
      title: "1-Day Bathroom Refresh",
      eyebrow: "Productized Service",
      description:
        "Single-sink bathroom transformations completed in one day. Lowe's concierge pickup, professional install, zero shortcuts.",
      icon: Sparkles,
      link: "/bathroom-refresh",
      image: bathroomRemodel,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background heavy-border-t">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 pb-6 heavy-border-b">
          <div className="brutalist-section-eyebrow">Our Specialties</div>
          <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
            Productized Builds
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to={s.link}
                className="bento-card group block min-h-[420px]"
              >
                <div className="aspect-[16/9] bg-muted overflow-hidden border-b-2 border-foreground">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="h-5 w-5 text-foreground" />
                    <span className="font-headline font-black uppercase tracking-wider text-[10px] text-muted-foreground">
                      {s.eyebrow}
                    </span>
                  </div>
                  <h3 className="brutalist-headline text-xl md:text-2xl text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    {s.description}
                  </p>
                  <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Get Started <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
