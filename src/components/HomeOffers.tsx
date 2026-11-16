// "Two ways to start": the $345 minimum for a short list, and one written price
// for anything bigger. Both agreed before any work begins.
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Check = ({ text }: { text: string }) => (
  <li className="flex gap-2.5 items-start font-body text-lg text-muted-foreground">
    <CheckCircle2 className="h-5 w-5 text-[#2E4A3B] flex-shrink-0 mt-1" />
    {text}
  </li>
);

const HomeOffers = () => (
  <section className="py-12 md:py-16 bg-muted border-y border-border">
    <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
      <h2 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-2">One agreed price, not a meter</h2>
      <p className="font-body text-lg text-muted-foreground mb-8">The labor price is fixed before we pick up a tool. Anything we supply is quoted alongside it.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bento-card p-7 md:p-9 flex flex-col">
          <p className="brutalist-section-eyebrow mb-2">Where most people start</p>
          <h3 className="brutalist-headline text-2xl text-foreground mb-1">Handyman Visit</h3>
          <div className="flex items-baseline gap-3 mb-4 flex-wrap">
            <p className="font-headline font-bold text-[40px] leading-none text-primary m-0">$345</p>
          </div>
          <p className="font-body text-lg text-foreground/85 mb-4">
            Our minimum, and it buys up to two hours of repairs. Send the whole list, not just the worst item.
          </p>
          <ul className="flex flex-col gap-2.5 mb-6 list-none p-0">
            <Check text="A door that drags, a dripping faucet, two drywall patches, a TV on the wall" />
            <Check text="Most small lists are finished in the one trip" />
            <Check text="Tools, ladder, common parts, and cleanup come with it" />
            <Check text="Specialty installs get their own quoted price, agreed first" />
          </ul>
          <Link to="/book" className="brutalist-cta mt-auto w-fit">
            Request a visit <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="bento-card p-7 md:p-9 flex flex-col">
          <p className="brutalist-section-eyebrow mb-2">When the list is long</p>
          <h3 className="brutalist-headline text-2xl text-foreground mb-1">Bigger Jobs</h3>
          <div className="flex items-baseline gap-3 mb-4 flex-wrap">
            <p className="font-headline font-bold text-[40px] leading-none text-primary m-0">Quoted</p>
          </div>
          <p className="font-body text-lg text-foreground/85 mb-4">
            A floor of doors, a room of drywall, every fixture in a new house, or the backlog from the last owner. Same rule: one price, agreed first.
          </p>
          <ul className="flex flex-col gap-2.5 mb-6 list-none p-0">
            <Check text="Photos or a list in, one written number back for the whole job" />
            <Check text="Set before any work starts, with materials on the same quote" />
            <Check text="Multi-day jobs (backsplash, sheds, deck resurfacing): one written price, half down to hold the date" />
          </ul>
          <Link to="/handyman" className="brutalist-cta-secondary mt-auto w-fit">
            How we price a job <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeOffers;
