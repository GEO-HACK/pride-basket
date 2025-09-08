"use client"

import React from "react"

const EnrollPage = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 ">
      
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfcKNij9A4zCBYo6cQ2EXXlvvUkZuvHU92LpV-ZL1-FeusJwA/viewform?embedded=true"
          width="100%"
          height="1746"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          className="rounded-xl mt-4"
        >
          Loading…
        </iframe>
      </div>
    </section>
  )
}

export default EnrollPage
