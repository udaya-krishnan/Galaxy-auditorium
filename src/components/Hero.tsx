import { Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="star-field relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Starlit night sky over Galaxy Auditorium"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="cosmic-gradient absolute inset-0 -z-10 opacity-80" aria-hidden="true" />

      <div className="section-shell flex min-h-[88vh] flex-col items-center justify-center gap-8 py-32 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-primary/30 px-4 py-1.5 text-sm text-accent">
          <Star size={15} className="fill-accent" aria-hidden="true" />
          4.9 ★ (7 Google Reviews)
        </span>

        <h1 className="max-w-4xl font-display text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
          Celebrate Life's Biggest Moments at Galaxy Auditorium
        </h1>

        <p className="max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
          A peaceful, spacious venue for weddings and functions in Pathirippala, Kerala
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="btn-gold">
            Check Availability
          </a>
          <a href="#location" className="btn-outline-light">
            <MapPin size={18} aria-hidden="true" />
            View Location
          </a>
        </div>
      </div>
    </section>
  );
}
