import { Calendar, ArrowRight, Phone, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-handyman.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden heavy-border-b bg-foreground">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional handyman at work in Central New Jersey"
          className="w-full h-full object-cover object-[center_35%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/80"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <h1 className="brutalist-headline text-5xl md:text-7xl lg:text-8xl text-background leading-[0.95] mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          Princeton
          <br />
          <span className="text-background/80">Bathroom Remodeling</span>
        </h1>

        <p className="font-headline font-bold uppercase tracking-wider text-sm md:text-base text-background/80 mb-8">
          Kitchens · ADUs · Aging-in-Place · Home Repairs
        </p>

        <div className="inline-flex flex-col gap-2 mb-8 bg-foreground/40 backdrop-blur-sm px-5 py-4 border-l-4 border-background">
          <span className="font-headline font-black uppercase tracking-[0.15em] text-[10px] md:text-xs text-background">
            Licensed • Bonded • Insured
          </span>
          <span className="font-headline font-bold uppercase tracking-wider text-[10px] text-background/70">
            NJ HIC #13VH13918800
          </span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5"
                  fill="#fbbc04"
                  color="#fbbc04"
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="font-headline font-bold uppercase tracking-wider text-[10px] text-background/80">
              5.0 on Google
            </span>
          </div>
        </div>

        <p className="font-body text-lg md:text-xl text-background/90 max-w-2xl mb-10 border-l-4 border-background pl-5 py-1 leading-relaxed">
          Bathroom and kitchen remodels, ADUs, aging-in-place, and the everyday repairs in between.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
            <Calendar className="h-4 w-4" />
            Request an Estimate
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
    </section>
  );
};

export default Hero;
