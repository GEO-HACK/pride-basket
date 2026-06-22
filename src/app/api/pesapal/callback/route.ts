import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // ✅ Log for debugging
  console.log("Pesapal Callback to the api:", body);



  return NextResponse.json({ received: true });
}
