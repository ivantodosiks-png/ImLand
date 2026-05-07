import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Crown, Globe, MountainSnow, Sparkles, Waves } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Counter from "../components/Counter";
import { imlandFacts } from "../content/imland";
import { useInViewOnce } from "../lib/useInViewOnce";
import { Link } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const [videoOk, setVideoOk] = useState(true);
  return (
    <section className="relative overflow-hidden pb-10 pt-8">
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
            <source
              src="https://cdn.coverr.co/videos/coverr-northern-lights-9718/1080p.mp4"
              type="video/mp4"
            />
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
            <Link
              to="/tourism"
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300/90 via-violet-400/90 to-emerald-300/90 px-6 py-4 text-sm font-semibold text-ink-900 shadow-[0_18px_90px_rgba(34,211,238,.22)] transition hover:brightness-110 sm:w-auto"
            >
              Explore ImLand
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute -inset-0.5 -z-[1] rounded-2xl bg-gradient-to-r from-cyan-300/30 via-violet-400/30 to-emerald-300/30 blur-xl" />
            </Link>
            <Link
              to="/language"
              className="group w-full rounded-2xl border border-white/14 bg-white/6 px-6 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:bg-white/10 sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                Join the Journey
                <Crown className="h-4 w-4 text-violet-200 transition group-hover:rotate-6" />
              </span>
            </Link>
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}

function About() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.22 });

  return (
    <section className="relative py-14 sm:py-18">
      <div className="container-xl">
        <SectionHeading
          eyebrow="About Country"
          title="A nation engineered for calm luxury"
          subtitle="ImLand blends Scandinavian minimalism with future-grade governance: silent streets, glass cities, ocean energy and a design-first constitution."
          icon={<Sparkles className="h-4 w-4 text-cyan-200" />}
        />

        <div ref={ref} className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong neon-ring rounded-3xl p-6"
          >
            <div className="text-sm font-semibold tracking-tight text-white/90">History</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Born from the North’s clarity, ImLand is a fictional sovereign state where aesthetics
              are policy and technology is humane. Every public interface is crafted like a luxury
              product — accessible, minimal, and calm.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong neon-ring rounded-3xl p-6"
          >
            <div className="text-sm font-semibold tracking-tight text-white/90">Facts</div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.18 });
  const links = [
    { to: "/tourism", title: "Tourism", desc: "Travel cards • ratings • 3D hover" },
    { to: "/food", title: "Food", desc: "Nordic plates • hover zoom • editorial" },
    { to: "/language", title: "Language", desc: "Signature Imlish • phrases • style" },
    { to: "/gallery", title: "Gallery", desc: "Masonry grid • smooth lightbox" }
  ] as const;

  return (
    <section className="relative py-14 sm:py-18">
      <div className="container-xl">
        <div ref={ref} className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {links.map((l, idx) => (
            <motion.div
              key={l.to}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:border-cyan-300/25"
            >
              <div className="text-sm font-semibold tracking-tight">{l.title}</div>
              <div className="mt-2 text-sm text-white/65">{l.desc}</div>
              <div className="mt-6">
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/8 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/12"
                >
                  Open
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="hairline h-px w-full opacity-60" />
      <About />
      <QuickLinks />
    </>
  );
}

