"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mengunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Fungsi untuk menutup menu saat link diklik
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-[Bebas_Neue] tracking-wider hover:text-gray-300 transition-colors">
            HUSNU MULYADI
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/work" className="font-medium hover:text-gray-300 transition-colors">Work</Link>
            <Link href="/about" className="font-medium hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="font-medium hover:text-gray-300 transition-colors">Contact</Link>
          </div>

          {/* Tombol Hamburger Menu (Versi 2 Garis) */}
          <button
            className="md:hidden z-50 relative w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </nav>

      {/* Panel Menu Mobile (Slide-in) */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full max-w-xs h-full bg-neutral-950/90 backdrop-blur-lg shadow-2xl transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <Link href="/" className="text-3xl font-[Bebas_Neue] tracking-wide text-white hover:text-gray-300" onClick={handleLinkClick}>Home</Link>
          <Link href="/#projects" className="text-3xl font-[Bebas_Neue] tracking-wide text-white hover:text-gray-300" onClick={handleLinkClick}>Work</Link>
          <Link href="/about" className="text-3xl font-[Bebas_Neue] tracking-wide text-white hover:text-gray-300" onClick={handleLinkClick}>About</Link>
          <Link href="/#contact" className="text-3xl font-[Bebas_Neue] tracking-wide text-white hover:text-gray-300" onClick={handleLinkClick}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;