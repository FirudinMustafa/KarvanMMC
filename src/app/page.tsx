import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "@/components/BrandMarquee";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-28 md:pt-32 md:pb-40">
          <Reveal>
            <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
              01 — 2002-dən bəri
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-[var(--ink)] max-w-5xl">
              Qeyri-ərzaq sektorunun <br />
              <em className="italic-serif text-[var(--blue-2)]">aparıcı distribütoru</em>
              <br />
              Azərbaycanda.
            </h1>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 grid md:grid-cols-[1fr,auto] gap-8 items-end">
            <p className="max-w-xl text-[var(--mute)] text-lg leading-relaxed">
              NIVEA, Evyap, Arnest, Kopaş, Elfa — minlərlə satış nöqtəsinə
              hər gün çatan məhsullar. 23 ildir bazardayıq, 5 filialla bütün ölkəni
              qucaqlayırıq.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/brendler"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-2)] px-7 py-3.5 text-[var(--cream)] shadow-[var(--shadow-blue)] hover:bg-[var(--blue-3)] transition"
              >
                Brendləri kəşf et
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </Link>
              <Link
                href="/elaqe"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line-2)] bg-[var(--paper)]/70 backdrop-blur px-7 py-3.5 text-[var(--ink)] hover:border-[var(--blue-2)] hover:text-[var(--blue-2)] transition"
              >
                Əlaqə saxla
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="relative border-y border-[var(--line)]/60 bg-[var(--paper)]/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-4">
          <div className="flex items-center justify-between gap-8 pb-2">
            <span className="mono text-[11px] tracking-[0.3em] text-[var(--mute)] uppercase">
              Rəsmi təmsilçisiyik
            </span>
            <Link
              href="/brendler"
              className="text-xs text-[var(--blue-2)] hover:underline"
            >
              Tam siyahı →
            </Link>
          </div>
        </div>
        <BrandMarquee />
      </section>

      {/* ABOUT SPLIT */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
                02 — Şirkət
              </span>
              <h2 className="mt-4 serif text-4xl md:text-6xl leading-[1.05] text-[var(--ink)]">
                Bir karvan kimi — istehsalçıdan rəfə.
              </h2>
              <p className="mt-6 text-[var(--mute)] text-lg leading-relaxed max-w-lg">
                Məhsulun istehsalçıdan alıcıya qədər olan bütün yolunda durmadan
                irəliləyən bir karvanıq. 22 500 m² logistik mərkəz, 5 regional filial,
                1 500-dən çox məhsul çeşidi.
              </p>
              <Link
                href="/haqqimizda"
                className="mt-8 inline-flex items-center gap-2 text-[var(--blue-2)] hover:gap-3 transition-all"
              >
                Haqqımızda oxu
                <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--line)]">
                <Image
                  src="/gallery/warehouse.jpg"
                  alt="Karvan 2002 logistik mərkəzi"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-4)]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-[var(--cream)]">
                  <div className="mono text-[10px] tracking-[0.25em]">BAKI · MƏHƏMMƏDİ</div>
                  <div className="serif text-2xl mt-1">Logistik mərkəz</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
          <Reveal>
            <div className="mb-10">
              <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
                03 — Rəqəmlər
              </span>
              <h2 className="mt-4 serif text-4xl md:text-5xl text-[var(--ink)]">
                Sözlərdən çox.
              </h2>
            </div>
          </Reveal>
          <Stats />
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--blue-4)] text-[var(--cream)] p-10 md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(78,163,255,0.3), transparent 40%), radial-gradient(circle at 80% 80%, rgba(30,111,224,0.25), transparent 40%)",
              }}
            />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-1)] uppercase">
                  İstehsalçısınız?
                </span>
                <h3 className="mt-3 serif text-3xl md:text-5xl leading-[1.05]">
                  Portfelimizdə yer tutun.
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-white/75 max-w-md">
                  Yeni brendləri Azərbaycan bazarına çıxarmaq və böyük pərakəndə
                  şəbəkələrə çatdırmaq üçün təcrübəmiz var.
                </p>
                <Link
                  href="/elaqe"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--blue-1)] px-7 py-3.5 text-[var(--blue-4)] font-medium hover:bg-white transition"
                >
                  Təkliflə müraciət et
                  <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
