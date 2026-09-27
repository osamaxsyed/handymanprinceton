import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Check, MessageSquare, Clock, DollarSign, MapPin, TrendingUp, Wrench } from "lucide-react";

// One role, one CTA. No application form: applicants text HANDY and the owner
// takes it from there. Same opening as the East Brunswick side of the company;
// the crew works both territories.

const SITE = "https://handymanprinceton.com";
const PHONE_DISPLAY = "(609) 375-0098";
// `?&body=` is the form that fills the message body on both iOS and Android.
const SMS_HREF = "sms:+16093750098?&body=HANDY";

// Keep these two dates current. Google drops a JobPosting from its Jobs
// results once validThrough passes; bump it (or datePosted) when re-running
// the listing.
const DATE_POSTED = "2026-08-25";
const VALID_THROUGH = "2026-11-30";

const PERKS = [
  {
    icon: DollarSign,
    title: "$34–40/hr on a W-2",
    body: "Set by experience. Paid as a proper W-2 employee, never cash under the table, never a 1099 workaround.",
  },
  {
    icon: Clock,
    title: "Your days, booked ahead",
    body: "We schedule you 3–5 days out around the availability you give us. Most techs start at 1–3 days a week and add days as the calendar fills.",
  },
  {
    icon: TrendingUp,
    title: "Bonuses paid weekly",
    body: "Clean work that earns the five-star review gets rewarded in the same week's pay, not at year end.",
  },
  {
    icon: Wrench,
    title: "$500 toward tools",
    body: "A tool credit line opens once you have been on the crew for 90 days.",
  },
  {
    icon: Check,
    title: "The work finds you",
    body: "Marketing, booking, quoting, and customer calls are handled by the office. Your job starts when you pull up.",
  },
  {
    icon: MapPin,
    title: "Short drives",
    body: "Princeton, Mercer County, and our Middlesex County routes, no long hauls.",
  },
  {
    icon: TrendingUp,
    title: "Early seat on a growing crew",
    body: "More days and a lead-tech role are on the table as the company adds towns.",
  },
];

const REQUIREMENTS = [
  "At least 3 years doing the work: drywall, doors, fixture swaps, basic like-for-like plumbing, carpentry, TV mounting",
  "Your own truck and tools (the hourly rate includes a vehicle allowance)",
  "Valid driver's license, clean background check, legally authorized to work in the US",
  "Comfortable in customers' homes and motivated by five-star reviews",
];

const IDEAL_FOR =
  "Semi-retired tradespeople, working techs with a couple of open days a week, or anyone who wants dependable side income now and a route to full-time as the schedule grows.";

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Handyman Technician",
  description: [
    "<p>Princeton Handyman, operated by Central Jersey Home Services LLC, is adding one skilled technician. We are a 5.0-star locally owned repair company, not a franchise and not a gig app. Work the days you choose as jobs come in, with more days available as we grow.</p>",
    "<p><strong>What you get</strong></p><ul>",
    "<li>$34–40/hr set by experience, paid on a W-2 (not cash, not 1099)</li>",
    "<li>Flexible schedule: booked 3–5 days ahead around your availability, typically 1–3 days/week to start</li>",
    "<li>Performance bonuses paid weekly</li>",
    "<li>$500 tool credit line after 90 days</li>",
    "<li>Marketing, booking, and customer contact handled for you</li>",
    "<li>Short drives: Princeton, Mercer County, and our Middlesex County routes, no long hauls</li>",
    "<li>Early seat on a growing crew, with a path to more days and lead tech</li>",
    "</ul><p><strong>What we need</strong></p><ul>",
    ...REQUIREMENTS.map((r) => `<li>${r}</li>`),
    `</ul><p><strong>Ideal for:</strong> ${IDEAL_FOR}</p>`,
    `<p><strong>To apply:</strong> text HANDY to ${PHONE_DISPLAY}. You will hear back within 24 hours.</p>`,
  ].join(""),
  identifier: {
    "@type": "PropertyValue",
    name: "Princeton Handyman",
    value: "handyman-technician-2026",
  },
  datePosted: DATE_POSTED,
  validThrough: VALID_THROUGH,
  employmentType: "PART_TIME",
  directApply: true,
  hiringOrganization: {
    "@type": "Organization",
    name: "Princeton Handyman",
    sameAs: SITE,
    logo: `${SITE}/logo.png`,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Sophie St",
      addressLocality: "Parlin",
      addressRegion: "NJ",
      postalCode: "08859",
      addressCountry: "US",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      minValue: 34,
      maxValue: 40,
      unitText: "HOUR",
    },
  },
  jobBenefits: "Weekly performance bonuses; $500 tool credit line after 90 days; vehicle allowance built into the hourly rate",
  qualifications: REQUIREMENTS.join(". "),
  industry: "Home repair and handyman services",
  url: `${SITE}/careers`,
};

