// src/app/page.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white">

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-10 py-5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-xl">
        <span className="text-2xl font-extrabold tracking-tight text-indigo-400">Phæton</span>
        <div className="space-x-8 flex items-center">
          <a href="#how" className="hover:text-indigo-300 transition">How it works</a>
          <a href="#features" className="hover:text-indigo-300 transition">Features</a>
          <a href="#analytics" className="hover:text-indigo-300 transition">Analytics</a>
          <a href="#pricing" className="hover:text-indigo-300 transition">Pricing</a>
          <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-xl text-white font-bold shadow transition">Try Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center pt-24 pb-12 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-5"
        >
          <span className="text-indigo-400">Enterprise AI</span> for your Documents
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mb-8 opacity-90 text-lg"
        >
          Upload your contracts, policies or ISO manuals.<br />
          Our AI answers business questions instantly—no onboarding, no training, no calls.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#demo" className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-lg font-bold transition shadow">Try Demo</a>
          <a href="/one-pager.pdf" className="px-8 py-3 rounded-xl border border-indigo-400 text-indigo-200 hover:bg-indigo-400/10 text-lg transition">Download PDF</a>
        </div>
        {/* Hero Dashboard */}
        <div className="mt-14 w-full max-w-5xl">
          <Image
            src="/mockup-dashboard.png"
            alt="Phæton Dashboard"
            width={1100}
            height={580}
            className="mx-auto rounded-2xl shadow-xl border border-slate-800"
            priority
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 bg-slate-800/80">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.06 }} className="flex flex-col items-center text-center">
            <Image src="/icon-upload.png" alt="Upload" width={90} height={90} />
            <h4 className="font-bold mt-5 mb-2 text-xl">Upload your Docs</h4>
            <p className="opacity-80 text-base">Drag & drop your PDF, DOCX or business documents.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06 }} className="flex flex-col items-center text-center">
            <Image src="/icon-ai.png" alt="AI" width={90} height={90} />
            <h4 className="font-bold mt-5 mb-2 text-xl">Ask Questions</h4>
            <p className="opacity-80 text-base">Chat with your business docs. Instant AI-powered Q&A 24/7.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06 }} className="flex flex-col items-center text-center">
            <Image src="/icon-analytics.png" alt="Analytics" width={90} height={90} />
            <h4 className="font-bold mt-5 mb-2 text-xl">Get Insights</h4>
            <p className="opacity-80 text-base">See analytics, team activity, compliance checks, export results.</p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-slate-900">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">Features</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div whileHover={{ y: -6, boxShadow: "0 10px 40px #818CF822" }} className="bg-slate-800/80 rounded-xl p-7 shadow flex flex-col items-center">
            <Image src="/icon-security.png" alt="Security" width={70} height={70} />
            <h4 className="font-bold mt-5 mb-2 text-lg">Enterprise Security</h4>
            <p className="opacity-80 text-base text-center">SOC2, SSO, 2FA, audit logs & advanced privacy.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6, boxShadow: "0 10px 40px #818CF822" }} className="bg-slate-800/80 rounded-xl p-7 shadow flex flex-col items-center">
            <Image src="/icon-api.png" alt="API" width={70} height={70} />
            <h4 className="font-bold mt-5 mb-2 text-lg">Custom Integrations</h4>
            <p className="opacity-80 text-base text-center">Connect via API, automate workflows, integrate with your tools.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6, boxShadow: "0 10px 40px #818CF822" }} className="bg-slate-800/80 rounded-xl p-7 shadow flex flex-col items-center">
            <Image src="/cta-demo.png" alt="Easy Demo" width={70} height={70} />
            <h4 className="font-bold mt-5 mb-2 text-lg">Zero Onboarding</h4>
            <p className="opacity-80 text-base text-center">Ready in minutes. No IT headaches. No calls required.</p>
          </motion.div>
        </div>
      </section>

      {/* ANALYTICS MOCKUP */}
      <section id="analytics" className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <Image
            src="/mockup-analytics.png"
            alt="Analytics Preview"
            width={1100}
            height={620}
            className="w-full rounded-xl shadow-2xl border"
          />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-slate-900">
        <h2 className="text-4xl font-bold mb-10 text-center text-indigo-400">Pricing</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-14">
          <div className="bg-slate-800 p-10 rounded-2xl shadow-xl flex flex-col items-center w-[350px] border-2 border-indigo-500">
            <h4 className="text-2xl font-bold mb-2">Phæton AI Enterprise</h4>
            <p className="text-5xl font-extrabold mb-3 text-indigo-400">$20,000</p>
            <p className="mb-4 text-base opacity-90 text-center">One-time setup.<br />Includes 1 year support.<br />Extras available.</p>
            <ul className="mb-7 text-left text-sm list-disc list-inside opacity-90">
              <li>Dedicated Cloud or On-Premises</li>
              <li>Unlimited Users</li>
              <li>SSO, 2FA, Audit Logs</li>
              <li>Custom Branding</li>
              <li>All Features Included</li>
            </ul>
            <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl transition font-bold shadow mt-auto">
              Request Demo
            </a>
          </div>
        </div>
        <div className="text-center mt-7 text-xs opacity-60">
          All prices in USD. VAT not included. Annual renewals & extras available.
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-800/80">
        <h2 className="text-4xl font-bold mb-10 text-center text-indigo-400">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-slate-900 rounded-xl p-8 shadow flex flex-col items-center">
            <Image src="/avatar-testimonial.png" alt="Client" width={48} height={48} className="mb-3" />
            <p className="mb-3 italic opacity-80">“Finally an AI that speaks business. Phæton saved us weeks of compliance work.”</p>
            <span className="font-bold mt-auto">COO, TechCorp Inc.</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-slate-900 rounded-xl p-8 shadow flex flex-col items-center">
            <Image src="/avatar-testimonial.png" alt="Client" width={48} height={48} className="mb-3" />
            <p className="mb-3 italic opacity-80">“Instant answers, no more searching endless docs. Game-changer.”</p>
            <span className="font-bold mt-auto">Head of Compliance, FinGroup</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-slate-900 rounded-xl p-8 shadow flex flex-col items-center">
            <Image src="/avatar-testimonial.png" alt="Client" width={48} height={48} className="mb-3" />
            <p className="mb-3 italic opacity-80">“Rolled out to 400+ staff in days. Support was excellent.”</p>
            <span className="font-bold mt-auto">CIO, Logistics SA</span>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900">
        <h2 className="text-4xl font-bold mb-10 text-center text-indigo-400">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-7 text-base">
          <div className="flex items-start gap-4">
            <Image src="/faq_icon_clean.png" alt="FAQ" width={36} height={36} />
            <div>
              <h4 className="font-bold mb-1 text-indigo-300">Is my data secure?</h4>
              <p>Yes. Host Phæton AI on your private cloud (AWS, Azure, GCP) or on-premises. Data never leaves your perimeter.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/faq_icon_clean.png" alt="FAQ" width={36} height={36} />
            <div>
              <h4 className="font-bold mb-1 text-indigo-300">Can I try before I buy?</h4>
              <p>Absolutely — request a demo or download the One-Pager for all features & tech details.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/faq_icon_clean.png" alt="FAQ" width={36} height={36} />
            <div>
              <h4 className="font-bold mb-1 text-indigo-300">What's included? Can I add extras?</h4>
              <p>All core features, SSO/2FA, dashboard, analytics, unlimited users. Extras: API, integrations, more—just ask!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 bg-gradient-to-t from-indigo-950 to-slate-900 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Ready to supercharge your compliance?</h2>
        <a href="#demo" className="bg-indigo-500 hover:bg-indigo-600 px-10 py-4 rounded-2xl text-xl font-bold transition mt-2 shadow-lg">Try Demo Now</a>
      </section>

      {/* FOOTER */}
      <footer className="py-7 text-center text-sm opacity-60 bg-slate-900 text-white">
        © 2025 Phæton AI · All rights reserved.
      </footer>
    </main>
  );
}