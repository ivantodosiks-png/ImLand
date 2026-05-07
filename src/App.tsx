import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import BackgroundFX from "./components/BackgroundFX";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import Counter from "./components/Counter";
import GalleryLightbox from "./components/GalleryLightbox";
import TiltCard from "./components/TiltCard";
import {
  founders,
  foods,
  galleryImages,
  imlandFacts,
  timeline,
  tourismPlaces
} from "./content/imland";
import { motion as m } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Crown,
  Github,
  Globe,
  Linkedin,
  MapPinned,
  MountainSnow,
  Music,
  Sparkles,
  Star,
  Twitter,
  Waves
} from "lucide-react";
import { useInViewOnce } from "./lib/useInViewOnce";

function Hero() {
  const [videoOk, setVideoOk] = useState(true);
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-[1]">
        {videoOk && (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoOk(false)}
          >
            <source src="https://cdn.coverr.co/videos/coverr-northern-lights-9718/1080p.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 opacity-[0.38]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2600&q=80')] bg-cover bg-center blur-[1px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2600&q=80')] bg-cover bg-center opacity-30 mix-blend-screen" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(34,211,238,.22),transparent_60%)]" />
      </div>

      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-white/75 shadow-glowCyan"
          >
            <Sparkles className="h-4 w-4 text-cyan-200" />
            <span className="uppercase">Official portal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">ImLand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            “The coolest nation in the North”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#tourism"
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300/90 via-violet-400/90 to-emerald-300/90 px-6 py-4 text-sm font-semibold text-ink-900 shadow-[0_18px_90px_rgba(34,211,238,.22)] transition hover:brightness-110 sm:w-auto"
            >
              Explore ImLand
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute -inset-0.5 -z-[1] rounded-2xl bg-gradient-to-r from-cyan-300/30 via-violet-400/30 to-emerald-300/30 blur-xl" />
            </a>
            <a
              href="#join"
              className="group w-full rounded-2xl border border-white/14 bg-white/6 px-6 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:bg-white/10 sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                Join the Journey
                <Crown className="h-4 w-4 text-violet-200 transition group-hover:rotate-6" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { icon: <MountainSnow className="h-4 w-4 text-cyan-200" />, label: "Aurora Fjords" },
            { icon: <Waves className="h-4 w-4 text-emerald-200" />, label: "Ocean Quiet" },
            { icon: <Globe className="h-4 w-4 text-violet-200" />, label: "Future Civics" },
            { icon: <BadgeCheck className="h-4 w-4 text-cyan-200" />, label: "Luxury-ready" }
          ].map((b) => (
            <div
              key={b.label}
              className="glass-strong neon-ring rounded-2xl px-4 py-4 text-left"
            >
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/75">
                {b.icon}
                <span>{b.label}</span>
              </div>
              <div className="mt-2 text-[11px] leading-relaxed text-white/55">
                Northern atmosphere • Cinematic UI
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}

function About() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.22 });

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="About Country"
          title="A nation engineered for calm luxury"
          subtitle="ImLand blends Scandinavian minimalism with future-grade governance: silent streets, glass cities, ocean energy and a design-first constitution."
          icon={<Sparkles className="h-4 w-4 text-cyan-200" />}
        />

        <div ref={ref} className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong neon-ring rounded-3xl p-6"
          >
            <div className="text-sm font-semibold tracking-tight text-white/90">History</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Born from the North’s clarity, ImLand emerged as a fictional sovereign state where
              aesthetics are policy and technology is humane. Every public interface is crafted like
              a luxury product — accessible, minimal, and calm.
            </p>
            <div className="mt-6 h-px w-full hairline" />
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/70">
              <div className="glass rounded-2xl p-4">
                <div className="text-white/50">Flag Symbol</div>
                <div className="mt-1 font-semibold text-white/90">Aurora Crown</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-white/50">Currency</div>
                <div className="mt-1 font-semibold text-white/90">Frost Credit</div>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong neon-ring rounded-3xl p-6"
          >
            <div className="text-sm font-semibold tracking-tight text-white/90">Why ImLand</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The most stylish and technological nation because we design life around trust,
              privacy, renewable abundance, and a culture of quiet excellence.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {imlandFacts.map((f) => (
                <div
                  key={f.label}
                  className="group glass rounded-2xl p-4 transition hover:bg-white/8"
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                    {f.label}
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">
                    {typeof f.value === "number" ? (
                      <Counter value={f.value} suffix={f.suffix} active={inView} />
                    ) : (
                      <span className="text-white/95">{f.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <section id="team" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Team"
          title="Founders of ImLand"
          subtitle="A small council of builders — designing the future with Nordic restraint, precision systems, and luminous culture."
          icon={<Crown className="h-4 w-4 text-violet-200" />}
        />

        <div ref={ref} className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {founders.map((mbr, idx) => (
            <m.div
              key={mbr.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition hover:border-cyan-300/25"
            >
              <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[radial-gradient(450px_200px_at_30%_20%,rgba(34,211,238,.28),transparent_60%),radial-gradient(420px_220px_at_70%_80%,rgba(168,85,247,.22),transparent_60%)]" />
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <img
                    src={mbr.avatar}
                    alt={mbr.name}
                    className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/10"
                  />
                  <div className="absolute -inset-2 -z-[1] rounded-3xl bg-gradient-to-r from-cyan-300/25 via-violet-400/20 to-emerald-300/20 opacity-0 blur-xl transition group-hover:opacity-100" />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-tight">{mbr.name}</div>
                  <div className="mt-1 text-xs text-white/60">{mbr.role}</div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-white/70">
                {[
                  { label: "X", href: mbr.socials.x, icon: <Twitter className="h-4 w-4" /> },
                  { label: "GitHub", href: mbr.socials.github, icon: <Github className="h-4 w-4" /> },
                  { label: "LinkedIn", href: mbr.socials.linkedin, icon: <Linkedin className="h-4 w-4" /> }
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold transition hover:bg-white/10 hover:text-white"
                    aria-label={s.label}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80">
                        {s.icon}
                      </span>
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Food() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <section id="food" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Traditional Food"
          title="Cuisine with northern clarity"
          subtitle="Big cinematic plates: fjord freshness, frost berries and subtle glow — styled like a luxury editorial."
          icon={<Waves className="h-4 w-4 text-emerald-200" />}
        />
        <div ref={ref} className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {foods.map((f, idx) => (
            <m.article
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-base font-semibold tracking-tight">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{f.description}</p>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractiveMap() {
  const spots = [
    { id: "fjord", label: "Fjord Arc", x: 26, y: 48, icon: <Waves className="h-4 w-4" /> },
    { id: "capital", label: "Nordhavn Prime", x: 58, y: 44, icon: <MapPinned className="h-4 w-4" /> },
    { id: "highlands", label: "Snowline", x: 46, y: 30, icon: <MountainSnow className="h-4 w-4" /> }
  ] as const;
  const [active, setActive] = useState<(typeof spots)[number]>(spots[1]);

  return (
    <div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_420px_at_30%_20%,rgba(34,211,238,.18),transparent_60%),radial-gradient(700px_420px_at_70%_80%,rgba(168,85,247,.16),transparent_60%)]" />
        <div className="relative">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-white/90">ImLand Map</div>
            <div className="text-xs text-white/55">Interactive regions</div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/6 to-white/3">
            <svg viewBox="0 0 100 60" className="h-full w-full">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="rgba(34,211,238,.45)" />
                  <stop offset="1" stopColor="rgba(168,85,247,.38)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M9,43 C13,32 16,26 27,22 C36,18 40,11 49,10 C62,8 76,14 86,22 C92,28 95,37 90,46 C86,54 75,56 67,52 C61,48 54,49 48,52 C40,56 30,57 21,54 C14,51 7,50 9,43 Z"
                fill="rgba(255,255,255,.05)"
                stroke="url(#g)"
                strokeWidth="0.5"
              />

              {spots.map((s) => (
                <g key={s.id} transform={`translate(${s.x} ${s.y})`}>
                  <circle
                    r="2.2"
                    fill={active.id === s.id ? "rgba(34,211,238,.95)" : "rgba(255,255,255,.55)"}
                    filter="url(#glow)"
                    onMouseEnter={() => setActive(s)}
                    style={{ cursor: "pointer" }}
                  />
                  <circle
                    r="5.8"
                    fill="transparent"
                    onMouseEnter={() => setActive(s)}
                    style={{ cursor: "pointer" }}
                  />
                </g>
              ))}
            </svg>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[11px] font-semibold tracking-[0.22em] text-white/70 backdrop-blur-xl">
              NORTHERN HABITATS
            </div>
          </div>
        </div>
      </div>

      <div className="glass-strong neon-ring rounded-3xl p-6">
        <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
          SELECTED REGION
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
            {active.icon}
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight">{active.label}</div>
            <div className="mt-1 text-xs text-white/55">Forests • fjords • snow • neon cities</div>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/70">
          ImLand is a gradient of biomes: silent forests, sculpted fjords, snow ridges, northern
          villages — and a capital of glass and light. Every habitat is protected by design:
          minimal footprint, maximum atmosphere.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
          {[
            { k: "Fjords", v: "Ocean-carved" },
            { k: "Forests", v: "Emerald quiet" },
            { k: "Highlands", v: "Snowline calm" },
            { k: "Cities", v: "Glass aurora" }
          ].map((c) => (
            <div key={c.k} className="glass rounded-2xl p-4">
              <div className="text-white/50">{c.k}</div>
              <div className="mt-1 font-semibold text-white/90">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Nature() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.18 });
  return (
    <section id="nature" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Nature & Habitats"
          title="Where fjords meet future cities"
          subtitle="Parallax layers, drifting snow and a living map — explore the northborn landscapes of ImLand."
          icon={<MountainSnow className="h-4 w-4 text-cyan-200" />}
        />

        <div className="mx-auto max-w-6xl">
          <div ref={ref} className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2600&q=80')] bg-cover bg-center opacity-65" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
            <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_30%,rgba(34,211,238,.20),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,.18),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 snow-layer" />
            <div className="relative p-6 sm:p-8">
              <m.div
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/70 backdrop-blur-xl">
                  <Waves className="h-4 w-4 text-emerald-200" />
                  <span className="uppercase">Parallax atmosphere</span>
                </div>
                <div className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Forests. Fjords. Snow ridges. Northern villages. Neon skylines.
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  ImLand’s geography is built for wonder — cinematic horizons with a future-grade
                  infrastructure that never interrupts the silence.
                </p>
              </m.div>
            </div>
          </div>

          <InteractiveMap />
        </div>
      </div>
    </section>
  );
}

function Culture() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.16 });
  return (
    <section id="culture" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Culture & Traditions"
          title="Neon folklore, minimal rituals"
          subtitle="Music, festivals, symbols and national clothing — told as a luminous timeline."
          icon={<Music className="h-4 w-4 text-violet-200" />}
        />

        <div ref={ref} className="mx-auto max-w-5xl">
          <div className="glass-strong neon-ring rounded-3xl p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold tracking-tight text-white/90">
                  Symbolic system
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  ImLand’s iconography is built from geometry: aurora gradients, crown arcs, ocean
                  lines. National clothing is monochrome with a single neon seam — a “glow stitch”
                  that shows identity without noise.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  {[
                    { k: "Music", v: "Ambient synth + fjord choir" },
                    { k: "Festivals", v: "Festival of Light" },
                    { k: "Symbol", v: "Aurora Crown" },
                    { k: "Dress", v: "Glow stitch" }
                  ].map((c) => (
                    <div key={c.k} className="glass rounded-2xl p-4">
                      <div className="text-white/50">{c.k}</div>
                      <div className="mt-1 font-semibold text-white/90">{c.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[13px] top-2 h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan-300/50 via-white/10 to-violet-400/50" />
                <div className="space-y-5">
                  {timeline.map((t, idx) => (
                    <m.div
                      key={t.year}
                      initial={{ opacity: 0, x: 18 }}
                      animate={inView ? { opacity: 1, x: 0 } : undefined}
                      transition={{
                        duration: 0.7,
                        delay: idx * 0.08,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="relative pl-10"
                    >
                      <div className="absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-black/30 text-cyan-200 backdrop-blur-xl">
                        <Star className="h-4 w-4" />
                      </div>
                      <div className="glass rounded-2xl p-4">
                        <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                          {t.year}
                        </div>
                        <div className="mt-2 text-sm font-semibold">{t.title}</div>
                        <div className="mt-2 text-sm leading-relaxed text-white/65">
                          {t.description}
                        </div>
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tourism() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <section id="tourism" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Tourism"
          title="Places that feel unreal"
          subtitle="Glassmorphism travel cards, rating system and 3D hover — curated like a premium launch."
          icon={<Compass className="h-4 w-4 text-cyan-200" />}
        />

        <div ref={ref} className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {tourismPlaces.map((p, idx) => (
            <m.div
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition hover:border-cyan-300/25">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(450px_220px_at_30%_20%,rgba(34,211,238,.22),transparent_60%),radial-gradient(430px_250px_at_70%_80%,rgba(168,85,247,.18),transparent_60%)]" />
                <div className="relative">
                  <div className="aspect-[16/11] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-base font-semibold tracking-tight">{p.title}</div>
                        <div className="mt-1 text-xs text-white/55">{p.region}</div>
                      </div>
                      <div className="glass rounded-2xl px-3 py-2 text-xs font-semibold text-white/80">
                        ★ {p.rating.toFixed(1)}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5">
                      <a
                        href="#join"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/8 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/12"
                      >
                        Visit Now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Awwwards-grade northborn visuals"
          subtitle="Masonry grid, smooth lightbox, premium transitions — curated like an art director’s moodboard."
          icon={<Sparkles className="h-4 w-4 text-cyan-200" />}
        />

        <div ref={ref} className="mx-auto max-w-6xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((img, idx) => (
              <m.button
                key={img}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.8, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="group mb-4 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left backdrop-blur-xl"
                onClick={() => {
                  setSrc(img);
                  setOpen(true);
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={`ImLand ${idx + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(500px_260px_at_50%_10%,rgba(34,211,238,.22),transparent_60%)]" />
                </div>
              </m.button>
            ))}
          </div>
        </div>
      </div>

      <GalleryLightbox
        open={open}
        src={src}
        onClose={() => {
          setOpen(false);
          setSrc(null);
        }}
      />
    </section>
  );
}

function Join() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <section id="join" className="relative py-20 sm:py-24">
      <div className="container-xl">
        <div
          ref={ref}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
        >
          <div className="relative p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_20%_20%,rgba(34,211,238,.20),transparent_60%),radial-gradient(700px_420px_at_80%_70%,rgba(168,85,247,.18),transparent_60%)]" />
            <m.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/70">
                  <MapPinned className="h-4 w-4 text-cyan-200" />
                  <span className="uppercase">Citizenship of style</span>
                </div>
                <div className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Join the Journey
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                  Subscribe for travel drops, digital residency stories, and the newest releases from
                  the Aurora UI government.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/90 outline-none placeholder:text-white/35 focus:border-cyan-300/35"
                    placeholder="Email for the cool updates"
                  />
                  <button className="rounded-2xl bg-gradient-to-r from-cyan-300/90 via-violet-400/90 to-emerald-300/90 px-6 py-4 text-sm font-semibold text-ink-900 shadow-[0_18px_90px_rgba(34,211,238,.20)] transition hover:brightness-110">
                    Request Invite
                  </button>
                </div>
              </div>

              <div className="glass-strong neon-ring rounded-3xl p-6">
                <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                  IM LAND PLEDGE
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/75">
                  {[
                    "Minimalism with meaning",
                    "Tech that feels human",
                    "Privacy as a luxury default",
                    "Nature-first infrastructure"
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.55)]" />
                      <div>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative pb-14 pt-10">
      <div className="container-xl">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-semibold tracking-tight">
                <span className="text-gradient">ImLand</span>
              </div>
              <div className="mt-2 text-sm text-white/65">
                ImLand — where cool becomes a country.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/70">
              {[
                { label: "About", href: "#about" },
                { label: "Tourism", href: "#tourism" },
                { label: "Gallery", href: "#gallery" },
                { label: "Join", href: "#join" }
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 h-px w-full hairline" />
          <div className="mt-6 flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} ImLand • Fictional nation portal</div>
            <div className="flex items-center gap-3">
              <a className="hover:text-white" href="#">
                X
              </a>
              <a className="hover:text-white" href="#">
                GitHub
              </a>
              <a className="hover:text-white" href="#">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const reduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const t = window.setTimeout(() => setReady(true), reduced ? 0 : 450);
    return () => window.clearTimeout(t);
  }, [loaded, reduced]);

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <CustomCursor />
      <LoadingScreen done={loaded} />

      <AnimatePresence>
        {ready && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar />
            <main className="relative z-[2]">
              <Hero />
              <div className="hairline h-px w-full opacity-60" />
              <About />
              <Team />
              <Nature />
              <Food />
              <Culture />
              <Tourism />
              <Gallery />
              <Join />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
