"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { STATS } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString("az-AZ"));

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <sup className="ml-1 text-[var(--blue-2)] text-base font-medium">{suffix}</sup>
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative rounded-3xl border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur p-6 md:p-8 overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle, rgba(30,111,224,0.25), transparent 70%)",
            }}
          />
          <div className="serif text-4xl md:text-5xl text-[var(--ink)] leading-none">
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-3 text-sm text-[var(--mute)]">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
