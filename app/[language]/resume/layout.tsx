import type { Metadata, Viewport } from "next";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
