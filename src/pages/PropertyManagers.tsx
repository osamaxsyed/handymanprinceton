import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import { ArrowRight, Phone, KeyRound, CheckCircle2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How are property management accounts billed?",
    answer:
      "Standing accounts are time and materials at $135 to $150 per hour, the rate depending on scope and volume, with one invoice per property and photos of every completed item attached. A single turnover can be quoted as a flat job instead. In both cases you get one bill, not a pile from separate trades.",
  },
  {
    question: "How quickly do you turn a list around?",
    answer:
      "Routine punch lists are normally cleared within the week. Vacant units jump the queue, because an empty apartment in Plainsboro or Lawrence costs more per day than the repair list ever will.",
  },
  {
    question: "Will you deal with the tenant directly?",
    answer:
      "Yes. Hand us the tenant's number and an access window; we book the visit, text when we are on the way, and send you photos when the work is finished. You are copied, not stuck in the middle.",
  },
  {
    question: "What is on the menu for rental work?",
    answer:
      "The standard make-ready and maintenance items: drywall patches and paint touch-ups, doors and locks, caulk and grout, like-for-like fixture swaps, shelving, small carpentry, and minor exterior repairs. Panels, gas, and new lines get routed to the right licensed trade, never winged.",
  },
  {
    question: "Can I get a certificate of insurance?",
    answer:
      "Yes. Registered NJ home improvement contractor (NJ HIC #13VH13918800), insured, and a COI goes into your file before the first work order is opened.",
  },
];

const PropertyManagers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Handyman for Property Managers in Princeton NJ | Turnovers"
        description="Standing punch-list accounts, unit turnovers, and tenant scheduling for property managers across Princeton and Mercer County. One invoice, photo-verified, COI on file."
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
              <span className="text-background/70">Units Turned. Tenants Handled. One Bill.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> works
              through make-readies and maintenance lists for rentals in Princeton, Plainsboro,
              West Windsor, Lawrence Township, East Windsor, and South Brunswick. Photos on
              completion, tenant scheduling done for you, a single invoice per property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text a Unit's List
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
                "Time and materials at $135-150/hr for ongoing accounts",
                "Vacant units get first place on the calendar",
                "We book the tenant and send the on-the-way text",
                "Photo report attached when each list closes out",
                "A single invoice per property, never per task",
                "Patches, paint, doors, locks, fixtures, caulk, shelving",
                "Certificate of insurance filed before work order one",
                "Licensed trades brought in when a job calls for one",
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
              Questions From Managers.
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
              Try Us on Your Next Turnover.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Text the list and a few photos from the unit. Decide about the rest of the portfolio after that one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="sms:6093750098" className="brutalist-cta">
                Text a Punch List <ArrowRight className="h-4 w-4" />
              </a>
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

export default PropertyManagers;
