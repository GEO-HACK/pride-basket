"use client"

import React, { useState } from "react"
import { Form as RegistrationForm } from "@/components/registration"
import AgeGroupSelection from "@/components/registration/AgeGroupSelection"

const EnrollPage = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string | null>(null)

  if (!selectedAgeGroup) {
    return <AgeGroupSelection onSelectAgeGroup={setSelectedAgeGroup} />
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <RegistrationForm selectedAgeGroup={selectedAgeGroup} />
    </section>
  )
}

export default EnrollPage

