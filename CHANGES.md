# CHANGES.md — Visual uplift rollback ledger

Bütün dəyişikliklər **additive** (əlavə) formatdadır. Geri almaq üçün qeyd olunan bloklar silinməlidir.

**Tarix**: 2026-04-15
**Məqsəd**: tipografi efektləri, atmosferik fonlar, mikro-interaksiyalar, scroll/motion, yeni görsel bölmələr.

## Strategiya (əsas ideya)

**Minimum HTML dəyişikliyi** — bütün effektlər `assets/script.js` tərəfindən runtime-da avtomatik tətbiq edilir (watermark, scramble, tilt, aurora, kinetic marquee v2, horizontal quote, ken burns, dividers, stat morph, cursor smear). Bu o deməkdir ki, geri alma çox sadədir: CSS və JS-dəki iki blok silinir, iki HTML əlavəsi geri qaytarılır.

---

## Ümumi geri alma strategiyası

1. `assets/styles.css` sonunda `/* ===== V2 UPLIFT: BEGIN ===== */` ilə `/* ===== V2 UPLIFT: END ===== */` arasındakı blok silinsin.
2. `assets/script.js` sonunda `/* ===== V2 UPLIFT: BEGIN ===== */` ilə `/* ===== V2 UPLIFT: END ===== */` arasındakı blok silinsin.
3. Aşağıdakı HTML səhifələrində "V2 ADD" şərh etiketli blokları silin (hər biri sənədə qeyd olunub).

---

## Fayl-fayl dəyişiklik jurnalı

### `assets/styles.css` (append only)
**Haradadır**: faylın sonunda `/* ===== V2 UPLIFT: BEGIN ===== */` markerinin altında.
**Geri al**: markerlər arasındakı blokları sil.

Blok modulları:
- `V2: split-char hero reveal` — `.hero-title .char` + keyframe `upChar`
- `V2: outline watermark` — `.watermark`, `.section-watermark`
- `V2: scramble section-num` — `.scramble` sinfi (JS tərəfindən idarə olunur)
- `V2: kinetic marquee v2` — `.kmar`, `.kmar-row`, `.kmar-row.reverse`, `.kmar-outline`
- `V2: text-mask hero` — `.mask-word`
- `V2: horizontal kinetic quote (dark)` — `.hquote`, `.hquote-track`
- `V2: aurora` — `.aurora` (dark-sec içinə konik gradient + rotate)
- `V2: section divider draw` — `.sep-draw`
- `V2: mix-blend partner v2` — `.partners.v2`
- `V2: link underline draw` — `.u-draw`
- `V2: liquid button` — `.btn.liquid`
- `V2: partner clip-path reveal` — `.partner.clip`
- `V2: cursor smear` — `.cursor-smear`
- `V2: 3D tilt perspective` — `.tilt`, `.tilt-inner`
- `V2: Ken Burns hero` — `.hero-bg.kb`
- `V2: stat morph` — `.stat.morph`
- `V2: az map` — `.az-map`, `.az-pin`

### `assets/script.js` (append only)
**Haradadır**: faylın sonunda `/* ===== V2 UPLIFT: BEGIN ===== */` markerinin altında.
**Geri al**: markerlər arasındakı blokları sil.

Modullar:
- `splitCharReveal()` — hero-title hərf-hərf bölməsi
- `scrambleOnView()` — `.scramble` üzərindəki scramble efekti
- `tilt3D()` — `.tilt` elementlər üçün mouse-based perspektiv
- `cursorSmearInit()` — mövcud cursor-a sürət əsaslı trail əlavəsi (opsional tətbiq)
- `horizontalQuoteScroll()` — `.hquote` scroll-bağlı horizontal tərcümə
- `watermarkParallax()` — `.section-watermark` scroll paralaksı
- `kenBurnsHero()` — hero-bg-ə yavaş zoom+pan loop (passiv)

### `index.html`
Heç bir əllə HTML dəyişikliyi yoxdur. Bütün effektlər JS tərəfindən avtomatik tətbiq olunur:
- Hero-bg-ə `.kb` sinfi (Ken Burns)
- Hero-title-a `.split` sinfi və hərf-hərf bölmə
- Hər section-num-lu bölməyə `.section-watermark` nəhəng outline rəqəm
- `.marquee`-dən sonra `.kmar` (ikinci kinetic marquee, outline + reverse)
- Dark-sec-ə iki `.aurora` div və `.hquote` horizontal kinetic quote
- `.stat-num [data-count]` span-larına `.morph` sinfi
- `.brand-card`, `.partner`, `.gal`-a `.tilt` sinfi
- Section-num span-lara `.scramble` sinfi
- `<body>` sonuna `.cursor-smear` elementi
- Hər `section.tight` / `.dark-sec`-dən əvvəl `.sep-draw` divider

### `haqqimizda.html`
Heç bir əllə HTML dəyişikliyi yoxdur. JS avtomatik tətbiq edir (timeline onsuz da var).

### `brendler.html`
Heç bir əllə HTML dəyişikliyi yoxdur.

### `kataloq.html`
Heç bir əllə HTML dəyişikliyi yoxdur.

### `terefdaslar.html`
**V2 ADD #1** — Xəritə bölməsi əlavə edildi (mövcud "01 — Şəbəkələr"-dən sonra):
```html
<!-- V2 ADD: Azerbaijan map section -->
<section class="tight">
  <div class="wrap">
    <span class="section-num">02 — Coğrafiya</span>
    ...
    <div data-az-map aria-label="Azərbaycan filial xəritəsi"></div>
  </div>
</section>
<!-- /V2 ADD -->
```
**Geri al**: `<!-- V2 ADD: Azerbaijan map section -->` və `<!-- /V2 ADD -->` arasındakı section silinsin.

### `qalereya.html`
Heç bir əllə HTML dəyişikliyi yoxdur.

### `elaqe.html`
**V2 ADD** — submit düyməsinə `liquid` sinfi əlavə edildi:
```diff
-<button type="submit" class="btn primary">
+<button type="submit" class="btn primary liquid">
```
**Geri al**: `liquid` sinfini düymədən silin.

---

## Yox, toxunulmayan hissələr

- Mövcud palette / fontlar / layout grid dəyişdirilmir.
- Mövcud preloader, header, nav JS-i toxunulmur.
- Mövcud `.reveal`, `.reveal-line`, stat count-up saxlanılır — splitChar bununla paralel işləyir.
- `assets/img/` boş qovluğuna toxunulmur.

---

## Sürətli tam geri alma (nuclear)

```bash
# Bloklarla silmək üçün:
# styles.css — V2 UPLIFT markeri və aşağısı silinsin
# script.js  — V2 UPLIFT markeri və aşağısı silinsin
# HTML-lər   — "V2 ADD" şərhli bloklar silinsin
```
