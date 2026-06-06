import { motion } from "motion/react";
import cardsImg from "@/assets/tarot-cards.jpg";

const readings = [
  { name: "The Three Fates", desc: "Past, present, and the path unfurling.", price: "Free" },
  { name: "Celtic Cross", desc: "A ten-card meditation on a single question.", price: "$22" },
  { name: "Lunar Spread", desc: "Drawn under the current phase of the moon.", price: "$18" },
];

export function CardReadings() {
  return (
    <section id="readings" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-muted">— I. The Cards</p>
            <h2 className="font-display text-5xl leading-tight md:text-6xl text-gradient-mystic">
              Spreads chosen<br />for the question you<br /><em className="text-gradient-gold">haven't asked yet.</em>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground md:max-w-md md:justify-self-end">
            Each reading is hand-interpreted — no algorithms, no rote keywords. Just attention paid
            to the moment a card chooses to appear.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {readings.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass-card p-8"
            >
              <div className="mb-8 aspect-[4/5] overflow-hidden rounded-2xl">
                <motion.img
                  src={cardsImg}
                  alt={r.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: `hue-rotate(${i * 25}deg)` }}
                />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-foreground">{r.name}</h3>
                <span className="text-sm text-gold">{r.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/70 transition-colors group-hover:text-gold">
                Begin reading <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
