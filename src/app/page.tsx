import React from 'react'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/services'
import About from '@/components/landing/about'

const page = () => {
  return (
    <div className=" bg-blue-200 h-screen">
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default page