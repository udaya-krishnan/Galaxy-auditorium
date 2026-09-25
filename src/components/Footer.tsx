import { Sparkles, Facebook, Instagram, Phone, MapPin } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl">
            <Sparkles size={20} className="text-accent" aria-hidden="true" />
            Galaxy Auditorium
          </p>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            A peaceful wedding and event venue in Pathirippala, Kerala.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#home"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#home"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-primary-foreground/75 hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg">Reach us</h2>
          <p className="mt-4 flex gap-3 text-sm text-primary-foreground/75">
            <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            QFG7+HR7, Pathirippala, Kerala 679302
          </p>
          <a
            href="tel:09846520136"
            className="mt-3 flex items-center gap-3 text-sm text-primary-foreground/75 hover:text-accent"
          >
            <Phone size={18} className="text-accent" aria-hidden="true" />
            098465 20136
          </a>
        </div>
      </div>

      <div className="section-shell mt-12 border-t border-accent/20 pt-6 text-center text-xs text-primary-foreground/60">
        © 2026 Galaxy Auditorium. All rights reserved.
      </div>
    </footer>
  );
}
