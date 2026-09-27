import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, PaintRoller, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What does drywall repair cost in Princeton?",
    answer:
      "Doorknob holes, hairline cracks, and anchor damage nearly always land inside the $345 Visit, which buys up to 2 hours of general repairs, and two or three patches usually share that one visit. A longer list moves up to the flat Half Day ($595) or Full Day ($1,095). Ceilings and water damage get a single written number once we have seen what is behind the paper.",
  },
  {
    question: "Am I going to see the patch afterward?",
    answer:
      "Not if we have done it right. The repair is set into the wall, taped, built up in three coats, sanded flat, and textured to match its neighbors so the whole surface reads as one. Color is the last step, and if an old faded flat paint will not spot-match we say so and suggest painting corner to corner.",
  },
  {
    question: "The ceiling has a brown stain from a leak. Can you handle that?",
    answer:
      "Yes, in the right order. The leak has to be stopped first, then the soft board comes down, the framing is allowed to dry, and new board goes up. Sealing over damp drywall is how a stain turns into a mold call, so we do not skip the drying step.",
  },
  {
    question: "Do you take on entire ceilings?",
    answer:
      "We do. Sagging sheets, popcorn that came down with a leak, and full board replacement finished with primer so the ceiling is ready for its coat.",
  },
  {
    question: "How soon can someone come out?",
    answer:
      "Most drywall calls are booked inside the week. Send a photo of the damage by text and you will hear back the same business day on whether it is a Visit-sized patch or a larger job that needs a written price.",
  },
];

const DrywallRepair = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Drywall Repair in Princeton NJ | Patches, Cracks, Ceilings"
        description="Holes, cracks, water damage, and ceilings taped and blended so the repair disappears. Princeton, West Windsor, Plainsboro, Lawrence Township. NJ HIC #13VH13918800."
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
              <span className="text-background/70">Taped, Coated, Gone.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> fixes
              doorknob holes, settling cracks, leak-stained ceilings, and old plaster in Princeton,
              West Windsor, Plainsboro, Lawrence Township, and Montgomery. Built up in coats and
              blended into the wall, never just a smear of spackle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Wall
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              What Lands on the Drywall List.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Doorknob holes and knocked-out corners patched flush",
                "Cracks at window and door corners taped so they stay shut",
                "Leak-damaged board cut out and replaced once the source is fixed",
                "Sagging ceilings re-fastened or re-sheeted",
                "Popcorn, knockdown, and orange peel textures matched",
                "Move-out lists: anchors, screw pops, picture holes",
                "Plaster in the older in-town houses repaired as plaster, not drywall",
                "Skim coats over rough walls, primed and ready for paint",
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
              In the Customer's Words.
            </h2>
            <GoogleReview
              quote="Reasonable price. Good quality work."
              name="Michael G."
              detail="Garage door repair and drywall, via East Brunswick Handyman"
            />
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">By Town</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6">
              Drywall Repair Close to Home.
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl">
              Town pages for two of the places we patch most, and the same flat price anywhere else in Mercer County.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <Link to="/drywall-repair/princeton" className="bento-card bg-background p-6 group">
                <h3 className="brutalist-headline text-lg text-foreground mb-2 flex items-center justify-between">
                  Drywall Repair in Princeton
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
              <Link to="/drywall-repair/robbinsville" className="bento-card bg-background p-6 group">
                <h3 className="brutalist-headline text-lg text-foreground mb-2 flex items-center justify-between">
                  Drywall Repair in Robbinsville
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
              Things People Ask About Drywall.
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
              Send Us the Hole.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              One photo and you will know today whether it is a single Visit or a bigger repair with a written price.
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

export default DrywallRepair;
