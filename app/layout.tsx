import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Best Moving Company | Beck's Moving Company",
  description: "Beck's Moving Company offers reliable and stress-free local, long-distance, office, and apartment moving services. Trust our expert team for seamless relocations with personalized care and transparent pricing.",
  twitter: {
    card: 'summary_large_image',
    title: "Best Moving Company | Beck's Moving Company",
    description: "Beck's Moving Company offers reliable and stress-free local, long-distance, office, and apartment moving services. Trust our expert team for seamless relocations with personalized care and transparent pricing.",
    images: '/images/becks-moving.png',
  },
  openGraph: {
    title: "Best Moving Company | Beck's Moving Company",
    description: "Beck's Moving Company offers reliable and stress-free local, long-distance, office, and apartment moving services. Trust our expert team for seamless relocations with personalized care and transparent pricing.",
    type: 'website',
    images: [
      {
        url: '/images/becks-moving.png',
        width: 1200,
        height: 630,
        alt: "Beck's Moving",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
