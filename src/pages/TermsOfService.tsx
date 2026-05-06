import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      body: "By accessing and using Princeton Handyman services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree, please do not use this service.",
    },
    {
      title: "Service Description",
      intro: "Princeton Handyman provides professional handyman and home improvement services including:",
      list: [
        "General home repairs and maintenance",
        "Kitchen and bathroom renovations",
        "Outdoor structures (pergolas, sheds, backyard studios)",
        "Electrical and plumbing work",
        "Painting and finishing services",
        "Carpentry and custom work",
      ],
    },
    {
      title: "Pricing and Payment",
      intro: "Service pricing is provided via written estimates. Payment terms include:",
      list: [
        "Estimates are valid for 30 days unless otherwise specified",
        "Payment is due upon completion unless other arrangements are made",
        "A deposit may be required for larger projects",
        "Additional work requires written approval and pricing",
      ],
    },
    {
      title: "Warranties and Guarantees",
      intro: "We stand behind our work with:",
      list: [
        "One-year warranty on labor for most services",
        "Manufacturer warranties apply to materials and fixtures",
        "Warranty coverage excludes normal wear and tear",
        "Customer satisfaction guarantee on all completed work",
      ],
    },
    {
      title: "Liability and Insurance",
      body: "Princeton Handyman is fully licensed (NJ HIC #13VH13918800), bonded, and insured. Our liability is limited to the cost of the services provided. We maintain general liability insurance and workers' compensation coverage for all team members.",
    },
    {
      title: "Cancellation Policy",
      intro: "Service cancellations require:",
      list: [
        "24-hour notice for most appointments",
        "48-hour notice for project work",
        "Deposits may be non-refundable for materials already ordered",
        "Emergency services may have different cancellation terms",
      ],
    },
    {
      title: "Customer Responsibilities",
      intro: "Customers are responsible for:",
      list: [
        "Providing accurate project information and requirements",
        "Ensuring safe and reasonable access to work areas",
        "Removing personal belongings from work areas",
        "Obtaining necessary permits when required",
        "Communicating any concerns promptly",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service | Princeton Handyman"
        description="Terms of service for Princeton Handyman. Review the terms and conditions that apply to our handyman and home remodeling services in Central NJ."
        canonical="/terms"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-16 md:py-20">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Legal</div>
            <h1 className="brutalist-headline text-4xl md:text-6xl text-background mb-4 leading-[0.95]">
              Terms of Service
            </h1>
            <p className="font-headline font-bold uppercase tracking-wider text-xs text-background/70">
              Last Updated: March 1, 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20 bg-background heavy-border-b">
          <div className="w-full max-w-3xl mx-auto px-6 md:px-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="heavy-border bg-background p-6 md:p-8">
                <h2 className="brutalist-headline text-xl md:text-2xl text-foreground mb-4 pb-3 border-b-2 border-foreground">
                  {s.title}
                </h2>
                {s.intro && (
                  <p className="font-body text-base text-muted-foreground mb-4 leading-relaxed">{s.intro}</p>
                )}
                {s.body && (
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{s.body}</p>
                )}
                {s.list && (
                  <ul className="space-y-2">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="font-body text-base text-muted-foreground border-l-4 border-foreground pl-3 py-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="heavy-border bg-foreground text-background p-6 md:p-8">
              <h2 className="brutalist-headline text-xl md:text-2xl text-background mb-4">Contact Information</h2>
              <p className="font-body text-base text-background/85 mb-4">
                For questions about these terms or our services, contact us:
              </p>
              <ul className="space-y-2 font-body text-base text-background/90">
                <li><span className="font-headline font-bold uppercase tracking-wider text-xs text-background/70 mr-2">Email:</span> eastbrunswickhandyman@gmail.com</li>
                <li><span className="font-headline font-bold uppercase tracking-wider text-xs text-background/70 mr-2">Phone:</span> (609) 516-0098</li>
                <li><span className="font-headline font-bold uppercase tracking-wider text-xs text-background/70 mr-2">Address:</span> 3 Sophie St, Parlin, NJ 08859</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
