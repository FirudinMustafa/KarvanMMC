import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Əlaqə",
  description:
    "Karvan 2002 MMC ilə əlaqə — Bakı, Məhəmmədi qəsəbəsi. Telefon, e-poçt və sosial şəbəkə.",
};

export default function ElaqePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-16">
        <Reveal>
          <div className="mono text-xs text-[var(--mute)] tracking-[0.2em]">
            ANA SƏHİFƏ / ƏLAQƏ
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 serif text-5xl md:text-7xl lg:text-8xl text-[var(--ink)] leading-[0.95]">
            Yazın — <br />
            <em className="italic-serif text-[var(--blue-2)]">söhbət edək.</em>
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-[1fr,1.4fr] gap-10">
          <Reveal>
            <div className="space-y-8">
              <div>
                <span className="mono text-[11px] tracking-[0.2em] text-[var(--blue-2)] uppercase">Telefon</span>
                <a href={COMPANY.phoneHref} className="mt-2 block serif text-3xl text-[var(--ink)] hover:text-[var(--blue-2)] transition">
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <span className="mono text-[11px] tracking-[0.2em] text-[var(--blue-2)] uppercase">E-poçt</span>
                <a href={`mailto:${COMPANY.email}`} className="mt-2 block serif text-3xl text-[var(--ink)] hover:text-[var(--blue-2)] transition">
                  {COMPANY.email}
                </a>
              </div>
              <div>
                <span className="mono text-[11px] tracking-[0.2em] text-[var(--blue-2)] uppercase">Ünvan</span>
                <p className="mt-2 serif text-2xl text-[var(--ink)]">{COMPANY.address}</p>
                <p className="mt-1 text-sm text-[var(--mute)]">{COMPANY.hours}</p>
              </div>
              <div className="flex gap-3 pt-2">
                <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur px-4 py-2 text-sm text-[var(--ink)] hover:border-[var(--blue-2)] hover:text-[var(--blue-2)] transition">
                  Facebook
                </a>
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur px-4 py-2 text-sm text-[var(--ink)] hover:border-[var(--blue-2)] hover:text-[var(--blue-2)] transition">
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
