"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-900">

      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur flex justify-between items-center px-8 py-4 border-b border-indigo-100 shadow-sm">
        <span className="text-2xl md:text-3xl font-black tracking-tight text-indigo-700 select-none">
          Phaeton AI
        </span>
        <div className="flex gap-7 items-center text-base font-medium">
          <a href="#how" className="hover:text-indigo-500 transition">How it works</a>
          <a href="#features" className="hover:text-indigo-500 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-500 transition">Pricing</a>
          <a href="#faq" className="hover:text-indigo-500 transition">FAQ</a>
          <a
            href="#demo"
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow transition"
          >
            Try Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-16 pb-12 gap-12 md:gap-8">
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight mb-6"
          >
            Upload, Ask, <span className="text-indigo-600">Automate.</span>
            <br />
            <span className="text-slate-500">
              Your business brain, supercharged by AI.
            </span>
          </motion.h1>
          <ul className="mb-7 space-y-2 text-lg font-medium text-slate-700">
            <li>
              <b>• 1-click document upload</b>: Contracts, policies, manuals, all formats.
            </li>
            <li>
              <b>• Instant answers</b>: No training, no manual search—just ask and decide.
            </li>
            <li>
              <b>• Analytics & Automation</b>: See where you save time, money and spot risks.
            </li>
          </ul>
          <a
            href="#demo"
            className="flex gap-2 items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow text-white font-bold text-lg transition"
          >
            Try the Demo
          </a>
        </div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <Image
            src="/hero-ai-cloud-upload.png"
            alt="AI Cloud Upload Dashboard"
            width={520}
            height={420}
            className="rounded-3xl shadow-xl border border-indigo-100 bg-white"
            priority
          />
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-14 md:py-20 bg-gradient-to-b from-indigo-50 to-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-2">How it works</h2>
        <p className="text-center text-lg mb-12 text-slate-700 max-w-3xl mx-auto">
          The fastest way to unlock business knowledge from your documents. <b>Phaeton AI</b> reads, reasons, and delivers clear answers, analytics, and automation—instantly, no IT headaches.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center px-6">
            <Image src="/icon-upload.png" alt="Upload" width={80} height={80} />
            <h4 className="font-bold mt-4 text-lg">1. Upload</h4>
            <p className="opacity-80 text-base">Drop in PDFs, Word—no tech setup required.</p>
          </div>
          <div className="flex flex-col items-center text-center px-6">
            <Image src="/icon-ai.png" alt="AI" width={80} height={80} />
            <h4 className="font-bold mt-4 text-lg">2. Ask Anything</h4>
            <p className="opacity-80 text-base">Our AI understands your business docs. Answers in seconds.</p>
          </div>
          <div className="flex flex-col items-center text-center px-6">
            <Image src="/feature-automation.png" alt="Automation" width={80} height={80} />
            <h4 className="font-bold mt-4 text-lg">3. Automate & Analyze</h4>
            <p className="opacity-80 text-base">Track insights, automate workflow, measure time & cost saved.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-18 bg-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">Why choose Phaeton?</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-indigo-50 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-privacy.png" alt="Privacy" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-indigo-700">Full Privacy</h4>
            <p className="text-sm text-slate-600 text-center">All data on your cloud or on-prem. We never see your info.</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/icon-security.png" alt="Security" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-indigo-700">Enterprise Security</h4>
            <p className="text-sm text-slate-600 text-center">SOC2, SSO, Audit logs, full compliance.</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-api.png" alt="API" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-indigo-700">API Integrations</h4>
            <p className="text-sm text-slate-600 text-center">Connect your stack, automate intake, unlock third-party magic.</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-automation.png" alt="Automation" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-indigo-700">Workflow Automation</h4>
            <p className="text-sm text-slate-600 text-center">Free your team. Trigger checks, exports, reporting & more.</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD / ANALYTICS SPLIT */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-4">
          <div className="bg-white border border-indigo-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <Image src="/mockup-dashboard.png" alt="AI Cloud" width={400} height={230} className="rounded-xl shadow mb-4" />
            <h3 className="font-black text-2xl text-indigo-700 mb-2">AI Cloud: Organize, Find, Automate</h3>
            <p className="text-base text-slate-700 mb-3 text-center">Store every contract, policy, and manual in one ultra-secure cloud. Instant search, permission controls, automated workflows—make your data truly work for you.</p>
            <ul className="text-sm text-slate-600 opacity-90 space-y-1 text-center">
              <li>• Zero training: Ready in 5 min</li>
              <li>• Granular access & audit log</li>
              <li>• Unlimited bulk uploads</li>
            </ul>
          </div>
          <div className="bg-white border border-indigo-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <Image src="/mockup-analytics.png" alt="Analytics" width={400} height={230} className="rounded-xl shadow mb-4" />
            <h3 className="font-black text-2xl text-indigo-700 mb-2">Analytics: Prove the ROI</h3>
            <p className="text-base text-slate-700 mb-3 text-center">Track every dollar, hour, and risk saved by AI. Interactive dashboards, compliance reports, Excel exports, and clear KPIs—your management will love it.</p>
            <ul className="text-sm text-slate-600 opacity-90 space-y-1 text-center">
              <li>• Monthly reporting & fast export</li>
              <li>• Fully customizable analytics</li>
              <li>• See impact instantly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXTRAS SLIDER */}
      <section className="py-14 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Extra Power-Ups (Unlock More!)</h2>
        <div className="flex overflow-x-auto gap-6 max-w-5xl mx-auto pb-4 snap-x">
          {/* API Enterprise */}
          <div className="min-w-[320px] max-w-[320px] bg-indigo-50 rounded-2xl shadow-lg border p-6 flex flex-col items-start snap-center">
            <Image src="/feature-api.png" alt="API Enterprise" width={48} height={48} />
            <h4 className="font-bold text-indigo-700 mt-3 mb-1 text-lg">API Enterprise</h4>
            <p className="text-slate-700 text-base mb-2">Connect Phaeton to your digital stack. Automate uploads, audits, Q&A, and more in real time.</p>
            <span className="font-bold text-indigo-600 text-xl mt-auto">$5,000</span>
          </div>
          {/* Custom Branding */}
          <div className="min-w-[320px] max-w-[320px] bg-indigo-50 rounded-2xl shadow-lg border p-6 flex flex-col items-start snap-center">
            <Image src="/icon-security.png" alt="Custom Branding" width={48} height={48} />
            <h4 className="font-bold text-indigo-700 mt-3 mb-1 text-lg">Custom Branding</h4>
            <p className="text-slate-700 text-base mb-2">Your logo, your colors, your domain—make Phaeton truly yours.</p>
            <span className="font-bold text-indigo-600 text-xl mt-auto">$3,000</span>
          </div>
          {/* Bespoke Automations */}
          <div className="min-w-[320px] max-w-[320px] bg-indigo-50 rounded-2xl shadow-lg border p-6 flex flex-col items-start snap-center">
            <Image src="/feature-automation.png" alt="Custom Automations" width={48} height={48} />
            <h4 className="font-bold text-indigo-700 mt-3 mb-1 text-lg">Bespoke Automations</h4>
            <p className="text-slate-700 text-base mb-2">We build automations for any business process. Save hours, eliminate errors, scale up fast.</p>
            <span className="font-bold text-indigo-600 text-xl mt-auto">$8,000</span>
          </div>
          {/* Onboarding & Training */}
          <div className="min-w-[320px] max-w-[320px] bg-indigo-50 rounded-2xl shadow-lg border p-6 flex flex-col items-start snap-center">
            <Image src="/avatar-testimonial.png" alt="Onboarding Training" width={48} height={48} />
            <h4 className="font-bold text-indigo-700 mt-3 mb-1 text-lg">Onboarding & Training</h4>
            <p className="text-slate-700 text-base mb-2">Team onboarding sessions and training—go live with confidence and speed.</p>
            <span className="font-bold text-indigo-600 text-xl mt-auto">$2,000</span>
          </div>
          {/* SLA 24/7 Support */}
          <div className="min-w-[320px] max-w-[320px] bg-indigo-50 rounded-2xl shadow-lg border p-6 flex flex-col items-start snap-center">
            <Image src="/icon-security.png" alt="SLA 24/7" width={48} height={48} />
            <h4 className="font-bold text-indigo-700 mt-3 mb-1 text-lg">SLA 24/7 Support</h4>
            <p className="text-slate-700 text-base mb-2">24/7 support, dedicated team, guaranteed response times—no downtime, only results.</p>
            <span className="font-bold text-indigo-600 text-xl mt-auto">$4,000/year</span>
          </div>
          {/* Data Migration */}
          <div className="min-w-[320px] max-w-[320px] bg-indigo-50 rounded-2xl shadow-lg border p-6 flex flex-col items-start snap-center">
            <Image src="/icon-upload.png" alt="Data Migration" width={48} height={48} />
            <h4 className="font-bold text-indigo-700 mt-3 mb-1 text-lg">Migration & Integration</h4>
            <p className="text-slate-700 text-base mb-2">We migrate all your data—even from legacy systems—safely and fast. Ready to scale, zero stress.</p>
            <span className="font-bold text-indigo-600 text-xl mt-auto">from $4,000</span>
          </div>
        </div>
        <div className="text-center mt-6 text-slate-600 text-sm opacity-90">
          All extras are <b>optional</b> and customizable. Unlock new powers and make Phaeton your true digital ally.
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 justify-between px-4">
          <div className="flex-1">
            <Image src="/avatar-testimonial.png" alt="CEO" width={68} height={68} className="mb-4 rounded-full bg-indigo-100" />
            <p className="italic text-lg mb-3 text-slate-700">
              "Phaeton lets us audit and query policies across 10+ countries—no more endless scrolling or wasted hours."
            </p>
            <div className="font-bold text-indigo-700 text-base">CEO, Global Enterprise Client</div>
          </div>
          <div className="flex-1 flex justify-center">
            <a
              href="#demo"
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xl rounded-2xl font-bold shadow-xl transition mt-6 md:mt-0"
            >
              Try Phaeton Now
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-indigo-50">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-7">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="bg-white border rounded-2xl shadow-xl flex flex-col items-center px-14 py-12 w-[340px]">
            <h4 className="text-2xl font-bold mb-2 text-indigo-700">Phaeton AI Enterprise</h4>
            <p className="text-5xl font-extrabold mb-2 text-indigo-600">$20,000</p>
            <p className="mb-4 text-base text-slate-600">One-time setup. Includes 1 year of support.<br />Enterprise extras on demand.</p>
            <ul className="mb-6 text-left text-base list-disc list-inside text-slate-800">
              <li>Unlimited users & storage</li>
              <li>Custom branding & analytics</li>
              <li>API access & automations</li>
              <li>Full privacy (your cloud/on-prem)</li>
              <li>Premium support, updates & more</li>
            </ul>
            <a href="#demo" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition font-bold shadow">
              Request Demo
            </a>
          </div>
        </div>
        <div className="text-center mt-7 text-xs opacity-70 text-slate-500">
          All prices in USD. VAT not included. Custom plans available—ask us!
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">FAQ</h2>
        <div className="flex flex-col md:flex-row gap-14 items-center justify-center max-w-5xl mx-auto">
          <div className="flex-1 space-y-8 text-base">
            <div>
              <h4 className="font-bold text-indigo-600 mb-1">Is my data secure?</h4>
              <p>Yes! Everything runs on your cloud or on-premises. No 3rd-party access, ever.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-1">Can I use my own templates?</h4>
              <p>Absolutely! Upload any format, customize workflows, and brand your portal as you wish.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-1">How fast is setup?</h4>
              <p>Up & running in a day. Zero technical complexity—just plug and go.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-1">What does it cost to scale?</h4>
              <p>Flat price, unlimited users & docs. No surprises. Custom pricing? Just ask us.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/faq-business-ai.png" alt="FAQ" width={340} height={340} className="rounded-2xl shadow border bg-white" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-7 text-center text-sm opacity-70 bg-gradient-to-r from-white to-indigo-50 text-slate-700">
        © 2025 Phaeton AI · All rights reserved.
      </footer>
    </main>
  );
}