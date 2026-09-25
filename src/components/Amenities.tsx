import { Building2, Car, Armchair, Fan, IndianRupee, TreePine } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const amenities = [
  { icon: Building2, label: "Spacious hall for weddings & functions" },
  { icon: Car, label: "Parking for 20–30 vehicles" },
  { icon: Armchair, label: "Movable chair seating, flexible arrangement" },
  { icon: Fan, label: "Fan-ventilated hall (no air conditioning)" },
  { icon: IndianRupee, label: "Reasonable rental rates" },
  { icon: TreePine, label: "Peaceful, quiet locality" },
];

export function Amenities() {
  return (
    <section id="amenities" className="star-field cosmic-gradient py-24">
      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-medium tracking-[0.2em] text-accent uppercase">Amenities</p>
          <h2 className="mt-4 font-display text-3xl text-primary-foreground sm:text-4xl">
            Everything the day needs
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal
              key={a.label}
              as="li"
              delay={i * 80}
              className="flex items-center gap-4 rounded-2xl border border-accent/25 bg-primary/30 p-5 backdrop-blur"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <a.icon size={22} aria-hidden="true" />
              </span>
              <span className="text-sm text-primary-foreground/90">{a.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
