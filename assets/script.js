/* --------------------------------------------------------
   Karvan 2002 — interactions v2
--------------------------------------------------------- */

document.documentElement.classList.add('js-ready');

/* ========== PRELOADER ========== */
window.addEventListener('load', () => {
  const pre = document.querySelector('.preloader');
  if (!pre) return;
  let seen = false;
  try { seen = sessionStorage.getItem('karvan.preloaderSeen') === '1'; } catch (_) {}
  if (seen) {
    pre.remove();
    return;
  }
  const holdMs = 900;
  const fadeMs = 700;
  setTimeout(() => pre.classList.add('done'), holdMs);
  setTimeout(() => {
    pre.remove();
    try { sessionStorage.setItem('karvan.preloaderSeen', '1'); } catch (_) {}
  }, holdMs + fadeMs);
});

/* ========== HEADER ========== */
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ========== MOBILE NAV ========== */
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (burger && nav) {
  const setOpen = (open) => {
    burger.classList.toggle('open', open);
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => setOpen(false))
  );
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false);
  });
}

/* ========== REVEAL ========== */
const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
);
document
  .querySelectorAll('.reveal, .reveal-line, [data-stagger], .stat')
  .forEach(el => io.observe(el));

/* ========== STAT COUNT UP ========== */
const statObs = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const raw = el.dataset.count || '0';
      const target = parseFloat(raw);
      if (!isFinite(target)) { statObs.unobserve(el); return; }
      const suffix = el.dataset.suffix || '';
      const decimals = (raw.split('.')[1] || '').length;
      const duration = 1800;
      const start = performance.now();
      const format = v => {
        try {
          return v.toLocaleString('az-AZ', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          });
        } catch (_) {
          return v.toFixed(decimals);
        }
      };
      const step = now => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = format(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      statObs.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('[data-count]').forEach(el => statObs.observe(el));

/* ========== CUSTOM CURSOR ========== */
(function initCursor() {
  if (matchMedia('(hover:none)').matches || innerWidth < 900) return;
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor';
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = innerWidth / 2,
    my = innerHeight / 2,
    rx = mx,
    ry = my;
  addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });

  (function tick() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(tick);
  })();

  const hovers = 'a, button, .brand-card, .gal, .partner, .cat-item, .tl-item, .brand-row, input, textarea, select, .tag-chip';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hovers)) {
      dot.classList.add('hover');
      ring.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hovers)) {
      dot.classList.remove('hover');
      ring.classList.remove('hover');
    }
  });

  /* adapt cursor to dark sections */
  const darkObs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.intersectionRatio > 0.4) {
          dot.classList.add('dark');
          ring.classList.add('dark');
        } else {
          dot.classList.remove('dark');
          ring.classList.remove('dark');
        }
      });
    },
    { threshold: [0.4] }
  );
  document.querySelectorAll('.dark-sec, .footer, .preloader').forEach(el => darkObs.observe(el));
})();

/* ========== PARALLAX HERO BG ========== */
const heroBgImg = document.querySelector('.hero-bg img');
if (heroBgImg) {
  addEventListener(
    'scroll',
    () => {
      const y = Math.min(window.scrollY * 0.25, 200);
      heroBgImg.style.transform = `translateY(${y}px) scale(1.06)`;
    },
    { passive: true }
  );
}

/* ========== BRAND CARD SPOTLIGHT ========== */
document.querySelectorAll('.brand-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
  });
});

