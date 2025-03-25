'use client';

import { useState } from 'react';
import { PaymentStatus } from '@/components/PaymentStatus';
import axios from 'axios';

export default function PaymentsPage() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [transId, setTransId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);

  const handleCreatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/create-payment', {
        amount: parseInt(amount),
        email: email || undefined,
      });

      setTransId(response.data.transId);
      setPaymentLink(response.data.paymentLink);
    } catch (error) {
      setError('Failed to create payment link. Please try again.');
      console.error('Payment creation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Payment Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payment Creation Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Create Payment Link</h2>
          
          <form onSubmit={handleCreatePayment} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount (XAF)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter amount"
                required
                min="100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter email"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? 'Creating...' : 'Create Payment Link'}
            </button>
          </form>

          {paymentLink && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Payment Link</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  readOnly
                  value={paymentLink}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(paymentLink)}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Payment Status */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Status</h2>
          <PaymentStatus transId={transId} />
        </div>
      </div>
    </div>
  );
} 