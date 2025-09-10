"use client";

import { useTransition, useState } from "react";
import { initiateStkPush } from "../actions/initiatePayment";

export default function HomePage() {
  const [isPending, startTransition] = useTransition();
  const [phone, setPhone] = useState("");

  const handlePay = () => {
    startTransition(async () => {
      try {
        const res = await initiateStkPush(phone, 100); // 100 KES
        console.log("STK Push Response:", res);
      } catch (err) {
        console.error("Payment failed:", err);
      }
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Pay with M-Pesa</h1>
      <input
        type="text"
        placeholder="Enter phone (e.g. 2547xxxxxxx)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border px-4 py-2 rounded"
      />
      <button
        onClick={handlePay}
        disabled={isPending}
        className="ml-2 bg-green-600 text-white px-6 py-2 rounded"
      >
        {isPending ? "Processing..." : "Pay"}
      </button>
    </div>
  );
}
