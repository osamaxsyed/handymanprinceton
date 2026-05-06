import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const cities = [
    { name: "Princeton", slug: "princeton" },
    { name: "Plainsboro", slug: "plainsboro" },
    { name: "West Windsor", slug: "west-windsor" },
    { name: "Lawrence Township", slug: "lawrence-township" },
    { name: "Montgomery", slug: "montgomery" },
    { name: "Skillman", slug: "skillman" },
    { name: "Hopewell Borough", slug: "hopewell-borough" },
    { name: "Pennington", slug: "pennington" },
    { name: "Rocky Hill", slug: "rocky-hill" },
    { name: "Kingston", slug: "kingston" },
    { name: "South Brunswick", slug: "south-brunswick" },
    { name: "Robbinsville", slug: "robbinsville" },
    { name: "East Windsor", slug: "east-windsor" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background heavy-border-t">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 pb-6 heavy-border-b flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="brutalist-section-eyebrow">Coverage Area</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
              Where We Build
            </h2>
          </div>
          <p className="font-body text-base md:text-lg text-muted-foreground md:max-w-md">
            Central NJ — Mercer County and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 heavy-border bg-background">
          {cities.map((c, i) => (
            <Link
              key={c.slug}
              to={`/service-areas/${c.slug}`}
              className={`group p-5 flex items-center justify-between font-headline font-bold uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-colors
                ${i % 4 !== 3 ? "md:border-r-2 md:last:border-r-0" : ""}
                ${i % 3 !== 2 ? "border-r-2 md:border-r-0" : ""}
                ${i % 2 !== 1 ? "border-r-2 md:border-r-2" : ""}
                border-b-2 border-foreground`}
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                {c.name}
              </span>
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 heavy-border-t">
          <Link
            to="/service-areas"
            className="font-headline font-bold uppercase tracking-wider text-sm text-foreground inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Areas <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:6095160098"
            className="font-headline font-bold uppercase tracking-wider text-sm text-muted-foreground inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            Don't see your city? Call (609) 516-0098
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
