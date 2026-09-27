import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { coreServices } from "@/data/coreServices";

const Sitemap = () => {
  const siteLinks = [
    {
      category: "Core Services",
      links: [
        { name: "Handyman Visit", path: "/handyman" },
        ...coreServices.map((s) => ({ name: s.name, path: s.href })),
      ],
    },
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Grab Bar Installation", path: "/grab-bar-installation" },
        { name: "Shower Doors", path: "/shower-doors" },
        { name: "Backsplash", path: "/backsplash" },
        { name: "Storage Sheds", path: "/storage-sheds" },
        { name: "Commercial Handyman", path: "/commercial-handyman" },
        { name: "Property Managers", path: "/property-managers" },
        { name: "About Us", path: "/about" },
        { name: "FAQ", path: "/faq" },
        { name: "Careers (Now Hiring)", path: "/careers" },
      ],
    },
    {
      category: "Service Areas",
      links: [
        { name: "All Service Areas", path: "/service-areas" },
        { name: "Princeton, NJ", path: "/service-areas/princeton" },
        { name: "West Windsor, NJ", path: "/service-areas/west-windsor" },
        { name: "Plainsboro, NJ", path: "/service-areas/plainsboro" },
        { name: "Lawrence Township, NJ", path: "/service-areas/lawrence-township" },
        { name: "Montgomery, NJ", path: "/service-areas/montgomery" },
        { name: "Pennington, NJ", path: "/service-areas/pennington" },
        { name: "South Brunswick, NJ", path: "/service-areas/south-brunswick" },
        { name: "Cranbury, NJ", path: "/service-areas/cranbury" },
        { name: "East Windsor, NJ", path: "/service-areas/east-windsor" },
        { name: "Robbinsville, NJ", path: "/service-areas/robbinsville" },
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
        description="Every page on handymanprinceton.com in one place: the nine core services, bigger jobs, the ten Mercer County area towns we serve, and the legal pages."
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
              The whole Princeton Handyman site laid out by section, so you can jump straight to the service or town you came for.
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
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Still Looking for Something?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Skip the menu. Call or email and a real person will point you to the right page, or just price the job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6093750098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-background text-foreground border-b-4 border-background/40 hover:bg-background/90 active:translate-y-0.5 active:border-b-0 transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 375-0098
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
