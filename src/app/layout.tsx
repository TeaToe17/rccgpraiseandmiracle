import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const _inter = Inter({ subsets: ["latin"] });
const _outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RCCG, Praise and Miracle Parish",
  description: "RCCG, Praise and Miracle Parish",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
