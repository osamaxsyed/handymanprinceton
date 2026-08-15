// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, ShowerHead, CheckCircle2, CalendarDays, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What does a tub-to-shower conversion cost in the Princeton area?",
    answer:
      "You get one written number at the in-home estimate, and that number covers everything: tearing out the tub, hauling it away, waterproofing, the new shower system, the glass, and the finish work. What moves the price is the wall system and door you choose, not hidden extras discovered mid-job.",
  },
  {
    question: "How many days should I plan for?",
    answer:
      "Plan on four working days. The tub comes out on day one, waterproofing goes in on day two, the base and walls go up on day three, and day four is glass, caulk, and cleanup. Each evening the bathroom is left usable and the path through your house is left clean.",
  },
  {
    question: "Should I worry about resale without a tub?",
    answer:
      "If the house still has a tub somewhere, no. In two-bath colonials and split-levels around Princeton and West Windsor, the hall bath usually keeps its tub and the primary becomes the shower people actually want. If you only have one bathroom, we will lay out the tradeoff honestly before you commit.",
  },
  {
    question: "Does a conversion help with aging in place?",
    answer:
      "It removes the single riskiest step in the house: climbing over a tub wall on wet tile. A low-threshold shower with blocking for grab bars and room for a bench turns the daily routine into a flat walk. We plan those supports into the framing on day one instead of retrofitting them later.",
  },
  {
    question: "What about plumbing and permits?",
    answer:
      "Most conversions keep the valve and drain where they are, which is what keeps the project inside remodeling scope. If your layout genuinely needs licensed plumbing or a township permit, that comes up at the estimate, not after demo, and we coordinate it rather than working around it.",
  },
];

const TubToShowerConversion = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Tub to Shower Conversion Princeton NJ | Fixed Price, 4 Days"
        description="Swap the unused tub for a walk-in shower in four working days. One written price covering demo, waterproofing, glass, and haul-away. Princeton, West Windsor, Robbinsville. NJ HIC #13VH13918800."
        canonical="/tub-to-shower-conversion"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <ShowerHead className="inline h-3 w-3 mr-2" />
              Flagship Service
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Tub-to-Shower Conversion.
              <br />
              <span className="text-background/70">One Price. Four Days.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> replaces
              the tub that gets stepped over with the walk-in shower that gets used, in Princeton,
              West Windsor, Robbinsville, and Lawrence Township. Licensed contractor from demo day
              to the final bead of caulk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of Your Bathroom
              </a>
            </div>
          </div>
        </section>

        {/* Price anchor */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Pricing</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6">
              The Number Is Signed Before Demo.
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Demolition, disposal, membrane and backer, the shower system, the glass door, and the
              trim all live inside one written quote. Materials are billed at cost and itemized, and
              the figure on the quote is the figure on the final invoice.
            </p>
            <TodoBlock note="Confirm the fixed starting price figure for a standard Princeton tub-to-shower conversion. This block becomes the displayed price." />
          </div>
        </section>

        {/* 4-day process */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">
              <CalendarDays className="inline h-3 w-3 mr-2" />
              The 4-Day Process
            </div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              What Happens Each Day.
            </h2>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                ["Day 1", "Demo and prep", "Floor runners go down first, then the tub comes out, the walls open up, and the plumbing behind them gets inspected."],
                ["Day 2", "Waterproofing", "Membrane and backer board, the invisible layer that decides whether a shower stays dry for twenty years."],
                ["Day 3", "Base and walls", "The pan is set level, the wall system goes up, and the valve and head are mounted and pressure-checked."],
                ["Day 4", "Glass and handoff", "Door installed, trim run, caulk cured, everything wiped down, and a walkthrough with you before the truck leaves."],
              ].map(([day, title, body]) => (
                <div key={day} className="bento-card bg-background p-6">
                  <p className="font-headline font-black text-2xl text-foreground mb-2">{day}</p>
                  <h3 className="brutalist-headline text-lg text-foreground mb-3">{title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photos */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Recent Work</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Before and After.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <TodoBlock note="Before/after photo pair of a completed Princeton-area tub-to-shower conversion, town named in caption and alt text." />
              <GoogleReview
                quote="Osama did a great job with my bathroom remodel in Piscataway, NJ. Would highly recommend for any bathroom issues or bathroom remodels. Osama is very responsive and highly reliable."
                name="Haroon R."
                detail="Bathroom remodel, East Brunswick service area"
              />
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-2xl">
              {site.reviewAttribution}
            </p>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Related</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Thinking About Safety or the Whole Room?
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                ["/walk-in-showers", "Walk-In Showers", "Low-threshold entries built for stability on day one, not retrofitted after a scare."],
                ["/grab-bar-installation", "Grab Bars", "Anchored into solid blocking, placed where hands actually reach, usually one visit."],
                ["/bathroom-remodel", "Full Bathroom Remodel", "Vanity, tile, lighting, and layout when the whole room is due, not just the tub."],
              ].map(([href, title, body]) => (
                <Link key={href} to={href} className="bento-card bg-background p-6 group">
                  <h3 className="brutalist-headline text-lg text-foreground mb-2 flex items-center justify-between">
                    {title}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Conversion Questions.
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bento-card bg-background p-6 md:p-8">
                  <h3 className="brutalist-headline text-lg md:text-xl text-foreground mb-3">{faq.question}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">
              Done Stepping Over It?
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              The in-home estimate is free, and you leave it holding a written price and a 4-day schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </button>
              <a href={site.phoneHref} className="brutalist-cta-on-dark">
                <Phone className="h-4 w-4" />
                Call {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-6 text-background/60 font-body text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Licensed and insured. {site.license}.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TubToShowerConversion;
