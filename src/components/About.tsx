import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { coreServices, CORE_TOWNS, EXTENDED_TOWNS, townNames, RATING } from "@/data/coreServices";
import { site } from "@/data/site";

const About = () => {
  const credentials = [
    "Registered NJ Home Improvement Contractor, #13VH13918800",
    "General liability insurance in force",
    "Bonded in the State of New Jersey",
    `${RATING.value} on Google across ${RATING.count} public reviews (earned through our East Brunswick Handyman brand)`,
    "One-year labor warranty on every job",
  ];

  const featuredServices = [
    { name: "Handyman Visit", path: "/handyman", external: false },
    ...coreServices.map((s) => ({ name: s.name, path: s.href, external: false })),
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="brutalist-section-eyebrow text-background/70">About</div>
          <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
            Princeton Handyman
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
            Flat-rate small-job repairs for Princeton and Mercer County, done by a licensed, bonded, and insured contractor who answers for the work. A brand of {site.legalName}.
          </p>
        </div>
      </section>

      {/* Founder bio + What We Do */}
      <section className="py-20 md:py-28 bg-background">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-10 space-y-14">
          <div>
            <div className="brutalist-section-eyebrow">Founder</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
              Run by Osama Syed
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Princeton Handyman is run by Osama Syed, who founded {site.legalName} and has spent more than fifteen years doing hands-on repair and carpentry work across central New Jersey. The rules have not changed in that time: agree the price first, arrive when promised, do the job the right way, and leave the room cleaner than it was.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              The company holds a New Jersey home improvement contractor registration ({site.license}), carries a bond, and is insured. The people who work on your house are on our payroll and background-checked, and the owner stands behind each of them.
            </p>
          </div>

          <div>
            <div className="brutalist-section-eyebrow">Two Brands, One Contractor</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
              The Same Crew You'd Meet in East Brunswick
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              {site.legalName} runs two handyman brands: East Brunswick Handyman for Middlesex County, and Princeton Handyman for Princeton and the Mercer County ring. Same license, same insurance, same trucks and people. The Google reviews you see on this site were earned under the East Brunswick name, and we say so wherever they appear.
            </p>
          </div>

          <div>
            <div className="brutalist-section-eyebrow">What We Do</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
              Small Jobs, Not Remodels.
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Our menu is the everyday repair work: drywall and plaster, doors and locks, trim and shelving, TV mounting and furniture assembly, deck and fence repairs, tile, grout, and caulk, like-for-like faucet and fixture swaps, touch-up painting, and the seasonal maintenance list. The price is agreed before we start. Most lists are finished in a single visit; the multi-day jobs run one to three days, with half down to hold the date and the balance on completion.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Gut bathroom and kitchen renovations, additions, and anything that needs a construction permit are not what we do, and we will tell you that on the first call. The one-visit bathroom jobs are very much ours: grab bars, shower doors, regrouting, recaulking, and fixture swaps.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {featuredServices.map((service) =>
                service.external ? (
                  <a
                    key={service.name}
                    href={service.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border-2 border-foreground bg-muted hover:bg-foreground hover:text-background transition-colors"
                  >
                    <span className="font-headline font-bold uppercase tracking-wider text-xs">{service.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center justify-between p-4 border-2 border-foreground bg-muted hover:bg-foreground hover:text-background transition-colors"
                  >
                    <span className="font-headline font-bold uppercase tracking-wider text-xs">{service.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <div className="brutalist-section-eyebrow">Service Area</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
              Towns We Serve
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              Our Princeton ring is {townNames(CORE_TOWNS)}. We are also in {townNames(EXTENDED_TOWNS)} most weeks, all reached down Route 1, Route 27, and Route 130 from our Middlesex County shop.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Just outside those towns? Call anyway. If it is on the way, we can usually make it work.
            </p>
          </div>

          <div>
            <div className="brutalist-section-eyebrow">Credentials</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-6">
              Registered, Insured, Answerable
            </h2>
            <ul className="space-y-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-foreground text-background heavy-border p-8 md:p-10 text-center">
            <h3 className="brutalist-headline text-2xl md:text-3xl text-background mb-3">
              Have a List?
            </h3>
            <p className="font-body text-base text-background/80 mb-6 max-w-md mx-auto">
              Text it over with a photo or two. You get a reply the same business day with the block that fits.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={site.smsHref} className="brutalist-cta">
                <MessageSquare className="h-4 w-4" />
                Text {site.phoneDisplay}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground active:translate-y-0.5 transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
