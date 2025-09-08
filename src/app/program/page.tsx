"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, Target, Award, Calendar, Shield, Star } from "lucide-react"

const objectives = [
  {
    icon: Target,
    title: "Holistic Development",
    desc: "Shape individuals into role models and student-athletes through strong character coaching.",
  },
  {
    icon: Shield,
    title: "Basketball Fundamentals",
    desc: "Build physical, mental, and emotional strength for consistent top performance.",
  },
  {
    icon: Award,
    title: "Future Leaders",
    desc: "Train athletes to become qualified coaches and referees, empowering the next generation.",
  },
]

const teams = [
  {
    title: "EBL Development Junior Team",
    desc: "Grade school & high school students preparing for competitive leagues.",
  },
  {
    title: "NBA Elite Team",
    desc: "College & university athletes competing at higher levels.",
  },
  {
    title: "EBL Ladies Team",
    desc: "Dedicated women’s team with championship aspirations.",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Page = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
       <section className="relative bg-gradient-to-r from-gray-900 via-orange-500 to-orange-400 text-white py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          DagoPride Academy Program
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100"
        >
          Building champions on and off the court through <span className="font-semibold">world-class basketball training</span> and dedicated mentorship for the young generation.
        </motion.p>

      </div>

      {/* Decorative background overlay for a modern look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </section>

      {/* Objectives */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Program Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((obj, i) => {
              const Icon = obj.icon
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition"
                >
                  <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{obj.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{obj.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Club Formation */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Basketball Club Formation
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A maximum of 40 passionate students will form the DagoPride
            Basketball Club, split into DPBA (men) and Lady Red Wings (women).
            Selection is based on skill, character, and academic performance.
          </p>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-600">
              <strong>Requirements:</strong> Minimum 70% grade average, among the
              top 15 skilled players, and good moral character.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Weekly & Weekend Program
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-orange-50 text-orange-700">
                <tr>
                  <th className="p-4 text-left font-semibold">Day</th>
                  <th className="p-4 text-left font-semibold">Focus</th>
                  <th className="p-4 text-left font-semibold">Activities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4">Mon–Tue</td>
                  <td className="p-4">Ball Handling</td>
                  <td className="p-4">Ball taps, wraps, combo drills</td>
                </tr>
                <tr>
                  <td className="p-4">Wed</td>
                  <td className="p-4">Shooting</td>
                  <td className="p-4">Spot shooting, off-dribble, shot fakes</td>
                </tr>
                <tr>
                  <td className="p-4">Thu</td>
                  <td className="p-4">Passing</td>
                  <td className="p-4">Outlet passes, passes vs. pressure</td>
                </tr>
                <tr>
                  <td className="p-4">Fri</td>
                  <td className="p-4">Defense</td>
                  <td className="p-4">
                    Defensive stance, wing denial, transitional defense
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Sat</td>
                  <td className="p-4">Scrimmage</td>
                  <td className="p-4">
                    8–11am: Grade school | 11–1pm: Ladies | 2–4pm: High school |
                    4–6pm: Senior elite
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((team, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <Star className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{team.title}</h3>
                <p className="text-gray-600 leading-relaxed">{team.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buddy System & Duration */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Buddy System & Duration
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Athletes mentor each other, with senior players teaching juniors to
            reinforce their own skills. The program runs year-round, including
            long school holidays.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join DagoPride Academy?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-100">
          Become part of a basketball program that builds champions, leaders,
          and future mentors.
        </p>
        <a
          href="/enroll"
          className="inline-block px-10 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-sm hover:bg-gray-100 transition"
        >
          Enroll Now
        </a>
      </section>
    </div>
  )
}

export default Page
