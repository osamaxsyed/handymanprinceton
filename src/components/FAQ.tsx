import { Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqs = [
    { question: "How is the work priced?", answer: "In flat blocks settled before anyone starts: $295 for the Visit (up to 2 hours of skilled work), $525 for the Half Day, $995 for the Full Day. Bathroom projects such as a tub-to-shower conversion carry one written price from a free in-home estimate. Materials are billed at cost and itemized. Nothing runs on an hourly meter." },
    { question: "Which towns do you cover?", answer: "Princeton and Princeton Junction sit at the center. West Windsor, Robbinsville, Lawrence Township, Plainsboro, and South Brunswick are all regular territory, and neighboring Mercer County towns are usually workable. On the border? Call and we will tell you straight." },
    { question: "Are you licensed and insured?", answer: "Yes. Central Jersey Home Services LLC is a licensed New Jersey home improvement contractor, NJ HIC #13VH13918800, insured with general liability coverage. Verification is available whenever you want it." },
    { question: "Who actually shows up?", answer: "Osama, the owner, or one of the vetted craftsmen who work to his standard. You get a name and an on-the-way text first, the visit follows the list you sent, and the room is cleaned before the door closes behind us." },
    { question: "What kind of work do you take on?", answer: "Bathrooms are the specialty: tub-to-shower conversions, walk-in showers, grab bars, and remodels. Around the rest of the house: drywall and plaster repair, carpentry and cabinet repair, doors, backsplash tile, shed assembly, and the entire small-repair list. Offices and rentals get punch-list service too." },
    { question: "Do you handle plumbing or electrical?", answer: "Only the minor repairs the law allows inside handyman scope: faucet and fixture swaps, p-traps, outlet and switch replacements. New wiring, panels, gas, or in-wall plumbing belong to the licensed trades, and we will say so up front rather than improvise." },
    { question: "How quickly can I get a visit?", answer: "Most visits land within the week. We are not an emergency line: a burst pipe or a sparking panel needs the licensed emergency trade first, and we handle the repairs that come after." },
    { question: "Is there a warranty?", answer: "One year on labor. If our workmanship gives out inside twelve months, we return and put it right at no cost. Materials carry their manufacturers' warranties." },
    { question: "How do I get an estimate?", answer: "Text photos of the job to the number at the top of the page, call, or use the estimate form. Photos are the shortcut: most jobs can be sized and priced from them without an extra trip." },
    { question: "How can I pay?", answer: "Card, check, or cash. Bathroom projects start with a materials deposit; everything else is settled after the walkthrough at the end." },
    { question: "Do I have to be home during the work?", answer: "The first visit works best with a short walkthrough together. After that, arranged access is routine, especially for rentals and offices, and you get photos when the list is closed." },
    { question: "How far ahead should I book?", answer: "Repair visits usually fit inside the week. Bathroom conversions get scheduled at the estimate, typically a few weeks out. The online booking page shows the real calendar." },
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
            Can't find what you're looking for? Just call or text and we respond fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6093750098"
              className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-background text-foreground border-b-4 border-background/40 hover:bg-background/90 active:translate-y-0.5 active:border-b-0 transition-all rounded-none"
            >
              <Phone className="h-4 w-4" />
              (609) 375-0098
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
