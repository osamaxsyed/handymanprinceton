import { Phone, Star, MessageSquare, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-osama.jpg";
import { RATING, RATING_NOTE, BOOKING_URL } from "@/data/coreServices";
import { site } from "@/data/site";

// 2026-11-19: the quick form is Housecall Pro's lead form (iframe), so a
// request lands in HCP's Job inbox + Pipeline instead of an email. Heights
// measured from the live form: 876px at 280px wide, 744px at 420px.
const HCP_LEAD_FORM_URL =
  "https://book.housecallpro.com/lead-form/Central-Jersey-Home-Services-LLC/5b5ad57894ac4416b896c6cdd90c907e";

// Hero with dual conversion paths (EBH structure): Call/Text primary on the
// left, a 3-field quick form on the right for the segment that won't call.
// The Google rating badge is honest about where the reviews came from:
// Princeton has no GBP yet, so the figure is the LLC's East Brunswick profile.
const Hero = () => {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <p className="brutalist-section-eyebrow mb-3">Princeton &amp; Mercer County, New Jersey</p>
            <h1 className="font-headline font-semibold text-4xl md:text-5xl leading-[1.14] tracking-[-0.015em] text-foreground mb-5">
              Licensed Handyman in Princeton, NJ
              <span className="block text-muted-foreground mt-1">One flat price, settled before we start.</span>
            </h1>
            <p className="font-body text-xl leading-relaxed text-muted-foreground max-w-xl mb-7">
              Sticking doors, drywall patches, TV mounts, deck boards, dripping faucets, the list on
              the fridge. Princeton, West Windsor, Plainsboro, Lawrence, and Montgomery. $345 visit,
              up to two hours of work. Owner-run, not a franchise.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-secondary">
                <MessageSquare className="h-5 w-5" />
                Text Us a Photo
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-5 mt-2 border-t border-border">
              {/* Google rating as a visual badge, attributed to the profile it came from */}
              <div className="bento-card px-4 py-3 flex items-center gap-3">
                <span className="font-headline font-bold text-2xl text-foreground leading-none">{RATING.value}</span>
                <span>
                  <span className="inline-flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="#B98B3E" color="#B98B3E" strokeWidth={1} />
                    ))}
                  </span>
                  <span className="block font-body text-sm text-muted-foreground">{RATING.count} Google reviews {RATING_NOTE}</span>
                </span>
              </div>
              <div className="font-body text-[17px] text-foreground/85">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-[18px] w-[18px] text-[#2E4A3B]" />
                  Licensed &amp; Insured
                </span>
                <span className="block text-muted-foreground text-base">{site.license}</span>
              </div>
            </div>
          </div>

          <div className="bento-card overflow-hidden">
            <img src={heroImage} alt="Osama, owner of Princeton Handyman, at work on a job"
              className="w-full h-48 md:h-56 object-cover object-[65%_30%]" />
            <p className="font-body text-[15px] text-muted-foreground px-6 md:px-8 pt-3 m-0">
              Osama, the owner. Licensed, insured, and when you call, we pick up.
            </p>
            <div className="p-6 md:p-8 pt-4">
            <iframe
              src={HCP_LEAD_FORM_URL}
              title="Request a visit"
              className="block w-full h-[900px] md:h-[780px] border-0"
            />
            <p className="font-body text-sm text-muted-foreground mt-3 m-0">
              Prefer to pick a time yourself?{" "}
              <a href={BOOKING_URL} className="text-primary underline">Book online</a>.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk-reversal strip: the guarantees in one band */}
      <section className="bg-foreground text-background py-3.5">
        <div className="w-full max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 font-body text-[15.5px] text-background/90">
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Price settled before we start</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Materials on the quote</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />One-year labor warranty</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Licensed &amp; insured, {site.license}</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
