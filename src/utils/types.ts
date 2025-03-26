export type UUID = string;

export type UserRole = 'freelancer' | 'client';
export type JobStatus = 'open' | 'in_progress' | 'completed' | 'cancelled';
export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';
export type PaymentStatus = 'pending' | 'completed' | 'failed';

export interface User {
  id: UUID;
  name: string;
  email: string;
  password_hash: string;
  role: UserRole;
  profile_picture?: string;
  bio?: string;
  skills?: string[];
  created_at: string;
  verified: boolean;
}

export interface Job {
  id: UUID;
  client_id: UUID;
  title: string;
  description: string;
  budget: number;
  category?: string;
  tags?: string[];
  status: JobStatus;
  created_at: string;
  deadline?: string;
}

export interface Application {
  id: UUID;
  job_id: UUID;
  freelancer_id: UUID;
  cover_letter: string;
  proposed_budget?: number;
  status: ApplicationStatus;
  created_at: string;
}

export interface Payment {
  id: UUID;
  job_id: UUID;
  client_id: UUID;
  freelancer_id: UUID;
  amount: number;
  status: PaymentStatus;
  transaction_reference?: string;
  created_at: string;
  completed_at?: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}
