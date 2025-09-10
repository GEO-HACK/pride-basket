"use server";

import { getPesapalToken } from "./getpesapalToken";

export async function initiateStkPush(phone: string, amount: number) {
  const token = await getPesapalToken();

  const res = await fetch("https://pay.pesapal.com/v3/api/MobilePayments/SubmitOrderRequest", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: `order-${Date.now()}`,
      currency: "KES",
      amount: amount,
      description: "Payment for order",
      // TODO: Replace with your actual callback URL
      callback_url: "https://yourdomain.com/api/pesapal/callback",
      notification_id: process.env.PESAPAL_NOTIFICATION_ID,
      // TODO: Replace with actual customer data
      billing_address: {
        phone_number: '254745763175',
        email_address: "geoffreykirumba0@gmail.com",
        country_code: "KE",
        first_name: "Geoffrey",
        last_name: "Kirumba",
      },
    }),
  });

  if (!res.ok) throw new Error("Failed to initiate STK push");

  return await res.json();
}
