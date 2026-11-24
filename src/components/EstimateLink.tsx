import { ArrowRight, ClipboardCheck } from "lucide-react";
import { ESTIMATE } from "@/data/coreServices";

/**
 * "See it in person first" option for bigger jobs: a $49 estimate requested via
 * the homepage quick form (online booking removed 2026-11-24, SYS-12), credited to the job. variant "bar" is the full-width strip
 * under the homepage offers; "inline" is a text link; "dark" sits on the
 * dark closing CTA bands.
 */
export default function EstimateLink({
  variant = "inline",
  className = "",
}: {
  variant?: "bar" | "inline" | "dark";
  className?: string;
}) {
  if (variant === "bar") {
    return (
      <div className={`bento-card p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 ${className}`}>
        <ClipboardCheck className="h-8 w-8 text-primary flex-shrink-0 hidden md:block" />
        <div className="flex-1 min-w-0">
          <p className="brutalist-headline text-xl md:text-2xl text-foreground m-0">
            Want someone to look at it first?
          </p>
          <p className="font-body text-lg text-muted-foreground m-0 mt-1">
            Request a {ESTIMATE.price} in-person estimate for a bigger job. You get one written price, and the {ESTIMATE.price} comes off the job if you go ahead.
          </p>
        </div>
        <a href={ESTIMATE.url} className="brutalist-cta-secondary w-fit flex-shrink-0">
          Request a {ESTIMATE.price} estimate <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    );
  }
  const tone = variant === "dark" ? "text-background" : "text-primary";
  return (
    <p className={`font-body text-base ${variant === "dark" ? "text-background/80" : "text-muted-foreground"} m-0 ${className}`}>
      Photos can't show it all?{" "}
      <a href={ESTIMATE.url} className={`${tone} underline underline-offset-4 font-semibold whitespace-nowrap`}>
        Request a {ESTIMATE.price} estimate
      </a>
      , credited to your job.
    </p>
  );
}
