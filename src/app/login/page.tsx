"use client"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [role, setRole] = useState("Student")

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-indigo-600">School</span>Pulse
          </Link>
          <h1 className="text-2xl font-bold mt-4">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Login to your SchoolPulse account</p>
        </div>

        {/* Role selector */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          {["Student", "Teacher", "Admin"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                role === r ? "bg-white shadow text-indigo-600" : "text-gray-500"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@school.com"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <a className="text-indigo-600 font-medium">Forgot password?</a>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            Login as {role}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account? <span className="text-indigo-600 font-medium">Contact Admin</span>
        </p>
      </div>
    </div>
  )
}