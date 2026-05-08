import { useNavigate } from "react-router-dom";
import { ArrowRight, Bath, ChefHat, Heart, Home, Wrench, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import bathroomRemodelImg from "@/assets/bathroom-remodel.jpg";
import kitchenRemodelImg from "@/assets/kitchen-remodel.jpg";
import generalRepairsImg from "@/assets/general-repairs.jpg";

const ServicesOverview = () => {
  const navigate = useNavigate();

  const additionalServices = [
    { name: "Handyman Services", path: "/handyman-services" },
    { name: "Home Repairs", path: "/home-repairs/princeton" },
    { name: "Drywall Repair", path: "/drywall-repair/princeton" },
    { name: "Carpentry", path: "/carpentry-services/princeton" },
    { name: "Cabinet Installation", path: "/cabinet-installation/princeton" },
    { name: "Door Installation", path: "/door-installation/princeton" },
    { name: "Flooring Installation", path: "/flooring-installation/princeton" },
    { name: "Deck Staining", path: "/deck-staining/princeton" },
    { name: "Fence Repair", path: "/fence-repair/princeton" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 pb-6 heavy-border-b flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="brutalist-section-eyebrow">What We Do</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
              Renovations & Repairs
            </h2>
          </div>
          <p className="font-body text-base md:text-lg text-muted-foreground md:max-w-md">
            Bath, kitchen, aging-in-place, and ADUs. Plus the everyday handyman work in between.
          </p>
        </div>

        {/* Featured 4 — bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[280px] mb-10">
          {/* BATHROOM REMODELING — large feature card */}
          <button
            onClick={() => navigate("/bathroom-remodel")}
            className="md:col-span-8 bento-card text-left group"
          >
            <img
              src={bathroomRemodelImg}
              alt="Bathroom remodel"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent p-8 flex flex-col justify-end">
              <span className="bg-foreground text-background font-headline font-black uppercase tracking-wider text-[10px] px-3 py-1 w-max mb-4">
                Featured Service
              </span>
              <h3 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-2">
                Bathroom Remodeling
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mb-4">
                Full bathroom renovations: tile, vanities, fixtures, lighting, and tub-to-shower conversions. Coordinated start to finish.
              </p>
              <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-2">
                View Service <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>

          {/* KITCHEN REMODELING */}
          <button
            onClick={() => navigate("/kitchen-remodeling")}
            className="md:col-span-4 bento-card text-left group"
          >
            <img
              src={kitchenRemodelImg}
              alt="Kitchen remodel"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent p-6 flex flex-col justify-between">
              <ChefHat className="h-8 w-8 text-foreground" />
              <div>
                <h3 className="brutalist-headline text-xl md:text-2xl text-foreground mb-2">
                  Kitchen Remodeling
                </h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground mb-3">
                  Cabinets, countertops, tile, and finish carpentry.
                </p>
                <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </button>

          {/* AGING-IN-PLACE */}
          <button
            onClick={() => navigate("/aging-in-place")}
            className="md:col-span-6 bento-card text-left group"
          >
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center border-l-8 border-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-7 w-7 text-foreground" />
                <span className="font-headline font-black uppercase tracking-wider text-[10px] text-muted-foreground">
                  Specialty
                </span>
              </div>
              <h3 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-3">
                Aging-in-Place
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground mb-4 max-w-md">
                Walk-in showers, grab bars, wider doorways, and modifications that let homeowners stay in their home long-term. Pursuing CAPS certification through NAHB.
              </p>
              <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                View Service <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </button>

          {/* ADU (external) */}
          <a
            href="https://gardenstateadu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 bento-card bg-foreground text-background text-left group block"
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <Home className="h-7 w-7 text-background" />
                <ExternalLink className="h-4 w-4 text-background/70" />
              </div>
              <div>
                <h3 className="brutalist-headline text-xl text-background mb-2">
                  ADUs
                </h3>
                <p className="font-body text-xs text-background/80 mb-3">
                  Accessory dwelling units, built through Garden State ADU.
                </p>
                <span className="font-headline font-bold uppercase tracking-wider text-xs text-background inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Visit <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </a>

          {/* HANDYMAN */}
          <button
            onClick={() => navigate("/handyman-services")}
            className="md:col-span-3 bento-card text-left group"
          >
            <img
              src={generalRepairsImg}
              alt="General repairs"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent p-6 flex flex-col justify-end">
              <Wrench className="h-7 w-7 text-foreground mb-2" />
              <h3 className="brutalist-headline text-xl text-foreground mb-1">
                Handyman
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-2">
                Repairs, fixes, and the small jobs that pile up.
              </p>
              <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </button>
        </div>

        {/* Additional services chip list */}
        <div className="border-t-2 border-foreground pt-8">
          <div className="brutalist-section-eyebrow mb-4">Additional Services</div>
          <div className="flex flex-wrap gap-2">
            {additionalServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="px-4 py-2 bg-muted text-foreground hover:bg-foreground hover:text-background border-2 border-foreground font-headline font-bold uppercase tracking-wider text-[11px] transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
