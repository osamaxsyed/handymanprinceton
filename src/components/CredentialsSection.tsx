import { useNavigate } from "react-router-dom";
import { ArrowRight, Award, Shield, Star } from "lucide-react";
import excavatorImage from "@/assets/excavator.png";

const CredentialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative heavy-border bg-muted aspect-[4/3] overflow-hidden">
            <img
              src={excavatorImage}
              alt="Princeton Handyman job site in Central NJ"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="brutalist-section-eyebrow">Owner-Operated</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Licensed, Local, and<br />
              <span className="text-muted-foreground">Built by Hand.</span>
            </h2>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Princeton Handyman is operated by Osama Syed under Central Jersey Home Services LLC, a fully licensed New Jersey home improvement contractor. Backed by over 15 years of hands-on construction and home renovation experience across Central NJ. Locally owned, fully insured, and accountable for every job.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 heavy-border bg-muted">
              <div className="p-5 text-center border-r-2 border-foreground">
                <Award className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <div className="font-headline font-black text-2xl text-foreground">NJ</div>
                <div className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground">Licensed</div>
              </div>
              <div className="p-5 text-center border-r-2 border-foreground">
                <Shield className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <div className="font-headline font-black text-2xl text-foreground">Full</div>
                <div className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground">Insured</div>
              </div>
              <div className="p-5 text-center">
                <Star className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <div className="font-headline font-black text-2xl text-foreground">5.0</div>
                <div className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground">Google</div>
              </div>
            </div>

            <p className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground mb-6">
              NJ HIC #13VH13918800
            </p>

            <button onClick={() => navigate("/about")} className="brutalist-cta-secondary">
              Read Our Story <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
