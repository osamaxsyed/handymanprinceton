// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What does it cost to have grab bars installed?",
    answer:
      "A typical install of two or three bars, walkthrough included, sits comfortably inside the $295 handyman visit. The visit covers up to two hours of skilled work, and the price is quoted before anything goes on the calendar, so there is nothing to negotiate at the door.",
  },
  {
    question: "Can you mount bars in a tiled or fiberglass shower?",
    answer:
      "Both, with the right hardware for each. Tile wants a carbide bore and stud or rated-anchor backing; a fiberglass surround needs load spread across engineered anchors so the shell never flexes. The bar itself is never the weak point. What it is fastened to is, and that is the part we get right.",
  },
  {
    question: "How do you decide where each bar goes?",
    answer:
      "By watching how the person actually moves. Getting into the shower, standing up from the toilet, crossing a raised threshold: each motion has a natural hand position, and the bar goes there. We walk the bathroom with the person using it, or with you standing in for a parent, before drilling anything.",
  },
  {
    question: "My mother is in Plainsboro and I live out of state. How does that work?",
    answer:
      "You book and pay from wherever you are. We do the walkthrough with your mother, call you with the plan and the price before any work starts, and text photos of the finished installs the same day. Adult children coordinate most of these jobs and never set foot in the house.",
  },
  {
    question: "What else do you handle for aging in place?",
    answer:
      "Grab bars are the entry point, not the whole conversation. Handheld heads on slide bars, raised toilet seats, brighter task lighting, threshold transitions, and full walk-in shower or tub-to-shower projects all come from the same licensed team, so the bathroom can be upgraded in stages.",
  },
];

const GrabBarInstallation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Grab Bar Installation Princeton NJ | Done in One Visit"
        description="Grab bars fastened into studs and rated anchors for showers, tubs, and toilets. Princeton, West Windsor, Plainsboro, Robbinsville, Lawrence. NJ HIC #13VH13918800."
        canonical="/grab-bar-installation"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <ShieldCheck className="inline h-3 w-3 mr-2" />
              Aging-in-Place
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Grab Bar Installation.
              <br />
              <span className="text-background/70">Into Studs. In One Visit.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Suction cups and drywall screws fail on the exact day they are needed.
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit"> Princeton Handyman</Link> fastens
              every bar into framing or engineered anchors, in Princeton, West Windsor, Plainsboro,
              Robbinsville, and Lawrence Township bathrooms.
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

        {/* Who this is for */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Why Now</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6">
              The Call Usually Comes From Out of Town.
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              A slip that was almost worse, a parent in a house near the university that has not
              changed since the closing, and a son or daughter three time zones away doing the
              worrying. Bars are the quickest real improvement, and today's hardware in matte black
              or brushed nickel looks like it belongs in the bathroom rather than in a hospital.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Entry bars at the shower and tub",
                "Vertical bars where the door swings",
                "Bars and safety frames beside the toilet",
                "Slide-bar handheld shower heads",
                "Anti-slip floor treatment inside the shower",
                "Raised seats and threshold transitions",
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
              Rated for Weight, Not for Looks.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <TodoBlock note="Photo of a finished Princeton-area grab bar install in a tiled shower, town in caption and alt text." />
              <GoogleReview
                quote="My wife and I recently purchased a home in a 55+ community in Monroe Township. Unfortunately the home had a major flaw - a laundry room too small to accommodate a modern washer dryer. We hired East Brunswick Handyman to fix this and they did."
                name="Frank M."
                detail="55+ community, East Brunswick service area"
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
                  Sometimes the Tub Has to Go.
                </h2>
                <p className="font-body text-base text-background/80 max-w-xl">
                  Bars reduce the risk of the climb over the tub wall, but a conversion eliminates
                  the climb itself: a low-threshold walk-in shower, four working days, one written price.
                </p>
              </div>
              <Link to="/tub-to-shower-conversion" className="brutalist-cta-on-dark flex-shrink-0">
                Tub-to-Shower <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Grab Bar Questions.
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
              Solve It Before the Next Slip.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Tell us who the bars are for and what the bathroom looks like. We take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                Book a Visit <ArrowRight className="h-4 w-4" />
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

export default GrabBarInstallation;
