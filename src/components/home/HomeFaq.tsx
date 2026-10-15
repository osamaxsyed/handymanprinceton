import FaqSchema from "@/components/FaqSchema";
import { CORE_TOWNS, EXTENDED_TOWNS, townNames } from "@/data/coreServices";

// Homepage FAQ. The visible list and the FAQPage JSON-LD come from the same
// array, and this is the only page on the site that carries FAQPage markup.
const FAQS = [
  {
    question: "What does a handyman cost in Princeton with you?",
    answer: "A Visit is $345 for up to 2 hours of work, a Half Day is $595 for up to 4 hours, and a Full Day is $1,095 for up to 8 hours. Itemized jobs are $175 an hour, capped at the package price. Materials are quoted up front.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Central Jersey Home Services LLC is a registered New Jersey home improvement contractor, NJ HIC #13VH13918800, and carries general liability insurance.",
  },
  {
    question: "Which towns do you serve?",
    answer: `${townNames(CORE_TOWNS)}, as well as ${townNames(EXTENDED_TOWNS)}.`,
  },
  {
    question: "Does a small repair need a permit?",
    answer: "Usually not. N.J.A.C. 5:23-2.7 treats ordinary maintenance in one- and two-family homes, such as painting, small drywall or plaster patches, trim, and like-for-like fixture swaps, as work that needs no construction permit. Anything structural or any new plumbing or wiring does.",
  },
  {
    question: "Do you do plumbing or electrical work?",
    answer: "Only like-for-like swaps: faucets, toilets, light fixtures, switches, outlets, and ceiling fans on fan-rated boxes. Nothing behind the wall, no new lines or circuits, no panels, gas, or water heaters.",
  },
  {
    question: "Do you remodel kitchens or bathrooms?",
    answer: "No. We handle repairs and installs, not renovations.",
  },
  {
    question: "Will I get a written contract?",
    answer: "Yes for any home improvement job over $500, as New Jersey law requires: signed, with dates, the total price, and our registration number. You may cancel within three business days of signing.",
  },
  {
    question: "My house was built before 1978. Does that change anything?",
    answer: "It can. The EPA lead rule (40 CFR 745) requires lead-safe practices by a certified firm when work disturbs more than 6 square feet of paint in a room or 20 square feet outside. Tell us the year built and we will say which side of that line your job falls on.",
  },
];

const HomeFaq = () => (
  <section className="py-16 md:py-24 bg-muted heavy-border-t">
    <FaqSchema faqs={FAQS} />
    <div className="w-full max-w-3xl mx-auto px-6 md:px-10">
      <div className="brutalist-section-eyebrow">Questions</div>
      <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-8">Short Answers</h2>
      <div className="space-y-3">
        {FAQS.map((f) => (
          <div key={f.question} className="bento-card p-5 md:p-6">
            <h3 className="font-headline font-semibold text-lg text-foreground mb-2">{f.question}</h3>
            <p className="font-body text-base text-muted-foreground m-0">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFaq;
