// Mobile-only fixed bottom bar: Call + Text. Ported from EBH.
//
// Priority item for this site: Princeton's mobile traffic ranks ~9 positions
// better than desktop (18.6 vs 27.0 over 90d), so phone visitors are
// disproportionately what we have. The call is the conversion, so it never
// leaves the screen.
import { Phone, MessageSquare } from "lucide-react";
import site from "@/data/site";

const StickyCallBar = () => (
  <>
    <div className="h-[92px] md:hidden" aria-hidden="true" />
    <div className="md:hidden fixed inset-x-0 bottom-0 z-[80] flex gap-2.5 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] bg-background/95 backdrop-blur border-t border-border shadow-[0_-6px_20px_rgba(60,45,25,.10)]">
      <a href={site.phoneHref} className="flex-1 brutalist-cta !px-4">
        <Phone className="h-5 w-5" />
        Call
      </a>
      <a href={site.smsHref} className="flex-1 brutalist-cta-secondary !px-4">
        <MessageSquare className="h-5 w-5" />
        Text
      </a>
    </div>
  </>
);

export default StickyCallBar;
