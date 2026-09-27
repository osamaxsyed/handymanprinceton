import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, PanelsTopLeft, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What does a shower door install cost?",
    answer:
      "A standard framed or semi-frameless door is a one-visit job with a set price you get before we book it. Heavy frameless glass and openings that are noticeably out of square take more time, and we say that at the start rather than on the invoice.",
  },
  {
    question: "Should I buy the door first?",
    answer:
      "You can, and plenty of people pick one up at Lowe's or Home Depot and have us hang it. The safer sequence is to let us measure first, because buying the wrong width is the most common way a DIY door ends up back in the box.",
  },
  {
    question: "What is the difference between framed, semi-frameless, and frameless?",
    answer:
      "Framed is the least expensive and the most forgiving. Semi-frameless trims the metal down for a cleaner look at a modest step up. Frameless is the showpiece, but the glass is thick, heavy, and has no tolerance for a sloppy install, which is why you want it hung by someone who has done many of them.",
  },
  {
    question: "The glass cracked. Can only the door be replaced?",
    answer:
      "Often, as long as the frame and the opening are still sound. If the track has corroded or the frame has bent we will tell you plainly that a full replacement is the better spend.",
  },
  {
    question: "My shower walls are not plumb. Does that rule out a door?",
    answer:
      "No, and it is the norm in the older homes around Princeton and Lawrenceville. Doors are built with adjustment range for exactly that; measuring correctly and using that range is most of the skill.",
  },
];

const ShowerDoors = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shower Door Installation in Princeton NJ | Measured and Sealed"
        description="Framed, semi-frameless, and frameless shower doors installed and sealed, or a curtain swapped for glass. Princeton, West Windsor, Plainsboro, Lawrence Township NJ."
        canonical="/shower-doors"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <PanelsTopLeft className="inline h-3 w-3 mr-2" />
              Measure Twice. Hang Once.
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Shower Door Installation.
              <br />
              <span className="text-background/70">Heavy Glass, Steady Hands.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              New doors, replacement doors, and the jump from shower curtain to glass, installed by
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit"> Princeton Handyman</Link> in
              Princeton, West Windsor, Plainsboro, Lawrence Township, and Montgomery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Opening
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Doors We Hang.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Sliding doors, framed or semi-frameless",
                "Hinged and pivot frameless doors",
                "Bathtub sliders and fixed tub screens",
                "Swapping a worn door on an existing shower",
                "Measuring before you order so the glass fits",
                "Old door and track removed and hauled off",
                "Clean silicone beads, wiped and tooled, not smeared",
                "Retiring the curtain rod in favor of glass",
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
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Recent Work</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Hung and Sealed.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <TodoBlock note="Photo of a finished shower door install, with the town in the caption and alt text." />
              <GoogleReview
                quote="Came back to make sure the doors were right.. amazing customer service.. definitely will hire for more house work."
                name="Quynetta J."
                detail="Door work, via East Brunswick Handyman"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Shower Doors, Answered.
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
              Show Us the Shower.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              A photo and the width of the opening is enough for us to say which door fits and what it will run.
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

export default ShowerDoors;
