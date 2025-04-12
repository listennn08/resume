import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { use } from "react";
import { dir } from "i18next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css"

export const metadata: Metadata = {
  title: "Matt Tai",
  description: "Matt Tai",
  keywords: ["Matt Tai", "Portfolio", "Matt Tai's Portfolio"],
  openGraph: {
    title: "Matt Tai",
    description: "Matt Tai's portfolio",
    type: "website",
    locale: "en",
    siteName: "Matt Tai's Portfolio",
  },
  twitter: {
    title: "Matt Tai",
    description: "Matt Tai's Portfolio",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ language: string }>;
}>) {
  const theme = use(headers()).get('x-theme') || undefined;
  const { language } = use(params);

  return (
    <html lang={language} dir={dir(language)} data-theme={theme}>
      <body
        className="antialiased min-h-screen"
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
