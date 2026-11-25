import { ArrowRight, ClipboardCheck } from "lucide-react";
import { ESTIMATE } from "@/data/coreServices";

/**
 * The $49 on-site visit, stated once so nobody is surprised by it. The customer
 * does not pick it (SYS-16): they send the same quick form as everyone else and
 * we suggest the visit when photos fall short. The link goes to the form on the
 * page it sits on (#quote); pass href="/#quote" on a page without the form.
 * variant "bar" is a full-width strip; "inline" is a text line; "dark" sits on
 * the dark closing CTA bands.
 */
export default function EstimateLink({
  variant = "inline",
  className = "",
  href = "#quote",
}: {
  variant?: "bar" | "inline" | "dark";
  className?: string;
  href?: string;
}) {
  if (variant === "bar") {
    return (
      <div className={`bento-card p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 ${className}`}>
        <ClipboardCheck className="h-8 w-8 text-primary flex-shrink-0 hidden md:block" />
        <div className="flex-1 min-w-0">
          <p className="brutalist-headline text-xl md:text-2xl text-foreground m-0">
            More than a photo can show?
          </p>
          <p className="font-body text-lg text-muted-foreground m-0 mt-1">
            Send the request regardless. If the job has to be seen first, we may suggest a {ESTIMATE.price} on-site visit. It is one written price either way, and the {ESTIMATE.price} is taken off the job if you go ahead.
          </p>
        </div>
        <a href={href} className="brutalist-cta-secondary w-fit flex-shrink-0">
          Get my price <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    );
  }
  const tone = variant === "dark" ? "text-background" : "text-primary";
  return (
    <p className={`font-body text-base ${variant === "dark" ? "text-background/80" : "text-muted-foreground"} m-0 ${className}`}>
      More than a photo can show?{" "}
      <a href={href} className={`${tone} underline underline-offset-4 font-semibold whitespace-nowrap`}>
        Send the request regardless
      </a>
      . We may suggest a {ESTIMATE.price} on-site visit, credited to your job.
    </p>
  );
}
