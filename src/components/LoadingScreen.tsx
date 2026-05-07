import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ done }: { done: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (done) return;
    const start = Date.now();
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / 1200);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(99, Math.floor(eased * 100)));
      if (t < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-900"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="w-[min(520px,86vw)]">
            <div className="mb-5 flex items-center justify-between text-xs tracking-[0.3em] text-white/60">
              <span className="uppercase">ImLand Systems</span>
              <span>{progress}%</span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-white/8">
              <div className="absolute inset-0 bg-aurora opacity-90 blur-xl" />
              <motion.div
                className="relative h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 shadow-[0_0_40px_rgba(34,211,238,.25)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 160, damping: 24 }}
              />
            </div>
            <div className="mt-7 flex items-end justify-between">
              <div>
                <div className="text-2xl font-semibold tracking-tight">ImLand</div>
                <div className="mt-1 text-sm text-white/60">
                  The coolest nation in the North
                </div>
              </div>
              <div className="text-[11px] text-white/45">
                Boot sequence • Aurora UI
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

