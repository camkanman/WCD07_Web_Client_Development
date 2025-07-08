import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from 'next/font/google';
import { Manrope } from 'next/font/google';
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Husnu Mulyadi - Software Developer",
  description: "Software developer passionate about creating accessible, efficient, and user-friendly applications.",
};

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebasNeue.variable} ${geistSans.variable} ${geistMono.variable} ${manrope.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
