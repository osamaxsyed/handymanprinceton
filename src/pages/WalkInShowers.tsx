// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, Accessibility, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What does a walk-in shower run in the Princeton area?",
    answer:
      "The honest answer is that the footprint decides it: converting a tub, swapping an existing stall, and opening a new layout are three different jobs, and the wall system and glass move the number too. What never changes is the format: one written price at the free in-home estimate, signed before a single tile comes off.",
  },
  {
    question: "What actually makes a shower safe, not just new?",
    answer:
      "Five things, all invisible until you need them: a threshold low enough to shuffle over, bars screwed into blocking that was framed in on purpose, somewhere to sit, a head you can hold, and a floor that grips when soapy. Specified up front, they cost little. Retrofitted after a fall, they cost a renovation.",
  },
  {
    question: "Dad refuses to hear the word safety. What now?",
    answer:
      "Then do not use the word. Most of these projects are sold inside the family as a nicer shower: cleaner glass, a bench, better pressure. The safety engineering rides along quietly underneath. We have this conversation weekly with adult children and we are comfortable playing along.",
  },
  {
    question: "How long is the bathroom out of commission?",
    answer:
      "A tub conversion takes about four working days; replacing an existing stall like-for-like is often shorter. The schedule is written into the quote, the work area is contained during the day, and the room is left usable every evening.",
  },
  {
    question: "Do you work in the 55+ and retirement communities nearby?",
    answer:
      "Regularly, across West Windsor, Plainsboro, and Robbinsville as well as Princeton and Lawrence Township. Gate access, contractor hours, and association paperwork are familiar territory, and the hallway floors get protected whether the rules require it or not.",
  },
];

const WalkInShowers = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Walk-In Shower Installation Princeton NJ | Written Pricing"
        description="Low-threshold walk-in showers with benches and anchored bars, engineered for safety without the institutional look. Princeton, West Windsor, Robbinsville. NJ HIC #13VH13918800."
        canonical="/walk-in-showers"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Accessibility className="inline h-3 w-3 mr-2" />
              Safe. Modern. Yours.
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Walk-In Showers.
              <br />
              <span className="text-background/70">Flat Entry. No Climbing.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              A shower planned around how its owner actually moves, from
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit"> Princeton Handyman</Link>, the
              licensed team serving Princeton, West Windsor, Plainsboro, Robbinsville, and
              Lawrence Township.
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

        {/* What's included */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Built In, Not Bolted On</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              The Spec Sheet That Matters.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Zero or low-step entry threshold",
                "Bars fastened into purpose-framed blocking",
                "A bench or fold-down seat, planned not squeezed",
                "Slide-bar handheld alongside the fixed head",
                "Textured, grippy shower flooring",
                "Semi-frameless or frameless glass",
                "Membrane waterproofing behind the walls",
                "Light where you stand, not behind you",
              ].map((f) => (
                <div key={f} className="bento-card bg-background p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base">{f}</span>
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
              Recent Walk-Ins.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <TodoBlock note="Photo of a completed Princeton-area walk-in shower (bench and grab bars visible), town in caption and alt text." />
              <GoogleReview
                quote="I had a wonderful experience with these folks, anyone who needs some addition to their home or anything related to home improvements can contact with these folks. You will not be disappointed."
                name="Zafar S."
                detail="East Brunswick service area"
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
              Smaller First Step, or the Whole Room.
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                ["/grab-bar-installation", "Grab Bars", "One visit, properly anchored. Where most bathroom safety projects begin."],
                ["/tub-to-shower-conversion", "Tub-to-Shower", "The tub comes out, the walk-in goes in. Four days, one written price."],
                ["/bathroom-remodel", "Full Bathroom Remodel", "Layout, tile, vanity, and lighting handled as one project."],
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
              Walk-In Shower Questions.
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
              Ask Every Question You Have.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              The estimate is free and unhurried. Coordinating for a parent? Phone works fine.
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WalkInShowers;
