import { Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqs = [
    { question: "What areas do you serve?", answer: "We provide handyman services throughout Central New Jersey, including Princeton, South Brunswick, Cranbury, Plainsboro, East Windsor, West Windsor, Lawrence Township, Robbinsville, Pennington, and Montgomery, and surrounding Mercer County towns. If you're unsure if we serve your area, please give us a call." },
    { question: "Are you licensed and insured?", answer: "Yes — fully licensed (NJ HIC #13VH13918800), bonded, and insured. We carry general liability insurance and workers' compensation. License verification is available on request." },
    { question: "How do you provide estimates?", answer: "Free estimates for most projects. Submit through our online form and we typically respond within 24 hours. For complex projects, we may schedule an in-person consultation to provide the most accurate quote." },
    { question: "What types of projects do you handle?", answer: "Wide range — kitchen and bathroom remodels, general repairs, electrical, plumbing, painting, carpentry, deck staining, and maintenance. We're now also building pergolas, custom sheds, and backyard studios." },
    { question: "Do you offer emergency services?", answer: "Yes, for urgent issues like plumbing leaks, electrical problems, or security concerns. We charge a premium for after-hours emergency calls but are available 24/7 when you need us most." },
    { question: "How long do projects typically take?", answer: "Varies by scope. Small repairs: a few hours. Larger renovations: several weeks. Pergolas: 3–7 days. Sheds: 2–5 days. Backyard studios: 2–4 weeks. We provide a detailed timeline with your estimate." },
    { question: "Do you provide warranties on your work?", answer: "Yes — one-year labor warranty on all our work. If any workmanship issues arise within a year of completion, we'll return to fix it at no charge. Material warranties are provided by the manufacturer." },
    { question: "What should I expect during the project?", answer: "Clear communication throughout. We'll confirm work details before starting, keep you updated on progress, clean up daily, and walk through the completed work with you." },
    { question: "How do you price your services?", answer: "Pricing depends on project scope, materials, and time required. Transparent, line-itemed pricing — no hidden fees. Smaller jobs get hourly rates; larger projects get fixed-price quotes." },
    { question: "What payment methods do you accept?", answer: "Cash, checks, and all major credit cards. Larger projects typically require a small deposit to schedule the work, with the balance due upon completion." },
    { question: "Do I need to be home during the work?", answer: "Preferably for the initial consultation and final walkthrough. For routine work, we can arrange access without you present if needed." },
    { question: "How far in advance should I schedule?", answer: "Simple repairs can usually be scheduled within a week. Larger projects may require 2–4 weeks lead time. Pergola/shed/studio builds: book 4–8 weeks in advance for spring/summer slots." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="brutalist-section-eyebrow text-background/70">FAQ</div>
          <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
            Common Questions.
            <br />
            <span className="text-background/70">Honest Answers.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
            Most of what homeowners ask us, answered up front. If your question isn't here, just call.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-20 bg-background heavy-border-b">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-10">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="heavy-border bg-background group">
                <summary className="cursor-pointer p-5 font-headline font-bold uppercase tracking-wider text-sm text-foreground flex justify-between items-center gap-4">
                  <span>{f.question}</span>
                  <span className="font-headline font-black text-2xl text-foreground/40 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed px-5 pb-5 border-t border-border pt-4">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-foreground text-background">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Still Have Questions?</h2>
          <p className="font-body text-lg text-background/80 mb-10">
            Can't find what you're looking for? Just call or email — we respond fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6095160098"
              className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-background text-foreground border-b-4 border-background/40 hover:bg-background/90 active:translate-y-0.5 active:border-b-0 transition-all rounded-none"
            >
              <Phone className="h-4 w-4" />
              (609) 516-0098
            </a>
            <a
              href="mailto:osama@handymanprinceton.com"
              className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
