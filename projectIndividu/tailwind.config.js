/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212", // Warna hitam utama
        secondary: "#1e1e1e", // Warna hitam sekunder
        accent: "#3d3d3d", // Warna aksen abu-abu
        text: {
          primary: "#ffffff", // Teks putih
          secondary: "#b3b3b3", // Teks abu-abu
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Aktifkan dark mode
}

