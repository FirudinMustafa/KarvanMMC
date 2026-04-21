import Image from "next/image";
import type { Metadata } from "next";
import AzMap from "@/components/AzMap";
import Reveal from "@/components/Reveal";
import { PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tərəfdaşlar",
  description:
    "Karvan 2002 MMC — Azərbaycanın aparıcı pərakəndə şəbəkələri və 5 000+ müstəqil satış nöqtəsi ilə əməkdaşlıq.",
};

const CHIPS = [
  { city: "Bakı", count: "2 108" },
  { city: "Gəncə", count: "480" },
  { city: "Cənub", count: "640" },
  { city: "Şimal", count: "510" },
  { city: "Qərb", count: "720" },
  { city: "Aran", count: "630" },
];

export default function TerefdaslarPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-16">
        <Reveal>
          <div className="mono text-xs text-[var(--mute)] tracking-[0.2em]">
            ANA SƏHİFƏ / TƏRƏFDAŞLAR
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 serif text-5xl md:text-7xl lg:text-8xl text-[var(--ink)] leading-[0.95]">
            Tərəfdaşlar —<br />
            <em className="italic-serif text-[var(--blue-2)]">rəflərdə.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 grid md:grid-cols-[2fr,1fr] gap-8 items-end">
            <p className="text-[var(--mute)] text-lg leading-relaxed max-w-2xl">
              Ölkənin böyük pərakəndə şəbəkələri və minlərlə müstəqil satış nöqtəsi
              ilə işləyirik. Məhsulun istehsalçıdan alıcıya qədər olan yolunun son
              mərhələsi — bizim tərəfdaşlarımızın rəfləridir.
            </p>
            <div>
              <span className="mono text-[11px] tracking-[0.2em] text-[var(--blue-2)] uppercase">
                Ümumi
              </span>
              <p className="mt-2 serif text-2xl text-[var(--ink)]">
                5 088+ satış nöqtəsi.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <Reveal>
          <div className="mb-10">
            <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
              01 — Şəbəkələr
            </span>
            <h2 className="mt-4 serif text-4xl md:text-5xl text-[var(--ink)]">
              Tanış adlar.
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <div className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--line)] bg-[var(--paper)]/60 backdrop-blur p-4 transition hover:border-[var(--blue-2)] hover:bg-[var(--paper-2)]/80">
                <div className="relative h-14 w-full">
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="160px"
                    className="object-contain grayscale group-hover:grayscale-0 transition"
                  />
                </div>
                <span className="mono text-[10px] tracking-[0.15em] text-[var(--mute)] uppercase">
                  {p.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <Reveal>
          <div className="mb-10">
            <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
              02 — Coğrafiya
            </span>
            <h2 className="mt-4 serif text-4xl md:text-5xl text-[var(--ink)]">
              Beş filial — bütün ölkə.
            </h2>
          </div>
        </Reveal>
        <AzMap />
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
              03 — Müstəqil satış nöqtələri
            </span>
            <h2 className="mt-4 serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]">
              Hər rayonda — hər küncdə.
            </h2>
            <p className="mt-5 text-[var(--mute)] leading-relaxed max-w-lg">
              Şəbəkələrlə yanaşı, ölkənin bütün bölgələrində 5 000-dən çox müstəqil
              marketlə çalışırıq — kənd dükanından başlayıb şəhər mərkəzindəki
              butiklərə qədər.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <span
                  key={c.city}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur px-4 py-1.5 text-sm text-[var(--ink)]"
                >
                  <span>{c.city}</span>
                  <span className="mono text-xs text-[var(--blue-2)]">· {c.count}</span>
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--paper-2)]/70 backdrop-blur">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 80% 15%, rgba(78,163,255,0.16), transparent 55%), radial-gradient(circle at 20% 85%, rgba(10,59,140,0.14), transparent 55%)",
                }}
              />
              <div className="absolute inset-x-8 top-8 flex items-center justify-between">
                <span className="mono text-[10px] tracking-[0.3em] text-[var(--mute)] uppercase">
                  Əhatə / 2025
                </span>
                <span className="mono text-[10px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
                  AZ
                </span>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span className="mono text-[10px] tracking-[0.4em] text-[var(--mute)] uppercase">
                  Cəmi
                </span>
                <div className="mt-3 serif text-[clamp(4.5rem,14vw,7.5rem)] leading-[0.9] text-[var(--ink)] tabular-nums">
                  5 088
                  <span className="italic-serif text-[var(--blue-2)]">+</span>
                </div>
                <div className="mt-3 h-px w-24 bg-[var(--blue-2)]/60" />
                <p className="mt-4 text-sm text-[var(--mute)] max-w-[22ch] leading-relaxed">
                  müstəqil satış nöqtəsi —
                  <br />
                  <span className="italic-serif text-[var(--ink)]">kəndən şəhərə.</span>
                </p>
              </div>

              <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="mono text-[10px] tracking-[0.3em] text-[var(--mute)] uppercase">
                    Şəbəkə
                  </span>
                  <span className="serif text-lg text-[var(--ink)]">12 zəncir</span>
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="mono text-[10px] tracking-[0.3em] text-[var(--mute)] uppercase">
                    Bölgə
                  </span>
                  <span className="serif text-lg text-[var(--ink)]">66 rayon</span>
                </div>
              </div>

              <svg
                aria-hidden
                viewBox="0 0 320 400"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <g fill="#1E6FE0">
                  <circle cx="32" cy="64" r="2.2" opacity="0.5" />
                  <circle cx="288" cy="88" r="1.8" opacity="0.45" />
                  <circle cx="44" cy="336" r="2.0" opacity="0.5" />
                  <circle cx="276" cy="320" r="2.4" opacity="0.55" />
                  <circle cx="160" cy="24" r="1.4" opacity="0.4" />
                  <circle cx="160" cy="376" r="1.4" opacity="0.4" />
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--blue-4)] text-[var(--cream)] p-10 md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 20% 40%, rgba(78,163,255,0.25), transparent 50%)",
              }}
            />
            <p className="relative serif text-3xl md:text-5xl leading-[1.15] max-w-3xl">
              “Tərəfdaşlıq bir günlük deyil — Karvan ilə 15 ildir,
              <em className="italic-serif text-[var(--blue-1)]"> bir ailə kimi</em> işləyirik.”
            </p>
            <div className="mt-6 mono text-xs tracking-[0.3em] text-white/60 uppercase">
              — Regional şəbəkə meneceri, Bakı
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