/* ========== MAGNETIC BUTTONS ========== */
document.querySelectorAll('.btn, .nav .pill').forEach(el => {
  el.addEventListener('mousemove', ev => {
    const r = el.getBoundingClientRect();
    const x = ev.clientX - r.left - r.width / 2;
    const y = ev.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.28}px)`;
  });
  el.addEventListener('mouseleave', () => (el.style.transform = ''));
});

/* ========== FORM ========== */
const form = document.querySelector('form[data-mail]');
if (form) {
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    const d = new FormData(form);
    const lines = [
      `Ad: ${d.get('name') || ''}`,
      `E-mail: ${d.get('email') || ''}`,
      `Telefon: ${d.get('phone') || ''}`,
      '',
      d.get('message') || ''
    ];
    const body = encodeURIComponent(lines.join('\r\n'));
    const subject = encodeURIComponent(d.get('subject') || 'Karvan MMC sorğu');
    window.location.href = `mailto:info@karvanmmc.az?subject=${subject}&body=${body}`;
    const ok = form.querySelector('.form-ok');
    if (ok) ok.hidden = false;
  });
}

/* ========== LIGHTBOX ========== */
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const img = lightbox.querySelector('img');
  const close = () => lightbox.classList.remove('open');
  const open = g => {
    const src = g.querySelector('img');
    if (!src) return;
    img.src = src.src;
    img.alt = src.alt || '';
    lightbox.classList.add('open');
  };
  document.querySelectorAll('.gal').forEach(g => {
    g.addEventListener('click', () => open(g));
    g.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(g);
      }
    });
  });
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.closest('.lightbox-close')) close();
  });
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
}

/* ========== YEAR ========== */
document.querySelectorAll('[data-year]').forEach(el => (el.textContent = new Date().getFullYear()));

/* ===== V2 UPLIFT: BEGIN =====
   Geri almaq üçün bu marker-dən END marker-ə qədər olan hər şeyi silin.
   See: CHANGES.md
================================ */

(function v2Uplift(){
  const prefersReduced = matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------- splitCharReveal ---------- */
  // v2.1: Yalnız page-hero (alt səhifə) başlıqlarına tətbiq olunur.
  // Ana səhifə hero-title öz line-reveal animasiyasını saxlayır.
  function splitCharReveal(){
    const titles = document.querySelectorAll('.page-hero h1.reveal-line');
    titles.forEach(root => {
      const lines = root.classList.contains('reveal-line')
        ? [root]
        : root.querySelectorAll('.reveal-line');
      let globalIdx = 0;
      lines.forEach(line => {
        const inner = line.querySelector(':scope > span') || line;
        if (!inner || inner.dataset.split === 'done') return;
        // walk text nodes, preserve <em> / <br>
        const frag = document.createDocumentFragment();
        const walk = (node, italic=false) => {
          if (node.nodeType === 3){
            const chars = [...node.textContent];
            chars.forEach(ch => {
              if (ch === ' '){
                const s = document.createElement('span');
                s.className = 'char space';
                frag.appendChild(s);
              } else {
                const s = document.createElement('span');
                s.className = 'char';
                s.textContent = ch;
                s.style.transitionDelay = (globalIdx * 22) + 'ms';
                if (italic) s.style.fontStyle = 'italic';
                frag.appendChild(s);
                globalIdx++;
              }
            });
          } else if (node.nodeType === 1){
            if (node.tagName === 'BR'){ frag.appendChild(document.createElement('br')); return; }
            const isEm = node.tagName === 'EM' || node.classList.contains('italic');
            [...node.childNodes].forEach(c => walk(c, italic || isEm));
          }
        };
        [...inner.childNodes].forEach(n => walk(n));
        inner.innerHTML = '';
        inner.appendChild(frag);
        inner.dataset.split = 'done';
      });
      root.classList.add('split');
    });
  }

  /* ---------- scrambleOnView ---------- */
  // section-num-ları görünəndə qısa müddət hərflər qarışsın
  function scrambleOnView(){
    const CHARS = '01—◦·-/\\|ABCXYZΩΣΔØ';
    const targets = document.querySelectorAll('.section-num');
    targets.forEach(el => {
      el.classList.add('scramble');
      const original = el.textContent;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          let frame = 0;
          const total = 28;
          const tick = () => {
            frame++;
            const progress = frame / total;
            const revealed = Math.floor(original.length * progress);
            let out = '';
            for (let i=0; i<original.length; i++){
              if (i < revealed || original[i] === ' ') out += original[i];
              else out += CHARS[(Math.random()*CHARS.length)|0];
            }
            el.textContent = out;
            if (frame < total) requestAnimationFrame(tick);
            else el.textContent = original;
          };
          if (!prefersReduced) requestAnimationFrame(tick);
          io.unobserve(el);
        });
      }, { threshold:.4 });
      io.observe(el);
    });
  }

  /* ---------- watermarkInject ---------- */
  // Hər section-num olan bölməyə iri outline su-damğası əlavə et
  function watermarkInject(){
    document.querySelectorAll('.section-num').forEach(num => {
      const section = num.closest('section');
      if (!section || section.querySelector(':scope > .section-watermark')) return;
      const m = num.textContent.match(/(\d{1,2})/);
      if (!m) return;
      const wm = document.createElement('div');
      wm.className = 'section-watermark';
      wm.setAttribute('aria-hidden','true');
      wm.textContent = m[1];
      section.insertBefore(wm, section.firstChild);
    });
  }

  /* ---------- watermarkParallax ---------- */
  function watermarkParallax(){
    const els = document.querySelectorAll('.section-watermark');
    if (!els.length || prefersReduced) return;
    let ticking = false;
    const update = () => {
      els.forEach(el => {
        const rect = el.parentElement.getBoundingClientRect();
        const mid = (rect.top + rect.bottom) / 2;
        const offset = (mid - innerHeight/2) * -0.08;
        el.style.transform = `translate3d(${offset*.6}px, ${offset}px, 0)`;
      });
      ticking = false;
    };
    addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(update);
      ticking = true;
    }, { passive:true });
    update();
  }

  /* ---------- tilt3D (direct, no wrapper) ---------- */
  function tilt3D(){
    if (matchMedia('(hover:none)').matches || innerWidth < 900) return;
    // Skip .cat-item — it uses translateY on hover (would conflict).
    const candidates = document.querySelectorAll('.brand-card, .partner, .gal');
    candidates.forEach(el => {
      if (el.dataset.tilt === 'done') return;
      el.classList.add('tilt');
      el.dataset.tilt = 'done';
      const max = 5;
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width - .5;
        const cy = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `rotateX(${-cy*max}deg) rotateY(${cx*max}deg)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* cursorSmear removed in v2.2 per user feedback */

  /* ---------- horizontalQuoteScroll ---------- */
  function horizontalQuoteScroll(){
    const tracks = document.querySelectorAll('.hquote-track');
    if (!tracks.length || prefersReduced) return;
    const update = () => {
      tracks.forEach(t => {
        const box = t.parentElement.getBoundingClientRect();
        const p = 1 - (box.top / innerHeight);
        const clamped = Math.max(0, Math.min(1.5, p));
        t.style.transform = `translateX(${-clamped * 35}%)`;
      });
    };
    addEventListener('scroll', update, { passive:true });
    update();
  }

  /* ---------- kinetic marquee v2 inject ---------- */
  // index.html-də mövcud marquee-nin altına ikinci sətri əlavə et.
  // Hazır markup olmadığı üçün runtime-da inject edirik.
  function injectKmarV2(){
    if (!document.querySelector('.marquee')) return;
    if (document.querySelector('.kmar')) return;
    const words = ['DİSTRİBUSİYA','LOGİSTİKA','ETİBAR','KEYFİYYƏT','SÜRƏT','BAKI','2002','BEYNƏLXALQ','TƏRƏFDAŞLIQ','KARVAN'];
    const makeRow = (outline, reverse) => {
      const row = document.createElement('div');
      row.className = 'kmar-row' + (reverse ? ' reverse' : '');
      const k = document.createElement('div');
      k.className = 'k' + (outline ? ' out' : '');
      const full = [...words, ...words];
      k.innerHTML = full.map(w => `<span>${w}</span><span class="dot"></span>`).join('');
      row.appendChild(k);
      return row;
    };
    const kmar = document.createElement('div');
    kmar.className = 'kmar';
    kmar.appendChild(makeRow(true, false));
    kmar.appendChild(makeRow(false, true));
    const marq = document.querySelector('.marquee');
    marq.parentNode.insertBefore(kmar, marq.nextSibling);
  }

  /* ---------- aurora inject ---------- */
  function auroraInject(){
    document.querySelectorAll('.dark-sec').forEach(d => {
      if (d.querySelector(':scope > .aurora')) return;
      const a = document.createElement('div');
      a.className = 'aurora';
      a.setAttribute('aria-hidden','true');
      const b = document.createElement('div');
      b.className = 'aurora b';
      b.setAttribute('aria-hidden','true');
      d.insertBefore(b, d.firstChild);
      d.insertBefore(a, d.firstChild);
    });
  }

  /* ---------- hquote inject (index.html dark-sec) ---------- */
  function hquoteInject(){
    const darkSec = document.querySelector('.dark-sec');
    if (!darkSec) return;
    // Only on home (has .values inside dark-sec AND is the first dark-sec)
    const onHome = /\/index\.html$|\/$/.test(location.pathname) || document.querySelector('.hero');
    if (!onHome) return;
    if (document.querySelector('.hquote')) return;
    const phrase = [
      '<span>Bir <em>karvan</em> kimi</span>',
      '<span class="sep"></span>',
      '<span>istehsalçıdan <em>rəfə</em></span>',
      '<span class="sep"></span>',
      '<span>2002-dən <em>bu günə</em></span>',
      '<span class="sep"></span>',
      '<span><em>etibar</em> yoldadır</span>',
      '<span class="sep"></span>',
    ];
    const full = phrase.concat(phrase).concat(phrase).join('');
    const wrap = document.createElement('div');
    wrap.className = 'hquote';
    wrap.innerHTML = `<div class="hquote-track">${full}</div>`;
    const inner = darkSec.querySelector('.wrap');
    if (inner) inner.appendChild(wrap);
  }

  /* ---------- hero enhancements ---------- */
  // v2.3: Ken Burns removed — scroll-based parallax on <img> is sufficient,
  // running both caused visual jitter.
  function heroEnhance(){ /* no-op */ }

  /* ---------- stat morph toggle ---------- */
  function statMorph(){
    document.querySelectorAll('.stat-num [data-count]').forEach(span => {
      if (!span.classList.contains('morph')) span.classList.add('morph');
    });
  }

  /* ---------- section dividers ---------- */
  function sepDraw(){
    const sections = document.querySelectorAll('section.tight, section.dark-sec');
    sections.forEach(s => {
      if (s.previousElementSibling && s.previousElementSibling.classList && s.previousElementSibling.classList.contains('sep-draw')) return;
      const sep = document.createElement('div');
      sep.className = 'sep-draw reveal';
      s.parentNode.insertBefore(sep, s);
    });
    // Reuse existing intersection observer by letting main .reveal observer handle .in
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold:.2 });
    document.querySelectorAll('.sep-draw').forEach(el => io.observe(el));
  }

  /* ---------- body.on-dark tracker for cursor-smear color ---------- */
  function trackDarkSections(){
    const dark = document.querySelectorAll('.dark-sec, .footer');
    if (!dark.length) return;
    const visible = new Set();
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.intersectionRatio > .35) visible.add(e.target);
        else visible.delete(e.target);
      });
      document.body.classList.toggle('on-dark', visible.size > 0);
    }, { threshold:[0, .35, .7] });
    dark.forEach(el => io.observe(el));
  }

  /* ---------- AZ map inject (terefdaslar.html) ---------- */
  function azMapInject(){
    const host = document.querySelector('[data-az-map]');
    if (!host || host.dataset.injected === 'true') return;
    host.dataset.injected = 'true';
    // viewBox 900x540 — real Azerbaijan silhouette (main body + Naxchivan exclave)
    // Coord mapping: lng 44.0–50.5 → x 0–900 (138.5 per °),  lat 42.0–38.4 → y 0–540 (150 per °)
    const pin = (cls, x, y, labelX, labelY, anchor, name, sub) => `
      <g class="az-pin ${cls}" transform="translate(${x} ${y})">
        <circle class="ring" r="10" cx="0" cy="-22"/>
        <path class="pin" d="M 0 0 C -8 -10 -14 -16 -14 -22 A 14 14 0 1 1 14 -22 C 14 -16 8 -10 0 0 Z"/>
        <circle class="pin-dot" cx="0" cy="-22" r="4"/>
        <text class="lbl" x="${labelX}" y="${labelY}" text-anchor="${anchor}">${name}</text>
        <text class="lbl sub" x="${labelX}" y="${labelY + 13}" text-anchor="${anchor}">${sub}</text>
      </g>`;
    const svg = `
      <svg viewBox="0 0 900 540" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <pattern id="az-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(16,15,13,.045)" stroke-width="1"/>
          </pattern>
          <filter id="az-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#1c140a" flood-opacity=".18"/>
          </filter>
        </defs>
        <rect width="900" height="540" fill="url(#az-grid)"/>

        <!-- MAIN BODY — Azerbaijan silhouette with Absheron peninsula & Lankaran tail -->
        <path class="outline" d="
          M 250 55
          C 290 48, 340 42, 400 42
          C 470 40, 540 38, 610 48
          C 640 52, 660 62, 680 80
          C 700 100, 715 120, 720 135
          C 735 150, 760 168, 790 180
          C 825 190, 860 195, 880 205
          C 895 215, 890 230, 865 238
          C 855 242, 835 246, 820 252
          C 815 265, 820 278, 815 290
          C 800 305, 780 315, 770 330
          C 760 355, 745 380, 725 400
          C 710 420, 700 445, 695 465
          C 692 485, 688 500, 680 515
          C 670 522, 658 520, 650 510
          C 645 495, 650 475, 645 458
          C 635 440, 615 430, 590 425
          C 555 420, 515 420, 480 418
          C 430 415, 380 408, 340 400
          C 300 392, 270 378, 250 360
          C 230 340, 220 318, 215 295
          C 210 278, 208 260, 215 245
          C 220 235, 232 228, 240 220
          C 230 205, 215 195, 200 185
          C 185 170, 175 150, 170 128
          C 170 100, 180 80, 200 68
          C 215 60, 235 55, 250 55 Z
        "/>

        <!-- NAXCHIVAN exclave (detached southwest) -->
        <path class="outline nax" d="
          M 95 340
          C 125 325, 170 322, 210 335
          C 250 345, 280 368, 290 395
          C 292 415, 275 430, 245 438
          C 200 448, 150 445, 115 430
          C 85 415, 70 385, 78 360
          C 82 350, 88 344, 95 340 Z
        "/>

        <!-- Caspian sea label -->
        <text class="sea-label" x="870" y="410" text-anchor="end">Xəzər</text>

        <!-- PINS (real coords → viewBox) -->
        ${pin('hq',  813, 235, -18, 20, 'end',   'BAKI',       'Mərkəzi ofis · HQ')}
        ${pin('',    380, 175, -18, 20, 'end',   'GƏNCƏ',      'Qərb filialı')}
        ${pin('',    470, 165, 18, 20,  'start', 'MİNGƏÇEVİR', 'Aran filialı')}
        ${pin('',    640, 385, 18, 20,  'start', 'CƏLİLABAD',  'Cənub filialı')}
        ${pin('',    620, 90,  18, -6,  'start', 'QUBA',       'Şimal filialı')}
      </svg>
      <div class="az-legend"><span class="dot"></span>5 regional filial</div>
    `;
    host.innerHTML = svg;
    host.classList.add('az-map','in'); // visible immediately
  }

  /* ---------- Run ---------- */
  function run(){
    watermarkInject();
    watermarkParallax();
    splitCharReveal();
    scrambleOnView();
    tilt3D();
    // cursorSmear();        // v2.2: removed per feedback
    // injectKmarV2();       // v2.1: removed per feedback
    auroraInject();
    // hquoteInject();       // v2.1: removed per feedback
    // horizontalQuoteScroll();
    heroEnhance();
    statMorph();
    sepDraw();
    trackDarkSections();
    azMapInject();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();

/* ===== V2 UPLIFT: END ===== */

/* ===== V3 MODERNIZATION: BEGIN =====
   Scroll progress · dark mode · hero glow · stronger magnetics · caption injection · view transitions
================================================================= */
(function v3Modernize(){
  const prefersReduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const root = document.documentElement;

  /* ---------- applyStoredTheme (early — prevents flash) ---------- */
  // Note: this runs after parsing but before most paint; acceptable for static site
  try{
    const stored = localStorage.getItem('karvan.theme');
    if (stored === 'dark') root.classList.add('dark');
    else if (!stored && matchMedia('(prefers-color-scheme:dark)').matches) root.classList.add('dark');
  }catch(_){}

  /* ---------- themeToggle ---------- */
  function themeToggle(){
    const header = document.querySelector('.site-header');
    if (!header || header.querySelector('.theme-toggle')) return;
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label','Qaranlıq/işıqlı rejim');
    btn.innerHTML = `
      <svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>
      <svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>`;
    const burger = header.querySelector('.hamburger');
    if (burger) header.insertBefore(btn, burger);
    else header.appendChild(btn);
    btn.addEventListener('click', () => {
      const dark = root.classList.toggle('dark');
      try { localStorage.setItem('karvan.theme', dark ? 'dark' : 'light'); } catch(_){}
    });
  }

  /* ---------- scrollProgress ---------- */
  function scrollProgress(){
    if (document.querySelector('.scroll-progress')) return;
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden','true');
    document.body.appendChild(bar);
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.setProperty('--p', p + '%');
      ticking = false;
    };
    addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(update);
      ticking = true;
    }, { passive:true });
    update();
  }

  /* ---------- heroGlow (cursor-following ember on hero) ---------- */
  function heroGlow(){
    const hero = document.querySelector('.hero');
    if (!hero || prefersReduced) return;
    if (matchMedia('(hover:none)').matches) return;
    const glow = document.createElement('div');
    glow.className = 'hero-glow';
    glow.setAttribute('aria-hidden','true');
    hero.appendChild(glow);
    let tx = 0, ty = 0, cx = 0, cy = 0, ticking = false;
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!ticking){
        ticking = true;
        requestAnimationFrame(() => {
          cx += (tx - cx) * .18;
          cy += (ty - cy) * .18;
          glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
          ticking = false;
        });
      }
    });
  }

  /* ---------- buttonShine (inject .shine span inside every .btn) ---------- */
  function buttonShine(){
    document.querySelectorAll('.btn').forEach(b => {
      if (b.querySelector(':scope > .shine')) return;
      const s = document.createElement('span');
      s.className = 'shine';
      s.setAttribute('aria-hidden','true');
      b.insertBefore(s, b.firstChild);
    });
    document.querySelectorAll('.brand-card').forEach(c => {
      if (c.querySelector(':scope > .shine')) return;
      const s = document.createElement('span');
      s.className = 'shine';
      s.setAttribute('aria-hidden','true');
      c.insertBefore(s, c.firstChild);
    });
  }

  /* ---------- galleryCaption (auto-inject caption from img.alt) ---------- */
  function galleryCaption(){
    document.querySelectorAll('.gal').forEach(g => {
      if (g.querySelector(':scope > .cap')) return;
      const img = g.querySelector('img');
      const txt = (img && img.alt) || '';
      if (!txt) return;
      const cap = document.createElement('div');
      cap.className = 'cap';
      cap.textContent = txt;
      g.appendChild(cap);
    });
  }

  /* ---------- sectionNumReveal ---------- */
  function sectionNumReveal(){
    const els = document.querySelectorAll('.section-num');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold:.1 });
    els.forEach(el => io.observe(el));
  }

  /* ---------- viewTransitions (SPA-like page fade) ---------- */
  function viewTransitions(){
    if (!document.startViewTransition) return;
    if (prefersReduced) return;
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return;
      e.preventDefault();
      document.startViewTransition(() => { location.href = a.href; });
    });
  }

  /* ---------- lightboxSwipe ---------- */
  function lightboxSwipe(){
    const lb = document.querySelector('.lightbox');
    if (!lb) return;
    let sx = 0, sy = 0;
    lb.addEventListener('touchstart', e => {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive:true });
    lb.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx)){
        lb.classList.remove('open');
      }
    });
  }

  /* ---------- strongerMagnetic (override existing, with cleanup on blur) ---------- */
  // The v1 magnetic is fine; we add reset on blur to avoid stuck transforms.
  function magneticCleanup(){
    document.querySelectorAll('.btn, .nav .pill').forEach(el => {
      el.addEventListener('blur', () => (el.style.transform = ''));
    });
  }

  /* ---------- run ---------- */
  function run(){
    themeToggle();
    scrollProgress();
    heroGlow();
    buttonShine();
    galleryCaption();
    sectionNumReveal();
    viewTransitions();
    lightboxSwipe();
    magneticCleanup();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
/* ===== V3 MODERNIZATION: END ===== */
