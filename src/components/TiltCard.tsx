import { PropsWithChildren, useMemo, useRef } from "react";
import { cn } from "../lib/utils";

export default function TiltCard({
  className,
  strength = 10,
  disabled,
  children
}: PropsWithChildren<{
  className?: string;
  strength?: number;
  disabled?: boolean;
}>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const isDisabled = disabled ?? reduced;

  return (
    <div
      ref={ref}
      className={cn(className, "[transform-style:preserve-3d]")}
      onMouseMove={(e) => {
        if (isDisabled) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (0.5 - py) * strength;
        const ry = (px - 0.5) * strength;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
      }}
    >
      {children}
    </div>
  );
}

