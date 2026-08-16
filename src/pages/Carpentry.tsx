// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule). Cabinet
// repair leads here deliberately: "cabinet repair near me" (104 impr, pos 12.4)
// and "small job carpenter near me" (99 impr) are this page's target queries.
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, Hammer, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What do small carpentry jobs cost?",
    answer:
      "Almost all of them land inside the $295 visit: a cabinet hinge rebuilt, a run of baseboard swapped, a handrail re-anchored, a door planed to close right. When the project grows into a build, it moves to the flat Half Day ($495), Full Day ($895), or a written estimate. The number always comes before the sawdust.",
  },
  {
    question: "Do you repair cabinets or only install new ones?",
    answer:
      "Repair is the specialty. Sagging doors rehung, worn hinges and slides replaced, drawer boxes reglued, peeling veneer and chipped corners patched, soft-close hardware retrofitted. Most kitchens do not need new cabinets; they need two hours of someone who knows why the old ones stopped working.",
  },
  {
    question: "Can you match the trim in an older house?",
    answer:
      "Usually. Profiles from the mid-century and earlier can often be recreated by combining stock moldings or layering cuts, and homes around Princeton give us regular practice. When a true match does not exist we show you the nearest profile and let you decide, rather than nailing up a surprise.",
  },
  {
    question: "Do you build shelving and built-ins?",
    answer:
      "Yes: pantries, closets, garage walls, alcove built-ins, window seats. Everything lands on studs or rated anchors and is sized for real loads, because a bookshelf that cannot hold books is decoration, not carpentry.",
  },
  {
    question: "What about rot on the outside of the house?",
    answer:
      "A steady part of the week: door frames, sill noses, trim boards, deck rails, and shed doors. The rot gets cut back to sound wood, the area treated, and the rebuild done in material rated for the weather it will live in.",
  },
];

const Carpentry = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Carpentry & Cabinet Repair Princeton NJ | Small Jobs Welcome"
        description="Cabinet repair, trim, shelving, railings, rot, and doors: the small carpentry work bigger crews ignore. Princeton, West Windsor, Robbinsville, Lawrence. NJ HIC #13VH13918800."
        canonical="/carpentry"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Hammer className="inline h-3 w-3 mr-2" />
              Small Jobs Welcome
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Carpentry &amp; Cabinets.
              <br />
              <span className="text-background/70">Jobs Too Small for a Crew. Not for Us.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> handles
              the wood work that never gets a callback from the big outfits: cabinet doors that
              sag, trim that split, a rail that moves when it should not, in Princeton, West
              Windsor, Robbinsville, and Lawrence Township.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of Your Job
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              On the Bench This Week.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Cabinet doors, hinges, and drawer slides repaired",
                "Baseboard, casing, and crown patched or replaced",
                "Shelving systems for pantries, closets, garages",
                "Loose banisters and railings re-anchored",
                "Exterior rot cut out and rebuilt to last",
                "Doors planed, shimmed, and re-hung square",
                "Cabinet frames and furniture regluing",
                "Window sills, aprons, and stool caps replaced",
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
              Built and Loaded Up.
            </h2>
            <GoogleReview
              quote="Extremely happy with the pantry shelves installed in my home. If you're looking for a professional with great service I highly recommend Syed."
              name="Muhmmad A."
              detail="Pantry shelving, East Brunswick service area"
            />
            <p className="font-body text-sm text-muted-foreground mt-4">
              {site.reviewAttribution}
            </p>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="bento-card bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-background mb-2">
                  While the Tools Are Out.
                </h2>
                <p className="font-body text-base text-background/80 max-w-xl">
                  The $295 visit is priced for the time block, not the task, so the carpentry item
                  on your list can share its visit with the caulk, the fixture, and the sticking door.
                </p>
              </div>
              <Link to="/handyman" className="brutalist-cta-on-dark flex-shrink-0">
                The $295 Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Carpentry Questions.
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
              Show Us the Broken Bit.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              A photo and a sentence gets you an honest answer and a firm number.
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

export default Carpentry;
