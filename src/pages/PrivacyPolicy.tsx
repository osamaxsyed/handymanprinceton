import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "What We Collect",
      intro: "The personal details we hold are the ones you hand us yourself, for example when you:",
      list: [
        "Ask for a price or an estimate",
        "Book or request a visit",
        "Reach us by phone, text, email, or a form on this site",
        "Post a review or send us a testimonial",
      ],
    },
    {
      title: "What We Do With It",
      intro: "That information is used to:",
      list: [
        "Deliver and improve our repair services",
        "Answer and act on the requests you send",
        "Set appointments and coordinate the work at your home",
        "Keep you posted on the status of your job",
        "Tell you about our services and occasional offers",
        "Meet our legal and record-keeping obligations",
      ],
    },
    {
      title: "Who We Share It With",
      intro: "Your personal information is not sold, traded, or passed to outside parties, with these exceptions:",
      list: [
        "When you have expressly agreed to it",
        "With vendors that help us run the business, such as email and scheduling tools",
        "Where the law requires it or where we need to defend our rights",
        "As part of a sale, merger, or transfer of the business",
      ],
    },
    {
      title: "Mobile Numbers and Texting",
      intro: "Your mobile number, and any permission you give us to text it, get extra protection:",
      list: [
        "We never sell, rent, share, or trade personal information, your mobile number included, with third parties or affiliates for their marketing or promotions",
        "Opt-in records and texting consent stay with us and are not disclosed to anyone else",
        "Consent to receive texts covers only messages from Princeton Handyman and the affiliated service brands of Central Jersey Home Services LLC regarding your own inquiry or job",
        "Reply STOP to any message to stop receiving texts at any time, or reply HELP for assistance",
      ],
    },
    {
      title: "Keeping It Safe",
      body: "We use reasonable safeguards to keep your personal information from being accessed, changed, disclosed, or destroyed without authorization. That said, no transmission over the internet can be guaranteed fully secure.",
    },
    {
      title: "What You Can Ask For",
      intro: "At any time you may:",
      list: [
        "See, correct, or delete the personal information we hold",
        "Unsubscribe from marketing messages",
        "Request a copy of your data",
        "Raise a complaint with the appropriate regulator",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Princeton Handyman"
        description="How Princeton Handyman handles the personal information you share with us: what we collect, how it is used, how texting consent is protected, and the choices you have."
        canonical="/privacy"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-16 md:py-20">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Legal</div>
            <h1 className="brutalist-headline text-4xl md:text-6xl text-background mb-4 leading-[0.95]">
              Privacy Policy
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
              <h2 className="brutalist-headline text-xl md:text-2xl text-background mb-4">Questions About Privacy</h2>
              <p className="font-body text-base text-background/85 mb-4">
                Anything in this policy unclear, or want to exercise one of the rights above? Reach us here:
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

export default PrivacyPolicy;
