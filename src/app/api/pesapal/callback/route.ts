import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // ✅ Log for debugging
  console.log("Pesapal Callback:", body);

  // TODO: update your DB with body.status, body.payment_method, etc.

  return NextResponse.json({ received: true });
}
