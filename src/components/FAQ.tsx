import { Phone, Mail } from "lucide-react";
import FaqSchema from "@/components/FaqSchema";
import { CORE_TOWNS, EXTENDED_TOWNS, townNames } from "@/data/coreServices";
import { site } from "@/data/site";

const FAQ = () => {
  const faqs = [
    { question: "What does a visit cost?", answer: "Three flat blocks, each agreed before we come out: the Handyman Visit is $345 for up to two hours of general repairs, the Half Day is $595, and the Full Day is $1,095. Multi-day jobs such as a backsplash, a shed, or a deck resurface get a single written price. Specialty installs (a new door, a vanity, a shower door) are quoted per job, again before we start. There is no hourly rate and nothing gets added at the end. Materials are part of the quote and itemized on the invoice." },
    { question: "Which towns do you cover?", answer: `The Princeton ring first: ${townNames(CORE_TOWNS)}. We are also in ${townNames(EXTENDED_TOWNS)} most weeks. On the edge of that map? Call and we will tell you straight.` },
    { question: "Who actually comes to the house?", answer: "One of our own people: on our payroll, background-checked, insured, and trained to the same standard. You get a name and an on-my-way text before the doorbell rings, the work follows the list you sent, and we clean up before we leave." },
    { question: "Are you licensed and insured?", answer: "Yes. Central Jersey Home Services LLC is a registered New Jersey home improvement contractor (NJ HIC #13VH13918800), bonded, and carries general liability insurance. Ask and we will send the paperwork." },
    { question: "How do I get on the schedule?", answer: "Call, text photos of the list, or use the request form on this site. Photos are the shortcut: with them we can size the job, pick the block, and book the visit without a separate trip to look." },
    { question: "What kind of work do you take?", answer: "Repairs, not renovations. Drywall and plaster, doors and locks, trim and carpentry, TV mounting and furniture assembly, deck and fence repairs, tile, grout, and caulk, like-for-like fixture and faucet swaps, touch-up painting, and the seasonal maintenance list. Multi-day jobs like backsplashes and sheds as well. Full bathroom remodels and tub-to-shower conversions are renovations and not something we do. We also handle punch lists for offices and rental units." },
    { question: "Do you remodel kitchens or bathrooms?", answer: "No. We stay on the small-job side of the line. Kitchen-adjacent repairs (backsplash tile, cabinet hinges and drawers, a like-for-like faucet or disposal swap) all fit inside a visit, but a renovation is a different trade with a different crew, and we would rather say so than learn on your house." },
    { question: "How quickly can you get here?", answer: "Most visits land within the week. We are not an emergency service: for a burst pipe or a sparking outlet, call the licensed emergency trade first and us afterward for the repairs that follow." },
    { question: "Is the work guaranteed?", answer: "Yes. One-year labor warranty: if something we did fails within a year, we come back and put it right at no cost to you. Manufacturers cover the materials under their own warranties." },
    { question: "How do I pay?", answer: "Card, Zelle, check, or cash. Once the price is agreed, a 50% deposit holds your date and the balance is due when the work is done and you have looked it over. Multi-day jobs work the same way: half at signing, half at completion, with materials part of the quote. No draw schedules." },
    { question: "Do I have to be home?", answer: "For a first visit it helps, so we can walk the list together for five minutes. Standing clients and commercial accounts often give us arranged access and get photos when the list is finished." },
    { question: "What if the job is bigger than one visit?", answer: "You hear that before we start, not after. If the list is really a half day, we say so and price it. If something needs a licensed plumber or electrician, or a real remodel, we tell you that too and leave the choice of contractor to you." },
  ];

  return (
    <>
      <FaqSchema faqs={faqs} />
      {/* Hero */}
      <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="brutalist-section-eyebrow text-background/70">FAQ</div>
          <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
            The Questions We Get.
            <br />
            <span className="text-background/70">Answered Plainly.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
            Pricing, scheduling, towns, and what happens on the day. Anything not covered here, call and ask.
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
          <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Something Else?</h2>
          <p className="font-body text-lg text-background/80 mb-10">
            Call or email and a person answers, usually the owner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-background text-foreground border-b-4 border-background/40 hover:bg-background/90 active:translate-y-0.5 active:border-b-0 transition-all rounded-none"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
