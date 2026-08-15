// "Two ways to start" band, ported from EBH. Prose rewritten per the
// duplicate-content rule.
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import site from "@/data/site";

const Check = ({ text }: { text: string }) => (
  <li className="flex gap-2.5 items-start font-body text-lg text-muted-foreground">
    <CheckCircle2 className="h-5 w-5 text-[#2E4A3B] flex-shrink-0 mt-1" />
    {text}
  </li>
);

const HomeOffers = () => (
  <section className="py-12 md:py-16 bg-muted border-y border-border">
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
      <h2 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-2">Two ways to start</h2>
      <p className="font-body text-lg text-muted-foreground mb-8">Either way, the number is settled before the toolbox opens.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bento-card p-7 md:p-9 flex flex-col">
          <p className="brutalist-section-eyebrow mb-2">Most popular</p>
          <h3 className="brutalist-headline text-2xl text-foreground mb-1">Handyman Visit</h3>
          <p className="font-headline font-bold text-[40px] leading-none text-primary mb-4">{site.pricing.visit}</p>
          <p className="font-body text-lg text-foreground/85 mb-4">
            Up to 2 hours of skilled work against your whole to-do list.
          </p>
          <ul className="flex flex-col gap-2.5 mb-6 list-none p-0">
            <Check text="Longer list? Flat Half Day and Full Day rates" />
            <Check text="Most repair lists close out in a single visit" />
            <Check text="Tools, ladder, and the cleanup all included" />
          </ul>
          <Link to="/book" className="brutalist-cta mt-auto w-fit">
            Book a visit <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="bento-card p-7 md:p-9 flex flex-col">
          <p className="brutalist-section-eyebrow mb-2">Bathroom safety</p>
          <h3 className="brutalist-headline text-2xl text-foreground mb-1">Tub-to-Shower Conversion</h3>
          <p className="font-headline font-bold text-[26px] leading-tight text-foreground mb-4">
            One written price, four working days
          </p>
          <p className="font-body text-lg text-foreground/85 mb-4">
            The tub wall disappears and a low, safe entry takes its place, with the bathroom back
            in service by the weekend.
          </p>
          <ul className="flex flex-col gap-2.5 mb-6 list-none p-0">
            <Check text="Quote signed before demolition begins" />
            <Check text="Grab-bar blocking framed in from day one" />
            <Check text="The same licensed contractor start to finish" />
          </ul>
          <Link to="/tub-to-shower-conversion" className="brutalist-cta-secondary mt-auto w-fit">
            How the four days work <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeOffers;
