import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-neutral-50 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Automate&nbsp;your <span className="text-indigo-500">document intelligence</span>
      </h1>
      <p className="mt-6 max-w-xl text-center text-neutral-300">
        Phaëton AI riduce del <strong>70 %</strong> il tempo di analisi contratti,
        policy e manuali. Upload&nbsp;→&nbsp;Ask&nbsp;→&nbsp;Answer,
        in sicurezza&nbsp;SSO.
      </p>

      <a
        href="https://demo.phaeton-ai.com"
        className="mt-10 inline-block rounded-lg border border-indigo-500 px-6 py-3 font-semibold
                   text-indigo-100 hover:bg-indigo-500 hover:text-neutral-50 transition"
      >
        Prova la demo →
      </a>
    </main>
  );
}