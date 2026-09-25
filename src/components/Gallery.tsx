import { useState } from "react";
import { X } from "lucide-react";
import hallImage from "@/assets/hall.jpg";
import exteriorImage from "@/assets/exterior.jpg";
import parkingImage from "@/assets/parking.jpg";
import { useReveal } from "@/hooks/use-reveal";

/* Swap these images with the venue's real photographs when available. */
const photos = [
  { src: hallImage, alt: "Auditorium Hall", span: "md:col-span-2 md:row-span-2" },
  { src: exteriorImage, alt: "Venue Exterior", span: "" },
  { src: parkingImage, alt: "Parking Area", span: "" },
  { src: hallImage, alt: "Seating Setup", span: "md:col-span-2" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="py-24">
      <div className="section-shell">
        <div {...head} className="mx-auto max-w-2xl text-center">
          <p className="font-medium tracking-[0.2em] text-accent uppercase">Gallery</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">A look around</h2>
        </div>

        <div className="mt-14 grid auto-rows-[200px] gap-4 md:grid-cols-4">
          {photos.map((p, i) => (
            <button
              key={`${p.alt}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-primary/70 px-4 py-2 text-left text-sm text-primary-foreground">
                {p.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-60 flex items-center justify-center bg-primary/90 p-6"
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute top-6 right-6 text-primary-foreground"
            onClick={() => setActive(null)}
          >
            <X size={28} />
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[80vh] w-auto rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}
