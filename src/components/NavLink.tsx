"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({
  href,
  num,
  children,
  pill,
}: {
  href: string;
  num?: string;
  children: React.ReactNode;
  pill?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "group relative inline-flex items-center gap-2 text-sm transition",
        pill &&
          "rounded-full border border-[var(--blue-2)] bg-[var(--blue-2)] px-5 py-2 text-[var(--cream)] hover:bg-[var(--blue-3)] hover:border-[var(--blue-3)]",
        !pill && "px-3 py-2 text-[var(--ink)]/75 hover:text-[var(--blue-2)]",
        !pill && active && "text-[var(--blue-2)]",
      )}
    >
      {num && !pill && (
        <span className="mono text-[10px] text-[var(--mute)] group-hover:text-[var(--blue-2)]">
          {num}
        </span>
      )}
      <span>{children}</span>
      {!pill && active && (
        <span className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[var(--blue-2)]" />
      )}
    </Link>
  );
}
