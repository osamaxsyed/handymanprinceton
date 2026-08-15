// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import { ArrowRight, Phone, Grid3X3, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What does a kitchen backsplash cost to install?",
    answer:
      "Square footage and tile choice set the number, and the number is written into the estimate before day one. A typical counter-to-cabinet kitchen run is a one to two day job; a vanity wall often wraps in an afternoon. Tile itself is billed at cost, right on the quote where you can see it.",
  },
  {
    question: "Is it fine if I pick out the tile on my own?",
    answer:
      "Encouraged, even. You choose what you will look at every morning; we take care of layout, cutting, setting, and grout. Before you check out, we tell you the quantity to order, with enough spare that one cracked tile mid-job does not become a matching hunt six weeks later.",
  },
  {
    question: "How long is my kitchen out of action?",
    answer:
      "It never fully is. Mortar and tile go up the first day, grout follows once things cure, and your counters, range, and floors stay masked off the whole time. You can cook dinner the same evening the tile is set.",
  },
  {
    question: "What happens at the outlets?",
    answer:
      "Tight, clean cuts around every box, and box extenders fitted so the outlets sit flush with the new tile plane instead of sunken behind it. If an outlet turns out to need genuine electrical replacement, that gets coordinated with the right trade, not fudged.",
  },
  {
    question: "What tile style holds up best?",
    answer:
      "Subway earns its reputation: cheap, classic, and tolerant of old walls. Mosaic sheets flex around imperfections, which suits the older plaster common near Princeton. Large-format panels look sleek but demand a dead-flat wall, so we check yours before you fall in love with them.",
  },
];

const Backsplash = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Backsplash Installation Princeton NJ | 1-2 Day Tile Jobs"
        description="Kitchen and vanity backsplash tile set straight and grouted tight, outlets and edges included. Princeton, West Windsor, Robbinsville, Lawrence. NJ HIC #13VH13918800."
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
              <span className="text-background/70">Small Job. Whole New Kitchen.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Two days of careful tile from
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit"> Princeton Handyman</Link> and the
              room reads renovated. Level lines, mitered corners, grout that stays where it was put,
              in Princeton, West Windsor, Robbinsville, and Lawrence Township kitchens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of Your Wall
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Inside the Quote.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Full kitchen runs, counter to cabinet",
                "Vanity and bathroom accent walls",
                "Subway, mosaic sheet, and large-format tile",
                "Precise openings at outlets and window trim",
                "Box extenders so outlets sit flush",
                "Cracked tile swaps and regrout work",
                "Grout, caulked transitions, sealed edges",
                "Tear-out of the old splash and wall prep",
                "Masking over counters and appliances throughout",
              ].map((f) => (
                <div key={f} className="bento-card bg-background p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section is all placeholders — hidden in production until content lands */}
        {import.meta.env.DEV && (
          <section className="py-20 bg-muted heavy-border-b">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
              <div className="brutalist-section-eyebrow">Recent Work</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
                Recent Backsplashes.
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <TodoBlock note="Photo of a finished Princeton-area kitchen backsplash, town in caption and alt text." />
                <TodoBlock note="One review from a backsplash or tile customer: real text plus first name and town." />
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="bento-card bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-background mb-2">
                  Same Trowel, Bigger Rooms.
                </h2>
                <p className="font-body text-base text-background/80 max-w-xl">
                  The tile skills on your backsplash are the same ones that rebuild bathrooms.
                  Remodels and tub-to-shower conversions carry one fixed written price each.
                </p>
              </div>
              <Link to="/bathroom-remodel" className="brutalist-cta-on-dark flex-shrink-0">
                Bathroom Remodels <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Backsplash Questions.
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
              Tile Already in the Cart?
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Send a photo of the wall and the tile listing. We reply with the price and the quantity to order.
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

export default Backsplash;
