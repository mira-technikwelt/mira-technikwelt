import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/app/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "MIRA Technikwelt | Technikberatung aus Backnang",
  description: "Fernseher, Computer, Router, Drucker und mehr einrichten lassen. Wir kommen zu Ihnen!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <LocalBusinessSchema /> 
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} ${inter.variable} ${interTight.variable} overflow-x-hidden bg-black`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
