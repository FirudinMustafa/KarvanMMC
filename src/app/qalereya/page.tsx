import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { GALLERY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Qalereya",
  description:
    "Karvan 2002 MMC-nin gündəlik işi, logistik mərkəzi, komandası və məhsullarından görüntülər.",
};

export default function QalereyaPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-16">
        <Reveal>
          <div className="mono text-xs text-[var(--mute)] tracking-[0.2em]">
            ANA SƏHİFƏ / QALEREYA
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 serif text-5xl md:text-7xl lg:text-8xl text-[var(--ink)] leading-[0.95]">
            Kadrlar —<br />
            <em className="italic-serif text-[var(--blue-2)]">günün içindən.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 text-[var(--mute)] text-lg leading-relaxed max-w-2xl">
            Anbardan yola, yoldan rəfə — bir məhsulun gördüyü bütün yerlərdən
            fotolar. Karvan komandasının gündəlik işi.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {GALLERY.map((src, i) => (
            <Reveal key={src} delay={i * 0.04}>
              <div className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-[var(--line)] group">
                <div className="relative">
                  <Image
                    src={src}
                    alt=""
                    width={800}
                    height={1000}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--blue-4)]/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
