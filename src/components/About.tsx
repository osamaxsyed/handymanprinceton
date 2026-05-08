import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const credentials = [
    "Licensed — NJ Home Improvement Contractor #13VH13918800",
    "Insured — fully insured contractor",
    "Bonded with the state of New Jersey",
    "5.0 on Google across customer reviews (collected through East Brunswick Handyman)",
    "Pursuing CAPS Certification (NAHB), targeted for Summer 2026",
  ];

  const serviceAreaTowns = [
    "Princeton",
    "South Brunswick",
    "Cranbury",
    "Plainsboro",
    "East Windsor",
    "West Windsor",
    "Lawrence Township",
    "Robbinsville",
    "Pennington",
    "Montgomery Township",
  ];

  const featuredServices = [
    { name: "Bathroom Remodeling", path: "/bathroom-remodel", external: false },
    { name: "Kitchen Remodeling", path: "/kitchen-remodeling", external: false },
    { name: "Aging-in-Place Modifications", path: "/aging-in-place", external: false },
    { name: "ADUs (Garden State ADU)", path: "https://gardenstateadu.com", external: true },
    { name: "Handyman & Home Repairs", path: "/handyman-services", external: false },
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
            Licensed, locally owned, and accountable for every job. Operating as Central Jersey Home Services LLC across central New Jersey.
          </p>
        </div>
      </section>

      {/* Founder bio + What We Do */}
      <section className="py-20 md:py-28 bg-background">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-10 space-y-14">
          <div>
            <div className="brutalist-section-eyebrow">Founder</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
              Operated by Osama Syed
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Princeton Handyman is operated by Osama Syed, founder of Central Jersey Home Services LLC. Based in Middlesex County, with over 15 years of hands-on home construction and renovation experience across central New Jersey. The approach is simple: show up on time, do the work right, and treat every home with respect.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Osama is licensed by the state of New Jersey (NJ HIC #13VH13918800), insured, and personally accountable for every project the business takes on.
            </p>
          </div>

          <div>
            <div className="brutalist-section-eyebrow">What We Do</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-4">
              Renovations at Major Life Stages
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Central Jersey Home Services LLC operates two brands across central New Jersey: Princeton Handyman (this site) for the Princeton and Mercer County area, and East Brunswick Handyman for the Middlesex County area. Same licensed contractor, same crew, different geographic focus. We also operate Garden State ADU as the specialty brand for accessory dwelling unit work.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              We focus on the renovations homeowners take on at major life stages: bathroom and kitchen remodels for growing families, aging-in-place modifications for homeowners planning to stay in their home long-term, and accessory dwelling units for multi-generational living and rental income.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              We also continue to take on smaller home repairs and handyman work: drywall, doors, carpentry, and the everyday fixes most homeowners need. It's often how customers first work with us before bigger projects.
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
              Where We Work
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              We serve {serviceAreaTowns.slice(0, -1).join(", ")}, and {serviceAreaTowns[serviceAreaTowns.length - 1]}.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              If you're nearby and don't see your town listed, give us a call. We may still be able to help.
            </p>
          </div>

          <div>
            <div className="brutalist-section-eyebrow">Credentials</div>
            <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-6">
              Licensed and Accountable
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
              Ready to Get Started?
            </h3>
            <p className="font-body text-base text-background/80 mb-6 max-w-md mx-auto">
              Tell us about your project and we'll send a free, itemized estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta">
                Get Free Estimate
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:6095160098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground active:translate-y-0.5 transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 516-0098
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
