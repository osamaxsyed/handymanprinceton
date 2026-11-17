// "Three ways to start": the same three services, in the same order, as the
// Housecall Pro booking page every button goes to. Small jobs have a $345
// minimum; bigger jobs get a free photo quote or a $49 in-person estimate
// credited to the job. Cards stay short so all three sit side by side on
// desktop and stack on mobile.
import { ArrowRight } from "lucide-react";
import { BOOKING_URL, ESTIMATE, MINIMUM } from "@/data/coreServices";

const OFFERS = [
  {
    name: "Small Jobs Visit",
    price: MINIMUM.price,
    body: "Our minimum. Up to 2 hours of work, as many small repairs as fit.",
    cta: "Book a small job",
    primary: true,
  },
  {
    name: "Free Photo Quote",
    price: "Free",
    body: "For bigger jobs. Send photos and we reply with one written price. Most jobs are priced this way.",
    cta: "Get a free quote",
    primary: false,
  },
  {
    name: "In-Person Estimate",
    price: ESTIMATE.price,
    body: `When photos can't show it all, like water damage or decks. We come out and price it; the ${ESTIMATE.price} comes off the job.`,
    cta: "Book an estimate",
    primary: false,
  },
];

const HomeOffers = () => (
  <section id="packages" className="py-10 md:py-12 bg-muted border-y border-border scroll-mt-24">
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
      <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-1">Three ways to start</h2>
      <p className="font-body text-base md:text-lg text-muted-foreground mb-6">
        Nothing is charged when you book. Every price is agreed before any work begins.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {OFFERS.map((o) => (
          <a
            key={o.name}
            href={BOOKING_URL}
            className="bento-card p-5 flex flex-col hover:border-primary transition-colors"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="brutalist-headline text-lg md:text-xl text-foreground">{o.name}</span>
              <span className="font-headline font-bold text-2xl leading-none text-primary whitespace-nowrap">{o.price}</span>
            </div>
            <p className="font-body text-base text-muted-foreground mt-2 mb-4">{o.body}</p>
            <span className={`${o.primary ? "brutalist-cta" : "brutalist-cta-secondary"} mt-auto w-fit !min-h-[44px] !text-base`}>
              {o.cta} <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default HomeOffers;
