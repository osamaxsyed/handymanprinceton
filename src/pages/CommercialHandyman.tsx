// Ported from EBH (structure verbatim, prose rewritten through the
// Princeton/Mercer lens). Target query: "commercial handyman near me"
// (186 impressions, pos 31.5 in this property's GSC).
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import GoogleReview from "@/components/GoogleReview";
import { ArrowRight, Phone, Building2, CheckCircle2, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import site from "@/data/site";

const faqs = [
  {
    question: "How is commercial work priced?",
    answer:
      "The same way as everything else we do: a written number before anyone touches a tool. One-off repairs are quoted per job; standing punch-list arrangements get a scope and a monthly figure, so the person approving invoices never meets a surprise. Hourly meters do not exist here.",
  },
  {
    question: "Can the work happen when we are closed?",
    answer:
      "That is the default for customer-facing spaces. Evening and weekend slots keep drills and paint smell away from your clients, and the space opens the next morning as if nothing happened except the repairs.",
  },
  {
    question: "Can you provide insurance documentation?",
    answer:
      "Yes. Central Jersey Home Services LLC is a licensed and insured NJ home improvement contractor, NJ HIC #13VH13918800, and a certificate of insurance goes to your file before the first visit.",
  },
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "Professional offices, medical and therapy suites, small retail, and landlords along the Route 1 corridor and the surrounding towns. The work is the small-breakage layer every space accumulates: walls, doors, fixtures, mounting, trim, and the leaks nobody can find.",
  },
  {
    question: "Is recurring maintenance an option?",
    answer:
      "It is the arrangement that ends up making the most sense: a scheduled visit that flushes the accumulated list in one pass, one vendor and one invoice instead of chasing separate trades for ten small problems.",
  },
];

const CommercialHandyman = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Commercial Handyman Princeton NJ | Offices & Facilities"
        description="Facility punch lists for offices, medical suites, and retail around Princeton and the Route 1 corridor. After-hours scheduling, COI on file. NJ HIC #13VH13918800."
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
              <span className="text-background/70">The Small-Breakage Vendor.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> keeps
              offices, medical suites, and storefronts presentable across Princeton, West Windsor,
              Plainsboro, and the Route 1 corridor, on a schedule that works around your business
              hours instead of through them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text Your Punch List
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Scope</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">
              The Standing Facility List.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Wall patches and repaints to client-ready finish",
                "Door closers, hinges, and hardware kept working",
                "Shelving, signage, and equipment mounted right",
                "Dropped-ceiling tiles and trim swapped out",
                "Caulk lines, weatherstripping, and mystery drips",
                "Lease turnover and move-in punch lists",
                "Evening and weekend work windows",
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
              Facility Work, Reviewed.
            </h2>
            <GoogleReview
              quote="The level of precision East Brunswick Handyman brings to facility improvements is top-tier. He managed extensive drywall work and painting with a flawless finish and handled the technical task of cutting and installing brand-new doors at both our East Brunswick flagship and Lakehurst location."
              name="Mana Physical Therapy NJ"
              detail="Medical facility, two locations (East Brunswick service area)"
            />
            <p className="font-body text-sm text-muted-foreground mt-4">
              {site.reviewAttribution}
            </p>
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
              Stop Collecting Vendors.
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Send the punch list, get one written price back, COI included. Managing rental units instead? See our <a href="/property-managers" className="underline text-inherit">property manager accounts</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                Send the List <ArrowRight className="h-4 w-4" />
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

export default CommercialHandyman;
