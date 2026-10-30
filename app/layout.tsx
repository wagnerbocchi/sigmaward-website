import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const defaultTitle = "Sigmaward";
const defaultDescription =
  "Detecção Sigma, investigação, resposta e monitoramento de endpoints em uma plataforma.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    images: [
      {
        url: "/screenshots/current/watchfloor.jpg",
        alt: "Sigmaward Watchfloor",
      },
    ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
