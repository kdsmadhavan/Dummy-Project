"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white border-b border-gray-800">

      <h1 className="text-xl font-bold text-cyan-400">
        3D PC Builder
      </h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/simulator">Simulator</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/challenges">Challenges</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>

    </nav>
  )
}
