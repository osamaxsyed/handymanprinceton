import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What does it cost to have grab bars installed?",
    answer:
      "Nearly every grab bar job is a single visit with a price set before we come out. Two or three bars, anchored into framing, fit in one trip along with the walkthrough where we settle on heights and positions. The number is confirmed by text before anything goes on the calendar.",
  },
  {
    question: "Will the bars hold in tile or a fiberglass surround?",
    answer:
      "Yes, provided the right anchor goes into the right material. Tile, fiberglass, and drywall each call for a different fastener, and getting that wrong is why a bar pulls loose. We screw into studs wherever possible and use engineered anchors rated far above body weight where a stud is not there.",
  },
  {
    question: "How do you decide where the bars go?",
    answer:
      "By watching how the person actually moves: stepping over the tub edge, turning in the shower, rising from the toilet. We walk the room with you or with your parent and put bars where a hand lands in a slip, not where a catalog drawing suggests.",
  },
  {
    question: "I live out of state and my mother is in Princeton. Can you work with me?",
    answer:
      "Yes, this is a routine arrangement for us across Princeton, Plainsboro, and the surrounding towns. Adult children often arrange and pay from a distance. We do the walkthrough on site, call you to confirm the layout and the price, and text photos when the bars are in.",
  },
  {
    question: "Is there more you can do to make the bathroom safer?",
    answer:
      "Grab bars are the usual starting point. Handheld shower heads on a slide bar, a taller toilet seat, brighter lighting, non-slip treatment on the floor, and a smoother threshold can all be added on the same visit if you want them.",
  },
];

const GrabBarInstallation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Grab Bar Installation in Princeton NJ | Anchored Into Framing"
        description="Grab bars fastened into studs and rated anchors for showers, tubs, and toilets, usually in one visit. Princeton, Plainsboro, West Windsor, Lawrence NJ. NJ HIC #13VH13918800."
        canonical="/grab-bar-installation"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <ShieldCheck className="inline h-3 w-3 mr-2" />
              Bathroom Safety
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Grab Bar Installation.
              <br />
              <span className="text-background/70">Into the Studs. One Trip.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              A bar held by drywall anchors will let go the first time someone really needs it.
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit"> Princeton Handyman</Link> fastens
              grab bars into framing and rated backing for homes in Princeton, Plainsboro, West
              Windsor, Lawrence Township, and Pennington.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Shower
              </a>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Why Now</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6">
              The Call Usually Comes From a Son or Daughter.
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              A slip that was almost a fall, a parent who says everything is fine, and a bathroom
              laid out decades before anyone thought about aging in it. Bars are the quickest and
              least expensive fix that genuinely lowers the risk, and the current brushed nickel
              and matte black styles pass for towel bars until the day they are needed.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Horizontal bars along the tub and shower wall",
                "Vertical bars at the shower entry",
                "Bars and safety frames beside the toilet",
                "Slide-bar handheld shower heads",
                "Non-slip floor treatment and secure bath mats",
                "Raised toilet seats and smoothed thresholds",
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
              Fastened, Not Guessed.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <TodoBlock note="Photo of a completed grab bar install in a tiled shower, with the town in the caption and alt text." />
              <GoogleReview
                quote="My wife and I recently purchased a home in a 55+ community in Monroe Township. Unfortunately the home had a major flaw - a laundry room too small to accommodate a modern washer dryer. We hired East Brunswick Handyman to fix this and they did."
                name="Frank M."
                detail="55+ community, via East Brunswick Handyman"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Grab Bars, Answered.
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
              Safer Bathroom by the Weekend.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Tell us who will be using the bars and where they live. We take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/book")} className="brutalist-cta">
                Book a Visit <ArrowRight className="h-4 w-4" />
              </button>
              <a href="tel:6093750098" className="brutalist-cta-on-dark">
                <Phone className="h-4 w-4" />
                Call (609) 375-0098
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GrabBarInstallation;
