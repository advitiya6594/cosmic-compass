import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CardReadings } from "@/components/CardReadings";
import { Zodiac } from "@/components/Zodiac";
import { Horoscope } from "@/components/Horoscope";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunara — Tarot & Astrology Readings Beneath the Moon" },
      {
        name: "description",
        content:
          "Hand-interpreted tarot spreads and natal astrology charts. A quiet mystical practice for celestial guidance.",
      },
      { property: "og:title", content: "Lunara — Tarot & Astrology" },
      { property: "og:description", content: "Mystical tarot readings and astrological insight under moonlight." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CardReadings />
      <Zodiac />
      <Horoscope />
      <Footer />
    </main>
  );
}
