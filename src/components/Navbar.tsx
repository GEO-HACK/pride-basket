"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SITE_TITLE } from "@/lib/constants"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-4/5 lg:w-2/3 z-50">
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-md 
        bg-white/40 dark:bg-gray-900/40 shadow-xl">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-primary"
        >
          {SITE_TITLE}
        </Link>

        {/* Desktop Links + CTA Buttons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800 dark:text-gray-100 text-md font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary-hover transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Enroll Button (Primary) */}
          <Link
            href="/enroll"
            className="px-4 py-2 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary-hover transition"
          >
            Enroll
          </Link>

          {/* Donate Button (Secondary Outline) */}
          <Link
            href="/donate"
            className="px-4 py-2 rounded-xl text-primary font-semibold shadow-md hover:bg-primary hover:text-white border border-secondary transition"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 px-6 py-4 rounded-2xl backdrop-blur-md 
              bg-white/40 dark:bg-gray-900/40 shadow-lg border border-white/30 dark:border-gray-700/50 
              text-center space-y-4 text-gray-800 dark:text-gray-100 font-medium"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-primary-hover transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Enroll Button */}
            <Link
              href="/enroll"
              className="block w-full px-3 py-2 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary-hover transition"
              onClick={() => setIsOpen(false)}
            >
              Enroll
            </Link>

            {/* Mobile Donate Button */}
            <Link
              href="/donate"
              className="block w-full px-3 py-2 rounded-xl text-primary font-semibold shadow-md border border-secondary hover:bg-primary hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
