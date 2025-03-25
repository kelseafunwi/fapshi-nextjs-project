import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, email } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Amount must be at least 100 XAF' },
        { status: 400 }
      );
    }

    // Get the base URL from environment variables
    const baseUrl = process.env.FAPSHI_BASE_URL!;
    
    // Get API credentials from environment variables
    const apiUser = process.env.FAPSHI_API_USER;
    const apiKey = process.env.FAPSHI_API_KEY;

    if (!apiUser || !apiKey) {
      return NextResponse.json(
        { error: 'Fapshi API credentials are not configured' },
        { status: 500 }
      );
    }

    const response = await axios.post(
      `${baseUrl}/create-payment`,
      {
        amount,
        email,
      },
      {
        headers: {
          apiuser: apiUser,
          apikey: apiKey,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Payment creation error:', error);
    
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.response?.data?.message || 'Failed to create payment' },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 