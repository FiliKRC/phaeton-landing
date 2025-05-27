"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 flex items-center justify-between px-6 py-4 bg-slate-900/80 backdrop-blur z-20 border-b border-slate-800">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-indigo-400">Phæton</span> AI
        </h1>
        <div className="space-x-6 flex items-center text-sm">
          <a href="#features" className="hover:text-indigo-400 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a>
          <a href="#faq" className="hover:text-indigo-400 transition">FAQ</a>
          <a href="/one-pager.pdf" className="hover:text-indigo-400 transition">One-Pager</a>
          <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition font-bold shadow">
            Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center pt-20 pb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-5"
        >
          Upload. Ask. <span className="text-indigo-400">Win time.</span>
        </motion.h2>
        <p className="max-w-2xl mb-8 opacity-90 text-lg md:text-xl">
          Secure enterprise AI for your documents. <br />
          Upload policies, contracts, ISO manuals — get instant answers and insights.<br />
          No training, no friction, no headaches.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#demo" className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-lg font-bold transition">Try Demo</a>
          <a href="/one-pager.pdf" className="px-8 py-3 rounded-xl border border-indigo-400 text-indigo-200 hover:bg-indigo-400/10 text-lg transition">
            Download PDF
          </a>
        </div>
        {/* HERO IMAGE */}
        <div className="mt-12 w-full max-w-3xl">
          <Image
            src="/A_photograph_of_a_professional_in_an_office_settin.png"
            alt="Professional using Phaëton AI dashboard"
            width={1100}
            height={700}
            className="mx-auto rounded-2xl shadow-xl border border-slate-800"
            priority
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 bg-slate-800/80">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-400">How it works</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Image src="/imagedemo.png" alt="Upload Document" width={120} height={120} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Upload your docs</h4>
            <p className="opacity-80 text-sm">Drag &amp; drop your PDF, DOCX, policies, contracts or ISO manuals.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/icon-ai.png" alt="AI" width={80} height={80} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Ask in plain English</h4>
            <p className="opacity-80 text-sm">Chat with your documents: get answers, summaries, compliance gaps and more.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/imageinc.png" alt="Insights" width={100} height={100} />
            <h4 className="font-bold mt-4 mb-1 text-lg">Get analytics</h4>
            <p className="opacity-80 text-sm">Track usage, time and money saved, team activity — all in one place.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 bg-slate-900">
        <h3 className="text-3xl font-bold mb-8 text-center text-indigo-400">Why choose Phæton?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800/60 rounded-xl p-6 shadow flex flex-col items-center">
            <Image src="/imageceo.png" alt="CEO testimonial card" width={90} height={90} />
            <h4 className="font-bold mt-4 mb-1">Enterprise-grade</h4>
            <p className="opacity-80 text-sm text-center">SOC2, SSO, on-premises or cloud. All features included — no surprises.</p>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-6 shadow flex flex-col items-center">
            <Image src="/icon-ai.png" alt="AI icon" width={60} height={60} />
            <h4 className="font-bold mt-4 mb-1">Zero training needed</h4>
            <p className="opacity-80 text-sm text-center">Plug &amp; play: upload, ask, done. No onboarding, no “fine-tuning”, no tech headaches.</p>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-6 shadow flex flex-col items-center">
            <Image src="/mockup-dashboard.png" alt="Dashboard analytics" width={90} height={90} />
            <h4 className="font-bold mt-4 mb-1">Rich analytics built-in</h4>
            <p className="opacity-80 text-sm text-center">Visualize savings, document flow, usage, compliance gaps. Export everything.</p>
          </div>
        </div>
      </section>

      {/* ANALYTICS MOCKUP */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <Image
            src="/mockup-dashboard.png"
            alt="Analytics dashboard mockup"
            width={1200}
            height={600}
            className="w-full rounded-xl shadow-xl border"
          />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-slate-900">
        <h3 className="text-3xl font-bold mb-8 text-center text-indigo-400">Pricing</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl flex flex-col items-center w-[340px]">
            <h4 className="text-2xl font-bold mb-2">Phæton AI Enterprise</h4>
            <p className="text-5xl font-extrabold mb-2 text-indigo-400">$20,000</p>
            <p className="mb-4 text-sm opacity-80">
              One-time setup. Includes 1 year support.<br />
              <span className="text-indigo-200">Extras and custom add-ons available.</span>
            </p>
            <ul className="mb-6 text-left text-sm list-disc list-inside opacity-90">
              <li>Dedicated Cloud or On-Premises</li>
              <li>Unlimited Users</li>
              <li>SSO, 2FA, Audit Logs</li>
              <li>Custom Branding</li>
              <li>All Features Included</li>
              <li>API &amp; Integrations (optional)</li>
            </ul>
            <div className="mt-auto">
              <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl transition font-bold shadow">
                Request Demo
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-xs opacity-60">
          All prices in USD. VAT not included. Annual renewals &amp; extras available.
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-slate-800/80">
        <h3 className="text-3xl font-bold mb-8 text-center text-indigo-400">What clients say</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-xl p-6 shadow">
            <p className="mb-3 italic opacity-80">&quot;Finally an AI that speaks business. Phæton saved us weeks of manual compliance checks.&quot;</p>
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 rounded-full w-8 h-8" />
              <span className="font-bold">COO, TechCorp Inc.</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 shadow">
            <p className="mb-3 italic opacity-80">&quot;Instant answers to every question, no more endless document searches.&quot;</p>
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 rounded-full w-8 h-8" />
              <span className="font-bold">Head of Compliance, FinGroup</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 shadow">
            <p className="mb-3 italic opacity-80">&quot;We rolled it out to 400+ staff in a week. Support was excellent.&quot;</p>
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 rounded-full w-8 h-8" />
              <span className="font-bold">CIO, Logistics SA</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-slate-900">
        <h3 className="text-3xl font-bold mb-8 text-center text-indigo-400">FAQ</h3>
        <div className="flex justify-center mb-8">
          <Image src="/faq_icon_clean.png" alt="FAQ icon" width={90} height={90} />
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-sm">
          <div>
            <h4 className="font-bold mb-1 text-indigo-300">Is my data secure?</h4>
            <p>Yes. You can host Phæton AI on your private cloud (AWS, Azure, GCP) or on-premises. Data never leaves your perimeter.</p>
          </div>
          <div>
            <h4 className="font-bold mb-1 text-indigo-300">Can I try before I buy?</h4>
            <p>Absolutely — request a free demo or download the PDF One-Pager for all features &amp; tech details.</p>
          </div>
          <div>
            <h4 className="font-bold mb-1 text-indigo-300">What&apos;s included? Can I add extras?</h4>
            <p>
              All core features, SSO/2FA, dashboard, analytics and unlimited users.
              Extras available: API, custom integrations, more—just ask!
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-1 text-indigo-300">Do I need to train the AI?</h4>
            <p>
              No: you don&apos;t need to train anything, just upload your docs and ask questions.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-1 text-indigo-300">Can I use it for ISO or legal compliance?</h4>
            <p>
              Of course! Upload manuals, policies, contracts or certifications: Phæton instantly answers and checks for compliance gaps.
            </p>
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