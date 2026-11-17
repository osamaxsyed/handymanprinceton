import type { WorkPhoto } from "@/data/workPhotos";

/** A grid of real job photos with short captions. */
export function PhotoGrid({
  photos,
  cols = 3,
  aspect = "aspect-[4/3]",
}: {
  photos: WorkPhoto[];
  cols?: 2 | 3 | 4;
  aspect?: string;
}) {
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[cols];
  return (
    <div className={`grid grid-cols-2 ${grid} gap-3 md:gap-4`}>
      {photos.map((ph) => (
        <figure key={ph.src} className="m-0">
          <div className={`heavy-border bg-muted ${aspect} overflow-hidden`}>
            <img src={ph.src} alt={ph.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </div>
          <figcaption className="font-body text-sm md:text-base text-muted-foreground mt-2">{ph.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Full-width "Recent work" section. */
export default function WorkPhotos({
  photos,
  title,
  intro,
  eyebrow = "Recent Work",
  cols = 3,
  aspect,
  bg = "bg-background",
}: {
  photos: WorkPhoto[];
  title: string;
  intro?: string;
  eyebrow?: string;
  cols?: 2 | 3 | 4;
  aspect?: string;
  bg?: string;
}) {
  return (
    <section className={`py-16 md:py-20 ${bg} heavy-border-b`}>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="brutalist-section-eyebrow">{eyebrow}</div>
        <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-3">{title}</h2>
        {intro && <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl">{intro}</p>}
        <div className={intro ? "" : "mt-8"}>
          <PhotoGrid photos={photos} cols={cols} aspect={aspect} />
        </div>
      </div>
    </section>
  );
}
