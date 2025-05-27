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
            Your Company’s Brain.<br />
            <span className="text-indigo-600">Searchable. Smart. Automated.</span>
          </motion.h1>
          <p className="text-lg text-slate-700 mb-6">
            <b>Phaeton AI</b> turns your business documents into instant answers, actions, and analytics.<br />
            No more endless searching—just upload, ask, and get what matters. Save time. Cut risk. Grow faster.
          </p>
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

      {/* WHAT IS PHAETON */}
      <section className="py-12 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-5">
            What is Phaeton AI?
          </h2>
          <p className="text-lg text-slate-800 mb-6">
            <b>Phaeton AI is your digital knowledge engine.</b> Instantly search, analyze, and automate work from any contract, policy, or company doc—no tech skills required.
            <br />Upload files, ask business questions, and see clear, actionable answers, all in your private cloud.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-indigo-100 rounded-xl p-5">
              <span className="text-2xl font-bold text-indigo-600">🔎 Search Instantly</span>
              <p className="text-slate-700 mt-2">Find answers in seconds. Never lose info again.</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-5">
              <span className="text-2xl font-bold text-blue-600">⚡ Automate & Analyze</span>
              <p className="text-slate-700 mt-2">Spot risks, automate workflows, see real impact.</p>
            </div>
            <div className="bg-violet-100 rounded-xl p-5">
              <span className="text-2xl font-bold text-violet-600">🔒 100% Private</span>
              <p className="text-slate-700 mt-2">Runs in your cloud. Your data, your rules—always secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-14 md:py-20 bg-gradient-to-b from-indigo-50 to-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-2">How it works</h2>
        <p className="text-center text-lg mb-12 text-slate-700 max-w-3xl mx-auto">
          3 easy steps to unlock your company’s knowledge—forever.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center px-6">
            <Image src="/icon-upload.png" alt="Upload" width={80} height={80} />
            <h4 className="font-bold mt-4 text-lg">1. Upload</h4>
            <p className="opacity-80 text-base">Drop in PDFs, Word, any business doc. No IT setup.</p>
          </div>
          <div className="flex flex-col items-center text-center px-6">
            <Image src="/icon-ai.png" alt="AI" width={80} height={80} />
            <h4 className="font-bold mt-4 text-lg">2. Ask Anything</h4>
            <p className="opacity-80 text-base">Our AI understands business language. Get answers in seconds, 24/7.</p>
          </div>
          <div className="flex flex-col items-center text-center px-6">
            <Image src="/feature-automation.png" alt="Automation" width={80} height={80} />
            <h4 className="font-bold mt-4 text-lg">3. Automate & Analyze</h4>
            <p className="opacity-80 text-base">Spot risks, automate reports, track time and money saved.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-18 bg-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">Core Features</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-indigo-100 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-privacy.png" alt="Privacy" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-indigo-700">Full Privacy</h4>
            <p className="text-sm text-slate-700 text-center">All data in your cloud or on-prem. No one else sees your info—ever.</p>
          </div>
          <div className="bg-blue-100 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/icon-security.png" alt="Security" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-blue-700">Enterprise Security</h4>
            <p className="text-sm text-slate-700 text-center">SOC2, SSO, Audit logs, compliance out of the box.</p>
          </div>
          <div className="bg-violet-100 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-api.png" alt="API" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-violet-700">API Integrations</h4>
            <p className="text-sm text-slate-700 text-center">Connect to your stack, automate uploads, power up your business.</p>
          </div>
          <div className="bg-green-100 rounded-xl p-7 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-automation.png" alt="Automation" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-1 text-green-700">Workflow Automation</h4>
            <p className="text-sm text-slate-700 text-center">Automate checks, reports, exports. Free your team from busywork.</p>
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
            <ul className="text-sm text-slate-700 opacity-90 space-y-1 text-center">
              <li>• Zero training: Ready in 5 min</li>
              <li>• Granular access & audit log</li>
              <li>• Unlimited bulk uploads</li>
            </ul>
          </div>
          <div className="bg-white border border-indigo-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <Image src="/mockup-analytics.png" alt="Analytics" width={400} height={230} className="rounded-xl shadow mb-4" />
            <h3 className="font-black text-2xl text-indigo-700 mb-2">Analytics: Prove the ROI</h3>
            <p className="text-base text-slate-700 mb-3 text-center">Track every dollar, hour, and risk saved by AI. Interactive dashboards, compliance reports, Excel exports, and clear KPIs—your management will love it.</p>
            <ul className="text-sm text-slate-700 opacity-90 space-y-1 text-center">
              <li>• Monthly reporting & fast export</li>
              <li>• Fully customizable analytics</li>
              <li>• See business impact instantly</li>
            </ul>
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
            <p className="mb-4 text-base text-slate-600">One-time setup. 1 year of updates & support. Your cloud, your data. </p>
            <ul className="mb-6 text-left text-base list-disc list-inside text-slate-800">
              <li>Unlimited users & storage</li>
              <li>Custom branding & analytics</li>
              <li>API access & automations</li>
              <li>Premium support</li>
              <li>Full privacy (your cloud/on-prem)</li>
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

      {/* EXTRAS ADD-ONS (IMMEDIATELY AFTER PRICING) */}
      <section className="py-14 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Want Even More? Unlock Add-ons!</h2>
        <p className="text-center text-lg mb-10 text-slate-700 max-w-2xl mx-auto">
          Boost your Phaeton AI experience with optional upgrades—perfect for scaling, customizing, and automating your business.
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-indigo-100 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <Image src="/feature-api.png" alt="API Enterprise" width={44} height={44} />
            <h4 className="font-bold mt-3 text-indigo-700">API Enterprise</h4>
            <p className="text-slate-700 text-center mb-2">Connect to your stack. Automate uploads, audits, and Q&A in real time.</p>
            <span className="font-bold text-indigo-600 text-xl mt-2">$5,000</span>
          </div>
          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <Image src="/icon-security.png" alt="Custom Branding" width={44} height={44} />
            <h4 className="font-bold mt-3 text-blue-700">Custom Branding</h4>
            <p className="text-slate-700 text-center mb-2">Your logo, your colors, your domain—make Phaeton truly yours.</p>
            <span className="font-bold text-blue-600 text-xl mt-2">$3,000</span>
          </div>
          <div className="bg-violet-100 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <Image src="/feature-automation.png" alt="Custom Automations" width={44} height={44} />
            <h4 className="font-bold mt-3 text-violet-700">Bespoke Automations</h4>
            <p className="text-slate-700 text-center mb-2">We automate *your* processes, from reports to reminders. You dream it, we build it.</p>
            <span className="font-bold text-violet-600 text-xl mt-2">$8,000</span>
          </div>
          <div className="bg-green-100 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <Image src="/icon-upload.png" alt="Data Migration" width={44} height={44} />
            <h4 className="font-bold mt-3 text-green-700">Migration & Integration</h4>
            <p className="text-slate-700 text-center mb-2">Migrate your docs from any system. We handle the heavy lifting, fast and safe.</p>
            <span className="font-bold text-green-600 text-xl mt-2">from $4,000</span>
          </div>
        </div>
        <div className="text-center mt-6 text-slate-700 text-sm opacity-90">
          All add-ons are optional and tailored for your needs. <b>Ready to build your dream setup?</b>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">FAQ</h2>
        <div className="flex flex-col md:flex-row gap-14 items-center justify-center max-w-5xl mx-auto">
          <div className="flex-1 space-y-8 text-base">
            <div>
              <h4 className="font-bold text-indigo-600 mb-1">Is my data secure?</h4>
              <p>Absolutely! Everything runs in your cloud or on-premises. No 3rd-party access—ever.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-1">Can I use my own templates?</h4>
              <p>Of course! Upload any format, customize workflows, and brand your portal your way.</p>
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