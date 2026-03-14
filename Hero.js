"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (

    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 text-white">

      <motion.h1
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        className="text-5xl font-bold mb-6"
      >
        3D PC Build Learning Simulator
      </motion.h1>

      <p className="max-w-xl text-gray-400 mb-10">
        Learn how to build computers with an immersive interactive 3D simulator.
      </p>

      <Link
        href="/simulator"
        className="px-8 py-4 bg-cyan-500 rounded-xl hover:bg-cyan-600"
      >
        Start Building
      </Link>

    </section>

  )
}
