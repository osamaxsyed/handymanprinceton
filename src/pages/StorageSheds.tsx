import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import { ArrowRight, Phone, Warehouse, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What does it cost to have a shed put together?",
    answer:
      "Kit sheds run a half day to a full day depending on the size, and you get a single written price once we know the model and the spot. If the ground needs leveling or a base, that is priced in the same quote so there is nothing new to discuss on delivery day.",
  },
  {
    question: "Will I need a permit for a shed in Mercer County?",
    answer:
      "Depends on the township and the square footage, and every town has setback rules from the property line. Tell us the size you are considering and we will let you know what your municipality asks for before you place the order.",
  },
  {
    question: "What does the shed sit on?",
    answer:
      "That depends on the ground: a leveled gravel pad, a paver base, or a pressure-treated frame. We look at slope and drainage at the estimate. Dropping a shed straight onto grass is how the doors stop lining up within a year.",
  },
  {
    question: "Can an old shed be repaired instead of replaced?",
    answer:
      "Usually. Rotted door jambs and trim, doors that drag, roof panels and shingles, and a corner that has sunk are all common fixes and cost far less than a new unit.",
  },
  {
    question: "Do you work around the delivery date?",
    answer:
      "Yes. Order the shed from whichever supplier you like and we schedule the build to land right after it arrives, so the boxes are not sitting in the yard through a rainy month.",
  },
];

const StorageSheds = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shed Assembly & Repair in Princeton NJ | Level Base, Doors That Close"
        description="Kit shed assembly, gravel or paver bases, and repairs to doors, roofs, and sunken corners. One written price in Princeton, Montgomery, West Windsor, Lawrence NJ. NJ HIC #13VH13918800."
        canonical="/storage-sheds"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Warehouse className="inline h-3 w-3 mr-2" />
              Backyard Storage
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Storage Sheds.
              <br />
              <span className="text-background/70">Built on a Level Base.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> puts
              together, levels, and repairs sheds on the larger lots in Montgomery, Pennington, and
              Princeton and the back yards of West Windsor and Lawrence Township. Pick the shed;
              we make sure it is still square when the kids are grown.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Yard
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Shed Jobs We Take.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Kit assembly for resin, metal, and wood sheds (Rubbermaid, Suncast, Arrow, and similar)",
                "Grade check, leveling, and a gravel or paver base",
                "Build timed to your supplier's delivery",
                "Rotted jambs, trim, and dragging shed doors repaired",
                "Shingle and roof panel patching",
                "Jacking and re-leveling a shed that has sunk",
                "Interior shelving, lofts, and entry ramps",
                "Tear-down of the old shed and haul-away arranged",
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
                Recent Shed Builds.
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <TodoBlock note="Photo of a finished shed assembly or repair, with the town in the caption and alt text." />
                <TodoBlock note="A review from a shed or exterior customer when one lands: verbatim text plus first name and town." />
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">Sheds, Answered.</h2>
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
              Already Ordered the Shed?
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Text us the model number and a picture of the spot. You get one price covering the
              base and the assembly.
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

export default StorageSheds;
