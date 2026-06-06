import { motion } from "motion/react";
import zodiacImg from "@/assets/zodiac-wheel.jpg";

const signs = [
  { glyph: "♈", name: "Aries", date: "Mar 21 – Apr 19" },
  { glyph: "♉", name: "Taurus", date: "Apr 20 – May 20" },
  { glyph: "♊", name: "Gemini", date: "May 21 – Jun 20" },
  { glyph: "♋", name: "Cancer", date: "Jun 21 – Jul 22" },
  { glyph: "♌", name: "Leo", date: "Jul 23 – Aug 22" },
  { glyph: "♍", name: "Virgo", date: "Aug 23 – Sep 22" },
  { glyph: "♎", name: "Libra", date: "Sep 23 – Oct 22" },
  { glyph: "♏", name: "Scorpio", date: "Oct 23 – Nov 21" },
  { glyph: "♐", name: "Sagittarius", date: "Nov 22 – Dec 21" },
  { glyph: "♑", name: "Capricorn", date: "Dec 22 – Jan 19" },
  { glyph: "♒", name: "Aquarius", date: "Jan 20 – Feb 18" },
  { glyph: "♓", name: "Pisces", date: "Feb 19 – Mar 20" },
];

export function Zodiac() {
  return (
    <section id="zodiac" className="relative py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto aspect-square w-full max-w-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <img
              src={zodiacImg}
              alt="Zodiac wheel"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full rounded-full object-cover"
              style={{ filter: "drop-shadow(0 0 80px oklch(0.55 0.25 305 / 0.4))" }}
            />
          </motion.div>
          <div className="absolute inset-0 m-auto h-32 w-32 rounded-full glass-card flex items-center justify-center">
            <span className="text-4xl text-gradient-gold">☉</span>
          </div>
        </motion.div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-muted">— II. The Wheel</p>
          <h2 className="mb-6 font-display text-5xl leading-tight md:text-6xl text-gradient-mystic">
            Twelve houses.<br />
            <em className="text-gradient-gold not-italic">One sky</em> shared.
          </h2>
          <p className="mb-10 max-w-lg text-lg text-muted-foreground">
            Find your sun, moon, and rising — the holy trinity of the natal chart — then learn
            what the slower planets have been arranging on your behalf.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {signs.map((s, i) => (
              <motion.button
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-center gap-3 border-b border-border/50 py-2 text-left transition-colors hover:border-gold/50"
              >
                <span className="text-2xl text-gold transition-transform group-hover:scale-125">
                  {s.glyph}
                </span>
                <div>
                  <p className="text-sm text-foreground">{s.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.date}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