const TextCta = ({ className = "" }: { className?: string }) => (
  <a href={SMS_HREF} className={`brutalist-cta ${className}`}>
    <MessageSquare className="h-5 w-5" />
    Text HANDY to {PHONE_DISPLAY}
  </a>
);

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Handyman Jobs Princeton NJ | $34-40/hr W-2 Flexible | Princeton Handyman"
        description="One handyman technician opening with Princeton Handyman. $34–40/hr on a W-2, 1–3 flexible days a week, weekly bonuses, Princeton and Mercer County jobs plus Middlesex routes. Text HANDY to (609) 375-0098."
        canonical="/careers"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-16 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Hiring: One Technician</div>
            <h1 className="brutalist-headline text-3xl sm:text-4xl md:text-6xl text-background mb-6 leading-[1.05] md:leading-[0.95]">
              Handyman Technician, $34–40/hr
              <br />
              <span className="text-background/70">Part-Time, Your Schedule | Princeton, NJ</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Princeton Handyman has more booked work than hands. We are a locally owned,
              5.0-star repair company (no franchise fees, no app taking a cut) looking for one
              experienced technician who wants to pick the days they work and grow into more.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <TextCta className="w-full sm:w-auto" />
              <span className="font-body text-base text-background/70">Reply within 24 hours, guaranteed.</span>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 md:py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-8 md:mb-10 pb-4 heavy-border-b">
              <div className="brutalist-section-eyebrow">The Offer</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">What Comes With the Job</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {PERKS.map((perk) => (
                <div key={perk.title} className="bento-card p-6">
                  <perk.icon className="h-6 w-6 mb-3 text-primary" />
                  <h3 className="font-headline font-semibold text-xl text-foreground mb-2">{perk.title}</h3>
                  <p className="font-body text-base text-muted-foreground">{perk.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we need + Ideal for */}
        <section className="py-16 md:py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
              <div className="lg:col-span-2 bento-card bg-background p-6 md:p-8">
                <div className="brutalist-section-eyebrow">Requirements</div>
                <h2 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-6">What You Bring</h2>
                <ul className="space-y-4">
                  {REQUIREMENTS.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-base md:text-lg">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bento-card bg-background p-6 md:p-8">
                <div className="brutalist-section-eyebrow">Good Fit</div>
                <h2 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-4">Who Thrives Here</h2>
                <p className="font-body text-base md:text-lg text-muted-foreground">{IDEAL_FOR}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Apply */}
        <section className="py-16 md:py-24 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="bento-card bg-foreground text-background p-8 md:p-12 text-center">
              <div className="brutalist-section-eyebrow text-background/70">Applying Takes One Text</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">
                Text HANDY to {PHONE_DISPLAY}
              </h2>
              <p className="font-body text-lg text-background/85 max-w-xl mx-auto mb-8">
                Skip the resume and the job board. Send the single word HANDY and the owner will
                text you back inside 24 hours to line up a short call.
              </p>
              <TextCta className="w-full sm:w-auto" />
              <p className="font-body text-xs text-background/60 mt-8 max-w-2xl mx-auto">
                Princeton Handyman and Central Jersey Home Services LLC hire as an equal
                opportunity employer. Every applicant is considered without regard to race, color,
                religion, sex, national origin, age, disability, or any other protected status.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
