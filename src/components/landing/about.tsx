"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <section className="bg-gradient-to-r from-orange-50 to-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
                {/* Image Section */}
                <div className="flex-1">
                    <Image
                        src="/images/hoop.avif"
                        alt="About Us"
                        className="w-full h-full object-cover rounded-md shadow-lg"
                        width={600}
                        height={600}
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center">
                    <h2
                        id="about-heading"
                        className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-gray-900"
                    >
                        Practical training and <span className='text-orange-400'>mentorship</span> 
                        for the next generation of players
                    </h2>

                    <p className="text-gray-700 text-md md:text-lg mb-6 leading-relaxed">
                        Our basketball academy is built to nurture young talent, combining skill
                        development with strong mentorship. We focus not only on building technical
                        abilities on the court but also instilling discipline, teamwork, and confidence
                        that prepare students for success both in sports and in life.
                    </p>

                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-base md:text-md">
                        <li>Professional coaching to sharpen core basketball skills</li>
                        <li>One-on-one mentorship from experienced players and trainers</li>
                        <li>Programs that build discipline, teamwork, and leadership</li>
                        <li>Exposure to tournaments and real-game experiences</li>
                    </ul>

                    <div className="flex justify-center mt-6">
                        <Link href="/about">
                            <button className="bg-orange-400 text-white py-2 px-6 rounded-md shadow hover:bg-orange-500 transition">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
