import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, ArrowRight, Sun, Trees, Hammer, CheckCircle2, Calendar } from "lucide-react";

const Pergolas = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How much does a custom pergola cost in NJ?",
      answer:
        "Most freestanding cedar pergolas in Central NJ run $5,000–$15,000 installed, depending on size, materials, and roof style. A standard 12×12 cedar pergola with simple post-and-beam construction is typically $7,000–$10,000. Larger spans, attached pergolas, integrated lighting, or louvered roofs add cost. We provide line-itemed quotes — no vague estimates.",
    },
    {
      question: "Do I need a permit for a pergola in New Jersey?",
      answer:
        "It depends on your township and the pergola's size. Many NJ municipalities allow freestanding pergolas under a certain footprint without a building permit, but most require a zoning permit confirming setbacks. Attached pergolas almost always require a permit. We confirm permitting requirements with your township before any build begins and handle the paperwork.",
    },
    {
      question: "How long does a pergola installation take?",
      answer:
        "A standard 12×12 cedar pergola takes 3–4 days of on-site work after permits are secured: day 1 for post setting and concrete footings (which need to cure 24–48 hours), day 2–3 for beam assembly and rafters, and day 4 for finishing details. Larger or more complex pergolas can run 5–7 days.",
    },
    {
      question: "What materials do you use?",
      answer:
        "We primarily build with western red cedar (rot-resistant, ages beautifully) and pressure-treated structural lumber where it makes sense. For lower-maintenance options, we offer composite (Trex/AZEK) and aluminum frame systems. We don't use whitewood — it doesn't last in NJ weather.",
    },
    {
      question: "Are you taking projects right now?",
      answer:
        "Yes — and we're being intentional about how we ramp this service. We're a licensed Central NJ contractor with 15+ years of construction experience, expanding into outdoor structures. Our first wave of pergola projects is priced at a discount in exchange for being part of our portfolio. If you're looking for a great pergola at honest pricing and don't mind us photographing the build, you're our ideal early customer.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We build pergolas across Central New Jersey: Princeton, South Brunswick, Cranbury, Plainsboro, East Windsor, West Windsor, Lawrence Township, Robbinsville, Pennington, and Montgomery, and surrounding Mercer County towns.",
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
    serviceType: "Pergola Installation",
    name: "Custom Pergolas in Central NJ",
    description:
      "Custom-built cedar and composite pergolas, pavilions, and covered patios across Mercer County, New Jersey.",
    provider: { "@id": "https://handymanprinceton.com/#business" },
    areaServed: { "@type": "State", name: "New Jersey" },
    priceRange: "$$",
    url: "https://handymanprinceton.com/pergolas",
  };

  const types = [
    { icon: Sun, title: "Freestanding Cedar", note: "10×10 to 16×16", body: "Western red cedar posts and beams, traditional rafter top, optional shade cloth or louvered roof. Ages to a beautiful gray patina." },
    { icon: Trees, title: "Attached Pergolas", note: "Connects to home or deck", body: "Ledger-mounted to your house or existing deck. Permit-managed, structurally engineered for NJ snow loads." },
    { icon: Hammer, title: "Composite & Low-Maintenance", note: "Trex, AZEK, aluminum", body: "For homeowners who don't want to re-stain. Higher upfront cost, decades of zero maintenance." },
  ];

  const process = [
    { num: "01", title: "Estimate & Site Visit", body: "We meet at your property, look at the site, talk through size, materials, and budget. Written quote within 48 hours." },
    { num: "02", title: "Design & Permit", body: "We draft a build plan, confirm zoning setbacks with your township, and pull required permits. You skip the bureaucracy." },
    { num: "03", title: "Build (3–7 Days)", body: "Posts and footings on day one (24-hour cure). Beam assembly, rafters, and finish work over the following days. Daily cleanup." },
    { num: "04", title: "Walk-Through", body: "We walk the finished build with you, address adjustments, and provide care instructions for the materials we used." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom Pergolas in Central NJ | Princeton Handyman"
        description="Custom-built cedar and composite pergolas across Central New Jersey. Licensed, insured, with 15+ years of combined construction experience. Booking next 4–6 weeks with early-project pricing."
        canonical="/pergolas"
        keywords="pergola installer NJ, custom pergola Princeton, cedar pergola West Windsor, backyard pergola Mercer County, pergola builder Central NJ"
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
              Custom Pergolas.
              <br />
              <span className="text-background/70">Central New Jersey.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Hand-built cedar and composite pergolas. Licensed and insured, by the Syed Brothers — 15+ years of combined Central NJ construction experience.
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
              Real construction. Fair price. Photographed for our portfolio.
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                We're Princeton Handyman — a licensed Central NJ contractor with 15+ years of construction experience. We've spent a decade doing kitchen remodels, bathrooms, decks, framing, and finish carpentry across Mercer County. We're now expanding into outdoor structures and accepting our first wave of pergola projects at portfolio pricing.
              </p>
              <p>
                What this means for you: a pergola built with real construction skill, licensed and insured, at a price 20–30% below what established outdoor-living companies charge. In exchange, we ask to photograph the build for our portfolio.
              </p>
              <p className="font-headline font-bold text-foreground uppercase tracking-wider text-sm">
                If that trade sounds fair, we'd love to build your pergola.
              </p>
            </div>
          </div>
        </section>

        {/* Types — bento style */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">What We Build</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Three Pergola Styles</h2>
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

        {/* Process */}
        <section className="py-20 bg-muted heavy-border-b">
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
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Why Work With Us</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-12">Four Reasons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["Licensed & Insured in NJ", "Full liability coverage and workers' comp on every job. Proof on request."],
                ["15+ Years of Construction", "We've framed, finished, and built across Mercer County for over a decade."],
                ["Real Pricing, In Writing", "Line-itemed quotes. No vague estimates. No surprise change orders unless you change scope."],
                ["Portfolio Pricing", "First-wave projects priced 20–30% off market. We photograph the build. Fair trade."],
              ].map(([title, body]) => (
                <div key={title as string} className="bento-card p-6 flex gap-4">
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
        <section className="py-20 bg-muted heavy-border-b">
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
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Ready For Your Pergola?</h2>
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

export default Pergolas;
