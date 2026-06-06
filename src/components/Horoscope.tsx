import { motion } from "motion/react";

const planets = [
  { name: "Mercury", glyph: "☿", phase: "Direct in Gemini", note: "Communication runs unusually clear. Send the message." },
  { name: "Venus", glyph: "♀", phase: "Entering Cancer", note: "Tenderness returns to the body. Be soft with old wounds." },
  { name: "Mars", glyph: "♂", phase: "Retrograde in Libra", note: "Conflict you avoid will rearrange itself. Wait one cycle." },
  { name: "Moon", glyph: "☽", phase: "Waxing Gibbous", note: "What you started at the new moon now asks for attention." },
];

export function Horoscope() {
  return (
    <section id="horoscope" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-muted">— III. This Week's Sky</p>
          <h2 className="font-display text-5xl leading-tight md:text-6xl text-gradient-mystic">
            The planets, <em className="text-gradient-gold not-italic">and what they want</em>
            <br />from you this week.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {planets.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative flex gap-6 rounded-3xl glass-card p-8 transition-all hover:border-gold/40"
            >
              <div className="relative shrink-0">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full text-4xl text-gold"
                  style={{ background: "radial-gradient(circle, oklch(0.55 0.25 305 / 0.3), transparent 70%)" }}
                >
                  {p.glyph}
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-gold/30"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl text-foreground">{p.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-gold-muted">{p.phase}</span>
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
