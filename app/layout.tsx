import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./github-pages.css";
import "./editorial.css";
import "./hero-mobile.css";
import "./accessibility.css";
import { siteConfig } from "@/lib/site-config";

const faviconUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/favicon.svg`;
const socialImageUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/new-journey-hero.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "New Journey | Orientação que transforma", template: "%s | New Journey" },
  description: siteConfig.description,
  keywords: ["tratamento dependência química", "ajuda para família", "clínica de recuperação São Paulo", "internação voluntária", "internação involuntária"],
  verification: siteConfig.googleSiteVerification ? { google: siteConfig.googleSiteVerification } : undefined,
  alternates: { canonical: "/" },
  openGraph: {
    title: "New Journey | Orientação que transforma",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    images: [{ url: socialImageUrl, width: 1400, height: 900, alt: "Família em um ambiente acolhedor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Journey | Orientação que transforma",
    description: siteConfig.description,
    images: [socialImageUrl],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  areaServed: ["São Paulo", "Grande São Paulo", "Campinas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/>{siteConfig.gaMeasurementId && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`} strategy="afterInteractive"/><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${siteConfig.gaMeasurementId}');`}</Script></>}</body>
    </html>
  );
}
