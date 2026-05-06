import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, ArrowRight, Briefcase, Home, BookOpen, CheckCircle2, Calendar } from "lucide-react";

const BackyardStudios = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How much does a backyard studio cost in NJ?",
      answer:
        "Most insulated, finished backyard studios in Central NJ run $15,000–$40,000 installed. A standard 8×10 office-style studio with insulation, drywall, electrical, and finished interior is typically $15,000–$22,000. Larger 10×12 or 12×16 studios with multiple windows, premium siding, mini-split HVAC, and built-in storage run $25,000–$40,000.",
    },
    {
      question: "What's the difference between a backyard studio and an ADU?",
      answer:
        "A backyard studio is a non-habitable accessory structure — typically under 200 sq ft, no plumbing, often no permanent foundation. It's a workspace, hobby room, or office. An ADU (Accessory Dwelling Unit) is a habitable second dwelling with plumbing, kitchen, and bathroom — and triggers full building permits, zoning review, and code compliance. Studios are dramatically simpler, cheaper, and faster than ADUs because they avoid the habitable-space rules.",
    },
    {
      question: "Do I need a permit for a backyard studio in New Jersey?",
      answer:
        "It depends on size, foundation type, and whether it has electrical service. Most NJ townships allow studios under 100–200 sq ft on a non-permanent foundation without a building permit, but most still require a zoning permit confirming setbacks. Adding electrical service from the main house typically triggers an electrical permit. We confirm permitting requirements with your township before any build begins.",
    },
    {
      question: "How long does a backyard studio take to build?",
      answer:
        "A standard 8×10 finished studio typically takes 2–3 weeks of on-site work after permits are secured. A larger 10×12 with electrical, mini-split, and full interior finish runs 3–4 weeks. Most of the timeline is interior finish work — framing and weatherproofing happen in the first week.",
    },
    {
      question: "Can I use it as a home office or workout space?",
      answer:
        "Yes — those are the two most common uses. WFH home offices and home gyms are the bulk of what people build. We also build studios for art, music, reading, hobby workshops, and 'mother-in-law lounges' (non-habitable). The key constraint is no kitchen, no bathroom — those would make it an ADU, which is a different scope of project.",
    },
    {
      question: "Are you taking projects right now?",
      answer:
        "Yes — and we're being intentional about how we ramp this service. We're a licensed Central NJ contractor with 15+ years of construction experience, expanding into outdoor structures. Our first wave of backyard studio builds is priced at a discount in exchange for being part of our portfolio.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We build backyard studios across Central New Jersey: Princeton, South Brunswick, Cranbury, Plainsboro, East Windsor, West Windsor, Lawrence Township, Robbinsville, Pennington, and Montgomery, and surrounding Mercer County towns.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Backyard Studio Construction",
    name: "Backyard Studios in Central NJ",
    description:
      "Custom-built insulated backyard studios, home offices, and garden offices across Mercer County, New Jersey.",
    provider: { "@id": "https://handymanprinceton.com/#business" },
    areaServed: { "@type": "State", name: "New Jersey" },
    priceRange: "$$",
    url: "https://handymanprinceton.com/backyard-studios",
  };

  const types = [
    { icon: Briefcase, title: "Home Office Studios", note: "8×10 to 10×12", body: "Quiet, insulated workspace separate from your house. Electrical service, mini-split HVAC option, large windows, finished interior." },
    { icon: Home, title: "Home Gyms & Hobby Rooms", note: "10×12 to 12×16", body: "Reclaim your garage. Insulated structure with reinforced flooring, mirrored walls, proper ventilation. Also great for art and music." },
    { icon: BookOpen, title: "Reading Nooks & Lounges", note: "Compact, premium-finished", body: "Smaller-footprint studios with premium interior finishes — built-in shelving, window seats, soft lighting. The 'writer's cabin' aesthetic." },
  ];

  const process = [
    { num: "01", title: "Estimate", body: "Site visit, scope, materials, and budget. Written quote within 48 hours." },
    { num: "02", title: "Permit Check", body: "We confirm zoning setbacks, sq-ft thresholds, and electrical permit requirements." },
    { num: "03", title: "Shell (Week 1)", body: "Foundation, framing, sheathing, roofing, and weatherproofing. Dried-in by end of week one." },
    { num: "04", title: "Interior (Weeks 2–3)", body: "Insulation, electrical, drywall, flooring, trim, and chosen finishes. Mini-split if specified." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Backyard Studios & Home Offices in Central NJ | Princeton Handyman"
        description="Custom-built insulated backyard studios, home offices, and garden offices across Central New Jersey. Licensed and insured, with 15+ years of combined construction experience."
        canonical="/backyard-studios"
        keywords="backyard studio NJ, garden office Princeton, backyard home office, accessory structure Mercer County, backyard office Plainsboro, garden studio Central NJ"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">
              <Calendar className="inline h-3 w-3 mr-2" />
              Booking Next 4–6 Weeks — Early-Project Pricing
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Backyard Studios.
              <br />
              <span className="text-background/70">The Smart Middle Ground.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Insulated, finished, year-round-usable backyard studios — your home office, gym, or hobby room without the cost or permitting of a full ADU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
                Get a Free Estimate <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:6095160098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 516-0098
              </a>
            </div>
          </div>
        </section>

        {/* Honest positioning */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Honest Up Front</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-6">
              A real space — without the permitting nightmare of a full ADU.
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                A backyard studio is the smartest middle ground between "I need more space at home" and "I'd love an ADU but the permitting is too much." We build insulated, finished, year-round-usable structures sized to stay under habitable-space thresholds — which means dramatically less paperwork, lower cost, and faster timeline than a full Accessory Dwelling Unit.
              </p>
              <p>
                We're Princeton Handyman — a licensed Central NJ contractor with 15+ years of construction experience. We're now expanding into outdoor accessory structures, with our first wave of studio builds priced at portfolio rates.
              </p>
              <p className="font-headline font-bold text-foreground uppercase tracking-wider text-sm">
                Real construction skill, fair pricing, photographed for our portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">What We Build</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Three Studio Styles</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {types.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="bento-card p-8 min-h-[280px] flex flex-col justify-between">
                    <div>
                      <Icon className="h-8 w-8 text-foreground mb-4" />
                      <span className="brutalist-section-eyebrow block mb-2">{t.note}</span>
                      <h3 className="brutalist-headline text-xl md:text-2xl text-foreground mb-3">{t.title}</h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Studio vs ADU comparison */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <div className="brutalist-section-eyebrow">Studio vs. ADU</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Which Do You Need?</h2>
              <p className="font-body text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                The difference is whether you can live in it. That single question changes everything.
              </p>
            </div>

            <div className="grid md:grid-cols-2 heavy-border bg-background">
              <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                <h3 className="brutalist-headline text-2xl text-foreground mb-2">Backyard Studio</h3>
                <p className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground mb-6">Non-habitable accessory</p>
                <dl className="space-y-3 text-sm">
                  {[
                    ["Cost", "$15k–$40k"],
                    ["Timeline", "2–4 weeks"],
                    ["Permits", "Zoning only (usually)"],
                    ["Plumbing", "No"],
                    ["Best for", "Office, gym, hobby"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-border pb-2">
                      <dt className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground">{k}</dt>
                      <dd className="font-headline font-bold text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="p-8">
                <h3 className="brutalist-headline text-2xl text-foreground mb-2">Full ADU</h3>
                <p className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground mb-6">Habitable second dwelling</p>
                <dl className="space-y-3 text-sm">
                  {[
                    ["Cost", "$80k–$250k"],
                    ["Timeline", "4–9 months"],
                    ["Permits", "Full building + zoning"],
                    ["Plumbing", "Yes — kitchen + bath"],
                    ["Best for", "Rental, in-law, guest"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-border pb-2">
                      <dt className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground">{k}</dt>
                      <dd className="font-headline font-bold text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-8 text-center">
              Considering a full ADU? Our sister service{" "}
              <a href="https://gardenstateadu.com" className="font-headline font-bold uppercase tracking-wider text-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                Garden State ADU
              </a>{" "}
              offers $750 feasibility studies that confirm what's legally buildable on your lot before you spend on architects.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <div className="brutalist-section-eyebrow">The Process</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">How We Build</h2>
              <div className="w-24 h-1 bg-foreground mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 heavy-border bg-background">
              {process.map((p, i) => (
                <div
                  key={p.num}
                  className={`p-8 md:p-10 relative group hover:bg-muted transition-colors ${
                    i < process.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-foreground" : ""
                  }`}
                >
                  <div className="absolute top-4 right-4 font-headline font-black text-5xl md:text-6xl text-foreground/10 group-hover:text-foreground/30 transition-colors">
                    {p.num}
                  </div>
                  <h3 className="brutalist-headline text-xl text-foreground mb-3 mt-2">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Why Work With Us</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-12">Four Reasons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["Licensed & Insured in NJ", "Full liability coverage and workers' comp on every job. Proof on request."],
                ["15+ Years of Construction", "We've framed, finished, and built across Mercer County for over a decade."],
                ["ADU-Adjacent Expertise", "We know NJ zoning rules and what triggers full ADU permitting vs. simpler accessory rules."],
                ["Portfolio Pricing", "First-wave projects priced 20–30% off market. We photograph the build."],
              ].map(([title, body]) => (
                <div key={title as string} className="bento-card p-6 flex gap-4 bg-background">
                  <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="brutalist-headline text-base text-foreground mb-2">{title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-3xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">FAQ</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-12">Common Questions</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="heavy-border bg-background group">
                  <summary className="cursor-pointer p-5 font-headline font-bold uppercase tracking-wider text-sm text-foreground flex justify-between items-center">
                    {f.question}
                    <span className="font-headline font-black text-2xl text-foreground/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed px-5 pb-5 border-t border-border pt-4">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Ready For Your Studio?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Limited spots at portfolio pricing. Free estimate, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
                Request a Free Estimate <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:6095160098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 516-0098
              </a>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </main>

      <Footer />
    </div>
  );
};

export default BackyardStudios;
