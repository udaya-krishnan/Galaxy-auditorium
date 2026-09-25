import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Fields = { name: string; phone: string; date: string; message: string };

export function Contact() {
  const [fields, setFields] = useState<Fields>({ name: "", phone: "", date: "", message: "" });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  // UI-only validation; connect to a backend or email service when ready.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Fields> = {};
    if (fields.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[0-9+\s-]{8,15}$/.test(fields.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (!fields.date) next.date = "Please pick your event date.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/40";

  return (
    <section id="contact" className="bg-muted py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-medium tracking-[0.2em] text-accent uppercase">Booking</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Check Availability</h2>
          <p className="mt-3 text-muted-foreground">
            Share a few details and we'll get back to you about your date.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle2 size={44} className="text-accent" aria-hidden="true" />
                <h3 className="font-display text-2xl">Thank you, {fields.name}!</h3>
                <p className="text-sm text-muted-foreground">
                  Your enquiry has been noted. Please call us on 098465 20136 for an immediate
                  confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className={inputClass}
                    value={fields.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={inputClass}
                    value={fields.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="date" className="mb-2 block text-sm font-medium">
                    Event Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className={inputClass}
                    value={fields.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                  {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={inputClass}
                    value={fields.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Type of function, expected guests, timing…"
                  />
                </div>

                <button type="submit" className="btn-gold w-full">
                  <Send size={18} aria-hidden="true" />
                  Send Enquiry
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl">Talk to us directly</h3>
              <a
                href="tel:09846520136"
                className="mt-5 flex items-center gap-3 text-sm hover:text-secondary"
              >
                <Phone size={18} className="text-accent" aria-hidden="true" />
                098465 20136
              </a>
              <p className="mt-3 flex gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                QFG7+HR7, Pathirippala, Kerala 679302
              </p>
              <a
                href="https://wa.me/919846520136"
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-7 w-full"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="star-field cosmic-gradient rounded-2xl p-8">
              <h3 className="relative z-10 font-display text-xl text-primary-foreground">
                Visiting the venue
              </h3>
              <p className="relative z-10 mt-3 text-sm text-primary-foreground/80">
                You're welcome to see the hall before booking. Give us a call and we'll arrange a
                convenient time to show you around.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
