import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IRegistration extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  guardianName?: string;
  guardianPhone?: string;
  guardianEmail?: string;
  medicalConditions?: string;
  emergencyContact: string;
  emergencyPhone: string;
  programInterest: string;
  skills?: string;
  experience?: string;
  createdAt: Date;
}

const RegistrationSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['male', 'female', 'other', 'prefer-not-to-say'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true,
  },
  zipCode: {
    type: String,
    required: [true, 'ZIP code is required'],
    trim: true,
  },
  guardianName: {
    type: String,
    trim: true,
  },
  guardianPhone: {
    type: String,
    trim: true,
  },
  guardianEmail: {
    type: String,
    lowercase: true,
    trim: true,
  },
  medicalConditions: {
    type: String,
    trim: true,
  },
  emergencyContact: {
    type: String,
    required: [true, 'Emergency contact name is required'],
    trim: true,
  },
  emergencyPhone: {
    type: String,
    required: [true, 'Emergency contact phone is required'],
    trim: true,
  },
  programInterest: {
    type: String,
    required: [true, 'Program interest is required'],
    trim: true,
  },
  skills: {
    type: String,
    trim: true,
  },
  experience: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model recompilation during hot reloads in development
const Registration: Model<IRegistration> =
  mongoose.models.Registration || mongoose.model<IRegistration>('Registration', RegistrationSchema);

export default Registration;
