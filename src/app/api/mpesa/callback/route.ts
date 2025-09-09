
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const callbackData = await req.json();
    console.log('--- M-PESA Callback ---');
    console.log(JSON.stringify(callbackData, null, 2));
    console.log('--- End M-PESA Callback ---');

    // TODO: Add your business logic here, e.g.,
    // - Verify the callback data
    // - Check if the payment was successful
    // - Update your database with the transaction status
    // - Notify the user of the payment status

    return NextResponse.json({ message: 'Callback received successfully' });
  } catch (error) {
    console.error('Error handling M-PESA callback:', error);
    return NextResponse.json(
      { message: 'Error handling callback' },
      { status: 500 }
    );
  }
}
