import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, Hammer, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What does small carpentry work cost around Princeton?",
    answer:
      "A loose stair rail, a run of damaged baseboard, or a single built-in shelf fits the $345 Visit, which covers up to 2 hours of general repairs. Longer builds move to the flat Half Day ($595) or Full Day ($1,095), and anything bigger gets one written price before we schedule. You never hear the number after the saw is already running.",
  },
  {
    question: "What do you mean by a small job?",
    answer:
      "The work a framing crew will not drive out for: one split piece of casing, a pantry shelf that bows, a door that needs a quarter inch off the bottom, a rotted corner of exterior trim, a banister you can wiggle. Those are the jobs we built the business around, not the ones we squeeze in between bigger projects.",
  },
  {
    question: "Can you match the old trim in my house?",
    answer:
      "Usually. Many of the older houses in Princeton and Lawrenceville village have profiles that no longer come off the shelf, but they can often be rebuilt from stock pieces layered together. When a true match is not possible we show you the nearest option at the estimate and let you decide.",
  },
  {
    question: "Do you build shelving and storage?",
    answer:
      "Yes: pantry shelves, closet systems, garage racks, mudroom cubbies, and built-ins around a fireplace or under a window. Solid stock, screwed into framing, sized to hold what you actually plan to put on it.",
  },
  {
    question: "What about rotted wood on the outside of the house?",
    answer:
      "Common call, especially on north-facing door frames and trim that never dries out. We cut back to sound wood, treat what stays, and rebuild the piece with material rated for the weather it sits in.",
  },
];

const Carpentry = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Carpentry & Trim Repair in Princeton NJ | Small Jobs Welcome"
        description="Casing, baseboard, shelving, railings, rot repair, and doors from a carpenter who takes small jobs. Princeton, West Windsor, Lawrence, Montgomery NJ. NJ HIC #13VH13918800."
        canonical="/carpentry"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Hammer className="inline h-3 w-3 mr-2" />
              No Job Too Small
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Carpentry.
              <br />
              <span className="text-background/70">For the Jobs Nobody Else Will Quote.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> does
              the trim, shelving, railing, rot, and door work that bigger contractors pass on, for
              homes in Princeton, Lawrence Township, West Windsor, Montgomery, and Pennington.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Job
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Carpentry We Take On.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Baseboard, casing, and crown repaired or replaced to match",
                "Built-in shelving for pantries, closets, and garages",
                "Banisters and stair rails tightened back into framing",
                "Exterior trim and door frames with rot cut out and rebuilt",
                "Doors trimmed, planed, and rehung so they close",
                "Cabinet frames, drawers, and furniture joints repaired",
                "Deck boards and railings swapped",
                "Window sills, stools, and aprons replaced",
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
              Shelves That Hold Weight.
            </h2>
            <GoogleReview
              quote="Extremely happy with the pantry shelves installed in my home. If you're looking for a professional with great service I highly recommend Syed."
              name="Muhmmad A."
              detail="Pantry shelving, via East Brunswick Handyman"
            />
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="bento-card bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-background mb-2">
                  Add the Other Odds and Ends.
                </h2>
                <p className="font-body text-base text-background/80 max-w-xl">
                  Trim and shelving share the same $345 Visit as the sticking door and the drywall
                  ding. One trip, one number, and most lists are cleared before lunch.
                </p>
              </div>
              <Link to="/handyman" className="brutalist-cta-on-dark flex-shrink-0">
                See the $345 Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Carpentry, Answered.
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
              Something Wooden Giving Up?
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Send a picture. You get a plain answer and a firm price, not a callback that never comes.
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

export default Carpentry;
