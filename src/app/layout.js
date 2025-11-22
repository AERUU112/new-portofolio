// src/app/layout.js
import "./globals.css";

// Langkah 1: Import komponen yang sudah kita buat
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Portofolio Saya",
  description: "Sebuah portofolio web yang dibuat dengan Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Langkah 2: Tampilkan komponen Navbar di paling atas */}
        <Navbar />

        {/* {children} adalah konten dari setiap halaman (page.js) */}
        {children}

        {/* Langkah 3: Tampilkan komponen Footer di paling bawah */}
        <Footer />
      </body>
    </html>
  );
}
