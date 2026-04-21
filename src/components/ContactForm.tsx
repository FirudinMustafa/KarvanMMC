"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/data";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    const name = encodeURIComponent(String(data.get("name") ?? ""));
    const message = encodeURIComponent(String(data.get("message") ?? ""));
    const subject = `Müraciət — ${decodeURIComponent(name)}`;
    const body = `${decodeURIComponent(message)}\n\nTelefon: ${data.get("phone") ?? ""}\nE-poçt: ${data.get("email") ?? ""}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setState("sent"), 600);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[var(--line)] bg-[var(--paper-2)]/60 backdrop-blur p-6 md:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label="Ad, Soyad" required />
        <Field name="company" label="Şirkət (opsional)" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="email" type="email" label="E-poçt" required />
        <Field name="phone" type="tel" label="Telefon" />
      </div>
      <div>
        <label className="mono text-[11px] tracking-[0.2em] text-[var(--mute)] uppercase">
          Mesaj
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)]/70 px-4 py-3 text-[var(--ink)] placeholder:text-[var(--mute)] focus:border-[var(--blue-2)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-2)]/20 transition"
          placeholder="Təklifiniz, sualınız…"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-[var(--mute)]">
          Formu göndərərək bizə e-poçt yazırsınız.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--blue-2)] px-7 py-3 text-[var(--cream)] shadow-[var(--shadow-blue)] hover:bg-[var(--blue-3)] transition disabled:opacity-60"
        >
          {state === "sending" ? "Göndərilir…" : state === "sent" ? "Göndərildi" : "Göndər"}
          <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
          </svg>
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mono text-[11px] tracking-[0.2em] text-[var(--mute)] uppercase">
        {label}
        {required && <span className="ml-1 text-[var(--blue-2)]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full border border-[var(--line)] bg-[var(--paper)]/70 px-4 py-3 text-[var(--ink)] placeholder:text-[var(--mute)] focus:border-[var(--blue-2)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-2)]/20 transition"
      />
    </div>
  );
}
