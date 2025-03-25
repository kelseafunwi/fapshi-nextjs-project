import axios, { AxiosError, AxiosResponse } from 'axios';
import { NextResponse } from 'next/server';

// Type definitions
interface PaymentLinkRequest {
  amount: number;          // Amount in smallest currency unit (>= 100)
  email?: string;          // Optional user email
  redirectUrl?: string;    // URL to redirect after payment
  userId?: string;         // Your system's user ID (alphanumeric + -_)
  externalId?: string;     // Your transaction reference ID
  message?: string;        // Payment description
  cardOnly?: boolean;      // Restrict to international payments
}

// Correct App Router format
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body: PaymentLinkRequest = await request.json();

    // Validate required parameters
    if (!body.amount || body.amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount - must be at least 100 units' },
        { status: 400 }
      );
    }

    // Construct API request
    const response: AxiosResponse = await axios.post(
      `${process.env.FAPSHI_BASE_URL}/initiate-pay`,
      body,
      {
        headers: {
          'apiuser': process.env.FAPSHI_API_USER,
          'apikey': process.env.FAPSHI_API_KEY
        },
      }
    );

    console.log(response.data);

    // Update the response handling
    if (!response.data?.link) {
      throw new Error('Invalid response from Fapshi API');
    }

    // Return the formatted response
    return NextResponse.json(response.data!);

  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Payment link creation failed:', axiosError.message);

    // Return structured error response
    return NextResponse.json(
      {
        error: 'Failed to create payment link',
        details: axiosError.response?.data ?? axiosError.message
      },
      { status: 500 }
    );
  }
}
