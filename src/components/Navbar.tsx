import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

const items = [
  { label: "About", href: "#about" },
  { label: "Founders", href: "#team" },
  { label: "Food", href: "#food" },
  { label: "Nature", href: "#nature" },
  { label: "Culture", href: "#culture" },
  { label: "Tourism", href: "#tourism" },
  { label: "Gallery", href: "#gallery" }
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 220], [0, 18]);
  const backdrop = useTransform(blur, (v: number) => `blur(${v}px)`);
  const bg = useTransform(scrollY, [0, 220], [0.06, 0.22]);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const top = visible.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (top?.target?.id) setActive(`#${top.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.15, 0.3, 0.5] }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div className="fixed inset-x-0 top-0 z-[60]">
      <motion.div
        className="mx-auto mt-4 w-[min(1100px,92vw)] rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl"
        style={{ backdropFilter: backdrop }}
      >
        <motion.div className="absolute inset-0 rounded-2xl bg-black/10" style={{ opacity: bg }} />
        <div className="relative flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover:ring-cyan-300/30">
              <Sparkles className="h-[18px] w-[18px] text-cyan-200" />
            </span>
            <span className="hidden sm:block">
              <span className="text-gradient">ImLand</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-xs font-medium text-white/70 transition hover:text-white",
                  active === i.href && "bg-white/6 text-white ring-1 ring-white/10"
                )}
              >
                {i.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#tourism"
              className="group hidden items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold text-white/90 shadow-glowPurple transition hover:bg-white/10 sm:flex"
            >
              <Compass className="h-4 w-4 text-violet-200" />
              Explore
            </a>
            <a
              href="#join"
              className="rounded-xl bg-gradient-to-r from-cyan-300/90 via-violet-400/90 to-emerald-300/90 px-3 py-2 text-xs font-semibold text-ink-900 shadow-[0_12px_42px_rgba(34,211,238,.18)] transition hover:brightness-110"
            >
              Join
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
