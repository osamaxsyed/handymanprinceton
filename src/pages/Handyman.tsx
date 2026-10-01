import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, Phone, ArrowRight, MessageSquare } from "lucide-react";
import { coreServices, biggerJobs, notOffered } from "@/data/coreServices";
import { site } from "@/data/site";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import { Link } from "react-router-dom";

const Handyman = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Handyman Services in Princeton NJ | $345 Flat-Rate Visit, No Hourly Meter"
        description="A $345 visit covers up to two hours of repairs: doors, drywall, fixtures, mounts, the whole list. Princeton, West Windsor, Plainsboro, Lawrence, Montgomery. NJ HIC #13VH13918800."
        canonical="/handyman"
      />
      <Header />
      <FaqSchema
        faqs={[
          {
            question: "What does a handyman visit cost in Princeton?",
            answer:
              "Three flat blocks and no clock: the Visit is $345 for up to two hours of general repairs, the Half Day is $595, and the Full Day is $1,095. Most household lists fit inside the Visit. Specialty installs (a prehung door, a vanity, a shower door, an attic ladder) are quoted per job. If your list is bigger than the block, you hear it before we start. Materials are part of the quote.",
          },
          {
            question: "What belongs on the list?",
            answer:
              "All of it. You are buying a block of time rather than paying per task, so the more you bundle the better the value. The door that catches, the ding behind the couch, the wobbly towel bar, the caulk that has gone dark: send the whole thing.",
          },
          {
            question: "Do you handle plumbing and electrical?",
            answer:
              "Like-for-like swaps only: faucets, toilets, vanities, disposals, light fixtures, ceiling fans, switches, and outlets, replaced where they are on the lines that are there. New Jersey's code calls that ordinary maintenance, no permit. New lines, new circuits, panels, gas, and water heaters are permit work for a licensed trade, and we say so before you buy anything.",
          },
          {
            question: "Which towns do you work in?",
            answer:
              "Princeton, West Windsor, Plainsboro, Lawrence Township, Montgomery, and Pennington are the core ring. South Brunswick, Cranbury, East Windsor, and Robbinsville are on the calendar most weeks.",
          },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Repairs & Small Projects</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Handyman Services.
              <br />
              <span className="text-background/70">Princeton &amp; Mercer County.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> clears
              your whole to-do list in one flat $345 visit, in Princeton, West Windsor, Plainsboro,
              Lawrence Township, and Montgomery. Everything we do, and everything we don't, is below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text Us a Photo
              </a>
            </div>
          </div>
        </section>

        {/* Pricing: flat packages only. No hourly anywhere. */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Flat Pricing</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-4">
              Three Blocks. Zero Clock.
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl">
              Choose the block that matches your list. The labor number is fixed before we arrive, and anything we supply is quoted with it.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ["Visit", "$345", "Up to 2 hours of general repairs", "A dripping faucet, a door that catches, two patches, a TV on the wall. The typical list fits here."],
                ["Half Day", "$595", "Up to 4 hours on site", "A room of drywall, a set of interior doors, a closet system, the longer list."],
                ["Full Day", "$1,095", "A full working day", "Move-in or move-out lists, several rooms, the backlog that built up over years."],
              ].map(([name, price, sub, body]) => (
                <div key={name} className="bento-card bg-background p-7 flex flex-col">
                  <p className="brutalist-section-eyebrow mb-1">{name}</p>
                  <p className="font-headline font-bold text-[38px] leading-none text-primary mb-2">{price}</p>
                  <p className="font-body text-base font-semibold text-foreground mb-3">{sub}</p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-base text-muted-foreground mt-6 max-w-2xl">
              Materials are itemized on the quote. The truck carries the common parts, so
              most visits skip the store run. Specialty installs (doors, vanities, shower doors, attic ladders) are quoted per job.
            </p>
            <div className="mt-8">
              <Link to="/book" className="brutalist-cta w-fit">
                Request a visit online <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Core services (single source: src/data/coreServices.ts) */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Core Services</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">On the Menu</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {coreServices.map((service) => (
                <div key={service.slug} className="bento-card p-6 md:p-8 flex flex-col">
                  <h3 className="brutalist-headline text-xl md:text-2xl text-foreground mb-2">{service.name}</h3>
                  <p className="font-body text-base text-muted-foreground mb-5">{service.short}</p>
                  {service.included.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {service.included.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start gap-2 font-body text-sm">
                          <Check className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to={service.href} className="mt-auto font-body font-semibold text-base text-foreground inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    Everything covered <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bigger jobs + not on the menu */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
              <div className="bento-card bg-background p-6 md:p-8">
                <div className="brutalist-section-eyebrow">Bigger Jobs</div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-2">A day or three. One written price.</h2>
                <p className="font-body text-base text-muted-foreground mb-5">
                  Half down holds the date; the balance is due at completion. No draw schedules, no permits, no demolition.
                </p>
                <ul className="space-y-2">
                  {biggerJobs.map((j) => (
                    <li key={j.href + j.name}>
                      <Link to={j.href} className="font-body text-lg text-foreground hover:text-primary inline-flex items-baseline gap-2">
                        {j.name} <span className="font-body text-sm text-muted-foreground">{j.days}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bento-card bg-background p-6 md:p-8">
                <div className="brutalist-section-eyebrow">Off the Menu, and the Reason</div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground mb-5">Said here so it isn't said at your door.</h2>
                <ul className="space-y-4">
                  {notOffered.map((n) => (
                    <li key={n.name} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-headline font-semibold text-lg text-foreground m-0">{n.name}</p>
                        <p className="font-body text-base text-muted-foreground m-0">{n.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Review */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">From Google</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              What a Visit Looks Like.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <GoogleReview
                quote="It was easy to work with him because he is honest and punctual. He removed our old dishwasher and fixed the floor and installed a water line for our fridge. Best handyman ever."
                name="Hadia N."
                detail="Kitchen punch list, via East Brunswick Handyman"
              />
              <div className="bento-card bg-background p-6 md:p-8 flex flex-col justify-center">
                <p className="brutalist-section-eyebrow mb-2">Same crew, two towns</p>
                <p className="font-body text-lg text-foreground/85 m-0">
                  Our reviews were earned under the East Brunswick Handyman name. Princeton Handyman is the same {site.legalName} crew, the same license, and the same flat pricing, working the Mercer County side of Route 1.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Send the List.</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Price fixed before we start, materials included in it, one-year labor warranty on all of it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={site.smsHref} className="brutalist-cta bg-background text-foreground border-background/30">
                <MessageSquare className="h-4 w-4" />
                Text Us a Photo
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Handyman;
