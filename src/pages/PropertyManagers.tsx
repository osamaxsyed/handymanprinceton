// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens). Note: PM accounts keep EBH's B2B time-and-materials
// rate; this is the one deliberate exception to consumer flat pricing.
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import { ArrowRight, Phone, KeyRound, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "How do you bill management companies?",
    answer:
      "Standing accounts run time and materials at $135 to $150 per hour by scope and volume, one invoice per property, every completed list documented with photos. A single make-ready can be quoted flat instead. The point either way: your bookkeeping sees one vendor, not a folder of trade invoices.",
  },
  {
    question: "How quickly do units turn?",
    answer:
      "Turnovers jump the queue. Around Princeton the rental calendar is unforgiving: the June and September waves fill or they do not, and a unit that misses its window sits. Punch lists clear within the week; make-readies get scheduled against your lease date, not our convenience.",
  },
  {
    question: "Will you deal with the tenants directly?",
    answer:
      "Give us a name, a number, and an access window. We book the visit, text when on the way, work clean, and send you the photo report when the list is closed out. You hear about the job twice: when you assign it and when it is done.",
  },
  {
    question: "What is on a typical scope?",
    answer:
      "The make-ready canon: wall patches and touch-up paint, doors and locksets, caulk and grout refresh, fixture and blind swaps, shelving, small carpentry, exterior odds and ends. Panel, gas, and new plumbing lines go to the licensed trade, coordinated by us rather than dumped back on you.",
  },
  {
    question: "Insurance and COI?",
    answer:
      "Central Jersey Home Services LLC, licensed NJ home improvement contractor, NJ HIC #13VH13918800, insured, certificate of insurance delivered for your records before the first work order.",
  },
];

const PropertyManagers = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Handyman for Property Managers Princeton NJ | Turnovers"
        description="Standing punch-list accounts, make-readies, and tenant coordination for rentals around Princeton, Lawrence, and West Windsor. Photo-verified, COI on file. NJ HIC #13VH13918800."
        canonical="/property-managers"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <KeyRound className="inline h-3 w-3 mr-2" />
              For Property Managers
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Property Managers.
              <br />
              <span className="text-background/70">Lists Closed. Units Leased.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> works
              rental portfolios across Princeton, Lawrence Township, West Windsor, Plainsboro, and
              Hightstown: make-readies against real lease dates, tenants scheduled without you in
              the middle, and photos to prove every line item.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Unit's Punch List
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">The Arrangement</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              How Standing Accounts Run.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Time and materials at $135-150/hr for standing accounts",
                "Make-readies scheduled against the lease date",
                "Tenant booking and on-the-way texts handled by us",
                "Photo close-out report on every list",
                "One invoice per property, per cycle",
                "Patches, paint, doors, locks, fixtures, caulk, blinds",
                "COI in your file before work order one",
                "Licensed trades brought in and managed when needed",
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
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              Property Manager Questions.
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
              Audition Us on One Unit.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Next turnover, send the list and the photos. If the unit is not leased-ready on time, you have your answer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                Send a Punch List <ArrowRight className="h-4 w-4" />
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

export default PropertyManagers;
