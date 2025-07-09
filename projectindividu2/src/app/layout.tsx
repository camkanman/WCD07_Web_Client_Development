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
  metadataBase: new URL('https://your-domain.com'), 
  title: {
    default: 'Husnu Mulyadi - Software Developer',
    template: '%s | Husnu Mulyadi',
  },
  description: "Passionate software developer creating accessible, efficient, and user-friendly web applications. Explore my projects and skills.",
  keywords: ['Husnu Mulyadi', 'Software Developer', 'Front-end Developer', 'React', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Husnu Mulyadi - Software Developer',
    description: 'Explore the portfolio of Husnu Mulyadi, a passionate software developer.',
    url: 'https://your-domain.com',
    siteName: 'Husnu Mulyadi Portfolio',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Husnu Mulyadi Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Husnu Mulyadi - Software Developer',
    description: 'Explore the portfolio of Husnu Mulyadi, a passionate software developer.',
    images: ['/twitter-image.png'], 
  },
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
