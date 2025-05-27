"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold tracking-tight">Phæton AI</h1>
        <div className="space-x-4">
          <a href="#how" className="hover:underline">
            Come funziona
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
          <a href="/one-pager.pdf" className="hover:underline">
            One-pager
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Query any doc <span className="text-primary">in seconds</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mb-8 opacity-90 text-lg md:text-xl"
        >
          Carica procedure, contratti o manuali ISO e lascia che la nostra AI enterprise risponda&mdash;senza training né call.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://demo.phaeton-ai.com"
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark font-semibold transition"
          >
            ‣ Prova la demo
          </a>
          <a
            href="/one-pager.pdf"
            className="px-6 py-3 rounded-xl border border-primary hover:bg-primary/20 font-semibold transition"
          >
            Scarica la one-pager
          </a>
        </motion.div>
      </section>

      {/* Come funziona */}
      <section id="how" className="py-16 px-4 bg-slate-950/80">
        <h3 className="text-3xl font-bold mb-6 text-center text-primary">Come funziona</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <div className="mb-3 text-5xl">📄</div>
            <h4 className="text-xl font-semibold mb-2">Upload documenti</h4>
            <p>Carica qualsiasi file: PDF, Word, procedure, policy, contratti o manuali.</p>
          </div>
          <div>
            <div className="mb-3 text-5xl">💡</div>
            <h4 className="text-xl font-semibold mb-2">AI risponde</h4>
            <p>Scrivi una domanda, ottieni subito la risposta direttamente dai tuoi documenti.</p>
          </div>
          <div>
            <div className="mb-3 text-5xl">🔒</div>
            <h4 className="text-xl font-semibold mb-2">Privacy & sicurezza</h4>
            <p>Dati sempre cifrati e accesso controllato: compliant GDPR e ISO 27001.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <h3 className="text-3xl font-bold mb-6 text-center text-primary">Pricing</h3>
        <div className="flex flex-col items-center">
          <div className="bg-white/5 rounded-xl p-8 shadow-xl max-w-lg text-center">
            <div className="text-4xl font-bold mb-2 text-primary">€20.000</div>
            <div className="mb-4">Setup una tantum, nessun costo nascosto. Supporto incluso.</div>
            <div className="text-xl font-semibold mb-2">+ €8.000 / anno</div>
            <div className="mb-4 text-sm opacity-70">
              Manutenzione, aggiornamenti, dashboard e AI su misura.
            </div>
            <a
              href="mailto:sales@phaeton-ai.com?subject=Richiesta%20acquisto%20Phaeton%20AI"
              className="inline-block px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark transition font-semibold"
            >
              Richiedi una demo o un preventivo
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-slate-950/90">
        <h3 className="text-3xl font-bold mb-6 text-center text-primary">FAQ</h3>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <div>
            <h4 className="font-semibold mb-1">Devo installare qualcosa?</h4>
            <p>No! È tutto via cloud (SaaS), ricevi accesso personalizzato. On-prem disponibile per aziende enterprise.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Che tipo di file posso caricare?</h4>
            <p>PDF, Word, Excel, TXT, CSV e altri. L’AI trova la risposta in qualsiasi formato testuale.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">I miei dati sono al sicuro?</h4>
            <p>Assolutamente: crittografia end-to-end, hosting su AWS/GCP o server aziendale, GDPR-ready.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm opacity-70 bg-slate-800 text-white">
        © {new Date().getFullYear()} Phæton AI · All rights reserved.
      </footer>
    </main>
  );
}