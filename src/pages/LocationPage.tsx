import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalTestimonials from "@/components/LocalTestimonials";
import { Phone, MapPin, ArrowRight, MessageSquare, Wrench } from "lucide-react";
import locations from "@/data/locations.json";


const LocationPage = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const locationData = locations.find((loc) => loc.slug === location);

  if (!locationData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <h1 className="brutalist-headline text-3xl text-foreground mb-4">We Don't Have a Page for That Town</h1>
          <Link to="/service-areas" className="font-headline font-bold uppercase tracking-wider text-sm text-foreground hover:underline">
            See every town we cover →
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const pageTitle = `Handyman in ${locationData.name}, NJ | $345 Flat-Rate Visit | Princeton Handyman`;
  const pageDescription = `Licensed handyman for ${locationData.name} homes: doors, drywall, fixtures, decks, tile and the rest of the list. One flat $345 visit, price settled before we start. NJ HIC #13VH13918800. Text (609) 375-0098.`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://handymanprinceton.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://handymanprinceton.com/service-areas" },
      { "@type": "ListItem", position: 3, name: locationData.name, item: `https://handymanprinceton.com/service-areas/${locationData.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://handymanprinceton.com/service-areas/${locationData.slug}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://handymanprinceton.com/service-areas/${locationData.slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="bg-background border-b-2 border-border">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to="/service-areas" className="hover:text-foreground">Service Areas</Link>
              <span>/</span>
              <span className="text-foreground">{locationData.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70 flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              {locationData.state} • {locationData.county}
            </div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Handyman.
              <br />
              <span className="text-background/70">{locationData.name}, NJ.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              <Link to="/" className="underline decoration-2 underline-offset-4 text-inherit">Princeton Handyman</Link> reaches {locationData.name} straight down the Route 1 corridor from our Middlesex County shop, and we are in the area most weeks.{" "}
              {locationData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate("/book")} className="brutalist-cta bg-background text-foreground border-background/30">
                Request a Visit <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:6093750098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 375-0098
              </a>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Neighborhoods Served</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-8">
              Every corner of {locationData.name}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {locationData.neighborhoods.map((n: string) => (
                <div key={n} className="font-body text-sm md:text-base text-muted-foreground border-l-4 border-foreground pl-3 py-1">
                  {n}
                </div>
              ))}
            </div>
            <p className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground">
              ZIP Codes: {locationData.zipCodes.join(", ")}
            </p>
          </div>
        </section>

        {/* Services bento */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Services</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">What We Fix in {locationData.name}</h2>
            </div>
            {/* Link to the flat money/service pages, not the noindexed combo grid.
                Every town gets the same strong pages; town-specific copy lives in
                the local-context section, not in thin per-town service clones. */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { to: "/handyman", name: "Handyman Visit", desc: "Two hours of general repairs for one flat $345. Send the whole list, not just the worst item." },
                { to: "/drywall-repair", name: "Drywall Repair", desc: "Holes, settling cracks, ceiling stains, and full sheets, finished so the patch does not show." },
                { to: "/doors", name: "Doors & Locks", desc: "New doors in the frame you already have, sticking doors tuned, deadbolts and keypad locks fitted." },
                { to: "/carpentry", name: "Carpentry & Trim", desc: "Casing, baseboard, built-in shelving, loose banisters, and rotted exterior wood cut out and rebuilt." },
                { to: "/tv-mounting", name: "TV Mounting & Assembly", desc: "TVs anchored into framing, flat-pack furniture built, mirrors and blinds hung straight." },
                { to: "/deck-fence-repair", name: "Deck & Fence Repair", desc: "Soft boards swapped, rails firmed up, posts reset, gates rehung, and a coat of stain." },
                { to: "/tile-grout-caulk", name: "Tile, Grout & Caulk", desc: "Fresh grout and silicone, cracked tiles replaced, grab bars anchored, shower doors hung." },
                { to: "/fixture-swaps", name: "Fixture & Faucet Swaps", desc: "Faucets, toilets, lights, fans, and switches replaced like-for-like. Ordinary maintenance, no permit." },
                { to: "/home-maintenance", name: "Home Maintenance", desc: "Dryer vents cleared, drafts sealed, screens fixed, squeaks quieted, detectors swapped." },
                { to: "/backsplash", name: "Backsplash Installation", desc: "One to two days of kitchen or bath tile with straight lines, clean outlet cuts, and tight grout." },
              ].map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="bento-card bg-background p-6 group block hover:bg-foreground hover:text-background transition-colors"
                >
                  <Wrench className="h-7 w-7 mb-4" />
                  <h3 className="brutalist-headline text-lg mb-2">{s.name}</h3>
                  <p className="font-body text-sm text-muted-foreground group-hover:text-background/80 leading-relaxed line-clamp-2 mb-4">
                    {s.desc}
                  </p>
                  <span className="font-headline font-bold uppercase tracking-wider text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    See Details <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local context */}
        {locationData.localContext && (
          <section className="py-20 bg-background heavy-border-b">
            <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
              <div className="brutalist-section-eyebrow">Local Knowledge</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-6">
                What {locationData.name} Houses Tend to Need
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                {locationData.localContext}
              </p>
              <div className="flex flex-wrap gap-2">
                {locationData.neighborhoods.map((n: string) => (
                  <span key={n} className="font-headline font-bold uppercase tracking-wider text-[10px] text-foreground border-2 border-foreground px-3 py-1">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Real local reviews */}
        <LocalTestimonials locationSlug={locationData.slug} locationName={locationData.name} />

        {/* Why us */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow">Why {locationData.name} Calls Us</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-12">Three Reasons</h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                ["Licensed & Insured", "A registered NJ home improvement contractor (NJ HIC #13VH13918800), bonded, carrying general liability coverage on every job."],
                ["The Price Comes First", `$345 for a two-hour visit, $595 for a half day, $1,095 for a full day. The number is set before we park in ${locationData.name}, and materials are billed at cost.`],
                ["Backed for a Year", "Our workmanship carries a one-year labor warranty. If something we did fails inside twelve months, we return and put it right at no charge."],
              ].map(([title, body]) => (
                <div key={title} className="bento-card bg-background p-6">
                  <h3 className="brutalist-headline text-lg text-foreground mb-3">{title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">
              Got a List in {locationData.name}?
            </h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Send it with photos and you will have a flat price the same business day. Materials at cost, one-year labor warranty, no hourly meter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="sms:6093750098" className="brutalist-cta bg-background text-foreground border-background/30">
                <MessageSquare className="h-4 w-4" />
                Text Photos of the Job
              </a>
              <a
                href="tel:6093750098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 375-0098
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LocationPage;
