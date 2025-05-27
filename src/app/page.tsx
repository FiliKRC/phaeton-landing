"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 flex items-center justify-between px-8 py-4 bg-slate-900/90 backdrop-blur z-20 border-b border-slate-800">
        <h1 className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <Image src="/icon-ai.png" alt="Logo" width={32} height={32} />
          <span className="text-indigo-400">Phæton</span> AI
        </h1>
        <div className="space-x-6 flex items-center text-base">
          <a href="#features" className="hover:text-indigo-400 transition">Features</a>
          <a href="#how" className="hover:text-indigo-400 transition">How it works</a>
          <a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a>
          <a href="/one-pager.pdf" className="hover:text-indigo-400 transition">One-Pager</a>
          <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition font-bold shadow">
            Demo
          </a>
        </div>
      </nav>

      {/* HERO Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left pt-14 pb-10 px-4 max-w-7xl mx-auto w-full gap-12">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
          >
            Query any doc. <br />AI-powered answers. <br className="hidden md:block" />Zero friction.
          </motion.h2>
          <p className="text-lg text-white/80 mb-8">
            Upload contracts, manuals, or ISO docs. Instantly get answers, summaries, and analytics.<br />
            <span className="text-indigo-400">Save time, money, and nerves—no training, no calls, just results.</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <a href="#demo" className="px-7 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-lg font-bold transition shadow">Try Demo</a>
            <a href="/one-pager.pdf" className="px-7 py-3 rounded-xl border border-indigo-400 text-indigo-100 hover:bg-indigo-400/10 text-lg transition">
              Download PDF
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/A_photograph_of_a_professional_in_an_ofice_settin.png"
            alt="Hero Professional with Dashboard"
            width={440}
            height={440}
            className="rounded-2xl shadow-2xl border border-slate-800 w-full max-w-md"
            priority
          />
        </div>
      </section>

      {/* DASHBOARD MOCKUP */}
      <section className="py-10 bg-slate-100 dark:bg-slate-900 flex justify-center">
        <div className="max-w-3xl w-full px-4">
          <Image
            src="/mockup-dashboard.png"
            alt="Analytics Dashboard"
            width={900}
            height={520}
            className="rounded-2xl shadow-xl border"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 bg-slate-900/80">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-400">How it works</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Image src="/imagedemo.png" alt="Try Demo" width={90} height={90} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Try the Demo</h4>
            <p className="opacity-80 text-sm">Experience real-time Q&A with your docs. <br />No signup needed.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/imageai.png" alt="AI Chatbot" width={90} height={90} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Ask Anything</h4>
            <p className="opacity-80 text-sm">Chat with contracts, manuals, procedures.<br />Instant answers, always on.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/imageinc.png" alt="Increase Security" width={90} height={90} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Increase Security</h4>
            <p className="opacity-80 text-sm">Your docs are safe. <br />Enterprise-grade privacy.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 bg-slate-800">
        <h3 className="text-3xl font-bold mb-8 text-center text-indigo-400">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 max-w-5xl mx-auto">
          <div className="bg-slate-900/80 rounded-xl p-7 shadow flex flex-col items-center">
            <Image src="/imageinc.png" alt="Increase" width={56} height={56} />
            <h4 className="font-bold mt-4 mb-1">Increase</h4>
            <p className="opacity-80 text-sm text-center">Productivity, compliance, and knowledge retention.</p>
          </div>
          <div className="bg-slate-900/80 rounded-xl p-7 shadow flex flex-col items-center">
            <Image src="/icon-ai.png" alt="AI Powered" width={56} height={56} />
            <h4 className="font-bold mt-4 mb-1">AI Powered</h4>
            <p className="opacity-80 text-sm text-center">Deep learning with zero setup, tailored for enterprises.</p>
          </div>
          <div className="bg-slate-900/80 rounded-xl p-7 shadow flex flex-col items-center">
            <Image src="/imageinc.png" alt="Security" width={56} height={56} />
            <h4 className="font-bold mt-4 mb-1">Security</h4>
            <p className="opacity-80 text-sm text-center">End-to-end encrypted. Full privacy & control.</p>
          </div>
          <div className="bg-slate-900/80 rounded-xl p-7 shadow flex flex-col items-center">
            <Image src="/imageinc.png" alt="Privacy" width={56} height={56} />
            <h4 className="font-bold mt-4 mb-1">Privacy</h4>
            <p className="opacity-80 text-sm text-center">Your data, your perimeter. SOC2, 2FA, SSO ready.</p>
          </div>
        </div>
      </section>

      {/* PRICING / TESTIMONIAL */}
      <section id="pricing" className="py-16 bg-slate-900">
        <h3 className="text-3xl font-bold mb-8 text-center text-indigo-400">Pricing</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl flex flex-col items-center w-[340px]">
            <Image src="/imageceo.png" alt="CEO Testimonial" width={92} height={92} className="mb-2" />
            <h4 className="text-2xl font-bold mb-2">Enterprise Plan</h4>
            <p className="text-4xl font-extrabold mb-2 text-indigo-400">€20,000</p>
            <p className="mb-4 text-sm opacity-80">All features included.<br />Extras & API on request.</p>
            <ul className="mb-6 text-left text-sm list-disc list-inside opacity-90">
              <li>Unlimited users & docs</li>
              <li>Full support, updates, onboarding</li>
              <li>Cloud or On-Prem</li>
              <li>Custom integrations</li>
            </ul>
            <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl transition font-bold shadow">
              Request Demo
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-xs opacity-60">
          All prices EUR, VAT excluded. Annual plans & extras available.
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-900/80">
        <h3 className="text-3xl font-bold mb-8 text-center text-indigo-400">FAQ</h3>
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto items-start">
          <Image src="/faq_icon_clean.png" alt="FAQ Icon" width={100} height={100} className="mx-auto md:mx-0 mb-8 md:mb-0" />
          <div className="space-y-6 text-sm flex-1">
            <div>
              <h4 className="font-bold mb-1 text-indigo-300">Is my data secure?</h4>
              <p>Absolutely. You can deploy Phæton on your own cloud or on-premises, with enterprise-grade security by default.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1 text-indigo-300">Can I try before buying?</h4>
              <p>Yes, try the live demo or download the PDF for all features & tech specs.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1 text-indigo-300">What's included?</h4>
              <p>All core features, dashboard, analytics, unlimited users. API & custom integrations available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs opacity-70 bg-slate-800 text-white">
        © 2025 Phæton AI · All rights reserved.
      </footer>
    </main>
  );
}