import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  const sections = [
    {
      title: "Agreeing to These Terms",
      body: "Using this website or hiring Princeton Handyman for work means you accept the terms set out below and agree to be held to them. If any part is unacceptable to you, please do not use the site or book our services.",
    },
    {
      title: "What We Do",
      intro: "Princeton Handyman is operated by Central Jersey Home Services LLC, a home improvement contractor registered with the State of New Jersey (NJ HIC #13VH13918800). We take on small repair and maintenance jobs, specifically:",
      list: [
        "Drywall repair and painting touch-ups",
        "Doors, locks, trim, carpentry, and cabinet repair",
        "TV mounting, furniture assembly, and hanging shelves and accessories",
        "Deck and fence repair, storage shed assembly and repair, and other small exterior fixes",
        "Tile, grout, and caulk repair, grab bars, shower doors, and backsplash installation",
        "Like-for-like swaps of faucets, toilets, light fixtures, switches, and receptacles, which New Jersey treats as ordinary maintenance under N.J.A.C. 5:23-2.7. We do not take on work that needs a construction permit, and we do not run new plumbing lines or circuits or install water heaters or gas appliances",
        "We do not perform bathroom or kitchen remodels, tub-to-shower conversions, or walk-in shower construction",
      ],
    },
    {
      title: "Text Messages (SMS)",
      intro: "Princeton Handyman and the affiliated service brands of Central Jersey Home Services LLC send texts tied to your service: a follow-up if we miss your call, answers to questions you text us, and updates on your estimate or scheduled visit. By using those channels you agree that:",
      list: [
        "Calling our number, texting it, or sending a form that includes your phone number is your consent to receive service-related texts at that number",
        "You do not have to agree to texts in order to buy any service from us",
        "How many messages you get depends on your inquiry, and your carrier may charge message and data rates",
        "You can stop at any time by replying STOP to any of our messages, and reply HELP if you need help",
        "Mobile carriers bear no responsibility for messages that arrive late or not at all",
        "Your mobile number and texting consent are never shared with third parties or affiliates for marketing or promotional use; our Privacy Policy has the details",
      ],
    },
    {
      title: "Prices and Payment",
      intro: "We price by flat package rather than by the hour: the Handyman Visit ($345), the Half Day ($595), and the Full Day ($1,095), or a single written price for larger jobs, in every case agreed before any work starts. Payment works as follows:",
      list: [
        "A written price stands for 30 days unless it says otherwise",
        "Once the price is agreed, a 50% deposit holds your date. It is figured on the labor price plus the high end of the estimated materials, and the remaining balance is due when the work is complete. We do not bill in draws",
        "Materials are charged at our cost and listed line by line on your invoice",
        "Any work beyond the agreed scope is priced and approved in writing before it begins",
      ],
    },
    {
      title: "Warranty",
      intro: "Our work is backed by:",
      list: [
        "A one-year labor warranty on every job. If our workmanship fails within twelve months, we come back and correct it at no cost to you",
        "Manufacturer warranties, which govern the materials and fixtures themselves",
        "Exclusions for ordinary wear and tear, misuse, and pre-existing problems we pointed out and were asked to leave alone",
      ],
    },
    {
      title: "Insurance and Liability",
      body: "Princeton Handyman holds a New Jersey home improvement contractor registration (NJ HIC #13VH13918800) and is bonded and insured. Our liability to you is capped at the amount you paid for the services in question. We carry general liability insurance, and workers' compensation coverage is in place for all employees.",
    },
    {
      title: "Cancellations",
      intro: "If you need to cancel:",
      list: [
        "Give us at least 24 hours' notice for a standard visit",
        "Give us at least 48 hours' notice for multi-day project work",
        "Materials ordered specifically for your job may not be refundable once the order is placed",
        "Emergency or rush bookings may carry different cancellation terms, stated when booked",
      ],
    },
    {
      title: "What We Ask of You",
      intro: "As the customer, you agree to:",
      list: [
        "Describe the job and what you want accurately",
        "Give us safe and reasonable access to the areas where we will work",
        "Clear personal items out of the work area before we arrive",
        "Obtain any permits that may be required for work outside our scope",
        "Tell us promptly if something concerns you",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service | Princeton Handyman"
        description="The terms that apply when you hire Princeton Handyman: services offered, flat-rate pricing and deposits, the one-year labor warranty, texting terms, cancellations, and insurance."
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
              Last Updated: September 27, 2026
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
              <h2 className="brutalist-headline text-xl md:text-2xl text-background mb-4">Reach Us</h2>
              <p className="font-body text-base text-background/85 mb-4">
                Questions about these terms, or about a job we have done for you? Contact us directly:
              </p>
              <ul className="space-y-2 font-body text-base text-background/90">
                <li><span className="font-headline font-bold uppercase tracking-wider text-xs text-background/70 mr-2">Email:</span> osama@handymanprinceton.com</li>
                <li><span className="font-headline font-bold uppercase tracking-wider text-xs text-background/70 mr-2">Phone:</span> (609) 375-0098</li>
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
