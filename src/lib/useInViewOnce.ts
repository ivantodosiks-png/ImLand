import { useEffect, useMemo, useRef, useState } from "react";

export function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  const opts = useMemo<IntersectionObserverInit>(
    () => ({ root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2, ...options }),
    [options]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setInView(true);
    }, opts);
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, opts]);

  return { ref, inView } as const;
}

