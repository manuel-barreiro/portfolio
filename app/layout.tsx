// Global CSS
import "./globals.css";

// Metadata
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Manuel Barreiro",
  description: "Manuel Barreiro Portfolio",
  themeColor: "#080c16",
};

// NextFonts
import { Inter, Montserrat, Unbounded } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});

// Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${unbounded.variable} scrollbar-hide`}
    >
      <Analytics />
      <body className="scrollbar-hide">{children}</body>
    </html>
  );
}
