import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-space-grotesk", display: "swap" });
const sans = Manrope({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-manrope", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-jetbrains", display: "swap" });

const defaultTitle = "Sigmaward";
const defaultDescription = "SIEM · SOAR · SOC — built on Wazuh";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "Sigmaward",
    title: defaultTitle,
    description: defaultDescription,
    locale: "pt_BR",
    alternateLocale: ["en_US"],
  },
  alternates: {
    languages: {
      "pt-BR": "/",
      en: "/en/",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
