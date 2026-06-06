import { motion } from "motion/react";
import { Moon } from "lucide-react";

const links = ["Readings", "Zodiac", "Horoscope", "Journal"];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full glass-card px-6 py-3 mx-4 md:mx-auto md:px-8">
        <a href="#" className="flex items-center gap-2">
          <Moon className="h-5 w-5 text-gold" />
          <span className="font-display text-xl tracking-wide text-gradient-mystic">Lunara</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <button className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-widest text-gold transition-all hover:bg-gold/20">
          Begin
        </button>
      </div>
    </motion.header>
  );
}
