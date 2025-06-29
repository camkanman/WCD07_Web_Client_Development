import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aktifkan output standalone untuk optimasi production
  output: 'standalone',
  
  // Jika aplikasi di-deploy di subpath, aktifkan basePath
  // basePath: '/nama-subpath',
  
  // Aktifkan static export jika Anda menggunakan static site generation
  // output: 'export',
  
  // Atur image domains jika menggunakan gambar eksternal
  images: {
    domains: ['vercel.com', 'localhost'], // Tambahkan domain gambar yang digunakan
  },
  
  // Aktifkan trailingSlash untuk kompatibilitas yang lebih baik
  trailingSlash: true,
};

export default nextConfig;
