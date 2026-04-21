"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): null {
  return null;
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore<boolean | null>(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("karvan.theme", next ? "dark" : "light");
    } catch {}
    listeners.forEach((l) => l());
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "İşıqlı rejim" : "Qaranlıq rejim"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper-2)]/70 backdrop-blur text-[var(--ink)] transition hover:border-[var(--blue-2)] hover:text-[var(--blue-2)]"
    >
      {dark === null ? (
        <span className="h-5 w-5" aria-hidden />
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          {dark ? (
            <>
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          ) : (
            <path d="M21 13A9 9 0 0 1 11 3a7 7 0 1 0 10 10z" />
          )}
        </svg>
      )}
    </button>
  );
}
