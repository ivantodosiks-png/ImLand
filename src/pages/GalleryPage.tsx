import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GalleryLightbox from "../components/GalleryLightbox";
import { galleryImages } from "../content/imland";
import { useInViewOnce } from "../lib/useInViewOnce";
import { useState } from "react";

export default function GalleryPage() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  return (
    <section className="relative pb-20 pt-2 sm:pb-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Gallery"
          title="ImLand visuals"
          subtitle="Masonry grid + lightbox preview со smooth transitions."
          icon={<Sparkles className="h-4 w-4 text-cyan-200" />}
        />

        <div ref={ref} className="mx-auto max-w-6xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((img, idx) => (
              <motion.button
                key={img}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.8, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="group mb-4 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left backdrop-blur-xl"
                onClick={() => {
                  setSrc(img);
                  setOpen(true);
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={`ImLand ${idx + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(500px_260px_at_50%_10%,rgba(34,211,238,.22),transparent_60%)]" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <GalleryLightbox
        open={open}
        src={src}
        onClose={() => {
          setOpen(false);
          setSrc(null);
        }}
      />
    </section>
  );
}

