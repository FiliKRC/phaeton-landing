"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Carica i tuoi documenti", desc: "Semplice upload di procedure, contratti, manuali ISO..." },
  { title: "L’AI li processa", desc: "Zero training, zero call: subito pronta a rispondere." },
  { title: "Fai domande istantanee", desc: "Ottieni risposte in pochi secondi su qualsiasi dettaglio." },
  { title: "Scalabile e sicuro", desc: "Progettato per aziende e privacy totale." },
];

const faqs = [
  { q: "Serve formazione per usare Phæton AI?", a: "No! Ti basta caricare i tuoi documenti: la nostra AI è subito pronta." },
  { q: "I miei dati sono al sicuro?", a: "Assolutamente sì: i tuoi documenti restano privati e protetti." },
  { q: "Che tipi di file posso caricare?", a: "PDF, DOCX, TXT, e molti altri. Contattaci per formati custom." },
  { q: "Posso provarlo gratis?", a: "Certo, puoi richiedere una demo senza impegno!" },
];

const testimonials = [
  {
    quote: "Con Phæton AI risparmio ore ogni settimana. Semplice, veloce, affidabile.",
    name: "Giulia R.",
    role: "Operation Manager @ TechCo",
  },
  {
    quote: "L’unica AI che ho visto funzionare senza training o setup infinito.",
    name: "Luca P.",
    role: "CEO @ StartupPro",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-bold text-2xl tracking-tight">Phæton AI</span>
          <div className="space-x-5 hidden md:flex">
            <a href="#how" className="hover:underline">Come funziona</a>
            <a href="#why" className="hover:underline">Perché noi</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            {/* [Placeholder: hamburger se vuoi farlo fancy, te lo aggiungo dopo] */}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="container mx-auto flex flex-col items-center justify-center py-20 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Query any doc <span className="text-primary">in seconds</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Carica procedure, contratti o manuali ISO e lascia che la nostra AI enterprise risponda—<br />
          senza training né call.
        </motion.p>
        <motion.div
          className="flex gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <a href="https://demo.phaeton-ai.com" className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark transition font-semibold shadow-lg">Prova la demo</a>
          <a href="/one-pager.pdf" className="px-8 py-3 rounded-xl border border-primary hover:bg-primary/20 transition font-semibold">Scarica One-Pager</a>
        </motion.div>
      </section>

      {/* COME FUNZIONA */}
      <section id="how" className="container mx-auto py-14">
        <h2 className="text-3xl font-bold mb-8 text-primary">Come funziona</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-slate-800 rounded-xl p-6 shadow hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-2 text-xl font-semibold">{f.title}</div>
              <div className="opacity-80">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PERCHE' NOI */}
      <section id="why" className="container mx-auto py-14">
        <h2 className="text-3xl font-bold mb-8 text-primary">Perché scegliere noi?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <ul className="space-y-4 text-lg">
            <li>🚀 **Subito pronto:** nessun training, zero setup</li>
            <li>🔒 **Privacy totale:** nessun dato inviato a terzi</li>
            <li>⚡️ **Risposte istantanee:** su contratti, ISO, policy, tutto</li>
            <li>👨‍💻 **Supporto umano, sempre**</li>
          </ul>
          <motion.div
            className="bg-slate-800 rounded-xl p-6 shadow flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xl font-semibold mb-2">"Provatelo una volta, e non tornerete indietro."</div>
            <div className="opacity-70">— Team Phæton AI</div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="container mx-auto py-14 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Starter */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl flex-1">
            <div className="text-2xl font-semibold mb-2">Starter</div>
            <div className="text-4xl font-bold mb-4">Gratis</div>
            <ul className="mb-6 space-y-2 opacity-80">
              <li>✔ Demo senza limiti</li>
              <li>✔ 1 utente</li>
              <li>✔ Supporto base</li>
            </ul>
            <a href="https://demo.phaeton-ai.com" className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-dark font-semibold shadow transition">Prova ora</a>
          </div>
          {/* Business */}
          <div className="bg-slate-900 border-2 border-primary rounded-xl p-8 shadow-xl flex-1 scale-105">
            <div className="text-2xl font-semibold mb-2">Business</div>
            <div className="text-4xl font-bold mb-4">99€/mese</div>
            <ul className="mb-6 space-y-2 opacity-80">
              <li>✔ Fino a 20 utenti</li>
              <li>✔ AI personalizzata</li>
              <li>✔ Supporto premium</li>
            </ul>
            <a href="mailto:info@phaeton-ai.com" className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-dark font-semibold shadow transition">Contattaci</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section className="container mx-auto py-14">
        <h2 className="text-3xl font-bold mb-8 text-primary">Testimonianze</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 rounded-xl p-6 shadow border-l-4 border-primary"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-lg mb-2 italic">"{t.quote}"</div>
              <div className="opacity-70">{t.name} – <span className="text-primary">{t.role}</span></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto py-14">
        <h2 className="text-3xl font-bold mb-8 text-primary">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-slate-800 rounded-xl p-4 shadow">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <div className="opacity-80 mt-2">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-8 mt-10 text-center text-sm opacity-80 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-4">
          <div>© 2025 Phæton AI · All rights reserved.</div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Termini</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}