'use client'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="text-2xl font-bold text-white">
        Phæton AI
      </Link>
      <div className="space-x-6">
        <Link href="#demo" className="text-white hover:text-indigo-300">
          Demo
        </Link>
        <Link href="#one-pager" className="text-white hover:text-indigo-300">
          One-Pager
        </Link>
      </div>
    </nav>
  )
}