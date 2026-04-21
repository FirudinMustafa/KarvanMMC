import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "Haqqımızda",
  description:
    "Karvan 2002 MMC — 2002-ci ildən bəri qeyri-ərzaq sektorunda fəaliyyət göstərən distribütor və istehsalçı şirkət.",
};

const TIMELINE = [
  { year: "2002", title: "Təsis", desc: "Bakıda kiçik bir komanda, böyük bir ideya ilə karvana çıxır." },
  { year: "2008", title: "İlk beynəlxalq brend", desc: "Evyap məhsullarının rəsmi distribütor statusunu qazanırıq." },
  { year: "2014", title: "NIVEA", desc: "Beiersdorf ilə distribütor müqaviləsi." },
  { year: "2018", title: "Regional filiallar", desc: "Gəncə və Mingəçevirdə regional ofislərin açılışı." },
  { year: "2022", title: "Logistik mərkəz", desc: "22 500 m²-lik yeni anbar-logistik kompleksin istismarı." },
  { year: "2026", title: "16 brend · 5 filial", desc: "Portfel 16 brendə çatır, ölkənin 5 regionunda aktivik." },
];

export default function HaqqimizdaPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-20">
        <Reveal>
          <div className="mono text-xs text-[var(--mute)] tracking-[0.2em]">
            ANA SƏHİFƏ / HAQQIMIZDA
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 serif text-5xl md:text-7xl lg:text-8xl text-[var(--ink)] leading-[0.95]">
            Bir karvan —<br />
            <em className="italic-serif text-[var(--blue-2)]">dayanmadan irəli.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 grid md:grid-cols-[2fr,1fr] gap-10 items-end">
            <p className="text-[var(--mute)] text-lg leading-relaxed max-w-2xl">
              2002-ci ildə Bakıda, bir neçə nəfərlik komanda ilə başlayan yolumuz
              bu gün ölkənin 5 regionunda aktiv olan, 1 500-dən çox məhsul çeşidini
              5 088+ satış nöqtəsinə çatdıran bir sistemə çevrilib. Qeyri-ərzaq,
              şəxsi qulluq və məişət kimyası kateqoriyalarında 30-a yaxın brendi
              Azərbaycan bazarına çatdırırıq.
            </p>
            <div>
              <span className="mono text-[11px] tracking-[0.2em] text-[var(--blue-2)] uppercase">
                Əsas göstəricilər
              </span>
              <p className="mt-2 serif text-2xl text-[var(--ink)]">
                23 il · 5 filial · 16 brend.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <Stats />
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <Reveal>
          <div className="mb-12">
            <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
              01 — Xronologiya
            </span>
            <h2 className="mt-4 serif text-4xl md:text-5xl text-[var(--ink)]">
              23 ilin sətiraltı tarixçəsi.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--line)]" aria-hidden />
          <ul className="space-y-10">
            {TIMELINE.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={t.year} as="li" delay={i * 0.08}>
                  <div className={`relative flex flex-col md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}>
                    <div className={`md:[direction:ltr] ${left ? "md:text-right" : "md:text-left md:col-start-2"}`}>
                      <div className="ml-12 md:ml-0 rounded-2xl border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur p-6">
                        <div className="mono text-xs tracking-[0.2em] text-[var(--blue-2)]">{t.year}</div>
                        <div className="mt-2 serif text-2xl text-[var(--ink)]">{t.title}</div>
                        <p className="mt-2 text-[var(--mute)] text-sm leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                    <div
                      className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-[var(--blue-2)] ring-4 ring-[var(--paper)]"
                      aria-hidden
                    />
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--line)]">
              <Image src="/gallery/g4.jpg" alt="Komanda" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">02 — Dəyərlər</span>
            <h2 className="mt-4 serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]">
              Uzunmüddətli əməkdaşlıq.
            </h2>
            <p className="mt-5 text-[var(--mute)] leading-relaxed">
              Tərəfdaşlarımızla ortalama iş müddəti 8 ildən çoxdur. Bu, təkcə biznes
              göstəricisi deyil — bir söz verib saxlamağın ifadəsidir.
            </p>
            <ul className="mt-6 space-y-3 text-[var(--ink)]">
              <li className="flex gap-3"><span className="mono text-[var(--blue-2)]">01</span> Şəffaf qiymət və qaydalar</li>
              <li className="flex gap-3"><span className="mono text-[var(--blue-2)]">02</span> Hər regionda lokal komanda</li>
              <li className="flex gap-3"><span className="mono text-[var(--blue-2)]">03</span> Daimi məhsul əlçatanlığı</li>
              <li className="flex gap-3"><span className="mono text-[var(--blue-2)]">04</span> Marketinqdə tərəfdaş dəstəyi</li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
