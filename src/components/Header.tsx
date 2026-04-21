"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { NAV } from "@/lib/data";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-[var(--paper)]/70 border-b border-[var(--line)]/60 shadow-[var(--shadow-sm)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Karvan 2002 MMC">
          <Image src="/logo.png" alt="" width={40} height={40} priority className="h-10 w-10 rounded-full ring-1 ring-[var(--line)]" />
          <span className="flex flex-col leading-none">
            <span className="serif text-lg text-[var(--ink)]">Karvan</span>
            <span className="mono text-[9px] text-[var(--mute)] tracking-[0.25em]">2002 — EST.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Əsas naviqasiya">
          {NAV.map((n) => (
            <NavLink key={n.href} href={n.href} num={n.num} pill={n.pill}>
              {n.label}
            </NavLink>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menyu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--line)] bg-[var(--paper-2)]/70 backdrop-blur"
          >
            <span
              className={clsx(
                "h-[2px] w-5 bg-[var(--ink)] transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={clsx(
                "h-[2px] w-5 bg-[var(--ink)] transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "h-[2px] w-5 bg-[var(--ink)] transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "lg:hidden overflow-hidden border-b border-[var(--line)]/60 bg-[var(--paper)]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-[var(--ink)] hover:bg-[var(--paper-2)]"
            >
              <span className="flex items-center gap-3">
                <span className="mono text-[10px] text-[var(--mute)]">{n.num}</span>
                <span>{n.label}</span>
              </span>
              <svg viewBox="0 0 14 14" className="h-3 w-3 text-[var(--mute)]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
              </svg>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
