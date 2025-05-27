"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 1) Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white">
        <h1 className="text-2xl font-bold">Phæton AI</h1>
        <div className="space-x-4">
          <a href="#demo" className="hover:underline">Demo</a>
          <a href="#one-pager" className="hover:underline">Download</a>
        </div>
      </nav>

      {/* 2) Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4">
        <h2 className="text-5xl font-extrabold mb-4">
          Query any doc in seconds
        </h2>
        <p className="max-w-2xl mb-8 opacity-90">
          Carica procedure, contratti o manuali ISO e lascia che la nostra AI enterprise risponda—
          senza training né call.
        </p>
        <div className="flex gap-4">
          <a href="https://demo.phaeton-ai.com" className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark transition">
            Try the demo
          </a>
          <a href="/one-pager.pdf" className="px-6 py-3 rounded-xl border border-primary hover:bg-primary/20 transition">
            Download One-Pager
          </a>
        </div>
      </section>

      {/* 3) Mockup/Image */}
      <section className="py-12 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4">
          <img
            src="/mockup.png"
            alt="Dashboard preview"
            className="w-full rounded-lg shadow-lg border"
          />
        </div>
      </section>

      {/* 4) Footer */}
      <footer className="py-4 text-center text-sm opacity-60 bg-slate-800 text-white">
        © 2025 Phæton AI · All rights reserved.
      </footer>
    </main>
  );
}