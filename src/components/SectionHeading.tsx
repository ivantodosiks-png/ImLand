import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInViewOnce } from "../lib/useInViewOnce";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  icon
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon?: ReactNode;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className="mx-auto mb-10 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/70"
      >
        {icon}
        <span className="uppercase">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 text-pretty text-sm leading-relaxed text-white/70 sm:text-base"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

