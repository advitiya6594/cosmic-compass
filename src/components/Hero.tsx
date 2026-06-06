import { motion } from "motion/react";
import heroImg from "@/assets/tarot-hero.jpg";
import { Starfield } from "./Starfield";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <Starfield count={120} />

      {/* Orbital rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="h-[700px] w-[700px] rounded-full border border-gold/10"
          style={{ boxShadow: "inset 0 0 80px oklch(0.55 0.22 305 / 0.15)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto h-[500px] w-[500px] rounded-full border border-primary/15"
        />
      </div>

      {/* Glow orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.25 310 / 0.6), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            Celestial Guidance Since the Stars Were Named
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl"
          >
            <span className="text-gradient-mystic">Read the</span>
            <br />
            <em className="text-gradient-gold not-italic font-light italic">silent language</em>
            <br />
            <span className="text-gradient-mystic">of the cosmos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Tarot drawn under moonlight. Charts mapped by planetary hour. A quiet practice
            for those who suspect the universe has been whispering all along.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              className="group relative overflow-hidden rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow)" }}
            >
              <span className="relative z-10">Draw your card</span>
            </button>
            <a href="#zodiac" className="text-sm uppercase tracking-[0.2em] text-foreground/80 underline-offset-8 hover:underline">
              Cast a chart →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl glass-card glow-violet"
          >
            <img
              src={heroImg}
              alt="Mystical moon and star tarot illustration"
              width={1080}
              height={1620}
              className="w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold-muted">Today's Card</p>
            <p className="font-display text-xl text-foreground">XVIII · The Moon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
