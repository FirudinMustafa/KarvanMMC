import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BRANDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Brendlər",
  description:
    "Karvan 2002 MMC-nin portfelindəki beynəlxalq və yerli brendlər — NIVEA, Evyap, Arnest, Kopaş, Elfa və daha çox.",
};

export default function BrendlerPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-16">
        <Reveal>
          <div className="mono text-xs text-[var(--mute)] tracking-[0.2em]">
            ANA SƏHİFƏ / BRENDLƏR
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 serif text-5xl md:text-7xl lg:text-8xl text-[var(--ink)] leading-[0.95]">
            Portfeldə — <br />
            <em className="italic-serif text-[var(--blue-2)]">16 brend.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 grid md:grid-cols-[2fr,1fr] gap-8 items-end">
            <p className="text-[var(--mute)] text-lg leading-relaxed max-w-2xl">
              Şəxsi qulluq, məişət kimyası və gigiyena kateqoriyalarında beynəlxalq
              liderlərdən yerli istehsalçılara qədər geniş bir portfel.
            </p>
            <div>
              <span className="mono text-[11px] tracking-[0.2em] text-[var(--blue-2)] uppercase">
                Ümumi
              </span>
              <p className="mt-2 serif text-2xl text-[var(--ink)]">
                1 500+ məhsul çeşidi.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <div className="divide-y divide-[var(--line)] rounded-3xl border border-[var(--line)] bg-[var(--paper-2)]/50 backdrop-blur overflow-hidden">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.03}>
              <Link
                href={b.catalogSlug ? `/kataloq#${b.catalogSlug}` : "/kataloq"}
                className="group grid grid-cols-[56px,1fr,auto] md:grid-cols-[80px,200px,1fr,auto] items-center gap-4 md:gap-6 px-5 md:px-8 py-6 transition hover:bg-[var(--paper-3)]/50"
              >
                <div className="mono text-sm text-[var(--mute)] group-hover:text-[var(--blue-2)]">
                  {b.idx}
                </div>
                <div className="serif text-2xl md:text-3xl text-[var(--ink)] group-hover:text-[var(--blue-2)] transition-colors">
                  {b.name}
                </div>
                <div className="hidden md:block text-sm text-[var(--mute)] max-w-xl">
                  {b.desc}
                </div>
                <div className="text-right">
                  <div className="mono text-[10px] tracking-[0.2em] text-[var(--mute)] uppercase">
                    {b.origin}
                  </div>
                  <div className="md:hidden mt-1 text-xs text-[var(--mute)]">{b.desc}</div>
                  {b.catalogSlug && (
                    <div className="mt-1 mono text-[10px] tracking-[0.2em] text-[var(--blue-2)] uppercase">
                      Kataloq →
                    </div>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--blue-4)] text-[var(--cream)] p-10 md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 80% 30%, rgba(78,163,255,0.28), transparent 50%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <span className="mono text-[11px] tracking-[0.3em] text-[var(--blue-1)] uppercase">
                Kataloq
              </span>
              <h3 className="mt-3 serif text-3xl md:text-5xl leading-[1.05]">
                Hər brendin tam siyahısı.
              </h3>
              <p className="mt-4 text-white/75 max-w-md">
                Brendlər üzrə hazırlanmış 2026 kataloqumuz — PDF formatında
                bütün məhsul çeşidi, ştrix-kod və təsviri.
              </p>
              <Link
                href="/kataloq"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--blue-1)] px-6 py-3 text-[var(--blue-4)] font-medium hover:bg-white transition"
              >
                Kataloqlara bax
                <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
