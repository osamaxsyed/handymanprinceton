// Ported from EBH's /handyman (structure verbatim, prose rewritten through the
// Princeton/Mercer County lens per the factory duplicate-content rule: same
// slugs across brands, never the same sentences).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, Phone, ArrowRight, MessageSquare } from "lucide-react";
import { handymanServices } from "@/data/handymanServices";
import { useNavigate, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import TodoBlock from "@/components/TodoBlock";
import site from "@/data/site";

const Handyman = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Handyman & Home Repairs in Princeton NJ | $295 Visit"
        description="A flat $295 visit covers up to 2 hours of skilled work: sticking doors, plaster and drywall, fixtures, the whole list. Princeton, West Windsor, Robbinsville, Lawrence. NJ HIC #13VH13918800."
        canonical="/handyman"
      />
      <Header />
      <FaqSchema
        faqs={[
          {
            question: "What does a handyman visit cost in Princeton?",
            answer:
              "We price in flat blocks instead of by the hour: $295 for the Visit (up to 2 hours of skilled work), $495 for a Half Day, $895 for a Full Day. Nearly every to-do list fits the Visit, and if yours looks bigger we say so before starting, not on the invoice. Materials are billed at cost.",
          },
          {
            question: "How should I prepare my list?",
            answer:
              "Write down everything, small or odd. Because you are paying for the block of time rather than per task, a longer list is better value: the door that drags, the towel bar that pulled loose, cracked caulk, a plaster crack above the stairs. We work down the list until the time is up.",
          },
          {
            question: "Can you handle plumbing or electrical items on the list?",
            answer:
              "Only the minor repairs that legally sit inside handyman scope: swapping a faucet or p-trap, replacing a light fixture, changing an outlet or switch. Anything that needs a licensed plumber or electrician (new lines, panels, gas) is out of scope and we will tell you straight away.",
          },
          {
            question: "Which towns around Princeton do you serve?",
            answer:
              "Princeton and Princeton Junction are the core. We also take regular work in West Windsor, Robbinsville, Lawrence Township, Plainsboro, and South Brunswick.",
          },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Repairs & Small Projects</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Handyman &amp; Home Repairs.
              <br />
              <span className="text-background/70">Princeton, New Jersey.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> works
              through your entire to-do list in one flat $295 visit, from pre-war plaster near
              the university to newer builds in West Windsor and Robbinsville. What we take on,
              and what we leave to the licensed trades, is all listed below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of Your Job
              </a>
            </div>
          </div>
        </section>

        {/* Pricing: flat packages only. No hourly anywhere. */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Flat Pricing</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-4">
              Three Packages. Zero Guesswork.
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl">
              Choose a block, agree the number up front, and that is the number you pay.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ["Visit", site.pricing.visit, site.pricing.visitScope, "The dragging door, the loose rail, the caulk line, the fixture swap. One visit usually clears the list."],
                ["Half Day", site.pricing.halfDay, "Up to 4 hours on site", "A room of wall repairs, a shelving build, several doors, or a pre-listing punch round."],
                ["Full Day", site.pricing.fullDay, "A full working day", "Turnover lists for rentals, whole-house repair backlogs, multi-room project days."],
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
              Materials show up at cost on the invoice, and the truck carries the common
              hardware, so a mid-visit supply run is the exception, not the rule.
            </p>
            <div className="mt-8">
              <Link to="/book" className="brutalist-cta w-fit">
                Book your slot online <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Service Catalog</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">What We Do</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {handymanServices.map((service, idx) => (
                <div key={idx} className="bento-card p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-foreground">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="brutalist-headline text-xl md:text-2xl text-foreground">{service.title}</h3>
                  </div>

                  <div className="mb-6">
                    <div className="font-headline font-black uppercase tracking-wider text-[10px] text-foreground bg-muted inline-block px-2 py-1 mb-3">
                      ✓ We Do
                    </div>
                    <ul className="space-y-2">
                      {service.weDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-sm">
                          <Check className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="font-headline font-black uppercase tracking-wider text-[10px] text-muted-foreground bg-muted inline-block px-2 py-1 mb-3">
                      ✗ We Don't Do
                    </div>
                    <ul className="space-y-2">
                      {service.weDontDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-sm">
                          <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photos + review */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Recent Work</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Real Jobs, Real Homes.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* No Princeton job photos exist yet. Hard rule: never borrow or
                  invent; the TodoBlock renders only in dev. */}
              <TodoBlock note="One photo of a completed Princeton-area handyman job (door, drywall, or deck repair), with the town in the filename and alt text." />
              <GoogleReview
                quote="It was easy to work with him because he is honest and punctual. He removed our old dishwasher and fixed the floor and installed a water line for our fridge. Best handyman ever."
                name="Hadia N."
                detail="Kitchen punch list, East Brunswick service area"
              />
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-2xl">
              {site.reviewAttribution}
            </p>
          </div>
        </section>

        {/* Big stuff band */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="bento-card bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-background mb-2">
                  Bigger Projects, Same Contractor.
                </h2>
                <p className="font-body text-base text-background/80 max-w-xl">
                  When the list grows into a project, the tub-to-shower conversions, walk-in
                  showers, and bathroom remodels carry one fixed written price, handled by the
                  same licensed team that fixes your doors.
                </p>
              </div>
              <Link to="/tub-to-shower-conversion" className="brutalist-cta-on-dark flex-shrink-0">
                Tub-to-Shower <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Send Us the List.</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Free estimate, a flat number agreed up front, and no add-ons after the fact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </button>
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
