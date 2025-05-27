"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfessionalOverview() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Panoramic Software Overview */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text */}
        <div className="flex-1">
          <motion.h2
            className="text-4xl font-extrabold text-indigo-700 mb-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            See Phaeton in Action: Your Company, Your Control.
          </motion.h2>
          <p className="text-lg text-slate-700 mb-7">
            Explore the Phaeton platform at a glance.<br />
            Everything you need—intuitive, secure, and built for real business.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Bulk Uploads",
              "Audit Trail",
              "AI Q&A",
              "Compliance Analytics",
              "Role-based Access",
              "Real-Time Insights",
            ].map((feature, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full text-sm shadow-sm"
              >
                {feature}
              </span>
            ))}
          </div>
          <a
            href="#demo"
            className="inline-block mt-3 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-3 rounded-2xl shadow transition text-lg"
          >
            Request a Full Demo
          </a>
          <span className="block mt-2 text-indigo-500 text-sm">or <a href="#live-preview" className="underline hover:text-indigo-700">See Live Preview</a></span>
        </div>
        {/* Right Side: Dashboard Image + Callouts */}
        <div className="flex-1 relative flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Main Dashboard Mockup */}
            <Image
              src="/mockup-dashboard.png"
              alt="Phaeton Dashboard"
              width={460}
              height={310}
              className="rounded-3xl border shadow-xl bg-white"
              priority
            />
            {/* Floating Callout bubbles (example) */}
            <div className="absolute -left-16 top-10 bg-white/90 border shadow-md rounded-xl px-4 py-2 text-indigo-700 font-bold text-xs hidden md:block">
              Bulk Uploads
            </div>
            <div className="absolute -right-14 top-3 bg-white/90 border shadow-md rounded-xl px-4 py-2 text-indigo-700 font-bold text-xs hidden md:block">
              Audit Trail
            </div>
            <div className="absolute left-12 -bottom-8 bg-white/90 border shadow-md rounded-xl px-4 py-2 text-blue-700 font-bold text-xs hidden md:block">
              AI Q&A
            </div>
            <div className="absolute right-6 -bottom-9 bg-white/90 border shadow-md rounded-xl px-4 py-2 text-violet-700 font-bold text-xs hidden md:block">
              Compliance Analytics
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto mt-24">
        <h3 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Trusted by Real Businesses Worldwide
        </h3>
        <p className="text-center text-lg text-slate-700 mb-12">
          We help ambitious companies transform the way they work—saving time, reducing risk, and enabling smarter decisions.
        </p>
        <div className="grid md:grid-cols-3 gap-7">
          {/* Testimonial Card 1 */}
          <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-indigo-700 font-extrabold text-3xl mb-2">★ ★ ★ ★ ★</span>
            <p className="italic mb-4 text-slate-700">
              &quot;We saved hundreds of hours on compliance work. Phaeton just gets it.&quot;
            </p>
            <span className="text-sm font-semibold text-slate-600">COO, Financial Services</span>
            <span className="text-xs text-indigo-500 mt-2">Fortune 500 Company</span>
          </div>
          {/* Testimonial Card 2 */}
          <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-indigo-700 font-extrabold text-3xl mb-2">★ ★ ★ ★ ★</span>
            <p className="italic mb-4 text-slate-700">
              &quot;Now our legal team answers questions in seconds, not days.&quot;
            </p>
            <span className="text-sm font-semibold text-slate-600">Operations Manager, Global Retail</span>
            <span className="text-xs text-indigo-500 mt-2">Global Enterprise</span>
          </div>
          {/* Testimonial Card 3 */}
          <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-indigo-700 font-extrabold text-3xl mb-2">★ ★ ★ ★ ★</span>
            <p className="italic mb-4 text-slate-700">
              &quot;I trust Phaeton for the most sensitive docs. Peace of mind = priceless.&quot;
            </p>
            <span className="text-sm font-semibold text-slate-600">CTO, Manufacturing</span>
            <span className="text-xs text-indigo-500 mt-2">Mid-size Business</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-10 text-indigo-600 text-sm opacity-80 font-bold">
          <span>150+ companies onboarded</span>
          <span>98% renewal rate</span>
          <span>Global support</span>
        </div>
      </div>

      {/* ROI Section */}
      <div className="max-w-5xl mx-auto mt-24">
        <h3 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          How Much Can You Really Save?
        </h3>
        <p className="text-center text-lg text-slate-700 mb-10">
          Phaeton pays for itself—fast. Here&apos;s what you unlock:
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {/* ROI Card 1 */}
          <div className="bg-indigo-100 border-l-4 border-indigo-500 rounded-xl p-6 shadow flex flex-col items-center text-center">
            <span className="text-4xl font-black text-indigo-700 mb-2">10+</span>
            <span className="font-bold text-indigo-700 mb-2">hours/week</span>
            <span className="text-sm text-slate-700">Saved per employee—no more searching or manual work.</span>
          </div>
          {/* ROI Card 2 */}
          <div className="bg-blue-100 border-l-4 border-blue-500 rounded-xl p-6 shadow flex flex-col items-center text-center">
            <span className="text-4xl font-black text-blue-700 mb-2">$50K</span>
            <span className="font-bold text-blue-700 mb-2">per year</span>
            <span className="text-sm text-slate-700">Saved on process automation and compliance costs.</span>
          </div>
          {/* ROI Card 3 */}
          <div className="bg-violet-100 border-l-4 border-violet-500 rounded-xl p-6 shadow flex flex-col items-center text-center">
            <span className="text-4xl font-black text-violet-700 mb-2">0</span>
            <span className="font-bold text-violet-700 mb-2">legal disasters</span>
            <span className="text-sm text-slate-700">Instant alerts for risky docs—avoid surprises and lawsuits.</span>
          </div>
          {/* ROI Card 4 */}
          <div className="bg-indigo-50 border-l-4 border-indigo-300 rounded-xl p-6 shadow flex flex-col items-center text-center">
            <span className="text-3xl font-black text-indigo-700 mb-2">100%</span>
            <span className="font-bold text-indigo-700 mb-2">focus on growth</span>
            <span className="text-sm text-slate-700">Invest your resources where it matters. Leave the paperwork to us.</span>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-4">
          Estimates based on real customer results. Exact savings depend on your company’s size and processes.
        </p>
        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <a
            href="#demo"
            className="bg-indigo-700 hover:bg-indigo-800 text-white px-10 py-4 rounded-2xl font-extrabold shadow-xl text-xl transition"
          >
            Calculate Your Savings
          </a>
          <span className="text-slate-500 font-medium">or</span>
          <a
            href="#demo"
            className="underline text-indigo-700 text-lg font-bold hover:text-indigo-900"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}