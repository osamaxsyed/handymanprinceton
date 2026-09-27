// Franchise comparison, same framing as EBH: no strikethroughs, no "you save $X".
// The difference is the meter, not the price. Both sides are sourced: Ace's
// corporate FAQ (billed from arrival, 15-minute rounding) and a phone quote
// from its Central Jersey office. The footnote is what keeps this honest.
import { Fragment } from "react";

const ROWS = [
  { label: "When billing starts", them: "The minute the craftsman arrives", us: "Never. One number, agreed before the visit" },
  { label: "Rounding", them: "Up to the next quarter hour", us: "None. The price does not move" },
  { label: "The hardware-store run", them: "Billed as time", us: "Common parts ride on the truck" },
  { label: "If it takes longer", them: "The clock keeps going", us: "That is on us, not you" },
  { label: "If the list grows", them: "More hours on the bill", us: "We pause and price the next block first" },
];

const PriceCompare = () => (
  <section className="py-12 md:py-16">
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
      <div className="bento-card p-6 md:p-8">
        <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-1.5">
          A franchise bills by the hour. We agree a number first.
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-6 max-w-[46em]">
          Ace Handyman Services starts the clock when its craftsman walks through the door. We settle the price before the truck leaves the driveway, and it stays settled.
        </p>

        {/* Wide: 3-column grid */}
        <div className="hidden md:grid grid-cols-[minmax(150px,1fr)_1.3fr_1.3fr] gap-x-3 gap-y-2.5 items-center">
          <span className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41]"></span>
          <span className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-muted-foreground">Ace Handyman</span>
          <span className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41]">Princeton Handyman</span>
          {ROWS.map((c) => (
            <Fragment key={c.label}>
              <span className="col-span-3 h-px bg-border" />
              <span className="font-body text-lg text-foreground/85">{c.label}</span>
              <span className="font-body text-lg text-[#8A8079]">{c.them}</span>
              <span className="font-body text-lg font-semibold text-foreground">{c.us}</span>
            </Fragment>
          ))}
        </div>

        {/* Narrow: stacked */}
        <div className="md:hidden flex flex-col gap-3.5">
          {ROWS.map((c) => (
            <div key={c.label} className="pt-3.5 border-t border-border">
              <p className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41] mb-1.5">{c.label}</p>
              <p className="font-body text-base text-[#8A8079] m-0">Ace: {c.them}</p>
              <p className="font-body text-lg font-semibold text-foreground m-0">Us: {c.us}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-[17px] text-muted-foreground mt-6 pt-4 border-t border-border max-w-[60ch]">
          Source: a phone quote from Ace Handyman Services' Central Jersey office in August 2026 ($210 for the first hour, $130 for each hour after), billed from arrival and rounded to the quarter hour per Ace's published FAQ. Franchise pricing differs by territory.
        </p>
      </div>
    </div>
  </section>
)

export default PriceCompare;
