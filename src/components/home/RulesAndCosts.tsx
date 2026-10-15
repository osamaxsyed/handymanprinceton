import { Link } from "react-router-dom";

// The three rules that shape a small repair job in NJ (permit exemption, lead
// paint, written contracts) and a sourced price yardstick. Homepage wording;
// town pages cover the same rules in their own words.
const YARDSTICK = [
  { label: "Self-employed handyman, hourly", them: "$50-$80 per hour plus materials" },
  { label: "Handyman company, hourly", them: "$75-$125 per hour plus materials" },
  { label: "Typical minimum charge", them: "$75-$200" },
  { label: "Trip charge for a materials run", them: "$30-$80" },
];

const RulesAndCosts = () => (
  <section className="py-16 md:py-24 bg-background heavy-border-t">
    <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
      <div className="brutalist-section-eyebrow">The Rules We Work Under</div>
      <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
        Permits, Lead Paint, Contracts, and Cost
      </h2>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
        <div className="bento-card p-6 md:p-7">
          <h3 className="font-headline font-semibold text-xl text-foreground mb-3">When no permit is needed</h3>
          <p className="font-body text-base text-muted-foreground mb-3">
            The state construction code lists "ordinary maintenance" at N.J.A.C. 5:23-2.7. In a one- or two-family home, that list covers painting, wallpaper, patching drywall or plaster on less than a quarter of a wall, new trim, new flooring material, replacement window glass, a door or window swapped into the same opening, cabinets and bathroom accessories, screens, gutters, non-structural deck and porch repairs in like materials, and exchanging a faucet, trap, light fixture, switch, or receptacle for a similar one.
          </p>
          <p className="font-body text-base text-muted-foreground m-0">
            Our repair menu is built around that list. Moving a wall, extending a pipe, or adding a circuit goes to your town's construction office for a permit, and to a contractor or licensed trade who will pull it.
          </p>
        </div>
        <div className="bento-card p-6 md:p-7">
          <h3 className="font-headline font-semibold text-xl text-foreground mb-3">Paint older than 1978</h3>
          <p className="font-body text-base text-muted-foreground mb-3">
            The EPA's Renovation, Repair and Painting rule (40 CFR 745) applies to housing built before 1978. If a job disturbs more than 6 square feet of painted surface in a room, or more than 20 square feet on the outside, the rule calls for lead-safe work practices carried out by an EPA-certified firm.
          </p>
          <p className="font-body text-base text-muted-foreground m-0">
            Tell us the year your house was built when you send photos. Swapping a hinge or a light fixture is far below those figures; stripping a door or opening a wall may not be, and we flag that before booking.
          </p>
        </div>
        <div className="bento-card p-6 md:p-7">
          <h3 className="font-headline font-semibold text-xl text-foreground mb-3">Jobs over $500 are in writing</h3>
          <p className="font-body text-base text-muted-foreground mb-3">
            Under the Contractors' Registration Act (N.J.S.A. 56:8-136 and following, with contract terms at 56:8-151) and N.J.A.C. 13:45A-16.2, a home improvement contract above $500 has to be written and signed, with start and finish dates, the total price, and the contractor's registration number.
          </p>
          <p className="font-body text-base text-muted-foreground m-0">
            Ours is NJ HIC #13VH13918800. After you sign, you have three business days to cancel.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">
        <div>
          <h3 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-4">Our packages against the national figures</h3>
          <p className="font-body text-base md:text-lg text-muted-foreground mb-4">
            A Visit costs $345 and covers up to two hours. A Half Day is $595 for up to four, and a Full Day is $1,095 for up to eight. A list priced item by item runs at $175 an hour, but the total stops at the price of the package it fits inside. Parts and materials are listed on the same quote before you agree to anything.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground m-0">
            HomeGuide's handyman price guide (August 2023) gives the national ranges at right. They are U.S. averages, not New Jersey quotes, and an hourly rate leaves the final bill open where a package does not. For a single wall repair, HomeGuide's drywall guide (October 2025) has a hole under 4 inches at $300-$500; our{" "}
            <Link to="/drywall-repair" className="text-primary underline">drywall repair</Link> page shows what fits in a Visit.
          </p>
        </div>
        <div className="bento-card p-6 md:p-7">
          <p className="font-body font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41] mb-4">HomeGuide, national, Aug 2023</p>
          <dl className="space-y-3 m-0">
            {YARDSTICK.map((y) => (
              <div key={y.label} className="flex justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0">
                <dt className="font-body text-base text-foreground/85">{y.label}</dt>
                <dd className="font-body text-base font-semibold text-foreground m-0 text-right">{y.them}</dd>
              </div>
            ))}
          </dl>
          <p className="font-body text-sm text-muted-foreground mt-4 mb-0">
            Sources: homeguide.com/costs/handyman-prices; homeguide.com/costs/drywall-repair-cost.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RulesAndCosts;
