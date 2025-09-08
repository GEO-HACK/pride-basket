"use client"

import React from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { SITE_TITLE } from "@/lib/constants"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">{SITE_TITLE} Academy</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Building champions on and off the court through mentorship, discipline, and world-class training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-orange-400 transition-colors">Programs</Link>
            </li>
            <li>
              <Link href="/enroll" className="hover:text-orange-400 transition-colors">Enroll Now</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-400" />
              <span>info@daggoacademy.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-400" />
              <span>+254 700 123 456</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-orange-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-orange-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-orange-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-orange-400 transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {SITE_TITLE} Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
