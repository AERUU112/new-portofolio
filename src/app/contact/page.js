// src/app/contact/page.js

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Hubungi Saya</h1>
      <div className="max-w-md mx-auto text-center">
        <p className="mb-4">
          Tertarik untuk berkolaborasi atau sekadar menyapa? Jangan ragu untuk
          menghubungi saya melalui salah satu cara di bawah ini.
        </p>
        <p className="font-semibold">
          Email:{" "}
          <a
            href="mailto:halo@contoh.com"
            className="text-blue-500 hover:underline"
          >
            halo@contoh.com
          </a>
        </p>
        <p className="font-semibold">
          LinkedIn:{" "}
          <a
            href="#"
            className="text-blue-500
hover:underline"
          >
            Lintang Hary Pratama
          </a>
        </p>
      </div>
    </main>
  );
}
