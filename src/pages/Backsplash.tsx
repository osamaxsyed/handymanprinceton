import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import { ArrowRight, Phone, Grid3X3, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What does a backsplash cost to install?",
    answer:
      "A typical kitchen run is a one or two day job with a single written price based on the wall area and the tile you pick. The tile itself goes on the quote at cost. A short accent wall or a bathroom vanity backsplash is often finished in a day.",
  },
  {
    question: "Do I have to buy the tile through you?",
    answer:
      "No, and most people prefer to choose their own. Bring home the tile you like and we take care of layout, cutting, setting, and grouting. We will tell you the quantity to order, including the extra box that saves the day when a piece cracks.",
  },
  {
    question: "How many days does it take?",
    answer:
      "Tile goes up on the first day, grout follows on the second once the thinset has cured. The kitchen stays usable throughout, and the counters and range are covered while we cut.",
  },
  {
    question: "What happens at the outlets and switches?",
    answer:
      "Tile is cut cleanly around each box and the boxes are brought forward with extenders so the cover plates sit flat on the new surface. If a device itself needs replacing, that gets handled correctly rather than improvised behind the tile.",
  },
  {
    question: "Which tile should I pick?",
    answer:
      "Subway tile is classic and hides small wall waves. Mosaic sheets are forgiving on uneven walls. Large-format tile looks crisp but needs a flat wall and careful layout. Send a photo of the kitchen and we will give you an honest opinion before you buy.",
  },
];

const Backsplash = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Backsplash Installation in Princeton NJ | Kitchen & Bath Tile"
        description="Kitchen and vanity backsplash tile set straight, cut clean around outlets, and grouted tight in one to two days. Princeton, West Windsor, Plainsboro, Lawrence NJ. Licensed and insured."
        canonical="/backsplash"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Grid3X3 className="inline h-3 w-3 mr-2" />
              Tile Work
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Backsplash Installation.
              <br />
              <span className="text-background/70">Two Days. A Different Kitchen.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              A backsplash is the smallest tile job with the biggest payoff, and
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit"> Princeton Handyman</Link> sets
              them with level courses, tight cuts, and clean grout lines in Princeton, West Windsor,
              Plainsboro, Lawrence Township, and Montgomery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Kitchen
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Everything in the Price.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Full kitchen runs from countertop to upper cabinets",
                "Vanity and powder-room backsplashes",
                "Subway, mosaic sheet, and large-format tile",
                "Precise cuts at outlets, windows, and cabinet returns",
                "Outlet and switch boxes extended flush with the tile",
                "Loose tile and crumbling grout on an existing backsplash repaired",
                "Grouted, caulked at the counter, and edges sealed",
                "Old backsplash stripped and the wall prepped",
                "Counters, range, and sink protected while we work",
              ].map((f) => (
                <div key={f} className="bento-card bg-background p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section is all placeholders, hidden in production until content lands */}
        {import.meta.env.DEV && (
          <section className="py-20 bg-muted heavy-border-b">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
              <div className="brutalist-section-eyebrow">Recent Work</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
                Recent Tile Jobs.
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <TodoBlock note="Photo of a completed kitchen backsplash, with the town in the caption and alt text." />
                <TodoBlock note="A review from a backsplash or tile customer: verbatim text plus first name and town." />
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Backsplash, Answered.
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
              Tile Sitting in the Garage?
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Send a photo of the wall and the box. We will price the job and confirm you have enough.
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

export default Backsplash;
