// "How pricing works" (SYS-16): one block, one button. It replaced the "Three
// ways to start" cards, which all opened the same form, and took in the lower
// "How It Works" section, so the homepage explains price and process once.
// $345 is the only large figure; "free" and the $49 visit stay in body text.
// The rows are not links.
import { ArrowRight } from "lucide-react";
import { ESTIMATE, MINIMUM } from "@/data/coreServices";
import { site } from "@/data/site";

const STEPS = [
  "Send the form. Three fields, half a minute.",
  "A text from us arrives right away asking for 1–2 photos and your address.",
  "Your written price follows, usually within one business day. Evening and weekend visits available.",
];

const HowPricingWorks = () => (
  <section id="packages" className="py-10 md:py-14 bg-muted border-y border-border scroll-mt-24">
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
      <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-1">How pricing works</h2>
      <p className="font-body text-base md:text-lg text-muted-foreground mb-6">
        Asking is free. Nothing gets scheduled until you have approved one written price.
      </p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 rounded-[18px] border border-border bg-card p-6 md:p-8">
        <div className="space-y-5">
          <div>
            <p className="m-0 flex items-baseline gap-2.5">
              <span className="font-headline font-bold text-[40px] leading-none text-primary">{MINIMUM.price}</span>
              <span className="brutalist-headline text-lg md:text-xl text-foreground">minimum.</span>
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground m-0 mt-1.5">
              The floor for a small job. It buys {MINIMUM.hours} of work, so list everything you want done.
            </p>
          </div>
          <div>
            <p className="brutalist-headline text-lg md:text-xl text-foreground m-0">One written price.</p>
            <p className="font-body text-base md:text-lg text-muted-foreground m-0 mt-1">
              Larger jobs are quoted as a whole, in writing, off your photos. No hourly billing.
            </p>
          </div>
          <div>
            <p className="brutalist-headline text-lg md:text-xl text-foreground m-0">Free photo quote.</p>
            <p className="font-body text-base md:text-lg text-muted-foreground m-0 mt-1">
              We price most jobs from photos. Where photos fall short (water damage, decks), we'll suggest
              a {ESTIMATE.price} on-site visit, and that {ESTIMATE.price} is taken off the job.
            </p>
          </div>
        </div>

        <div>
          <h3 className="brutalist-section-eyebrow">What happens next</h3>
          <ol className="space-y-4 list-none p-0 m-0">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-start gap-3 font-body text-base md:text-lg text-foreground">
                <span className="flex-none inline-flex items-center justify-center h-7 w-7 rounded-full bg-foreground text-background font-body font-semibold text-sm mt-0.5">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-3">
        <a href="#quote" className="brutalist-cta w-fit">
          Get my price <ArrowRight className="h-5 w-5" />
        </a>
        <p className="font-body text-base md:text-lg text-muted-foreground m-0">
          or{" "}
          <a href={site.smsHref} className="text-primary underline underline-offset-4 font-semibold whitespace-nowrap">
            text photos to {site.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default HowPricingWorks;
