import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Registration from '@/models/Registration';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await dbConnect();

    // Parse request body
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'dateOfBirth',
      'gender',
      'address',
      'city',
      'state',
      'zipCode',
      'emergencyContact',
      'emergencyPhone',
      'programInterest',
    ];

    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingRegistration = await Registration.findOne({ email: body.email });

    if (existingRegistration) {
      return NextResponse.json(
        {
          success: false,
          error: 'A registration with this email already exists',
        },
        { status: 409 }
      );
    }

    // Create new registration
    const registration = await Registration.create(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Registration submitted successfully',
        data: {
          id: registration._id,
          email: registration.email,
          firstName: registration.firstName,
          lastName: registration.lastName,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Registration error:', error);

    // Handle mongoose validation errors
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ValidationError') {
      const validationError = error as unknown as { errors: Record<string, { message: string }> };
      const errors = Object.values(validationError.errors).map((err) => err.message);
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve registrations (for admin purposes)
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // You might want to add authentication here
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (email) {
      const registration = await Registration.findOne({ email });
      if (!registration) {
        return NextResponse.json(
          { success: false, error: 'Registration not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: registration });
    }

    // Return all registrations (consider adding pagination and authentication)
    const registrations = await Registration.find({}).sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      count: registrations.length,
      data: registrations,
    });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch registrations' },
      { status: 500 }
    );
  }
}
