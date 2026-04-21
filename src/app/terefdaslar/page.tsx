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
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[var(--paper-2)]/80 to-[var(--paper)]/40 backdrop-blur">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, rgba(78,163,255,0.22), transparent 55%), radial-gradient(circle at 75% 80%, rgba(30,111,224,0.18), transparent 55%)",
                }}
              />
              <svg
                aria-hidden
                viewBox="0 0 320 400"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <pattern id="pd-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.1" fill="currentColor" opacity="0.18" />
                  </pattern>
                  <linearGradient id="pd-shop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#4EA3FF" />
                    <stop offset="1" stopColor="#1E6FE0" />
                  </linearGradient>
                </defs>
                <rect width="320" height="400" fill="url(#pd-dots)" className="text-[var(--blue-2)]" />
                <g transform="translate(160 205)" stroke="url(#pd-shop)" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" fill="none">
                  <path d="M-70 -60 L-60 -90 L60 -90 L70 -60 Z" fill="url(#pd-shop)" fillOpacity="0.18" />
                  <path d="M-70 -60 L70 -60 L70 70 L-70 70 Z" fill="url(#pd-shop)" fillOpacity="0.08" />
                  <path d="M-70 -60 L70 -60" />
                  <path d="M-40 -60 L-40 -30 Q-40 -20 -55 -20 Q-70 -20 -70 -30 L-70 -60" />
                  <path d="M-10 -60 L-10 -30 Q-10 -20 -25 -20 Q-40 -20 -40 -30 L-40 -60" />
                  <path d="M20 -60 L20 -30 Q20 -20 5 -20 Q-10 -20 -10 -30 L-10 -60" />
                  <path d="M50 -60 L50 -30 Q50 -20 35 -20 Q20 -20 20 -30 L20 -60" />
                  <path d="M80 -60 L70 -60 L70 -30 Q70 -20 55 -20 Q50 -20 50 -20" />
                  <rect x="-25" y="10" width="50" height="60" rx="2" fill="url(#pd-shop)" fillOpacity="0.2" />
                  <path d="M-45 70 L-45 25 L-25 25" />
                  <path d="M45 70 L45 25 L25 25" />
                  <circle cx="18" cy="45" r="2.2" fill="url(#pd-shop)" />
                </g>
                <g fill="#1E6FE0">
                  <circle cx="44" cy="70" r="3.5" opacity="0.7" />
                  <circle cx="284" cy="58" r="2.8" opacity="0.55" />
                  <circle cx="62" cy="342" r="3.0" opacity="0.6" />
                  <circle cx="272" cy="330" r="3.8" opacity="0.75" />
                  <circle cx="28" cy="200" r="2.4" opacity="0.5" />
                  <circle cx="298" cy="210" r="2.6" opacity="0.5" />
                  <circle cx="120" cy="46" r="2.0" opacity="0.45" />
                  <circle cx="220" cy="366" r="2.2" opacity="0.5" />
                </g>
                <g fill="none" stroke="#1E6FE0" strokeWidth="0.8" opacity="0.25" strokeDasharray="2 4">
                  <path d="M44 70 Q160 140 272 330" />
                  <path d="M28 200 Q160 260 298 210" />
                  <path d="M62 342 Q160 300 284 58" />
                </g>
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="mono text-[10px] tracking-[0.3em] text-[var(--mute)] uppercase">
                    Əhatə
                  </span>
                  <p className="serif text-3xl text-[var(--ink)] mt-1">5 088+</p>
                  <p className="text-xs text-[var(--mute)]">satış nöqtəsi</p>
                </div>
                <span className="mono text-[10px] tracking-[0.3em] text-[var(--blue-2)] uppercase">
                  AZ · hər bölgə
                </span>
              </div>
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
