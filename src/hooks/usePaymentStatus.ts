import { useState, useEffect } from 'react';
import { checkPaymentStatus, TransactionStatus } from '@/services/payment';

interface PaymentData {
  amount: number;
  email?: string;
  userId?: string;
  externalId?: string;
  createdAt: string;
  updatedAt: string;
}

interface PaymentStatusResponse {
  status: TransactionStatus;
  message?: string;
  data?: PaymentData;
}

interface PaymentStatusState {
  status: TransactionStatus | null;
  isLoading: boolean;
  error: string | null;
  data: PaymentData | null;
  message?: string;
}

export function usePaymentStatus(transId: string | null) {
  const [state, setState] = useState<PaymentStatusState>({
    status: null,
    isLoading: false,
    error: null,
    data: null,
    message: undefined,
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchStatus = async () => {
      if (!transId) return;

      setState(prev => ({ ...prev, isLoading: true, error: null }));

      try {
        const response: PaymentStatusResponse = await checkPaymentStatus(transId);
        setState({
          status: response.status,
          isLoading: false,
          error: null,
          data: response.data || null,
          message: response.message,
        });

        // If status is not final (CREATED or PENDING), continue polling
        if (response.status === 'CREATED' || response.status === 'PENDING') {
          intervalId = setInterval(fetchStatus, 5000); // Poll every 5 seconds
        }
      } catch (error) {
        setState({
          status: null,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to check payment status',
          data: null,
          message: undefined,
        });
      }
    };

    fetchStatus();

    // Cleanup interval on unmount or when transId changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [transId]);

  return state;
} 