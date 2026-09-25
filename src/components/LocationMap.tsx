import { MapPin, Phone, Navigation, Compass } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const ADDRESS = "QFG7+HR7, Pathirippala, Kerala 679302";
const PLACE_QUERY = "QFG7%2BHR7+Pathirippala+Kerala+679302";

/*
 * The map below uses Google's keyless embed so it works immediately.
 * For the official Maps Embed API (place + street view), swap in a key:
 *   https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=QFG7%2BHR7+Pathirippala+Kerala+679302
 *   https://www.google.com/maps/embed/v1/streetview?key=YOUR_API_KEY&location=<LAT>,<LNG>&heading=210&pitch=10&fov=90
 * Replace YOUR_API_KEY with a valid Google Maps Embed API key, and replace
 * <LAT>,<LNG> with the venue's exact coordinates before deploying.
 */

export function LocationMap() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="location" className="bg-muted py-24">
      <div className="section-shell">
        <div {...head} className="mx-auto max-w-2xl text-center">
          <p className="font-medium tracking-[0.2em] text-accent uppercase">Location</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Find Us</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-display text-xl">Galaxy Auditorium</h3>
            <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              {ADDRESS}
            </p>
            <a
              href="tel:09846520136"
              className="mt-3 flex items-center gap-3 text-sm text-foreground hover:text-secondary"
            >
              <Phone size={18} className="text-accent" aria-hidden="true" />
              098465 20136
            </a>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${PLACE_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                <Navigation size={18} aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${PLACE_QUERY}&layer=c`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-secondary px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                <Compass size={18} aria-hidden="true" />
                Open 360° Street View
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-soft">
            <iframe
              title="Map showing Galaxy Auditorium in Pathirippala, Kerala"
              src={`https://www.google.com/maps?q=${PLACE_QUERY}&output=embed`}
              width="100%"
              height={450}
              loading="lazy"
              allowFullScreen
              className="block border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
