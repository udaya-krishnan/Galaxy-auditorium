import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Local Guide",
    text: "A wonderfully peaceful venue — 20 to 30 vehicles park easily, the fans keep the hall cool and the movable chairs make smaller functions simple to arrange.",
  },
  {
    name: "Wedding Guest",
    text: "We held a wedding here and it was a nice, peaceful place. Parking was more than sufficient and the rental rates were very reasonable.",
  },
  {
    name: "Visitor",
    text: "Good service throughout. Highly recommended.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-medium tracking-[0.2em] text-accent uppercase">Reviews</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">What Our Guests Say</h2>
          <p className="mt-3 text-muted-foreground">4.9 ★ average from 7 Google reviews</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 120}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <Quote size={26} className="text-accent" aria-hidden="true" />
              <p className="mt-4 grow text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <div
                className="mt-6 flex items-center gap-1 text-accent"
                aria-label="Rated 5 out of 5"
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className="fill-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-2 font-display text-lg">{r.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
