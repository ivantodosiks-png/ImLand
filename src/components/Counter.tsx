import { useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Counter({
  value,
  suffix = "",
  active
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 140, damping: 22 });
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(latest);
  });

  useEffect(() => {
    if (!active) return;
    if (prefersReduced) {
      mv.set(value);
      return;
    }
    mv.set(0);
    const t0 = performance.now();
    const dur = 900;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      mv.set(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, mv, prefersReduced, value]);

  return (
    <span className="tabular-nums">
      {new Intl.NumberFormat("en-US").format(Number(display.toFixed(0)))}
      {suffix}
    </span>
  );
}
