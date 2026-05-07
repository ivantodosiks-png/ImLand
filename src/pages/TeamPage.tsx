import { motion } from "framer-motion";
import { Crown, Github, Linkedin, Sparkles, Twitter } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { founders } from "../content/imland";
import { useInViewOnce } from "../lib/useInViewOnce";

function Avatar({ name, src }: { name: string; src: string | null }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/10"
      />
    );
  }
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return (
    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white/85">
      {initials}
    </div>
  );
}

export default function TeamPage() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section className="relative pb-20 pt-2 sm:pb-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Team"
          title="Founders of ImLand"
          subtitle="Команда, которая построила атмосферу ImLand: минимализм, тишина, технологии и северная эстетика."
          icon={<Crown className="h-4 w-4 text-violet-200" />}
        />

        <div ref={ref} className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {founders.map((mbr, idx) => (
            <motion.div
              key={mbr.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition hover:border-cyan-300/25"
            >
              <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[radial-gradient(450px_200px_at_30%_20%,rgba(34,211,238,.28),transparent_60%),radial-gradient(420px_220px_at_70%_80%,rgba(168,85,247,.22),transparent_60%)]" />
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <Avatar name={mbr.name} src={mbr.avatar} />
                  <div className="absolute -inset-2 -z-[1] rounded-3xl bg-gradient-to-r from-cyan-300/25 via-violet-400/20 to-emerald-300/20 opacity-0 blur-xl transition group-hover:opacity-100" />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-tight">{mbr.name}</div>
                  <div className="mt-1 text-xs text-white/60">{mbr.role}</div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-white/70">
                {[
                  { label: "X", href: mbr.socials.x, icon: <Twitter className="h-4 w-4" /> },
                  { label: "GitHub", href: mbr.socials.github, icon: <Github className="h-4 w-4" /> },
                  { label: "LinkedIn", href: mbr.socials.linkedin, icon: <Linkedin className="h-4 w-4" /> }
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold transition hover:bg-white/10 hover:text-white"
                    aria-label={s.label}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80">
                        {s.icon}
                      </span>
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
              {idx === 0 && (
                <div className="mt-5 glass rounded-2xl p-4 text-xs text-white/70">
                  <div className="flex items-center gap-2 text-white/85">
                    <Sparkles className="h-4 w-4 text-cyan-200" />
                    <span className="font-semibold">Где наша команда?</span>
                  </div>
                  <div className="mt-2 leading-relaxed text-white/65">
                    Сейчас базируемся рядом с Hamar • Løten • Brumunddal.
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

