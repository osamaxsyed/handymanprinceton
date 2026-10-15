import { useNavigate } from "react-router-dom";
import { ArrowRight, Award, Shield, Star } from "lucide-react";
import { RATING } from "@/data/coreServices";
import { site } from "@/data/site";
import workImage from "@/assets/shelfWorkBench.jpg";

const CredentialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative heavy-border bg-muted aspect-[4/3] overflow-hidden">
            <img
              src={workImage}
              alt="Custom shelving and workbench built by the Princeton Handyman crew"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="brutalist-section-eyebrow">Licensed &amp; Insured</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Registered, Insured,<br />
              <span className="text-muted-foreground">and Reachable.</span>
            </h2>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Princeton Handyman is a brand of {site.legalName}, a registered New Jersey home improvement contractor that is bonded and insured, with more than fifteen years of repair and carpentry work behind it. You get one agreed price, a one-year labor warranty, and a phone number that a person answers.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 heavy-border bg-muted">
              <div className="p-5 text-center border-r-2 border-foreground">
                <Award className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <div className="font-headline font-black text-2xl text-foreground">NJ</div>
                <div className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground">HIC Registered</div>
              </div>
              <div className="p-5 text-center border-r-2 border-foreground">
                <Shield className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <div className="font-headline font-black text-2xl text-foreground">Full</div>
                <div className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground">Insured</div>
              </div>
              <div className="p-5 text-center">
                <Star className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <div className="font-headline font-black text-2xl text-foreground">{RATING.value}</div>
                <div className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground">Google · {RATING.count} reviews (EBH)</div>
              </div>
            </div>

            <p className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground mb-6">
              {site.license}
            </p>

            <button onClick={() => navigate("/about")} className="brutalist-cta-secondary">
              Who We Are <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
