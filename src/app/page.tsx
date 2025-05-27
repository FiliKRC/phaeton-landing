"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 flex items-center justify-between px-8 py-4 bg-slate-900/80 backdrop-blur z-20 border-b border-slate-800 shadow">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2">
          <Image src="/icon-ai.png" alt="Logo" width={38} height={38} />
          <span className="text-indigo-400">Phæton</span> AI
        </h1>
        <div className="space-x-6 flex items-center font-medium">
          <a href="#how" className="hover:text-indigo-400 transition">How it works</a>
          <a href="#features" className="hover:text-indigo-400 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a>
          <a href="/one-pager.pdf" className="hover:text-indigo-400 transition">PDF</a>
          <a href="#cta" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition font-bold shadow">
            Try Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-14 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow"
        >
          Enterprise AI<br />
          for Documents &amp; Compliance
        </motion.h2>
        <p className="max-w-2xl mb-10 opacity-90 text-lg md:text-xl mx-auto">
          Upload any PDF, policy or contract. <span className="text-indigo-400 font-bold">Ask anything</span> — get answers in seconds.<br />
          AI-powered, secure, no onboarding.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#cta" className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-lg font-bold transition shadow">Try Demo</a>
          <a href="/one-pager.pdf" className="px-8 py-3 rounded-xl border border-indigo-400 text-indigo-200 hover:bg-indigo-400/10 text-lg transition shadow">
            Download One-Pager
          </a>
        </div>
        {/* HERO VISUAL */}
        <div className="mt-12 w-full max-w-3xl mx-auto">
          <Image
            src="/mockup-dashboard.png"
            alt="Dashboard Hero"
            width={900}
            height={480}
            className="mx-auto rounded-2xl shadow-2xl border border-slate-800"
            priority
          />
        </div>
      </section>

      {/* TRUSTBAR */}
      <section className="flex flex-wrap justify-center items-center gap-8 py-4 border-b border-slate-800 bg-slate-900/60">
        <Image src="/icon-security.png" alt="SOC2" width={38} height={38} />
        <span className="opacity-80">SOC2 Compliant</span>
        <Image src="/icon-upload.png" alt="Upload" width={38} height={38} />
        <span className="opacity-80">Unlimited Uploads</span>
        <Image src="/icon-analytics.png" alt="Analytics" width={38} height={38} />
        <span className="opacity-80">Real-Time Analytics</span>
        <Image src="/icon-api.png" alt="API" width={38} height={38} />
        <span className="opacity-80">API Integrations</span>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 bg-slate-900/70">
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-400">How it works</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-xs">
            <Image src="/icon-upload.png" alt="Upload" width={70} height={70} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Upload Documents</h4>
            <p className="opacity-80 text-sm">Drag &amp; drop your PDF, DOCX or policies.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <Image src="/icon-ai.png" alt="AI" width={70} height={70} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Ask Anything</h4>
            <p className="opacity-80 text-sm">Chat with your docs.<br />Instant Q&amp;A 24/7.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <Image src="/icon-analytics.png" alt="Analytics" width={70} height={70} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Get Insights</h4>
            <p className="opacity-80 text-sm">See analytics, activity logs and export results.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800">
        <h3 className="text-3xl font-bold mb-14 text-center text-indigo-400">Why Phæton?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-slate-800/80 rounded-2xl p-8 shadow flex flex-col items-center">
            <Image src="/icon-security.png" alt="Security" width={60} height={60} />
            <h4 className="font-bold mt-4 mb-1 text-xl">Enterprise Security</h4>
            <p className="opacity-80 text-sm text-center">SOC2, SSO, 2FA, audit logs, GDPR by design. Your data stays with you.</p>
          </div>
          <div className="bg-slate-800/80 rounded-2xl p-8 shadow flex flex-col items-center">
            <Image src="/icon-ai.png" alt="AI Power" width={60} height={60} />
            <h4 className="font-bold mt-4 mb-1 text-xl">Instant Answers</h4>
            <p className="opacity-80 text-sm text-center">Zero training. No “fine-tuning”. No onboarding — just ask.</p>
          </div>
          <div className="bg-slate-800/80 rounded-2xl p-8 shadow flex flex-col items-center">
            <Image src="/icon-analytics.png" alt="Analytics" width={60} height={60} />
            <h4 className="font-bold mt-4 mb-1 text-xl">Built-In Analytics</h4>
            <p className="opacity-80 text-sm text-center">Track usage, compliance, and popular questions with one click.</p>
          </div>
        </div>
        {/* Extra analytics mockup */}
        <div className="mt-16 w-full max-w-4xl mx-auto">
          <Image
            src="/mockup-analytics.png"
            alt="Analytics"
            width={1000}
            height={540}
            className="mx-auto rounded-2xl shadow-xl border border-slate-800"
          />
        </div>
      </section>

      {/* CTA / DEMO */}
      <section id="cta" className="py-20 bg-slate-800/80 flex flex-col md:flex-row items-center justify-between px-8 max-w-6xl mx-auto rounded-3xl mt-12 shadow-2xl border border-indigo-900">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-4xl font-extrabold mb-4 text-indigo-300">Try the AI Demo</h3>
          <p className="text-lg mb-7 opacity-90">Upload a file, ask a question, and see how much time &amp; money you save.</p>
          <a href="#how" className="inline-block bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-xl font-bold shadow-lg text-lg transition">
            Upload your document
          </a>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <Image src="/cta-demo.png" alt="Demo CTA" width={200} height={200} className="rounded-xl" />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-slate-900">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-400">Pricing</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl flex flex-col items-center w-full max-w-xs">
            <h4 className="text-2xl font-bold mb-2">Enterprise</h4>
            <p className="text-5xl font-extrabold mb-3 text-indigo-400">$20,000</p>
            <p className="mb-4 text-sm opacity-80">One-time setup.<br />Includes 1 year support. Extras available.</p>
            <ul className="mb-8 text-left text-sm list-disc list-inside opacity-90">
              <li>Unlimited Users</li>
              <li>Private Cloud/On-Prem</li>
              <li>All Features Included</li>
              <li>SSO, 2FA, Audit Logs</li>
              <li>Custom Branding</li>
            </ul>
            <a href="#cta" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl transition font-bold shadow text-center w-full">
              Request Demo
            </a>
          </div>
          {/* Testimonial */}
          <div className="flex flex-col items-center gap-6">
            <Image src="/avatar-testimonial.png" alt="Testimonial CEO" width={120} height={120} className="rounded-full shadow-xl border" />
            <div className="bg-slate-800/70 rounded-2xl px-6 py-5 text-center max-w-xs">
              <p className="mb-2 italic text-lg opacity-80">&quot;Phæton saved us weeks of manual compliance checks!&quot;</p>
              <span className="font-bold text-indigo-300">CEO, TechCorp Inc.</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-7 text-xs opacity-60">
          All prices in USD. VAT not included. Custom solutions on request.
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900/95">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-400">FAQ</h3>
        <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
          <div className="flex-1">
            <div className="mb-7">
              <h4 className="font-bold mb-2 text-indigo-300">Is my data secure?</h4>
              <p className="text-sm">Absolutely. You can host Phæton AI on your own cloud or on-premises. Data never leaves your perimeter.</p>
            </div>
            <div className="mb-7">
              <h4 className="font-bold mb-2 text-indigo-300">Can I try before I buy?</h4>
              <p className="text-sm">Sure — request a free demo or download our One-Pager with all the tech details.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-indigo-300">What&apos;s included? Can I add extras?</h4>
              <p className="text-sm">All core features, SSO/2FA, dashboard, analytics and unlimited users. Extras (API, integrations) on request.</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/faq_icon_clean.png" alt="FAQ" width={200} height={200} />
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