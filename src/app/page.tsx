import React from 'react'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/services'
import About from '@/components/landing/about'
import ProgramSection from '@/components/landing/program'

const page = () => {
  return (
    <div className=" bg-blue-200 h-screen">
      <Hero />
      <Services />
      <About />
      <ProgramSection />
    </div>
  )
}

export default page