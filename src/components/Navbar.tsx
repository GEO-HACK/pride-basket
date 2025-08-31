"use client"

import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] lg:w-4/5 z-50">
      <div className="flex items-center justify-between px-8 py-4 rounded-2xl backdrop-blur-lg bg-white/10  shadow-lg">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-orange-500 tracking-wide drop-shadow-md"
        >
          Dagopride
        </Link>

        {/* Links */}
        <div className="flex space-x-8 text-orange-500 font-semibold">
          <Link
            href="/"
            className="hover:text-orange-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/programs"
            className="hover:text-orange-400 transition-colors"
          >
            Programs
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        {/* register link */}
        <div className="hidden md:flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <Link
              href="/register"
              className="hover:text-orange-400 transition-colors"
            >
              Register
            </Link>
            </button>
       
        </div>
      </div>
    </nav>
  )
}

export default Navbar
