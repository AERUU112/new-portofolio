// src/app/page.js
import Image from "next/image"; // Import komponen Image

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Secara default (mobile): flex-col (bertumpuk)
Mulai dari layar medium (md): flex-row (sejajar)
*/}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Kolom Gambar */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src="my-kisah.jpeg" // Mengambil gambar dari folder public
            alt="Lintang Hary Pratama"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Kolom Teks */}
        {/* Secara default (mobile): text-center
Mulai dari layar medium (md): text-left
*/}
        <div className="text-center md:text-left">
          <h1 className="font-heading text-5xl md:text-5xl font-extrabold mb-2">
            Lintang Hary Pratama
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Junior Web Developer | Penggemar Teknologi
          </p>
          <p className="max-w-xl mt-4">Selamat datang di portofolio saya!.</p>
        </div>
      </div>
    </main>
  );
}
