import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqSchema from "@/components/FaqSchema";
import { Check, X, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GoogleReview from "@/components/GoogleReview";
import { getCoreService, coreServices, PACKAGES, WARRANTY } from "@/data/coreServices";
import { site } from "@/data/site";

// One template for the data-driven core-service pages (doors, tv-mounting,
// deck-fence-repair, tile-grout-caulk, fixture-swaps, painting-touch-ups,
// home-maintenance). Layout mirrors /handyman so nothing new is invented.
const CoreServicePage = ({ slug }: { slug: string }) => {
  const s = getCoreService(slug);
  if (!s) return null;
  const related = coreServices.filter((c) => s.related.includes(c.href));

  return (
    <div className="min-h-screen bg-background">
      <SEO title={s.seoTitle} description={s.seoDescription} canonical={s.href} />
      <Header />
      <FaqSchema faqs={s.faqs} />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-16 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">{s.eyebrow}</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              {s.h1}
              <br />
              <span className="text-background/70">{s.h1Sub}</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> covers {s.name.toLowerCase()} for Princeton, West Windsor,
              Plainsboro, Lawrence Township, Montgomery, and the towns around them.{s.intro ? ` ${s.intro}` : ""}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-on-dark">
                <MessageSquare className="h-5 w-5" />
                Text Us a Photo
              </a>
            </div>
          </div>
        </section>

        {/* Included / not included */}
        <section className="py-16 md:py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
              <div className="lg:col-span-2 bento-card p-6 md:p-8">
                <div className="brutalist-section-eyebrow">In Scope</div>
                <h2 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-6">What's Covered</h2>
                <ul className="space-y-3">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-base md:text-lg">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bento-card bg-muted p-6 md:p-8">
                <div className="brutalist-section-eyebrow">Out of Scope</div>
                <h2 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-6">What We Leave to Others</h2>
                <ul className="space-y-3">
                  {s.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-base">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Which package */}
        <section className="py-16 md:py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Flat Pricing</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-4">Pick the Block</h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl">
              General repairs are sold by the block of time; specialty installs get a per-job quote. Both are fixed before we arrive, with materials at cost on the invoice.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {PACKAGES.map((p) => (
                <div key={p.key} className="bento-card bg-background p-7 flex flex-col">
                  <p className="brutalist-section-eyebrow mb-1">{p.name}</p>
                  <p className="font-headline font-bold text-[38px] leading-none text-primary mb-2">{p.price}</p>
                  <p className="font-body text-base font-semibold text-foreground mb-4">{p.sub}</p>
                  <ul className="space-y-2">
                    {s.fits[p.key].map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-base">
                        <Check className="h-4 w-4 text-foreground flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link to="/book" className="brutalist-cta w-fit">
                Request a visit online <ArrowRight className="h-5 w-5" />
              </Link>
              <span className="font-body text-base text-muted-foreground inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {WARRANTY}
              </span>
            </div>
          </div>
        </section>

        {/* Proof */}
        {s.review && (
          <section className="py-16 md:py-20 bg-background heavy-border-b">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
              <div className="brutalist-section-eyebrow">From Google</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-8">In Their Words.</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <GoogleReview quote={s.review.quote} name={s.review.name} detail={s.review.detail} />
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Questions</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-10">Before You Book</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {s.faqs.map((f) => (
                <div key={f.question} className="bento-card p-6 md:p-8">
                  <h3 className="font-headline font-semibold text-xl text-foreground mb-3">{f.question}</h3>
                  <p className="font-body text-base text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related + CTA */}
        <section className="py-16 md:py-20 bg-foreground text-background">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-3">Whenever You're Ready.</h2>
                <p className="font-body text-lg text-background/80 max-w-xl mb-6">
                  A photo and one line is enough. You get a reply the same business day with the block that fits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={site.smsHref} className="brutalist-cta">
                    <MessageSquare className="h-5 w-5" />
                    Text {site.phoneDisplay}
                  </a>
                  <Link to="/book" className="brutalist-cta-on-dark">
                    Request online <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              {related.length > 0 && (
                <div>
                  <div className="brutalist-section-eyebrow text-background/70">Often Booked Together</div>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.href}>
                        <Link to={r.href} className="font-body text-lg text-background underline decoration-2 underline-offset-4 hover:text-background/80">
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoreServicePage;
