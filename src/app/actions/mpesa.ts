"use server"

import axios from "axios"

// getting the mpesa ACCESS TOKEN
async function getAccessToken() {
    const auth = Buffer.from(`${process.env.DARAJA_CONSUMER_KEY}:${process.env.DARAJA_CONSUMER_SECRET}`).toString('base64');

    const res = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        headers: {
            Authorization: `Basic ${auth}`
        }
    });
    
    return res.data.access_token;
}

// initiating the mpesa STK PUSH
export async function initiateMpesaPayment({
    phone,
    amount,
}: {
    phone: string;
    amount: number;
}) {
    const token = await getAccessToken();
    
    const timestamp = new Date()
    .toISOString()
    .replace(/[-:TZ.]/g,"")
    .slice(0, 14);
    const password = Buffer.from(`174379${process.env.DARAJA_PASSKEY}${timestamp}`).toString('base64');

     const payload = {
    BusinessShortCode: process.env.MPESA_SHORTCODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phone, // customer phone number (format 2547XXXXXXXX)
    PartyB: process.env.MPESA_SHORTCODE,
    PhoneNumber: phone,
    CallBackURL: process.env.MPESA_CALLBACK_URL,
    AccountReference: "TestPayment",
    TransactionDesc: "Next.js Payment",
  }

  const res = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return res.data;
}