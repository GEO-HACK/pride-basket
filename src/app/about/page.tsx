"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, Target, Award, Shield, Calendar, Star } from "lucide-react"
import Image from "next/image"
import {SITE_TITLE } from "@/lib/constants"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const AboutSection = () => {
  return (
    <section className="relative bg-white text-gray-900 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-orange-400 mb-4">
            About {SITE_TITLE} Academy
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Dear parents and children, welcome to a basketball academy that not
            only trains champions but also shapes character, discipline, and
            leadership for life beyond the court.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To holistically develop young athletes by combining world-class
              basketball training with mentorship, character development, and
              educational discipline — preparing them to excel both on and off
              the court.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the leading basketball academy in Kenya and beyond,
              recognized for producing fundamentally skilled athletes, ethical
              leaders, and role models who inspire their communities.
            </p>
          </motion.div>
        </div>

        {/* Program Objectives */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Objectives
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: "Basketball Awareness",
                desc: "Promote basketball culture and awareness in Dagoretti South.",
              },
              {
                icon: Users,
                title: "Holistic Growth",
                desc: "Develop athletes as role models through character coaching.",
              },
              {
                icon: Award,
                title: "Competitive Excellence",
                desc: "Prepare athletes to compete in EBL, NBA, KSBC, and Siel league tournaments.",
              },
              {
                icon: Shield,
                title: "Future Coaches",
                desc: "Equip athletes with skills to become coaches and referees.",
              },
              {
                icon: Calendar,
                title: "Year-Round Training",
                desc: "Run continuous training and mentorship programs all year round.",
              },
              {
                icon: Star,
                title: "Values & Character",
                desc: "Embed discipline, teamwork, and integrity in every session.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.1 * i, duration: 0.7 }}
                className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <item.icon className="h-10 w-10 text-orange-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coach Section */}
        <section className="relative bg-gradient-to-r from-white via-gray-50 to-orange-50 py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
              Meet Our Head Coach
            </h3>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Coach Image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-orange-500">
                <Image
                  src="/images/pro.png"
                  alt="Head Coach"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Coach Bio */}
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
                  Coach Isaac Gachiri Njoroge
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Coach Isaac Gachiri Njoroge is the founder and head trainer of
                  <span className="font-semibold"> {SITE_TITLE} Academy</span>. With years of
                  experience in player development, he has dedicated his career to
                  nurturing the next generation of basketball talent.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  His coaching philosophy blends technical skills with discipline,
                  teamwork, and character-building, ensuring that every player grows
                  both as an athlete and as an individual.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Under his leadership, players participate in intensive skill camps,
                  mentorship sessions, and competitive opportunities that prepare them
                  for both national and international platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  )
}

export default AboutSection
