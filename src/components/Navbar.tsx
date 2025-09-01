"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
  { href: "/contact", label: "Contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-4/5 lg:w-2/3 z-50">
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-md 
        bg-white/40 dark:bg-gray-900/40 
        shadow-xl ">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-orange-500"
        >
          Dagopride
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-100 text-md font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-orange-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
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
              bg-white/40 dark:bg-gray-900/40 
              shadow-lg border border-white/30 dark:border-gray-700/50 
              text-center space-y-4 text-gray-800 dark:text-gray-100 font-medium"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-orange-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
