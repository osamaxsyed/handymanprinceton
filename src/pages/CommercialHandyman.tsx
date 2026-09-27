import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, Building2, CheckCircle2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How is commercial work priced?",
    answer:
      "The same way as a home visit: a written number before anyone starts. For standing punch-list accounts we agree a scope and a cadence up front, so the office manager knows the monthly figure in advance. There is no hourly clock running in the background.",
  },
  {
    question: "Can the work happen after hours?",
    answer:
      "Yes. Medical practices, offices, and storefronts along Route 1 and in downtown Princeton get evening and weekend slots so patients and customers never see a ladder in the hallway. That is the normal arrangement for our facility clients.",
  },
  {
    question: "Are you covered for commercial jobs?",
    answer:
      "Yes. Registered New Jersey home improvement contractor, insured, NJ HIC #13VH13918800. We send a certificate of insurance for your file before the first visit.",
  },
  {
    question: "What types of buildings do you handle?",
    answer:
      "Professional offices, medical and therapy suites, small retail, and the properties that a manager keeps a running list for. The work itself is drywall and paint, door hardware and closers, fixture and shelf mounting, and the everyday breakage that any busy space accumulates.",
  },
  {
    question: "Will you come on a regular schedule?",
    answer:
      "Yes, and for a busy building it is the arrangement that works best: a standing visit that knocks out the accumulated list in one pass. One vendor and one invoice instead of three trades chased for three small jobs.",
  },
];

const CommercialHandyman = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Commercial Handyman in Princeton NJ | Offices, Medical, Retail"
        description="Punch lists, drywall, doors, and fixture mounting for offices, medical suites, and shops in Princeton and Mercer County. Evening and weekend slots. NJ HIC #13VH13918800."
        canonical="/commercial-handyman"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      <main>
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Building2 className="inline h-3 w-3 mr-2" />
              For Offices & Facilities
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Commercial Handyman.
              <br />
              <span className="text-background/70">The Small Stuff, Off Your Desk.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> takes
              care of the running repair list for offices, medical suites, and small storefronts in
              Princeton, West Windsor, Plainsboro, Lawrence Township, and the Route 1 corridor.
              Evenings and weekends on request so the doors stay open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6093750098" className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call (609) 375-0098
              </a>
              <a href="sms:6093750098" className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text the Punch List
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              What Ends Up on a Facility List.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Wall patches and repainting finished to a client-facing standard",
                "Door closers, hinges, and commercial hardware adjusted or replaced",
                "Shelving, signage, monitors, and equipment mounted into framing",
                "Drop-ceiling tiles and damaged trim swapped",
                "Caulk, weatherstripping, and the source of small drips tracked down",
                "Lease turnover and move-in punch lists cleared",
                "Evening and weekend scheduling",
                "Standing monthly maintenance visits",
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
            <div className="brutalist-section-eyebrow">From a Commercial Client</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              What a Facility Client Said.
            </h2>
            <GoogleReview
              quote="The level of precision East Brunswick Handyman brings to facility improvements is top-tier. He managed extensive drywall work and painting with a flawless finish and handled the technical task of cutting and installing brand-new doors at both our East Brunswick flagship and Lakehurst location."
              name="Mana Physical Therapy NJ"
              detail="Medical facility, two locations, via East Brunswick Handyman"
            />
          </div>
        </section>

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
              One Call for Everything Under a Trade.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Send the list by text or email and get a single written price back, COI included on request. Running rental units instead? See our <a href="/property-managers" className="underline text-inherit">property manager program</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="sms:6093750098" className="brutalist-cta">
                Text the List <ArrowRight className="h-4 w-4" />
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

export default CommercialHandyman;
