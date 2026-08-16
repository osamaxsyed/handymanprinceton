// Franchise price comparison (claude_design b7129fe2 pattern, Princeton
// variant): labeled anchor with the struck-through published franchise rate,
// our price, the concrete saving, a reason-why, and a provenance footnote.
// The footnote keeps this honest comparative advertising, not a fake discount.
import { Fragment } from "react";

const ROWS = [
  { hours: "2 hours", them: "$350", us: "$295", save: "$55 stays with you" },
  { hours: "4 hours", them: "$600", us: "$525", save: "$75 stays with you" },
  { hours: "Full day", them: "$1,100", us: "$995", save: "$105 stays with you" },
];

const PriceCompare = () => (
  <section className="py-12 md:py-16">
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
      <div className="bento-card p-6 md:p-8">
        <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-1.5">
          Franchise hours, minus the franchise fee
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-6 max-w-[46em]">
          A franchise dispatches whoever is free that day. Here, the owner's own crew shows up.
        </p>

        {/* Wide: 3-column grid */}
        <div className="hidden md:grid grid-cols-[minmax(78px,1.1fr)_1fr_1fr] gap-x-3 gap-y-2.5 items-center">
          <span className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41]">On site</span>
          <span className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-muted-foreground">Ace Handyman</span>
          <span className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41]">This truck</span>
          {ROWS.map((c) => (
            <Fragment key={c.hours}>
              <span className="col-span-3 h-px bg-border" />
              <span className="font-body text-lg text-foreground/85">{c.hours}</span>
              <span className="font-headline font-semibold text-xl text-[#8A8079] line-through decoration-[1.5px]">{c.them}</span>
              <span className="flex items-baseline gap-2.5 flex-wrap">
                <span className="font-headline font-bold text-2xl text-primary">{c.us}</span>
                <span className="font-body font-semibold text-base text-[#2E4A3B]">{c.save}</span>
              </span>
            </Fragment>
          ))}
        </div>

        {/* Narrow: stacked */}
        <div className="md:hidden flex flex-col gap-3.5">
          {ROWS.map((c) => (
            <div key={c.hours} className="pt-3.5 border-t border-border">
              <p className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41] mb-1.5">{c.hours} on site</p>
              <div className="flex items-baseline gap-3.5 flex-wrap">
                <span className="font-headline font-semibold text-xl text-[#8A8079] line-through decoration-[1.5px]">{c.them}</span>
                <span className="font-headline font-bold text-[28px] text-primary">{c.us}</span>
              </div>
              <p className="font-body font-semibold text-[17px] text-[#2E4A3B] mt-1">{c.save}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-[17px] text-muted-foreground mt-6 pt-4 border-t border-border max-w-[60ch]">
          Rates shown are Ace Handyman Services' published packages for 2, 4, and 8 hours as of
          August 2026; franchise pricing varies by territory.
        </p>
      </div>
    </div>
  </section>
);

export default PriceCompare;
