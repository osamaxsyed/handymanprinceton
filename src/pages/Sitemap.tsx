import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

const Sitemap = () => {
  const siteLinks = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Bathroom Remodeling", path: "/bathroom-remodel" },
        { name: "Kitchen Remodeling", path: "/kitchen-remodeling" },
        { name: "Aging-in-Place", path: "/aging-in-place" },
        { name: "Handyman Services", path: "/handyman-services" },
        { name: "Remodels", path: "/remodels" },
        { name: "About Us", path: "/about" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "FAQ", path: "/faq" },
        { name: "Get Estimate", path: "/get-estimate" },
      ],
    },
    {
      category: "Bathroom Tools",
      links: [
        { name: "1-Day Bathroom Refresh", path: "/bathroom-refresh" },
        { name: "Bathroom Remodel Calculator", path: "/bathroom-remodel-calculator" },
      ],
    },
    {
      category: "Service Areas",
      links: [
        { name: "All Service Areas", path: "/service-areas" },
        { name: "Princeton, NJ", path: "/service-areas/princeton" },
        { name: "Plainsboro, NJ", path: "/service-areas/plainsboro" },
        { name: "West Windsor, NJ", path: "/service-areas/west-windsor" },
        { name: "Lawrence Township, NJ", path: "/service-areas/lawrence-township" },
        { name: "Montgomery, NJ", path: "/service-areas/montgomery" },
        { name: "Pennington, NJ", path: "/service-areas/pennington" },
      ],
    },
    {
      category: "Legal & Info",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Sitemap", path: "/sitemap" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sitemap | Princeton Handyman"
        description="Browse all pages on the Princeton Handyman website — services, service areas, and more."
        canonical="/sitemap"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-16 md:py-20">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Site Index</div>
            <h1 className="brutalist-headline text-4xl md:text-6xl text-background mb-4 leading-[0.95]">
              Sitemap.
            </h1>
            <p className="font-body text-base md:text-lg text-background/85 max-w-2xl border-l-4 border-background pl-5">
              Every page on the Princeton Handyman website. Navigate quickly to any content you're looking for.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {siteLinks.map((section) => (
                <div key={section.category} className="bento-card bg-background p-6 md:p-8">
                  <h2 className="brutalist-headline text-lg md:text-xl text-foreground mb-4 pb-3 border-b-2 border-foreground">
                    {section.category}
                  </h2>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="font-body text-sm md:text-base text-muted-foreground hover:text-foreground hover:underline underline-offset-4 decoration-2 transition-colors py-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-3xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Can't Find Something?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Contact us directly and we'll point you in the right direction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6095160098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-background text-foreground border-b-4 border-background/40 hover:bg-background/90 active:translate-y-0.5 active:border-b-0 transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 516-0098
              </a>
              <a
                href="mailto:osama@handymanprinceton.com"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
