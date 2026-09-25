import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Main">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-xl text-primary-foreground sm:text-2xl"
        >
          <Sparkles className="text-accent" size={20} aria-hidden="true" />
          Galaxy Auditorium
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold px-5 py-2.5 text-sm">
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-primary-foreground lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="bg-primary px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-primary-foreground/90 transition-colors hover:bg-secondary hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 w-full"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
