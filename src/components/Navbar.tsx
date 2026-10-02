"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0f2c5c] text-[#d4a017] flex items-center justify-center font-bold">SLA</div>
          <div>
            <p className="font-bold text-[#0f2c5c] text-sm">SARVERUN LEGACY ACADEMY, CHITO</p>
            <p className="text- text-gray-500">Discipline • Knowledge • Integrity</p>
          </div>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href="/login" className="bg-[#d4a017] text-white px-5 py-2 rounded-full text-sm font-bold">Login</Link>
      </div>
    </nav>
  )
}