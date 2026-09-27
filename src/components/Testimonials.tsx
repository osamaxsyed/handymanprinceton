import { Star, ArrowRight } from "lucide-react";
import { RATING } from "@/data/coreServices";

const Testimonials = () => {
  // Real, public Google reviews of Central Jersey Home Services LLC, earned
  // through the East Brunswick Handyman profile (same crew, same license).
  // Quotes are verbatim. The section says where they came from.
  const reviews = [
    {
      quote:
        "Osama is amazing at what he does! He works with honesty, integrity, and leaves the customer with quality work! Highly recommend booking him for any handyman services and home improvements needed.",
      name: "Tahir M.",
      location: "Google review, East Brunswick Handyman",
    },
    {
      quote:
        "I highly recommend reaching out to Osama if you need a reliable and professional handyman. Even though he was fully booked, he took the time to discuss my project, offered a very fair and transparent estimate, and gave me great advice.",
      name: "Serhii K.",
      location: "Google review, East Brunswick Handyman",
    },
    {
      quote:
        "We are very satisfied with the work done by Osama. From the very first contact, the entire service and communication process was seamless and smooth. The final finish on the projects looks absolutely perfect and professional.",
      name: "Mei",
      location: "Google review, East Brunswick Handyman",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground text-background heavy-border-b">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="brutalist-section-eyebrow text-background/70">Customer Reviews</div>
          <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">
            {RATING.value} on Google
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 md:h-7 md:w-7"
                fill="#fbbc04"
                color="#fbbc04"
                strokeWidth={1}
              />
            ))}
          </div>
          <p className="font-body text-sm md:text-base text-background/80 max-w-2xl mx-auto">
            {RATING.count} public reviews for the same licensed crew, collected under our East Brunswick Handyman brand. Princeton customers meet the same people and the same standard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-background text-foreground heavy-border p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5"
                    fill="#fbbc04"
                    color="#fbbc04"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <blockquote className="font-headline font-semibold italic text-base md:text-lg text-foreground leading-snug mb-6 flex-grow">
                "{r.quote}"
              </blockquote>
              <figcaption className="pt-4 border-t-2 border-foreground">
                <div className="brutalist-headline text-base text-foreground">{r.name}</div>
                <div className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground mt-1">
                  {r.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/?cid=6589704069327590280"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-wider text-sm text-background border-b-2 border-background hover:gap-3 transition-all pb-1"
          >
            See All Reviews on Google
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
