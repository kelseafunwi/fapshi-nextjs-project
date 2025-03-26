'use client';  // Need this for useState in Next.js 13+

import axios from 'axios';
import { AxiosError } from 'axios';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Collect() {
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

interface PaymentErrorResponse {
  error: string;
}

// Add this interface to match the Fapshi API response
interface FapshiPaymentResponse {
  message: string;
  link: string;
  transId: string;
  dateInitiated: string;
}



/**
 * Creates a payment link using Fapshi's API
 * @param amount - Amount in smallest currency unit (e.g., 1000 = 10 XAF)
 * @param message - Payment description
 * @param redirectUrl - URL to redirect after payment
 * @returns Promise with the data
 */
  



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const amountInXAF = parseInt(amount); // Convert to smallest unit
      const redirectUrl = `${window.location.origin}/payment-complete`;

      const { data } = await axios.post<FapshiPaymentResponse>('/api/payment', {
        amount: amountInXAF,
        message: "Payment",
        redirectUrl
      });

      console.log(data)

      setMessage(data.link);

    } catch (error) {
      const axiosError = error as AxiosError<PaymentErrorResponse>;
    const errorMessage = axiosError.response?.data?.error || 
                        axiosError.message || 
                        'Payment failed';
    
      console.error('Payment initiation failed:', errorMessage);
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Fapshi Payment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Amount (XAF):</label>
          <input
            type="number"
            value={amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
            required
            min="1"
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full p-2 text-white bg-blue-500 rounded disabled:bg-blue-300"
        >
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}
