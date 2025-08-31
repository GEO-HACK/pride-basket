"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Users, Award, Handshake } from "lucide-react"

const principles = [
  {
    title: "Discipline",
    description:
      "We instill discipline both on and off the court, ensuring our players excel in life and sport.",
    icon: ShieldCheck,
  },
  {
    title: "Teamwork",
    description:
      "We teach collaboration, trust, and unity — the foundation of every great team.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "We push every player to achieve their full potential through dedication and consistency.",
    icon: Award,
  },
  {
    title: "Integrity",
    description:
      "We uphold honesty and respect, shaping athletes into role models within the community.",
    icon: Handshake,
  },
]

const Services = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-500">
          Our Principles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {principles.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow flex flex-col items-center"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
