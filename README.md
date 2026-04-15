# Karvan 2002 MMC

Azərbaycanda qeyri-ərzaq sektorunda aparıcı distribütor və istehsalçı şirkətin rəsmi saytı.

**Live:** https://karvanmmc.az

## Stack

Static HTML/CSS/JS — framework yoxdur. Editorial dizayn: isti kağız palitrası,
gilt aksent, serif tipoqrafiya (Fraunces + Inter + JetBrains Mono).

## Struktur

```
index.html          Ana səhifə
haqqimizda.html     Şirkətin hekayəsi və dəyərlər
brendler.html       Portfoliodakı brendlər
kataloq.html        2026 kataloqları (PDF)
terefdaslar.html    Pərakəndə şəbəkələr
qalereya.html       Foto qalereya
elaqe.html          Əlaqə forması və ofislər

assets/
  styles.css        Bütün CSS (V3 modernization layer daxil)
  script.js         Bütün JS (reveal, cursor, dark mode, view transitions)
  logo.png
  brands/           Brend logoları
  partners/         Supermarket şəbəkəsi logoları
  gallery/          Qalereya və hero şəkilləri
  catalogs/         Sıxışdırılmış 2026 kataloqları (PDF)
```

## Yerli inkişaf

```bash
python -m http.server 8000
# http://localhost:8000
```

## Deploy

Cloudflare Pages və ya Netlify üçün hazırdır — build komandası yoxdur,
publish dir = layihə kökü.

## PDF sıxışdırma

Kataloq PDF-ləri `compress_pdfs.py` ilə 150 DPI JPEG formatına
yenidən render olunub (641 MB → 378 MB). Orijinallar
`assets/catalogs/_originals/` altında saxlanılır (repo-ya daxil deyil).
