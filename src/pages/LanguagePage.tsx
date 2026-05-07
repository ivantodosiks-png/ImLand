import { Languages, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { signatureLanguage } from "../content/imland";

export default function LanguagePage() {
  return (
    <section className="relative pb-20 pt-2 sm:pb-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Language"
          title="Signature language of ImLand"
          subtitle="Фирменный язык для вывесок, интерфейсов и официального стиля: короткие фразы, мягкое звучание, северный ритм."
          icon={<Languages className="h-4 w-4 text-cyan-200" />}
        />

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[1.05fr_.95fr]">
          <div className="glass-strong neon-ring rounded-3xl p-6">
            <div className="text-xs font-semibold tracking-[0.22em] text-white/55">NAME</div>
            <div className="mt-3 text-xl font-semibold tracking-tight">{signatureLanguage.name}</div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{signatureLanguage.notes}</p>

            <div className="mt-6 h-px w-full hairline" />
            <div className="mt-6 grid gap-3 text-sm">
              {signatureLanguage.sample.map((s) => (
                <div key={s.imlish} className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Sparkles className="h-4 w-4 text-violet-200" />
                    <span className="font-semibold">{s.imlish}</span>
                  </div>
                  <div className="mt-2 text-sm text-white/65">{s.ru}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong neon-ring rounded-3xl p-6">
            <div className="text-xs font-semibold tracking-[0.22em] text-white/55">STYLE</div>
            <div className="mt-3 text-base font-semibold tracking-tight text-white/90">
              Как использовать
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {[
                "Короткие слова и паузы — меньше шума, больше смысла.",
                "На вывесках: одна фраза + мягкий glow, никаких лишних элементов.",
                "В интерфейсах: microcopy в Imlish, но основной текст — по‑норвежски.",
                "В церемониях: Læbli‑формулы как символ спокойной силы."
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.55)]" />
                  <div>{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

