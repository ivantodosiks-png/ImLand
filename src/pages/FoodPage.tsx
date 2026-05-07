import { motion } from "framer-motion";
import { Waves } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { foods } from "../content/imland";
import { useInViewOnce } from "../lib/useInViewOnce";

export default function FoodPage() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section className="relative pb-20 pt-2 sm:pb-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Traditional Food"
          title="Cuisine with northern clarity"
          subtitle="Большие изображения, скандинавская подача и мягкий hover‑zoom — как в премиальном журнале."
          icon={<Waves className="h-4 w-4 text-emerald-200" />}
        />

        <div ref={ref} className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {foods.map((f, idx) => (
            <motion.article
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

