"use client"

import React from "react"
import { CheckCircle2, X } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
}

const SuccessModal: React.FC<Props> = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={18} />
          </button>

          <div className="px-6 pt-8 pb-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
              <CheckCircle2 size={28} />
            </div>
            <h2 id="success-title" className="text-xl font-semibold text-gray-900">
              Registration successful!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for registering with DaggoPride Basketball Academy. We have received your
              details and will be in touch with you shortly.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
