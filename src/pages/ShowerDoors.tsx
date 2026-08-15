// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens per the factory duplicate-content rule).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import TodoBlock from "@/components/TodoBlock";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, PanelsTopLeft, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "What does it cost to have a shower door installed?",
    answer:
      "A standard slider or hinged door typically lands inside the $295 handyman visit, and you hear the number before anything is booked. Frameless glass weighs more, forgives less, and takes longer; if that is what you are hanging, we quote it that way from the start.",
  },
  {
    question: "Should I buy the door myself?",
    answer:
      "Plenty of customers do, straight off the shelf at the big-box stores. The smarter order of operations is to have us measure first, because the opening dictates the door, not the other way around. Wrong-size glass is the most common reason these projects stall in a garage for months.",
  },
  {
    question: "Framed, semi-frameless, or frameless: how do I choose?",
    answer:
      "Budget, look, and tolerance for weight. Framed is economical and forgiving. Semi-frameless trims most of the metal for a modest step up. Frameless is the showpiece, but the panels are heavy slabs of tempered glass that punish sloppy installation, which is the argument for not installing it yourself.",
  },
  {
    question: "The glass shattered but the frame is fine. Full replacement?",
    answer:
      "Often the door alone can be swapped if the frame and rollers are still true. If the frame is corroded or racked, we say so plainly and price both routes, because forcing new glass into a failing frame just schedules the next breakage.",
  },
  {
    question: "The walls in my older house are not plumb. Will a door still fit?",
    answer:
      "Almost always. Homes around Princeton built before the 1980s are rarely square at the shower opening, and door systems carry adjustment ranges for exactly that reason. Reading the opening correctly during measurement is the skill; the install follows from it.",
  },
];

const ShowerDoors = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shower Door Installation Princeton NJ | Measure-First Service"
        description="Framed, semi-frameless, and frameless shower doors measured, hung, and sealed. Princeton, West Windsor, Robbinsville, Lawrence, Plainsboro. NJ HIC #13VH13918800."
        canonical="/shower-doors"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <PanelsTopLeft className="inline h-3 w-3 mr-2" />
              Measured. Hung. Sealed.
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Shower Door Installation.
              <br />
              <span className="text-background/70">Tempered Glass, Steady Hands.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              First-time installs, broken-door swaps, and the jump from curtain to glass, by
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit"> Princeton Handyman</Link>, working
              across Princeton, West Windsor, Robbinsville, Lawrence Township, and Plainsboro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of Your Shower
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              On the Install List.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Sliding doors, framed and semi-frameless",
                "Hinged and pivot frameless panels",
                "Tub-track sliders and fixed screens",
                "Swap-outs on existing shower openings",
                "Measuring service before you order glass",
                "Old door taken down and hauled off",
                "Clean silicone lines, taped and tooled",
                "Curtain-to-glass conversions",
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
              Recent Doors.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <TodoBlock note="Photo of a completed Princeton-area shower door install, town in caption and alt text." />
              <GoogleReview
                quote="Came back to make sure the doors were right.. amazing customer service.. definitely will hire for more house work."
                name="Quynetta J."
                detail="Door work, East Brunswick service area"
              />
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-2xl">
              {site.reviewAttribution}
            </p>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="bento-card bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-background mb-2">
                  Maybe the Door Is Not the Problem.
                </h2>
                <p className="font-body text-base text-background/80 max-w-xl">
                  When the pan leaks or the walls are dated, new glass is money on a tired shower.
                  A conversion or full remodel carries one written price and starts fresh behind the walls.
                </p>
              </div>
              <Link to="/tub-to-shower-conversion" className="brutalist-cta-on-dark flex-shrink-0">
                Tub-to-Shower <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Shower Door Questions.
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
              Start With a Photo.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Text the shower and a tape measure across the opening, and we reply with what fits and the price.
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

export default ShowerDoors;
