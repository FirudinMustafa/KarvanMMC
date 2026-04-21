import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-[var(--line)]/60 bg-[var(--blue-4)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <p className="serif text-3xl md:text-5xl leading-[1.1] max-w-2xl">
          Bir <em className="italic-serif text-[var(--blue-1)]">karvan</em> kimi<br />
          irəliyə — 2002-dən bəri.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={48} height={48} className="h-12 w-12 rounded-full bg-white/10 p-1" />
              <div className="leading-tight">
                <div className="serif text-lg">Karvan 2002</div>
                <div className="mono text-[9px] tracking-[0.2em] text-white/60">MMC · DİSTRİBÜTOR</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
              {COMPANY.tagline} {COMPANY.address}.
            </p>
          </div>

          <div>
            <h4 className="mono text-[11px] tracking-[0.2em] text-white/50 uppercase">Naviqasiya</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><Link href="/haqqimizda" className="hover:text-[var(--blue-1)]">Haqqımızda</Link></li>
              <li><Link href="/brendler" className="hover:text-[var(--blue-1)]">Brendlər</Link></li>
              <li><Link href="/kataloq" className="hover:text-[var(--blue-1)]">Kataloq</Link></li>
              <li><Link href="/terefdaslar" className="hover:text-[var(--blue-1)]">Tərəfdaşlar</Link></li>
              <li><Link href="/qalereya" className="hover:text-[var(--blue-1)]">Qalereya</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mono text-[11px] tracking-[0.2em] text-white/50 uppercase">Əlaqə</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href={COMPANY.phoneHref} className="hover:text-[var(--blue-1)]">{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-[var(--blue-1)]">{COMPANY.email}</a></li>
              <li className="text-white/60">{COMPANY.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="mono text-[11px] tracking-[0.2em] text-white/50 uppercase">Sosial</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--blue-1)]">Facebook</a></li>
              <li><a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--blue-1)]">Instagram</a></li>
              <li><Link href="/elaqe" className="hover:text-[var(--blue-1)]">Əlaqə formu</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
          <div>© {COMPANY.foundedYear} – {year} Karvan 2002 MMC · Bütün hüquqlar qorunur</div>
          <div className="mono tracking-[0.2em]">BAKI · GƏNCƏ · MİNGƏÇEVİR · CƏLİLABAD · QUBA</div>
        </div>
      </div>
    </footer>
  );
}
