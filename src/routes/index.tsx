import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { LocationMap } from "@/components/LocationMap";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Galaxy Auditorium | Wedding & Event Venue in Pathirippala, Kerala";
const description =
  "Galaxy Auditorium is a peaceful wedding and function venue in Pathirippala, Kerala — spacious hall, parking for 20–30 vehicles, flexible seating and reasonable rates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <LocationMap />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
