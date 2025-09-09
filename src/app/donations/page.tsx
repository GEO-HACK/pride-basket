"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, PhoneCall, Copy } from "lucide-react";
import { PHONE_NUMBER , TILL_NUMBER} from "@/lib/constants";

const DonationsPage = () => {
  const tillNumber = TILL_NUMBER;

  const handleCopy = () => {
    navigator.clipboard.writeText(tillNumber);
    alert("Till Number copied!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-start px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mt-6"
      >
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">
          Support Our Cause
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We are a community-driven initiative working tirelessly to empower
          individuals and strengthen our society. Your support fuels hope and
          change.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Every contribution, big or small, brings us closer to transforming
          lives and sustaining impactful projects.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Together, let’s create a brighter tomorrow. Thank you for walking this
          journey with us.
        </p>
      </motion.div>

      {/* Donation Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full border border-green-100"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6 flex items-center justify-center gap-2">
          <Heart className="text-red-500" /> Lipa na M-Pesa
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="p-4 rounded-lg bg-green-50 shadow-sm text-center">
            <p className="text-gray-600 text-lg">Till Number</p>
            <p className="text-3xl font-extrabold text-green-700">{tillNumber}</p>
            <button
              onClick={handleCopy}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700 transition"
            >
              <Copy size={18} /> Copy
            </button>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Kindly confirm the details above before completing your donation.
        </p>
      </motion.div>

      {/* Contact */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <PhoneCall className="text-green-600" /> For assistance, contact us at
          <span className="font-semibold">{PHONE_NUMBER}</span>
        </p>
      </div>
    </div>
  );
};

export default DonationsPage;
