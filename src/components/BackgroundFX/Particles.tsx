"use client";

import { useMemo } from "react";

type P = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
};

// Integer-only PRNG so server and client always serialize to identical strings.
function hash(i: number, seed: number) {
  let x = (i * 9301 + seed * 49297) | 0;
  x = Math.imul(x ^ (x >>> 13), 0x85ebca6b);
  x = Math.imul(x ^ (x >>> 16), 0xc2b2ae35);
  x ^= x >>> 16;
  return ((x >>> 0) % 10000) / 10000;
}

export default function Particles({ count = 28 }: { count?: number }) {
  const particles = useMemo<P[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      left: Math.round(hash(i, 1) * 10000) / 100,
      size: Math.round((2 + hash(i, 2) * 4) * 100) / 100,
      delay: Math.round(-hash(i, 3) * 3000) / 100,
      duration: Math.round((18 + hash(i, 4) * 20) * 100) / 100,
      drift: Math.round((hash(i, 5) - 0.5) * 12000) / 100,
      opacity: Math.round((0.3 + hash(i, 6) * 0.5) * 100) / 100,
    }));
  }, [count]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-20px] rounded-full bg-[var(--blue-1)]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px var(--blue-1)`,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
