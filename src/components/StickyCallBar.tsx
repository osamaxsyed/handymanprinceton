// Mobile-only fixed bottom bar: Text a photo + Call. Most jobs are priced from
// a texted photo, so that is the wide button; Call sits next to it (SYS-16).
import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/data/site";

const StickyCallBar = () => (
  <>
    <div className="h-[92px] md:hidden" aria-hidden="true" />
    <div className="md:hidden fixed inset-x-0 bottom-0 z-[80] flex gap-2.5 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] bg-background/95 backdrop-blur border-t border-border shadow-[0_-6px_20px_rgba(60,45,25,.10)]">
      <a href={site.smsHref} className="flex-[1.6] brutalist-cta !px-4">
        <MessageSquare className="h-5 w-5" />
        Text a photo
      </a>
      <a href={site.phoneHref} className="flex-1 brutalist-cta-secondary !px-4">
        <Phone className="h-5 w-5" />
        Call
      </a>
    </div>
  </>
);

export default StickyCallBar;
