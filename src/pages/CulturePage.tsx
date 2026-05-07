import { motion } from "framer-motion";
import { Music, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { timeline } from "../content/imland";
import { useInViewOnce } from "../lib/useInViewOnce";

export default function CulturePage() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.16 });

  return (
    <section className="relative pb-20 pt-2 sm:pb-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Culture & Traditions"
          title="Culture, festivals & symbols"
          subtitle="Музыка, фестивали, символика и стиль — рассказано через красивую timeline‑анимацию."
          icon={<Music className="h-4 w-4 text-violet-200" />}
        />

        <div ref={ref} className="mx-auto max-w-5xl">
          <div className="glass-strong neon-ring rounded-3xl p-6 sm:p-8">
            <div className="relative">
              <div className="absolute left-[13px] top-2 h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan-300/50 via-white/10 to-violet-400/50" />
              <div className="space-y-5">
                {timeline.map((t, idx) => (
                  <motion.div
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

