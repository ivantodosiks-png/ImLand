import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function GalleryLightbox({
  open,
  src,
  onClose
}: {
  open: boolean;
  src: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
            <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_140px_rgba(0,0,0,.6)]"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="absolute right-4 top-4 z-[2] grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30 text-white/85 backdrop-blur-xl transition hover:bg-black/40"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={src}
              alt="ImLand gallery"
              className="h-[70vh] w-full select-none object-cover"
              draggable={false}
            />
            <div className="hairline h-px w-full" />
            <div className="flex items-center justify-between px-5 py-4 text-xs text-white/65">
              <span>ImLand Archives</span>
              <span className="text-white/50">Esc to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
