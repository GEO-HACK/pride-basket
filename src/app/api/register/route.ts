import { NextRequest, NextResponse } from 'next/server'

const BREVO_API = 'https://api.brevo.com/v3'

interface RegistrationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  address: string
  city: string
  state: string
  zipCode: string
  guardianName: string
  guardianPhone: string
  guardianEmail: string
  medicalConditions: string
  emergencyContact: string
  emergencyPhone: string
  programInterest: string
  skills: string
  experience: string
  termsAccepted: boolean
}

async function addContactToList(data: RegistrationData) {
  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  if (!apiKey || !listId) throw new Error('Brevo API key or list ID not configured')

  const res = await fetch(`${BREVO_API}/contacts`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email: data.email,
      attributes: {
        FIRSTNAME: data.firstName,
        LASTNAME: data.lastName,
        SMS: data.phone,
        DATE_OF_BIRTH: data.dateOfBirth,
        GENDER: data.gender,
        ADDRESS: data.address,
        CITY: data.city,
        STATE: data.state,
        ZIP_CODE: data.zipCode,
        AGE_GROUP: data.programInterest,
        GUARDIAN_NAME: data.guardianName || '',
        GUARDIAN_PHONE: data.guardianPhone || '',
        GUARDIAN_EMAIL: data.guardianEmail || '',
        EMERGENCY_CONTACT: data.emergencyContact,
        EMERGENCY_PHONE: data.emergencyPhone,
        MEDICAL_CONDITIONS: data.medicalConditions || '',
        SKILLS: data.skills || '',
        EXPERIENCE: data.experience || '',
      },
      listIds: [parseInt(listId)],
      updateEnabled: true,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    // DUPLICATE_PARAMETER means the contact exists and was updated — that's fine
    if (err.code !== 'DUPLICATE_PARAMETER') {
      throw new Error(err.message || 'Failed to add contact to Brevo list')
    }
  }
}

async function notifyOwner(data: RegistrationData) {
  const apiKey = process.env.BREVO_API_KEY
  const ownerEmail = process.env.BREVO_OWNER_EMAIL
  const senderEmail = process.env.BREVO_SENDER_EMAIL

  if (!apiKey || !ownerEmail || !senderEmail) return

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#f97316">New Basketball Registration</h2>

      <h3 style="margin-bottom:4px">Personal Details</h3>
      <p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Date of Birth:</b> ${data.dateOfBirth}</p>
      <p><b>Gender:</b> ${data.gender}</p>
      <p><b>Address:</b> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>

      <hr style="margin:16px 0"/>

      <h3 style="margin-bottom:4px">Program</h3>
      <p><b>Age Group:</b> ${data.programInterest}</p>
      <p><b>Skills:</b> ${data.skills || 'N/A'}</p>
      <p><b>Experience:</b> ${data.experience || 'N/A'}</p>

      <hr style="margin:16px 0"/>

      <h3 style="margin-bottom:4px">Emergency &amp; Guardian</h3>
      <p><b>Emergency Contact:</b> ${data.emergencyContact} — ${data.emergencyPhone}</p>
      <p><b>Guardian:</b> ${data.guardianName || 'N/A'} — ${data.guardianPhone || 'N/A'} — ${data.guardianEmail || 'N/A'}</p>
      <p><b>Medical Conditions:</b> ${data.medicalConditions || 'None reported'}</p>
    </div>
  `

  await fetch(`${BREVO_API}/smtp/email`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: { name: 'DaggoPride Registration', email: senderEmail },
      to: [{ email: ownerEmail }],
      subject: `New Registration: ${data.firstName} ${data.lastName} — ${data.programInterest}`,
      htmlContent: html,
    }),
  })
}

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationData = await request.json()

    const required = [
      'firstName', 'lastName', 'email', 'phone', 'dateOfBirth',
      'gender', 'address', 'city', 'state', 'zipCode',
      'emergencyContact', 'emergencyPhone',
    ]
    const missing = required.filter((f) => !body[f as keyof RegistrationData])
    if (missing.length) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    if (!body.termsAccepted) {
      return NextResponse.json(
        { success: false, error: 'You must accept the Terms & Conditions to register.' },
        { status: 400 }
      )
    }

    await addContactToList(body)
    await notifyOwner(body)

    return NextResponse.json({ success: true, message: 'Registration submitted successfully' })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Registration failed' },
      { status: 500 }
    )
  }
}
