"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/images/pro.png"
        alt="Dagopride Basketball Academy"
        fill
        className="absolute inset-0 object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl"
        >
          Become a <span className="text-orange-500">Champion</span> <br />
          at Dagopride Basketball Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-base sm:text-md md:text-lg lg:text-xl text-gray-200 max-w-2xl md:max-w-3xl"
        >
          Unlock your potential on and off the court — with elite training, 
          world-class mentorship, and a community that drives success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Link href="/enroll">
            <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-105">
              Enroll Now
            </button>
          </Link>
          <Link href="/about">
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold text-lg rounded-full transition-transform transform hover:scale-105">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
