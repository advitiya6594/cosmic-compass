import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 py-20">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-5xl leading-tight md:text-7xl text-gradient-mystic"
        >
          The night sky is <em className="text-gradient-gold not-italic">listening.</em>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          Receive a weekly letter — one card, one transit, one quiet thought to carry into Sunday.
        </p>

        <form className="mx-auto mt-10 flex max-w-md gap-2 rounded-full glass-card p-1.5">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground"
            style={{ background: "var(--gradient-aurora)" }}
          >
            Subscribe
          </button>
        </form>

        <div className="mt-20 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold/40" />
            <span className="text-gold">☽ ✦ ☉</span>
            <span className="h-px w-12 bg-gold/40" />
          </div>
          <p>© Lunara · Cast under a waxing moon</p>
        </div>
      </div>
    </footer>
  );
}
