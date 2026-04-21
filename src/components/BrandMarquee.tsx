import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/data";

export default function BrandMarquee() {
  const row = [...BRAND_LOGOS, ...BRAND_LOGOS];
  return (
    <div className="relative overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--paper)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--paper)] to-transparent z-10" />
      <div
        className="flex gap-16 w-max animate-scroll-x"
        style={{ willChange: "transform" }}
      >
        {row.map((b, i) => (
          <div
            key={`${b.slug}-${i}`}
            className="flex items-center justify-center h-16 w-40 shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition"
            title={b.name}
          >
            <Image
              src={b.src}
              alt={b.name}
              width={160}
              height={64}
              className="max-h-14 w-auto object-contain"
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
