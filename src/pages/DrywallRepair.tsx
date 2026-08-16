// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, PaintRoller, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What does drywall repair cost around Princeton?",
    answer:
      "A door-knob hole, a settlement crack, a few screw pops: repairs like these fit inside the $295 visit, and the visit usually swallows several of them at once. A room's worth of damage moves to the flat Half Day ($495) or Full Day ($895). Ceilings and water damage get a written price at the estimate, because what is behind the board decides the job.",
  },
  {
    question: "Will I be able to see where the patch was?",
    answer:
      "If we did it right, no. The patch gets set, taped, coated three times, sanded, and the surrounding texture feathered so nothing telegraphs through paint. One honest caveat: spot-painting an aged color rarely disappears, and when a full-wall repaint is the better finish we say so before you choose.",
  },
  {
    question: "There is a brown stain on my ceiling. Can you just patch it?",
    answer:
      "Not until the water is dealt with. The sequence is always leak first, then demolition of the wet board, then drying time for the framing, then new board. Sealing moisture behind fresh compound is how a stain becomes a mold remediation, so we refuse to shortcut it.",
  },
  {
    question: "Do you take on plaster walls, not just drywall?",
    answer:
      "Yes, and around Princeton that matters: much of the housing stock near town predates drywall entirely. Cracked plaster gets stabilized and skimmed, or cut back to sound material and married to new board, depending on its condition. Either way the finished wall reads as one surface.",
  },
  {
    question: "How quickly can you get here?",
    answer:
      "Text a photo today and you will usually have an answer today, with a slot the same week. The photo tells us whether it is a visit-sized repair or an estimate-sized project, so nobody's time gets wasted on the wrong appointment.",
  },
];

const DrywallRepair = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Drywall Repair Princeton NJ | Patches That Disappear"
        description="Holes, cracks, ceilings, water damage, and the plaster walls older Princeton homes are full of. Princeton, West Windsor, Robbinsville, Lawrence. NJ HIC #13VH13918800."
        canonical="/drywall-repair"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <PaintRoller className="inline h-3 w-3 mr-2" />
              Walls & Ceilings
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Drywall Repair.
              <br />
              <span className="text-background/70">Blended Until It Never Happened.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> fixes
              holes, stress cracks, tired ceilings, and water damage across Princeton, West Windsor,
              Robbinsville, and Lawrence Township, and handles the plaster that older homes near
              town are actually built from.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Damage
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Wall and Ceiling Work.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Impact holes and door-knob punch-throughs",
                "Settlement cracks taped, coated, feathered",
                "Wet board cut out and replaced after leaks",
                "Ceiling sag corrected, full panels rehung",
                "Plaster stabilization and skim coating",
                "Texture and popcorn blending at patches",
                "Move-out lists: anchors, pops, nail holes",
                "Primed paint-ready finish or the repaint itself",
              ].map((f) => (
                <div key={f} className="bento-card bg-background p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Reviewed Work</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Straight From Google.
            </h2>
            <GoogleReview
              quote="Reasonable price. Good quality work."
              name="Michael G."
              detail="Garage door repair and drywall, East Brunswick service area"
            />
            <p className="font-body text-sm text-muted-foreground mt-4">
              {site.reviewAttribution}
            </p>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">By Town</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6">
              Drywall Repair Near You.
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl">
              Dedicated local pages for the towns that call about walls the most, or reach us from anywhere in the area.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <Link to="/drywall-repair/robbinsville" className="bento-card bg-background p-6 group">
                <h3 className="brutalist-headline text-lg text-foreground mb-2 flex items-center justify-between">
                  Drywall Repair in Robbinsville
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
              <Link to="/drywall-repair/princeton" className="bento-card bg-background p-6 group">
                <h3 className="brutalist-headline text-lg text-foreground mb-2 flex items-center justify-between">
                  Drywall Repair in Princeton
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Drywall Questions.
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

        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">
              A Photo Beats a Site Visit.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Send one and hear back the same day: one-visit fix, or written estimate.
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

export default DrywallRepair;
