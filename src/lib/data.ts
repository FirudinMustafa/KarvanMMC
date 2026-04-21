export type Nav = { href: string; num: string; label: string; pill?: boolean };

export const NAV: Nav[] = [
  { href: "/", num: "01", label: "Ana Səhifə" },
  { href: "/haqqimizda", num: "02", label: "Haqqımızda" },
  { href: "/brendler", num: "03", label: "Brendlər" },
  { href: "/kataloq", num: "04", label: "Kataloq" },
  { href: "/terefdaslar", num: "05", label: "Tərəfdaşlar" },
  { href: "/qalereya", num: "06", label: "Qalereya" },
  { href: "/elaqe", num: "07", label: "Əlaqə", pill: true },
];

export type BrandLogo = { slug: string; name: string; src: string };

export const BRAND_LOGOS: BrandLogo[] = [
  { slug: "nivea", name: "NIVEA", src: "/brands/nivea.png" },
  { slug: "evyap", name: "Evyap", src: "/brands/evyap.svg" },
  { slug: "arnest", name: "Arnest", src: "/brands/arnest.png" },
  { slug: "biota", name: "Biota", src: "/brands/biota.svg" },
  { slug: "elfa", name: "Elfa Pharm", src: "/brands/elfa.svg" },
  { slug: "golf", name: "Golf", src: "/brands/golf.svg" },
  { slug: "kopas", name: "Kopaş", src: "/brands/kopas.svg" },
];

export type Brand = {
  idx: string;
  name: string;
  origin: string;
  desc: string;
  catalogSlug?: string;
};

export const BRANDS: Brand[] = [
  { idx: "01", name: "NIVEA", origin: "Almaniya · DE", desc: "Beiersdorf konserninin dünyaca tanınan şəxsi qulluq brendi — krem, dezodorant, duş geli, kişi qulluğu.", catalogSlug: "nivea" },
  { idx: "02", name: "Duru", origin: "Türkiyə · TR", desc: "Evyap qrupunun əsas sabun brendi. Zeytun yağlı klassik, cib formatı və ailə paketləri.", catalogSlug: "evyap" },
  { idx: "03", name: "Arko", origin: "Türkiyə · TR", desc: "Kişilər üçün təraş köpüyü, jel və after-shave seriyaları — Evyap istehsalı.", catalogSlug: "evyap" },
  { idx: "04", name: "Fax", origin: "Türkiyə · TR", desc: "Gündəlik şampun və duş geli — uyğun qiymətdə keyfiyyət.", catalogSlug: "evyap" },
  { idx: "05", name: "Deonica", origin: "Rusiya · RU", desc: "Qadınlar üçün dezodorant və antiperspirant serisi — Arnest istehsalı.", catalogSlug: "arnest" },
  { idx: "06", name: "Prestige", origin: "Rusiya · RU", desc: "Saç laki və styling məhsulları, geniş professional seriya.", catalogSlug: "arnest" },
  { idx: "07", name: "Bioblas", origin: "Türkiyə · TR", desc: "Saç problemlərinə yönəlmiş botanik şampun və qulluq seriyası." },
  { idx: "08", name: "Dalin", origin: "Türkiyə · TR", desc: "Uşaq qulluğunda liderlərdən biri — şampun, bədən losyonu, yağ." },
  { idx: "09", name: "Biota", origin: "Türkiyə · TR", desc: "Tamamilə botanik tərkibli saç və bədən qulluğu brendi.", catalogSlug: "biota" },
  { idx: "10", name: "Elfa Pharm", origin: "Ukrayna · UA", desc: "Təbii tərkibli krem, losyon və saç maskaları serisi.", catalogSlug: "elfa" },
  { idx: "11", name: "Restorex", origin: "Türkiyə · TR", desc: "Saç bərpa və protein seriyası — professional istifadə üçün də uyğundur." },
  { idx: "12", name: "SESU", origin: "Türkiyə · TR", desc: "Saç tətbiq məhsulları, həyat tərzi qulluqu." },
  { idx: "13", name: "Golf", origin: "Türkiyə · TR", desc: "Məişət kimyası — yuyucu toz, bulaşıq məhsulları, yumşaldıcılar.", catalogSlug: "golf" },
  { idx: "14", name: "Show Shoe Care", origin: "Türkiyə · TR", desc: "Dəri məmulatlarının qulluq məhsulları — krem, sprey, süngər.", catalogSlug: "show-shoe-care" },
  { idx: "15", name: "Stupenski", origin: "Avropa · EU", desc: "Premium kişi kosmetika və qulluq məhsulları.", catalogSlug: "stupenski" },
  { idx: "16", name: "Vusal Kimya", origin: "Azərbaycan · AZ", desc: "Yerli istehsal — təmizlik və gigiyena məhsulları.", catalogSlug: "vusal-kimya" },
];

export type Partner = { slug: string; name: string; src: string };

