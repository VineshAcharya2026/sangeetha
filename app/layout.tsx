import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Tiro_Devanagari_Sanskrit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/data";
import { buildMetadata, seoPages, siteUrl } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const tiro = Tiro_Devanagari_Sanskrit({
  subsets: ["latin", "devanagari"],
  weight: "400",
  variable: "--font-tiro",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoPages.home.title,
    template: `%s | ${site.shortName}`,
  },
  description: seoPages.home.description,
  keywords: [...seoPages.home.keywords],
  authors: [{ name: site.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#7a1f2b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${tiro.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <JsonLd />
        <a href="/" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
