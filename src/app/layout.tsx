// app/layout.tsx
import "./globals.css";      // <— deve corrispondere al nome esatto
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phæton AI – Landing",
  description: "…",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gradient-to-br from-slate-900 to-slate-800">
        {children}
      </body>
    </html>
  );
}