export const PARTNERS: Partner[] = [
  { slug: "bravo", name: "Bravo", src: "/partners/bravo.jpg" },
  { slug: "araz", name: "Araz", src: "/partners/araz.jpg" },
  { slug: "neptun", name: "Neptun", src: "/partners/neptun.png" },
  { slug: "bazarstore", name: "Bazarstore", src: "/partners/bazarstore.jpg" },
  { slug: "grandmart", name: "Grandmart", src: "/partners/grandmart.jpg" },
  { slug: "rahat", name: "Rahat", src: "/partners/rahat.jpg" },
  { slug: "bolmart", name: "Bolmart", src: "/partners/bolmart.png" },
  { slug: "bizim", name: "Bizim", src: "/partners/bizim.png" },
  { slug: "al", name: "Al Market", src: "/partners/al.png" },
  { slug: "oba", name: "Oba", src: "/partners/oba.jpg" },
  { slug: "balli", name: "Ballı", src: "/partners/balli.jpg" },
  { slug: "tamstore", name: "TamStore", src: "/partners/tamstore.png" },
];

export const STATS = [
  { value: 23, suffix: "il", label: "Bazarda fəaliyyət" },
  { value: 5088, suffix: "+", label: "Satış nöqtəsi" },
  { value: 1500, suffix: "+", label: "Məhsul çeşidi" },
  { value: 22500, suffix: "m²", label: "Logistik mərkəz" },
];

export type Office = {
  slug: string;
  city: string;
  type: "HQ" | "Branch";
  role: string;
  x: number;
  y: number;
};

// Coordinates projected from real lat/lon onto the new Azerbaijan map SVG.
// viewBox 0 0 1000 700, bounds: W 44.6°E, E 50.7°E, N 42.0°N, S 38.3°N.
//   x% = (lon - 44.6) / 6.1 × 100
//   y% = (42.0 - lat) / 3.7 × 100
export const OFFICES: Office[] = [
  { slug: "baku", city: "Bakı", type: "HQ", role: "Mərkəz · Məhəmmədi qəsəbəsi", x: 86.7, y: 43.8 },
  { slug: "gence", city: "Gəncə", type: "Branch", role: "Qərb regionu", x: 28.9, y: 35.7 },
  { slug: "mingecevir", city: "Mingəçevir", type: "Branch", role: "Aran regionu", x: 40.2, y: 33.2 },
  { slug: "quba", city: "Quba", type: "Branch", role: "Şimal regionu", x: 64.3, y: 17.0 },
  { slug: "celilabad", city: "Cəlilabad", type: "Branch", role: "Cənub regionu", x: 63.9, y: 75.4 },
];

export type DealerCluster = { city: string; count: string; x: number; y: number };

export const DEALERS: DealerCluster[] = [
  { city: "Sumqayıt", count: "310", x: 82.8, y: 38.1 },
  { city: "Şirvan", count: "165", x: 70.8, y: 55.9 },
  { city: "Şəki", count: "220", x: 42.1, y: 21.9 },
  { city: "Lənkəran", count: "285", x: 69.7, y: 87.8 },
  { city: "Tovuz", count: "140", x: 16.7, y: 27.3 },
  { city: "Şamaxı", count: "95", x: 66.1, y: 37.0 },
];

export type CatalogItem = {
  slug: string;
  brand: string;
  year: string;
  size: string;
  file: string;
};

export const CATALOGS: CatalogItem[] = [
  { slug: "evyap", brand: "Evyap", year: "2026", size: "10 MB", file: "/catalogs/evyap-2026.pdf" },
  { slug: "nivea", brand: "NIVEA", year: "2026", size: "12 MB", file: "/catalogs/nivea-full-2026.pdf" },
  { slug: "arnest", brand: "Arnest", year: "2026", size: "76 MB", file: "/catalogs/arnest-2026.pdf" },
  { slug: "kopas", brand: "Kopaş", year: "2026", size: "44 MB", file: "/catalogs/kopas-2026.pdf" },
  { slug: "biota", brand: "Biota", year: "2026", size: "50 MB", file: "/catalogs/biota-2026.pdf" },
  { slug: "stupenski", brand: "Stupenski", year: "2026", size: "28 MB", file: "/catalogs/stupenski-2026.pdf" },
  { slug: "vusal-kimya", brand: "Vusal Kimya", year: "2026", size: "77 MB", file: "/catalogs/vusal-kimya-2026.pdf" },
  { slug: "elfa", brand: "Elfa Pharm", year: "2026", size: "25 MB", file: "/catalogs/elfa-2026.pdf" },
  { slug: "golf", brand: "Golf", year: "2026", size: "48 MB", file: "/catalogs/golf-2026.pdf" },
  { slug: "show-shoe-care", brand: "Show Shoe Care", year: "2026", size: "9 MB", file: "/catalogs/show-shoe-care-2026.pdf" },
];

export const GALLERY = [
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpeg",
  "/gallery/g6.jpeg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
  "/gallery/warehouse.jpg",
];

export const COMPANY = {
  name: "Karvan 2002 MMC",
  tagline: "Azərbaycanda qeyri-ərzaq sektorunda aparıcı distribütor və istehsalçı şirkət.",
  address: "Bakı, Məhəmmədi qəsəbəsi",
  phone: "+994 55 455 55 65",
  phoneHref: "tel:+994554555565",
  email: "info@karvanmmc.az",
  hours: "B.ertəsi – Şənbə, 09:00 – 18:00",
  facebook: "https://facebook.com/karvan2002",
  instagram: "https://instagram.com/karvanmmc",
  foundedYear: 2002,
};
