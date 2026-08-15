// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import { ArrowRight, Phone, Warehouse, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What does it cost to have a shed put together?",
    answer:
      "Tell us the model and the spot and you get a written figure covering assembly and, if the ground needs it, the base work priced in the same quote. Most kits stand in a half day to a day. Nothing is billed by the hour and nothing gets added after delivery day.",
  },
  {
    question: "Will my township make me pull a permit?",
    answer:
      "Depends on the town and the square footage, and every township around Princeton draws its setback lines a little differently. Before you order, we check what your specific town requires at the size you want, so the shed never becomes a zoning letter.",
  },
  {
    question: "What goes under the shed?",
    answer:
      "The base decides the shed's future. A leveled gravel pad, pavers, or a timber frame, chosen by the slope and drainage of your yard, which we look at during the estimate. Dropped straight on grass, every shed racks itself out of square within a couple of seasons.",
  },
  {
    question: "Mine is already out there and leaning. Fixable?",
    answer:
      "Usually, yes. Re-leveling a settled corner, rebuilding a rotted door frame, rehanging sagging doors, and patching roof panels are regular calls. A photo tells us quickly whether the shed is worth saving or worth replacing, and we will say which honestly.",
  },
  {
    question: "Can you time the build with delivery?",
    answer:
      "That is the way to do it. Order from whichever supplier you like, tell us the delivery window, and assembly gets scheduled right behind it, so the boxes never spend a month killing the grass.",
  },
];

const StorageSheds = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Storage Shed Assembly & Repair Princeton NJ | Level Base"
        description="Prefab shed assembly, base prep, permits checked, and repairs to sheds that lean. Princeton, West Windsor, Robbinsville, Lawrence. NJ HIC #13VH13918800."
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
              <span className="text-background/70">Square Today. Square in Ten Years.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> preps
              the base, checks the township rules, and assembles the kit straight, in Princeton,
              West Windsor, Robbinsville, and Lawrence Township yards. You pick the shed; we make
              sure it outlives the warranty card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of the Spot
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Everything Shed-Shaped.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Kit assembly: resin, metal, and wood-panel sheds",
                "Slope check, leveling, gravel or paver base",
                "Township size and setback rules confirmed first",
                "Rotted door frames and trim rebuilt",
                "Roof panels and shingles patched",
                "Settled corners jacked and re-leveled",
                "Ramps, shelving, and loft racks fitted inside",
                "Old shed teardown and haul-away arranged",
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
                Recent Backyard Builds.
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <TodoBlock note="Photo of a completed Princeton-area shed assembly or repair, town in caption and alt text." />
                <TodoBlock note="One review from a shed or exterior customer when the next one lands: real text plus first name and town." />
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-muted heavy-border-b" style={{ paddingTop: 0 }}>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
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
              Know Which Shed You Want?
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Text the model number and a photo of the corner of the yard. Back comes one price for
              base and build.
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

export default StorageSheds;
