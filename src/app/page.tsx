"use client";
import { useState } from "react";

// FAQ data (puoi aggiungerne altre)
const faqs = [
  {
    question: "Devo fare training dei miei documenti?",
    answer: "No! Carica subito file PDF, Word o Excel. La nostra AI li legge al volo e risponde senza configurazioni.",
  },
  {
    question: "Dove vanno i miei dati?",
    answer: "Restano al sicuro, processati solo per rispondere. Nessun dato venduto, mai.",
  },
  {
    question: "Funziona con documenti in inglese o altre lingue?",
    answer: "Sì, supportiamo italiano, inglese, spagnolo, francese e molte altre.",
  },
  {
    question: "Posso provare gratis?",
    answer: "Certo! Clicca su Try the Demo e inizia subito.",
  },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-between px-8 py-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-2xl text-white tracking-tight">Phæton AI</span>
        </div>
        <div className="flex items-center gap-8 text-slate-200 text-base font-medium">
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#how" className="hover:text-primary transition">How it works</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-20 pt-20 pb-28">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Query any document <span className="text-primary">in seconds</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-xl">
            Carica procedure operative, contratti o manuali ISO.<br />
            La nostra AI enterprise risponde alle domande<br className="hidden md:block" />
            <span className="font-semibold text-primary">senza training né call</span>.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://demo.phaeton-ai.com"
              className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-xl text-lg font-bold text-white shadow-lg transition"
            >
              Try the Demo
            </a>
            <a
              href="/one-pager.pdf"
              className="px-8 py-4 border border-primary rounded-xl text-lg font-bold text-primary bg-white/5 hover:bg-primary/10 transition"
            >
              Download One-Pager
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* Finto mockup */}
          <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-6 w-[350px] md:w-[400px] h-[320px] flex flex-col justify-center items-center">
            <div className="w-full h-40 bg-gradient-to-br from-primary/40 to-slate-700 rounded-xl mb-6"></div>
            <div className="w-3/4 h-6 bg-slate-700 rounded-lg mb-2"></div>
            <div className="w-1/2 h-6 bg-slate-600 rounded-lg mb-2"></div>
            <div className="w-full h-3 bg-slate-700 rounded mb-1"></div>
            <div className="w-full h-3 bg-slate-800 rounded mb-1"></div>
            <div className="w-2/3 h-3 bg-slate-700 rounded"></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 px-4 md:px-24 bg-slate-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Come funziona</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-2">📤</span>
            <h3 className="font-bold text-lg text-white mb-2">Carica documenti</h3>
            <p className="text-slate-300">PDF, Word, Excel, manuali ISO, SOP, policy aziendali.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-2">⚡</span>
            <h3 className="font-bold text-lg text-white mb-2">Risposte istantanee</h3>
            <p className="text-slate-300">Chiedi qualsiasi cosa, l’AI risponde in <b>pochi secondi</b>.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-2">🔒</span>
            <h3 className="font-bold text-lg text-white mb-2">Zero training</h3>
            <p className="text-slate-300">Nessuna call tecnica, nessun settaggio complicato.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-2">🌍</span>
            <h3 className="font-bold text-lg text-white mb-2">Multi-lingua</h3>
            <p className="text-slate-300">Perfetto per aziende globali e team internazionali.</p>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-16 px-4 md:px-24 bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Perfetto per</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-xl font-bold text-primary mb-2">Manager ISO</span>
            <span className="text-slate-200">Risposte pronte su policy e certificazioni.</span>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-xl font-bold text-primary mb-2">Team legali</span>
            <span className="text-slate-200">Ricerca rapida su contratti e clausole.</span>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-xl font-bold text-primary mb-2">Consulenti</span>
            <span className="text-slate-200">Gestisci più clienti senza perdere tempo.</span>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-xl font-bold text-primary mb-2">CEO & Board</span>
            <span className="text-slate-200">Informazioni operative senza aspettare giorni.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 md:px-24 bg-slate-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Domande frequenti</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 border-b border-slate-700">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-lg text-white focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-4">{open === i ? "▲" : "▼"}</span>
              </button>
              {open === i && (
                <div className="text-slate-300 pb-4">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
        <div>
          © 2025 Phæton AI • All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Contattaci</a>
          <a href="#" className="hover:text-primary">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}