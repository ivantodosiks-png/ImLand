import { motion } from "framer-motion";
import { MapPinned, MountainSnow, Waves } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { habitats } from "../content/imland";
import { useInViewOnce } from "../lib/useInViewOnce";
import { useState } from "react";

function InteractiveMap() {
  const spots = [
    { id: "hamar", label: "Hamar", x: 58, y: 44, icon: <MapPinned className="h-4 w-4" /> },
    { id: "loten", label: "Løten", x: 62, y: 34, icon: <MountainSnow className="h-4 w-4" /> },
    { id: "brum", label: "Brumunddal", x: 50, y: 50, icon: <Waves className="h-4 w-4" /> }
  ] as const;
  const [active, setActive] = useState<(typeof spots)[number]>(spots[0]);

  return (
    <div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_420px_at_30%_20%,rgba(34,211,238,.18),transparent_60%),radial-gradient(700px_420px_at_70%_80%,rgba(168,85,247,.16),transparent_60%)]" />
        <div className="relative">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-white/90">Где обитают</div>
            <div className="text-xs text-white/55">Hamar • Løten • Brumunddal</div>
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

            <div className="pointer-events-none absolute inset-0 snow-layer opacity-30" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>

      <div className="glass-strong neon-ring rounded-3xl p-6">
        <div className="text-xs font-semibold tracking-[0.22em] text-white/55">SELECTED</div>
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
            {active.icon}
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight">{active.label}</div>
            <div className="mt-1 text-xs text-white/55">Northern calm • daily base</div>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/70">
          Это северная “тихая зона” ImLand: рядом леса, озёра и правильный ритм для отдыха.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 text-xs">
          {habitats.map((h) => (
            <div key={h} className="glass rounded-2xl p-4">
              <div className="text-white/50">Habitat</div>
              <div className="mt-1 font-semibold text-white/90">{h}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NaturePage() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.18 });
  return (
    <section className="relative pb-20 pt-2 sm:pb-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Nature & Habitats"
          title="Where forests meet fjords"
          subtitle="Interactive карта, параллакс‑настроение и мягкий снег — плюс реальные места: Hamar, Løten, Brumunddal."
          icon={<MountainSnow className="h-4 w-4 text-cyan-200" />}
        />

        <div className="mx-auto max-w-6xl">
          <div
            ref={ref}
            className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2600&q=80')] bg-cover bg-center opacity-65" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
            <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_30%,rgba(34,211,238,.20),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,.18),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 snow-layer" />
            <div className="relative p-6 sm:p-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/70 backdrop-blur-xl">
                  <Waves className="h-4 w-4 text-emerald-200" />
                  <span className="uppercase">Ambient north</span>
                </div>
                <div className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Forests. Lakes. Snow ridges. Quiet towns.
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Здесь меньше шума и больше дыхания. Идеально для отдыха и перезагрузки.
                </p>
              </motion.div>
            </div>
          </div>

          <InteractiveMap />
        </div>
      </div>
    </section>
  );
}

