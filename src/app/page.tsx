"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProfessionalOverview from "./components/ProfessionalOverview";

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
          <a href="#why" className="hover:text-indigo-500 transition">Why Phaeton?</a>
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
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-20 pb-16 gap-14 md:gap-8">
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight mb-7"
          >
            <span className="block mb-1">
              The <span className="text-indigo-600">Business Brain</span> that never sleeps.
            </span>
            <span className="text-slate-500 text-2xl block mt-2">
              Every document. Every answer. Every automation.
            </span>
          </motion.h1>
          <p className="mb-7 text-xl text-indigo-800 font-semibold">
            <span className="bg-indigo-200 px-4 py-2 rounded-2xl">
              One source of truth, zero wasted time. Trust Phaeton and work like tomorrow.
            </span>
          </p>
          <ul className="mb-8 space-y-2 text-lg font-medium text-slate-700">
            <li><b>&bull; Upload ANY business doc</b> (contracts, policies, manuals...)</li>
            <li><b>&bull; Get instant, expert answers</b> 24/7 (no manual search)</li>
            <li><b>&bull; Automate workflows, spot risks & save time</b> in minutes</li>
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
      
      <ProfessionalOverview />

      {/* WHY PHAETON */}
      <section id="why" className="py-20 bg-gradient-to-b from-indigo-100 to-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-7">Why choose Phaeton AI?</h2>
        <div className="flex flex-col md:flex-row gap-14 justify-center items-center max-w-5xl mx-auto">
          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-indigo-50 rounded-2xl shadow p-7 border-l-4 border-indigo-400">
              <h4 className="font-bold text-xl text-indigo-600 mb-1">Battle-tested security</h4>
              <p className="text-base text-slate-700">Your data is 100% private—hosted on your cloud or servers. No external access, no leaks. Enterprise-grade security and privacy, always.</p>
            </div>
            <div className="bg-indigo-200 rounded-2xl shadow p-7 border-l-4 border-indigo-400">
              <h4 className="font-bold text-xl text-indigo-600 mb-1">Real business intelligence</h4>
              <p className="text-base text-slate-700">Not just another chatbot. Phaeton deeply reads, understands, and reasons on your real business docs—giving you actionable, reliable answers.</p>
            </div>
            <div className="bg-indigo-50 rounded-2xl shadow p-7 border-l-4 border-indigo-400">
              <h4 className="font-bold text-xl text-indigo-600 mb-1">Proven results</h4>
              <p className="text-base text-slate-700">Phaeton saves hours every week, cuts risk, and empowers teams with the <b>right</b> info—while competitors still search emails.</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/icon-ai.png" alt="Business AI Brain" width={270} height={270} className="rounded-2xl shadow-lg bg-white" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 md:py-28 bg-gradient-to-b from-white to-indigo-50">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">How does it work?</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center px-8">
            <Image src="/icon-upload.png" alt="Upload" width={80} height={80} />
            <h4 className="font-bold mt-5 text-lg text-indigo-700">1. Upload</h4>
            <p className="opacity-90 text-base text-slate-700">Drag & drop any file—PDF, Word, whatever. No tech team needed.</p>
          </div>
          <div className="flex flex-col items-center text-center px-8">
            <Image src="/icon-ai.png" alt="AI" width={80} height={80} />
            <h4 className="font-bold mt-5 text-lg text-indigo-700">2. Ask Anything</h4>
            <p className="opacity-90 text-base text-slate-700">Ask questions in plain English. Phaeton "gets" business, not just text.</p>
          </div>
          <div className="flex flex-col items-center text-center px-8">
            <Image src="/feature-automation-alt.png" alt="Automation" width={80} height={80} />
            <h4 className="font-bold mt-5 text-lg text-indigo-700">3. Automate & Analyze</h4>
            <p className="opacity-90 text-base text-slate-700">Automate boring tasks, get instant analytics, and boost your workflow.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-14">What can Phaeton do for you?</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto py-2">
          <div className="bg-indigo-200 rounded-xl p-8 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-privacy.png" alt="Privacy" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-2 text-indigo-700 text-lg">Full Privacy</h4>
            <p className="text-sm text-slate-700 text-center">Your data, your cloud. We never see your docs—ever.</p>
          </div>
          <div className="bg-indigo-100 rounded-xl p-8 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/icon-security.png" alt="Security" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-2 text-indigo-700 text-lg">Enterprise Security</h4>
            <p className="text-sm text-slate-700 text-center">SOC2, SSO, audit logs, full compliance—peace of mind for any size.</p>
          </div>
          <div className="bg-indigo-200 rounded-xl p-8 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-api.png" alt="API" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-2 text-indigo-700 text-lg">API Integrations</h4>
            <p className="text-sm text-slate-700 text-center">Plug Phaeton into your stack. Automate every process, no limits.</p>
          </div>
          <div className="bg-indigo-100 rounded-xl p-8 shadow flex flex-col items-center hover:scale-105 transition">
            <Image src="/feature-automation.png" alt="Automation" width={54} height={54} />
            <h4 className="font-bold mt-4 mb-2 text-indigo-700 text-lg">Workflow Automation</h4>
            <p className="text-sm text-slate-700 text-center">Trigger audits, exports, reporting—eliminate busywork forever.</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD / ANALYTICS SPLIT */}
      <section className="py-24 bg-gradient-to-r from-indigo-100 via-white to-indigo-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 px-4">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl shadow-xl p-10 flex flex-col items-center">
            <Image src="/mockup-dashboard.png" alt="AI Cloud" width={400} height={230} className="rounded-xl shadow mb-6" />
            <h3 className="font-black text-2xl text-indigo-700 mb-3">AI Cloud: Organize, Find, Automate</h3>
            <p className="text-base text-slate-700 mb-1 text-center">Every contract, policy, and manual in one secure place. Permission controls, instant search, bulk upload, and workflows that save hours daily.</p>
          </div>
          <div className="bg-indigo-200 border border-indigo-100 rounded-2xl shadow-xl p-10 flex flex-col items-center">
            <Image src="/mockup-analytics.png" alt="Analytics" width={400} height={230} className="rounded-xl shadow mb-6" />
            <h3 className="font-black text-2xl text-indigo-700 mb-3">Analytics: ROI You Can See</h3>
            <p className="text-base text-slate-700 mb-1 text-center">Track every dollar and hour saved by Phaeton. Interactive dashboards, compliance checks, and KPIs—prove your impact instantly.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-indigo-50">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">Pricing & Enterprise Power-Ups</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-5xl mx-auto">
          {/* PRICING CARD */}
          <div className="bg-white border rounded-2xl shadow-xl flex flex-col items-center px-10 py-12 w-full md:w-[340px] mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-2 text-indigo-700">Phaeton AI Enterprise</h4>
            <p className="text-5xl font-extrabold mb-2 text-indigo-600">$20,000</p>
            <p className="mb-4 text-base text-slate-600 text-center">One-time setup. Includes 1 year of support.<br />Enterprise extras available below.</p>
            <ul className="mb-6 text-left text-base list-disc list-inside text-slate-800">
              <li>Unlimited users & storage</li>
              <li>Custom branding & analytics</li>
              <li>API access & automations</li>
              <li>Full privacy (your cloud/on-prem)</li>
              <li>Premium support, updates & more</li>
            </ul>
            <a href="#demo" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition font-bold shadow mt-2">
              Request Demo
            </a>
            <div className="text-center mt-5 text-xs opacity-70 text-slate-500">
              All prices in USD. VAT not included. Custom plans available—ask us!
            </div>
          </div>
          {/* POWER-UPS */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-indigo-700 mb-6">Enterprise Power-Ups</h3>
            <div className="grid grid-cols-1 gap-6">
              {/* API Enterprise */}
              <div className="flex items-center gap-4 bg-indigo-100 rounded-xl shadow p-5">
                <Image src="/feature-api.png" alt="API Enterprise" width={44} height={44} />
                <div className="flex-1">
                  <div className="font-bold text-indigo-700">API Enterprise</div>
                  <div className="text-slate-700 text-sm">Connect Phaeton to your stack, automate uploads, audits, and more. <b>$5,000</b></div>
                </div>
              </div>
              {/* Custom Branding */}
              <div className="flex items-center gap-4 bg-indigo-50 rounded-xl shadow p-5">
                <Image src="/icon-security.png" alt="Custom Branding" width={44} height={44} />
                <div className="flex-1">
                  <div className="font-bold text-indigo-700">Custom Branding</div>
                  <div className="text-slate-700 text-sm">Your logo, your domain, your style. <b>$3,000</b></div>
                </div>
              </div>
              {/* Bespoke Automations */}
              <div className="flex items-center gap-4 bg-indigo-100 rounded-xl shadow p-5">
                <Image src="/feature-automation.png" alt="Custom Automations" width={44} height={44} />
                <div className="flex-1">
                  <div className="font-bold text-indigo-700">Bespoke Automations</div>
                  <div className="text-slate-700 text-sm">Automate any process for your business—save time, eliminate errors. <b>$8,000</b></div>
                </div>
              </div>
              {/* Data Migration */}
              <div className="flex items-center gap-4 bg-indigo-50 rounded-xl shadow p-5">
                <Image src="/icon-upload.png" alt="Migration & Integration" width={44} height={44} />
                <div className="flex-1">
                  <div className="font-bold text-indigo-700">Migration & Integration</div>
                  <div className="text-slate-700 text-sm">Migrate all your data, even from legacy systems—safe, fast, zero downtime. <b>from $4,000</b></div>
                </div>
              </div>
            </div>
            <div className="text-center mt-7 text-slate-600 text-xs opacity-90">
              All extras are <b>optional</b> and tailored to your business. Ask for a custom quote.
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 justify-between px-4">
          <div className="flex-1">
            <Image src="/avatar-testimonial.png" alt="CEO" width={68} height={68} className="mb-5 rounded-full bg-indigo-100" />
            <p className="italic text-xl mb-4 text-slate-700">
              "Phaeton lets us audit and query policies across 10+ countries—no more endless scrolling or wasted hours."
            </p>
            <div className="font-bold text-indigo-700 text-base">CEO, Global Enterprise Client</div>
          </div>
          <div className="flex-1 flex justify-center">
            <a
              href="#demo"
              className="flex items-center gap-4 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-2xl rounded-2xl font-bold shadow transition mt-6 md:mt-0"
            >
              Try Phaeton Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-14">FAQ</h2>
        <div className="flex flex-col md:flex-row gap-14 items-center justify-center max-w-5xl mx-auto">
          <div className="flex-1 space-y-10 text-base">
            <div>
              <h4 className="font-bold text-indigo-600 mb-2">Is my data secure?</h4>
              <p>Absolutely! Everything runs on your cloud or on-premises. No third-party access, ever.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-2">Can I use my own templates?</h4>
              <p>Of course! Upload any format, customize workflows, and brand your portal as you wish.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-2">How fast is setup?</h4>
              <p>Up & running in a day. Zero technical complexity—just plug and go.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-2">What does it cost to scale?</h4>
              <p>Flat price, unlimited users & docs. No surprises. Custom pricing? Just ask us.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/faq-business-ai.png" alt="FAQ" width={340} height={340} className="rounded-2xl shadow border bg-white" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-base opacity-80 bg-gradient-to-r from-white to-indigo-50 text-slate-700">
        © 2025 Phaeton AI · All rights reserved. <br />
        <span className="text-indigo-500 font-bold">Work like tomorrow.</span>
      </footer>
    </main>
  );
}