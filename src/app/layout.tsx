import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Asset Lab | Asset Management and Data Specialists",
    template: "%s | Asset Lab",
  },
  description:
    "Asset Lab helps organisations with assets make good decisions. We specialise in providing asset management solutions that span across the entire asset lifecycle.",
  keywords: [
    "asset management",
    "infrastructure management",
    "data capture",
    "asset lifecycle planning",
    "Melbourne",
    "Geelong",
    "engineering consultancy",
  ],
  openGraph: {
    title: "Asset Lab | Asset Management and Data Specialists",
    description:
      "Melbourne and Geelong-based engineering consultancy. Strategic asset management, inspections, lifecycle planning.",
    url: "https://assetlab.net.au",
    siteName: "Asset Lab",
    locale: "en_AU",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
    <body className="min-h-screen antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
