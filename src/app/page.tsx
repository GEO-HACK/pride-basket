import React from 'react'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/services'

const page = () => {
  return (
    <div className=" bg-blue-200 h-screen">
      <Hero />
      <Services />
    </div>
  )
}

export default page