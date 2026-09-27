import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CORE_TOWNS, EXTENDED_TOWNS, townNames } from "@/data/coreServices";
import { site } from "@/data/site";

const ServiceAreas = () => {
  const cities = [...CORE_TOWNS, ...EXTENDED_TOWNS];

  return (
    <section className="py-20 md:py-28 bg-background heavy-border-t">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 pb-6 heavy-border-b flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="brutalist-section-eyebrow">Coverage Area</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
              Towns We Serve
            </h2>
          </div>
          <p className="font-body text-base md:text-lg text-muted-foreground md:max-w-md">
            Princeton and the Mercer County ring around it, plus the Middlesex and Somerset towns that border it.
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
        <p className="font-body text-base text-muted-foreground mt-4 mb-0">
          The Princeton ring is {townNames(CORE_TOWNS)}. We also cover {townNames(EXTENDED_TOWNS)} most weeks.
        </p>

        <div className="mt-9 pt-6 heavy-border-t">
          <img src="/mark-truck-charcoal.png" alt="" className="w-[168px] h-auto opacity-90" />
          <p className="font-body text-[17px] text-[#795B41] mt-3 mb-0">
            Spotted the red Tacoma on Route 1? That was us on the way to a job.
          </p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/service-areas"
            className="font-headline font-bold uppercase tracking-wider text-sm text-foreground inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Every Town We Cover <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={site.phoneHref}
            className="font-headline font-bold uppercase tracking-wider text-sm text-muted-foreground inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            Town not listed? Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
