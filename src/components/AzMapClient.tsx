"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { OFFICES, DEALERS } from "@/lib/data";

const GRADIENT_DEFS = `<defs>
  <linearGradient id="azFill" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#1E6FE0" stop-opacity="0.18" />
    <stop offset="50%" stop-color="#4EA3FF" stop-opacity="0.26" />
    <stop offset="100%" stop-color="#1E6FE0" stop-opacity="0.14" />
  </linearGradient>
</defs>`;

function prepareSvg(raw: string): string {
  return raw
    .replace(/viewBox="[^"]*"/, `viewBox="40 10 1090 870"`)
    .replace(
      /<svg([^>]+)>/,
      `<svg$1 class="azmap-svg" preserveAspectRatio="xMidYMid meet">${GRADIENT_DEFS}`,
    );
}

export default function AzMapClient({ svg }: { svg: string }) {
  const [active, setActive] = useState<string | null>("baku");
  const html = prepareSvg(svg);

  return (
    <div className="relative w-full rounded-3xl border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur p-4 md:p-8 shadow-[var(--shadow-md)]">
      <div className="relative aspect-[1090/870] w-full">
        <div
          className="absolute inset-0 [&_svg]:h-full [&_svg]:w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {DEALERS.map((d, i) => (
          <motion.div
            key={d.city}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--blue-1)] shadow-[0_0_12px_rgba(78,163,255,0.7)]" />
          </motion.div>
        ))}

        {OFFICES.map((o, i) => {
          const isHQ = o.type === "HQ";
          const isActive = active === o.slug;
          return (
            <motion.button
              key={o.slug}
              type="button"
              onMouseEnter={() => setActive(o.slug)}
              onFocus={() => setActive(o.slug)}
              onClick={() => setActive(o.slug)}
              className="absolute -translate-x-1/2 -translate-y-full group focus:outline-none"
              style={{ left: `${o.x}%`, top: `${o.y}%` }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 220, damping: 18 }}
              aria-label={`${o.city} — ${o.role}`}
            >
              <span
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-6 w-6 rounded-full"
                style={{
                  background: isHQ
                    ? "radial-gradient(circle, rgba(30,111,224,0.55), transparent 70%)"
                    : "radial-gradient(circle, rgba(78,163,255,0.45), transparent 70%)",
                  animation: "pulse-ring 2.4s ease-out infinite",
                }}
              />
              <svg
                viewBox="0 0 24 24"
                className={`relative h-8 w-8 drop-shadow-[0_6px_10px_rgba(10,31,68,0.35)] transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
                fill={isHQ ? "#0A3B8C" : "#1E6FE0"}
                stroke="white"
                strokeWidth="1.2"
              >
                <path d="M12 2c-4 0-7 3-7 7 0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
                <circle cx="12" cy="9" r="2.6" fill="white" />
              </svg>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur px-3 py-1 text-[11px] font-medium text-[var(--ink)] shadow-[var(--shadow-sm)] transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {o.city}
                {isHQ && <span className="ml-1 text-[var(--blue-2)]">· HQ</span>}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
        {OFFICES.map((o) => (
          <button
            key={o.slug}
            type="button"
            onMouseEnter={() => setActive(o.slug)}
            onClick={() => setActive(o.slug)}
            className={`rounded-2xl border p-3 text-left transition ${
              active === o.slug
                ? "border-[var(--blue-2)] bg-[var(--blue-2)]/10"
                : "border-[var(--line)] bg-[var(--paper)]/50 hover:border-[var(--blue-2)]/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="serif text-lg text-[var(--ink)]">{o.city}</span>
              <span className={`mono text-[9px] tracking-[0.2em] ${o.type === "HQ" ? "text-[var(--blue-3)]" : "text-[var(--mute)]"}`}>
                {o.type === "HQ" ? "MƏRKƏZ" : "FİLİAL"}
              </span>
            </div>
            <div className="mt-1 text-xs text-[var(--mute)]">{o.role}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
