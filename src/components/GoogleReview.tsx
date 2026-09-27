// A single real Google review, styled per the redesign. Quotes come verbatim
// from the GBP export — never edit review text beyond truncation. On this site
// every review was earned under the East Brunswick Handyman profile (same LLC,
// same crew); the `detail` prop carries that attribution.
import { Star } from "lucide-react";

type Props = {
  quote: string;
  name: string;
  detail?: string; // e.g. "Pantry shelving, via East Brunswick Handyman"
};

const GoogleReview = ({ quote, name, detail }: Props) => (
  <blockquote className="bento-card p-6 md:p-8 m-0">
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-[18px] w-[18px]" fill="#B98B3E" color="#B98B3E" strokeWidth={1} />
      ))}
    </div>
    <p className="font-body text-lg leading-relaxed text-foreground/90 mb-4">{quote}</p>
    <footer className="font-body text-base text-muted-foreground">
      {name}
      {detail ? <span> &middot; {detail}</span> : null}
      <span> &middot; Google review</span>
    </footer>
  </blockquote>
);

export default GoogleReview;
