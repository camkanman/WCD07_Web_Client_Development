"use client";

import { useState, useEffect } from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';

const WelcomeMessage = () => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    const welcomedThisSession = sessionStorage.getItem('welcomedThisSession');

    // Tampilkan hanya jika pengunjung kembali DAN belum disambut di sesi ini
    if (hasVisited && !welcomedThisSession) {
      setMessage('Selamat Datang Kembali!');
      setIsRendered(true);
      sessionStorage.setItem('welcomedThisSession', 'true'); // Tandai sudah disambut

      const showTimer = setTimeout(() => {
        setVisible(true);
      }, 100);

      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      const unmountTimer = setTimeout(() => {
        setIsRendered(false);
      }, 5500);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        clearTimeout(unmountTimer);
      };
    } else if (!hasVisited) {
      // Untuk pengunjung pertama, hanya set penanda
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  // Jangan render apapun jika tidak di-render
  if (!isRendered) return null;

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 flex items-center px-6 py-3 rounded-lg shadow-lg text-gray-800 bg-white bg-opacity-90 border border-gray-200 transform transition-all duration-500 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}
      style={{ zIndex: 40 }} // Ubah z-index agar di bawah navbar (z-50)
    >
      <FaRegSmileBeam className="mr-3 text-xl text-[#D3E97A]" />
      <span>{message}</span>
    </div>
  );
};

export default WelcomeMessage;
