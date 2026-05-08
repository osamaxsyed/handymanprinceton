import { Star, ArrowRight } from "lucide-react";

const Testimonials = () => {
  // Real Google reviews collected through East Brunswick Handyman, the
  // sister brand operated by the same licensed contractor (Central Jersey
  // Home Services LLC, NJ HIC #13VH13918800).
  const reviews = [
    {
      quote:
        "The level of precision East Brunswick Handyman brings to facility improvements is top-tier. He managed extensive drywall work and painting with a flawless finish, handled the technical task of cutting and installing brand-new doors at our East Brunswick and Lake Como/Belmar offices, and his ability to schedule major projects on weekends ensured patient care was uninterrupted.",
      name: "Mana Physical Therapy",
      location: "Central NJ",
    },
    {
      quote:
        "Professional, knowledgeable, and easy to coordinate with throughout the process. He demonstrated a strong understanding of construction practices, especially when addressing structural considerations on site. His attention to detail and willingness to collaborate helped ensure the project moved forward efficiently and safely.",
      name: "Joseph A.",
      location: "Central NJ",
    },
    {
      quote:
        "Osama creatively and efficiently fixed the interior woodworkings of my dining couch. It's actually more sturdy now than before. If you're in Edison or Middlesex County, you should always at least get an estimate from this guy. He can walk you through the most efficient way to fix your home repair or remodel work.",
      name: "Faisal M.",
      location: "Central NJ",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground text-background heavy-border-b">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="brutalist-section-eyebrow text-background/70">Customer Reviews</div>
          <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">
            5.0 Stars on Google
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
            Reviews collected through our sister brand, East Brunswick Handyman, operated by the same licensed contractor.
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
            Read More Reviews on East Brunswick Handyman's Google
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
