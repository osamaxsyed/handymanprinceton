import testimonials from "@/data/testimonials.json";

interface Props {
  locationSlug: string;
  locationName: string;
}

// Real, public Google reviews tied to the town being viewed. Quotes are
// excerpts of the published review text; do not invent or embellish entries.
const LocalTestimonials = ({ locationSlug, locationName }: Props) => {
  const matches = testimonials.filter((t) => t.location === locationSlug);
  if (matches.length === 0) return null;

  return (
    <section className="py-20 bg-background heavy-border-b">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <div className="brutalist-section-eyebrow">Reviews</div>
        <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground mb-8">
          Real Jobs in {locationName}
        </h2>
        <div className={matches.length > 1 ? "grid md:grid-cols-2 gap-4 md:gap-6" : "max-w-3xl"}>
          {matches.map((t) => (
            <figure key={t.author} className="bento-card bg-muted p-6 md:p-8">
              <blockquote className="font-body text-base text-foreground leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <span className="brutalist-headline text-sm text-foreground block">{t.author}</span>
                <span className="font-headline font-bold uppercase tracking-wider text-[10px] text-muted-foreground">
                  {t.source} · {t.job}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalTestimonials;
