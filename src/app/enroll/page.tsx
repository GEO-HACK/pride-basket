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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-amber-50 to-sky-100 py-10 px-4">
      {/* Soft color blobs so the glass form has something to blur */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-300/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-sky-300/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
      <div className="relative w-full flex justify-center">
        <RegistrationForm selectedAgeGroup={selectedAgeGroup} />
      </div>
    </section>
  )
}

export default EnrollPage

