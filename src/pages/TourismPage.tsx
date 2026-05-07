import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { tourismPlaces } from "../content/imland";
import { useInViewOnce } from "../lib/useInViewOnce";
import { Link } from "react-router-dom";

export default function TourismPage() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section className="relative pb-20 pt-2 sm:pb-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Tourism"
          title="Places to visit"
          subtitle="Glassmorphism travel cards, рейтинг и 3D hover. Первая карточка — KIWI Storhamar (Norway)."
          icon={<Compass className="h-4 w-4 text-cyan-200" />}
        />

        <div ref={ref} className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {tourismPlaces.map((p, idx) => (
            <motion.div
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
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    {idx === 0 && (
                      <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[11px] font-semibold tracking-[0.22em] text-white/75 backdrop-blur-xl">
                        <Sparkles className="h-4 w-4 text-cyan-200" />
                        BEST FOR REST
                      </div>
                    )}
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
                      <Link
                        to="/language"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/8 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/12"
                      >
                        Visit Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

