import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Karvan 2002 MMC — Qeyri-ərzaq distribütoru",
    template: "%s — Karvan 2002 MMC",
  },
  description:
    "2002-ci ildən bəri Azərbaycanda qeyri-ərzaq sektorunun aparıcı distribütoru. NIVEA, Evyap, Arnest, Kopaş, Elfa və daha çox brendin rəsmi təmsilçisi.",
  metadataBase: new URL("https://karvan-mmc.vercel.app"),
  openGraph: {
    type: "website",
    locale: "az_AZ",
    siteName: "Karvan 2002 MMC",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F7FB" },
    { media: "(prefers-color-scheme: dark)", color: "#050B1C" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: "https://karvan-mmc.vercel.app",
  logo: "https://karvan-mmc.vercel.app/logo.png",
  foundingDate: `${COMPANY.foundedYear}`,
  description: COMPANY.tagline,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: "Bakı",
    addressCountry: "AZ",
  },
  sameAs: [COMPANY.facebook, COMPANY.instagram],
  areaServed: "AZ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="az"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('karvan.theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');}catch(_){}`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <BackgroundFX />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
