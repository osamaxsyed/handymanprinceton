import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, ArrowRight, Home, Hammer, Wrench, CheckCircle2, Calendar } from "lucide-react";

const CustomSheds = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How much does a custom shed cost in NJ?",
      answer:
        "Most custom-built sheds in Central NJ run $5,000–$15,000 installed. A standard 8×10 storage shed with T1-11 siding and asphalt shingles is typically $5,000–$7,000. A 10×12 or 12×16 with metal roofing, larger windows, and modern barn-door styling runs $8,000–$15,000. Compared to prefab box-store sheds, custom builds last 3–4× longer and look intentional in your yard.",
    },
    {
      question: "Do I need a permit for a shed in New Jersey?",
      answer:
        "Most NJ townships allow sheds under 100–200 sq ft (an 8×10 is 80 sq ft, a 10×12 is 120) without a building permit, but many still require a zoning permit confirming setbacks from property lines. Larger sheds, electrical hookups, or sheds on permanent foundations almost always require a permit. We confirm requirements with your township and handle paperwork.",
    },
    {
      question: "Do you build on-site or deliver pre-built?",
      answer:
        "We build on-site. This lets us match your specific lot conditions, integrate with existing landscaping, and use full-dimensional lumber that doesn't fit on a delivery truck. On-site builds also avoid the structural compromises that prefab and pre-delivered sheds require.",
    },
    {
      question: "How long does a shed build take?",
      answer:
        "An 8×10 storage shed typically takes 2–3 days on-site. A larger 12×16 with custom features (windows, electrical rough-in, modern siding) runs 4–5 days. Most of the work happens after foundations cure, so calendar time is usually 5–7 days from start to finish.",
    },
    {
      question: "What materials do you use?",
      answer:
        "Pressure-treated foundation lumber, kiln-dried framing, and your choice of siding (T1-11, board-and-batten, vertical metal panel, or LP SmartSide). Roofing options: architectural asphalt shingles or standing-seam metal. We don't use whitewood framing or flimsy panel siding — those rot in NJ weather.",
    },
    {
      question: "Are you taking projects right now?",
      answer:
        "Yes — and we're being intentional about how we ramp this service. We're a licensed Central NJ contractor with 15+ years of construction experience, expanding into custom outdoor structures. Our first wave of shed builds is priced at a discount in exchange for being part of our portfolio.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We build sheds across Central New Jersey: Princeton, Plainsboro, West Windsor, Lawrence Township, Montgomery, Skillman, Hopewell Borough, Pennington, Rocky Hill, Kingston, South Brunswick, Robbinsville, East Windsor, and surrounding Mercer County towns.",
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
    serviceType: "Custom Shed Construction",
    name: "Custom Sheds in Central NJ",
    description:
      "Custom-built storage sheds, garden sheds, and modern barn-style sheds across Mercer County, New Jersey.",
    provider: { "@id": "https://handymanprinceton.com/#business" },
    areaServed: { "@type": "State", name: "New Jersey" },
    priceRange: "$$",
    url: "https://handymanprinceton.com/custom-sheds",
  };

  const types = [
    { icon: Home, title: "Storage Sheds", note: "8×10 to 10×12", body: "Lawnmowers, tools, bikes, seasonal storage. Pressure-treated foundation, framed walls, asphalt or metal roof." },
    { icon: Hammer, title: "Modern Barn-Style", note: "Vertical metal, board-and-batten", body: "For homeowners who want their shed to look intentional. Standing-seam metal, large barn doors, modern proportions." },
    { icon: Wrench, title: "Workshop Sheds", note: "10×12 to 12×16 with windows", body: "Bigger footprint, more windows, optional electric rough-in, built-in workbenches. Hobby workshops and potting rooms." },
  ];

  const process = [
    { num: "01", title: "Estimate & Site Visit", body: "We come to your property, look at the site, talk through size, style, and budget. Written quote within 48 hours." },
    { num: "02", title: "Township Permit", body: "We confirm zoning setbacks and pull required permits. You skip the bureaucracy." },
    { num: "03", title: "Build On-Site (2–5 Days)", body: "Foundation and framing on day one. Sheathing, siding, roof, and trim over the following days. Daily cleanup." },
    { num: "04", title: "Walk-Through", body: "We walk the finished build with you, address adjustments, and explain care for the materials we used." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom Sheds in Central NJ | Princeton Handyman"
        description="Custom-built storage sheds and modern barn-style sheds across Central New Jersey. Licensed and insured, with 15+ years of combined construction experience. Limited early-project pricing."
        canonical="/custom-sheds"
        keywords="custom shed builder NJ, storage shed Princeton, garden shed Plainsboro, modern shed Mercer County, shed installation Central NJ"
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
              Custom Sheds.
              <br />
              <span className="text-background/70">Built On-Site.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Real custom-built sheds — not prefab kits. Storage, garden, modern barn-style. Built by the Syed Brothers — 15+ years of combined Central NJ construction experience.
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
            <div className="brutalist-section-eyebrow">Better than the Box-Store</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-6">
              A real shed lasts 25+ years. Big-box prefabs last 6–10.
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                A prefab shed from a big-box store will look identical to your neighbor's and start sagging at the door frame within 24 months. A custom-built shed lasts 25+ years, is sized for your actual yard, and is something you're proud to look at every day.
              </p>
              <p>
                We're Princeton Handyman — a licensed Central NJ contractor with 15+ years of construction experience. We're now expanding into custom outdoor structures and offering our first wave of sheds at portfolio pricing.
              </p>
              <p className="font-headline font-bold text-foreground uppercase tracking-wider text-sm">
                Real construction, fair price, photographed for our portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">What We Build</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Three Shed Styles</h2>
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
                ["Real Pricing, In Writing", "Line-itemed quotes. No vague estimates. No surprise change orders."],
                ["Portfolio Pricing", "First-wave projects priced 20–30% off market. We photograph the build."],
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
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Ready For Your Shed?</h2>
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

export default CustomSheds;
