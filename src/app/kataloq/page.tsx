import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CATALOGS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kataloq 2026",
  description:
    "Karvan 2002 MMC kataloqları — istehsalçı və brend üzrə PDF faylları, 2026 versiyası.",
};

export default function KataloqPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-16">
        <Reveal>
          <div className="mono text-xs text-[var(--mute)] tracking-[0.2em]">
            ANA SƏHİFƏ / KATALOQ
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 serif text-5xl md:text-7xl lg:text-8xl text-[var(--ink)] leading-[0.95]">
            Kataloq <br />
            <em className="italic-serif text-[var(--blue-2)]">2026.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 grid md:grid-cols-[2fr,1fr] gap-8 items-end">
            <p className="text-[var(--mute)] text-lg leading-relaxed max-w-2xl">
              İstehsalçı və brend üzrə hazırlanmış illik kataloqlarımız. Hər PDF
              faylında tam məhsul siyahısı, ştrix-kod, qablaşdırma spesifikasiyası
              və təsvir göstərilib.
            </p>
            <div>
              <span className="mono text-[11px] tracking-[0.2em] text-[var(--blue-2)] uppercase">
                Versiya
              </span>
              <p className="mt-2 serif text-2xl text-[var(--ink)]">
                Yanvar 2026 — 10 kataloq.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATALOGS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <div
                id={c.slug}
                className="catalog-card group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur p-7 transition hover:border-[var(--blue-2)] scroll-mt-24"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(30,111,224,0.25), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="mono text-xs tracking-[0.2em] text-[var(--blue-2)]">
                      {c.year} · PDF
                    </div>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[var(--mute)] group-hover:text-[var(--blue-2)] transition" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                    </svg>
                  </div>
                  <h3 className="mt-6 serif text-3xl text-[var(--ink)]">{c.brand}</h3>
                  <div className="mt-1 text-sm text-[var(--mute)]">Tam məhsul siyahısı</div>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs text-[var(--mute)]">{c.size}</span>
                    <a
                      href={c.file}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--blue-2)] px-5 py-2.5 text-sm text-[var(--cream)] hover:bg-[var(--blue-3)] transition"
                    >
                      PDF yüklə
                      <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 2v9M3 7l4 4 4-4M2 13h10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
