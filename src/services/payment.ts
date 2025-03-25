import axios from 'axios';

// Define the possible transaction statuses
export type TransactionStatus = 'CREATED' | 'PENDING' | 'SUCCESSFUL' | 'FAILED' | 'EXPIRED';

// Define the response type for the payment status
interface PaymentStatusResponse {
  status: TransactionStatus;
  message?: string;
  data?: {
    amount: number;
    email?: string;
    userId?: string;
    externalId?: string;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Checks the status of a payment transaction
 * @param transId - The transaction ID returned from the initial payment request
 * @returns Promise<PaymentStatusResponse> - The status and details of the transaction
 * @throws Error if the request fails or if the transaction ID is invalid
 */
export async function checkPaymentStatus(transId: string): Promise<PaymentStatusResponse> {
  try {
    if (!transId) {
      throw new Error('Transaction ID is required');
    }

    // Get the base URL from environment variables
    const baseUrl = process.env.FAPSHI_BASE_URL!;
    
    // Get API credentials from environment variables
    const apiUser = process.env.FAPSHI_API_USER;
    const apiKey = process.env.FAPSHI_API_KEY;

    if (!apiUser || !apiKey) {
      throw new Error('Fapshi API credentials are not configured');
    }

    const response = await axios.get(`${baseUrl}/payment-status/${transId}`, {
      headers: {
        apiuser: apiUser,
        apikey: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle specific API errors
      if (error.response?.status === 404) {
        throw new Error('Transaction not found');
      } else if (error.response?.status === 403) {
        throw new Error('Invalid API credentials');
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
    }
    // Handle other types of errors
    throw new Error('Failed to check payment status');
  }
}


// Example usage:
/*
try {
  const status = await checkPaymentStatus('your-transaction-id');
  console.log('Payment status:', status.status);
  console.log('Transaction details:', status.data);
} catch (error) {
  console.error('Error checking payment status:', error.message);
}
*/
