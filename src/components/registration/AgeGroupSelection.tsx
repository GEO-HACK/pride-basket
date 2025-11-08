"use client"

import React from "react"

type AgeGroup = {
  id: string
  label: string
  value: string
}

const ageGroups: AgeGroup[] = [
  { id: "juniors", label: "JUNIORS", value: "juniors" },
  { id: "u11-u18-girls", label: "U11 - U18 GIRLS", value: "u11-u18-girls" },
  { id: "u11-u14-boys", label: "U11 - U14 BOYS", value: "u11-u14-boys" },
  { id: "u15-u18-boys", label: "U15 - U18 BOYS", value: "u15-u18-boys" },
]

type Props = {
  onSelectAgeGroup: (ageGroup: string) => void
}

const AgeGroupSelection: React.FC<Props> = ({ onSelectAgeGroup }) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MEMBERSHIP FORM
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-6">
            Please select the age group from below to register your child for the 2025/26 Season.
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Membership Fees - KSH.2000 per child for the full season. Payable in one-off payment or in installments (see form below for details).
            Membership includes training, club kit, use of equipment, and friendly matches. Kent League fees and player license fees are not included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ageGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => onSelectAgeGroup(group.value)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-8 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              <span className="text-lg tracking-wide">{group.label}</span>
            </button>
          ))}
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            View our{" "}
            <a
              href="/terms"
              className="text-blue-600 hover:underline font-medium"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-blue-600 hover:underline font-medium"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default AgeGroupSelection
