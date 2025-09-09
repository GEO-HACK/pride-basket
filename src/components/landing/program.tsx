"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Users, Target, Award } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Skills Training",
    description:
      "Master shooting, passing, defense, and ball handling with expert guidance.",
  },
  {
    icon: Users,
    title: "Character Building",
    description:
      "Weekly sessions on values, teamwork, and personal growth.",
  },
  {
    icon: Target,
    title: "Competitive Pathway",
    description:
      "Opportunities to join elite leagues like EBL, KSBC, and NBA programs.",
  },
  {
    icon: Award,
    title: "Mentorship",
    description:
      "Learn from champions and grow into future athletes, coaches, or referees.",
  },
]

const ProgramSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
        >
          Daggo Pride Academy Program
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Train, grow, and compete with the best. At Daggo Pride Academy, we
          combine world-class basketball coaching with character development to
          shape leaders on and off the court.
        </motion.p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-primary-bg rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/program"
            className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-2xl shadow-md hover:bg-primary-hover hover:shadow-lg transition"
          >
            Explore Full Program
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramSection
