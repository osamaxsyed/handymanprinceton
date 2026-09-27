import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import locations from "@/data/locations.json";
import services from "@/data/services.json";
import { useNavigate } from "react-router-dom";

const ServiceAreasPage = () => {
  const navigate = useNavigate();
  const sortedLocations = [...locations].sort((a, b) => b.priority - a.priority);
  const featuredServices = services.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Towns We Serve | Princeton Handyman, Mercer County NJ"
        description="Flat-rate handyman visits in Princeton, West Windsor, Plainsboro, Lawrence Township, Montgomery, Pennington, South Brunswick, Cranbury, East Windsor, and Robbinsville. $345 visit, price fixed before we start."
        canonical="/service-areas"
        keywords="handyman Princeton NJ, handyman West Windsor, Plainsboro handyman, Lawrence Township repairs, Mercer County home repairs"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Coverage Area</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Towns We Serve.
              <br />
              <span className="text-background/70">Princeton and the Route 1 Corridor.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Ten towns across Mercer County and the neighboring edges of Middlesex and Somerset, all reached from Route 1, Route 206, and Route 130. Registered NJ home improvement contractor, bonded and insured. NJ HIC #13VH13918800.
            </p>
            <a
              href="tel:6093750098"
              className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-background text-foreground border-b-4 border-background/40 hover:bg-background/90 active:translate-y-0.5 active:border-b-0 transition-all rounded-none"
            >
              <Phone className="h-4 w-4" />
              (609) 375-0098
            </a>
          </div>
        </section>

        {/* Cities grid */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Pick Your Town</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">{sortedLocations.length} Towns, One Flat Price</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {sortedLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/service-areas/${loc.slug}`}
                  className="bento-card p-6 group block hover:bg-foreground hover:text-background transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5" />
                    <h3 className="brutalist-headline text-xl">{loc.name}</h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground group-hover:text-background/80 mb-4 leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>
                  <p className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground group-hover:text-background/70 mb-3">
                    ZIP: {loc.zipCodes.join(", ")}
                  </p>
                  <span className="font-headline font-bold uppercase tracking-wider text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Open Town Page <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services by Location */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">By Service and Town</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Jump Straight to the Job</h2>
            </div>
            <div className="space-y-4">
              {featuredServices.map((s) => (
                <div key={s.slug} className="bento-card bg-background p-6">
                  <h3 className="brutalist-headline text-lg md:text-xl text-foreground mb-2">{s.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sortedLocations.slice(0, 6).map((loc) => (
                      <Link
                        key={`${s.slug}-${loc.slug}`}
                        to={`/${s.slug}/${loc.slug}`}
                        className="font-headline font-bold uppercase tracking-wider text-[10px] text-foreground border-2 border-foreground px-3 py-1 hover:bg-foreground hover:text-background transition-colors"
                      >
                        {loc.name}
                      </Link>
                    ))}
                    {sortedLocations.length > 6 && (
                      <span className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground px-3 py-1">
                        + {sortedLocations.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Your Town Not on the List?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              If you are within a short drive of Princeton, call and ask. We often say yes to the towns just past the edge of the map.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </main>

      <Footer />
    </div>
  );
};

export default ServiceAreasPage;
