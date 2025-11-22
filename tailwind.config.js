// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Di sinilah kita menambahkan kustomisasi kita
      color: {
        primary: "#E21A2C" /* Merah Spider */,
        secondary: "#000000" /* Hitam Miles */,
        accent: "#3A0A70" /* Ungu Spider-Verse */,
        light: "#1A1A1A" /* Abu gelap */,
      },
    },
    // Tambahkan ini
    fontFamily: {
      sans: ["var(--font-poppins)"], // Mengganti font default (sans-serif)
      heading: ["var(--font-montserrat)"], // Membuat utility class baru 'font-heading'
    },
  },
  plugins: [],
};
