import { useNavigate } from "react-router-dom";
import { ArrowRight, Hammer, Trees, Briefcase, Wrench, Home } from "lucide-react";
import generalRepairsImg from "@/assets/general-repairs.jpg";
import shelfWorkBenchImg from "@/assets/shelfWorkBench.jpg";
import bathroomRemodelImg from "@/assets/bathroom-remodel.jpg";
import kitchenRemodelImg from "@/assets/kitchen-remodel.jpg";

const ServicesOverview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 pb-6 heavy-border-b flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="brutalist-section-eyebrow">What We Build</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
              Structural Mastery
            </h2>
          </div>
          <p className="font-body text-base md:text-lg text-muted-foreground md:max-w-md">
            Outdoor structures and home repairs engineered for Central NJ weather, scale, and longevity.
          </p>
        </div>

        {/* Bento grid: 12 col, 2 rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[280px]">
          {/* PERGOLAS — large feature card */}
          <button
            onClick={() => navigate("/pergolas")}
            className="md:col-span-8 md:row-span-1 bento-card text-left group"
          >
            <img
              src={shelfWorkBenchImg}
              alt="Custom timber work"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent p-8 flex flex-col justify-end">
              <span className="bg-foreground text-background font-headline font-black uppercase tracking-wider text-[10px] px-3 py-1 w-max mb-4">
                Booking Next 4–6 Weeks
              </span>
              <h3 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-2">
                Custom Pergolas
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mb-4">
                Hand-built cedar and composite pergolas. Heavy-timber framing engineered for NJ snow loads and salt-air weather.
              </p>
              <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-2">
                View Specs <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>

          {/* CUSTOM SHEDS */}
          <button
            onClick={() => navigate("/custom-sheds")}
            className="md:col-span-4 bento-card text-left group"
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <Hammer className="h-8 w-8 text-foreground" />
                <span className="bg-muted text-foreground font-headline font-black uppercase tracking-wider text-[10px] px-2 py-1">
                  $5–15K
                </span>
              </div>
              <div>
                <h3 className="brutalist-headline text-xl md:text-2xl text-foreground mb-2">
                  Custom Sheds
                </h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground mb-3">
                  On-site builds — storage, garden, modern barn-style. Real construction, decades of life.
                </p>
                <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </button>

          {/* BACKYARD STUDIOS */}
          <button
            onClick={() => navigate("/backyard-studios")}
            className="md:col-span-6 bento-card text-left group"
          >
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center border-l-8 border-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-7 w-7 text-foreground" />
                <span className="font-headline font-black uppercase tracking-wider text-[10px] text-muted-foreground">
                  Bridge to ADU
                </span>
              </div>
              <h3 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-3">
                Backyard Studios
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground mb-4 max-w-md">
                Insulated, finished home offices and garden studios. The smart middle ground between "more space at home" and a full ADU.
              </p>
              <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                View Specs <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </button>

          {/* HANDYMAN */}
          <button
            onClick={() => navigate("/handyman-services")}
            className="md:col-span-3 bento-card bg-foreground text-background text-left group"
          >
            <img
              src={generalRepairsImg}
              alt="General repairs"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-multiply"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <Wrench className="h-7 w-7 text-background" />
              <div>
                <h3 className="brutalist-headline text-xl text-background mb-2">
                  Handyman
                </h3>
                <p className="font-body text-xs text-background/80 mb-3">
                  Repairs, fixes, and the small jobs that pile up.
                </p>
                <span className="font-headline font-bold uppercase tracking-wider text-xs text-background inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </button>

          {/* REMODELS */}
          <button
            onClick={() => navigate("/remodels")}
            className="md:col-span-3 bento-card text-left group"
          >
            <img
              src={kitchenRemodelImg}
              alt="Kitchen remodel"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent p-6 flex flex-col justify-end">
              <Home className="h-7 w-7 text-foreground mb-2" />
              <h3 className="brutalist-headline text-xl text-foreground mb-1">
                Remodels
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-2">
                Kitchens & bathrooms.
              </p>
              <span className="font-headline font-bold uppercase tracking-wider text-xs text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
