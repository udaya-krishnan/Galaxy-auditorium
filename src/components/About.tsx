import { Car, Armchair, Wind } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const highlights = [
  {
    icon: Car,
    title: "Ample Parking",
    text: "Comfortable space for 20–30 vehicles right beside the hall.",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    text: "Movable chairs, so the layout can be arranged to suit your function.",
  },
  {
    icon: Wind,
    title: "Naturally Cool",
    text: "Well-ventilated hall with fans throughout for an airy, easy feel.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-medium tracking-[0.2em] text-accent uppercase">About the venue</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            A quiet, well-kept hall for your celebration
          </h2>
          <p className="mt-6 text-muted-foreground">
            Galaxy Auditorium is a quiet, well-maintained event venue suited for weddings and
            small-to-medium functions. Guests know us for our peaceful atmosphere, easy parking and
            reasonable pricing — everything you need for a warm, unhurried celebration.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal
              key={h.title}
              delay={i * 120}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <h.icon size={26} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
