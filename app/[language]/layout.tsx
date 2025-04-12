import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Noto_Sans, Noto_Sans_TC } from "next/font/google";
import { use } from "react";
import { dir } from "i18next";
import "../globals.css";


const NotoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const NotoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Matt Tai's Resume",
  description: "Matt Tai's Resume",
  keywords: ["Matt Tai", "Resume", "Matt Tai's Resume"],
  openGraph: {
    title: "Matt Tai's Resume",
    description: "Matt Tai's Resume",
    type: "website",
    locale: "en",
    siteName: "Matt Tai's Resume",
  },
  twitter: {
    title: "Matt Tai's Resume",
    description: "Matt Tai's Resume",
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
  const theme = use(headers()).get('x-theme') || 'pastel';
  const { language } = use(params);

  return (
    <html lang={language} dir={dir(language)} data-theme={theme}>
      <body
        className={`${NotoSans.variable} ${NotoSansTC.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
