import { TransactionStatus } from '@/services/payment';
import { usePaymentStatus } from '@/hooks/usePaymentStatus';

interface PaymentStatusProps {
  transId: string | null;
}

const statusColors: Record<TransactionStatus, string> = {
  CREATED: 'bg-blue-100 text-blue-800',
  PENDING: 'bg-yellow-100 text-yellow-800',
  SUCCESSFUL: 'bg-green-100 text-green-800',
  FAILED: 'bg-red-100 text-red-800',
  EXPIRED: 'bg-gray-100 text-gray-800',
};

const statusIcons: Record<TransactionStatus, string> = {
  CREATED: '📝',
  PENDING: '⏳',
  SUCCESSFUL: '✅',
  FAILED: '❌',
  EXPIRED: '⏰',
};

export function PaymentStatus({ transId }: PaymentStatusProps) {
  const { status, isLoading, error, data } = usePaymentStatus(transId);

  if (!transId) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No transaction ID provided</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg animate-pulse">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <span className="text-red-500">⚠️</span>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!status) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No status available</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{statusIcons[status]}</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Payment Status</h3>
            <p className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
              {status}
            </p>
          </div>
        </div>
        {data && (
          <div className="text-right">
            <p className="text-sm text-gray-500">Amount</p>
            <p className="text-lg font-semibold text-gray-900">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'XAF',
              }).format(data.amount)}
            </p>
          </div>
        )}
      </div>
      
      {data && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4">
            {data.email && (
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900">{data.email}</p>
              </div>
            )}
            {data.userId && (
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="text-sm font-medium text-gray-900">{data.userId}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-gray-500">Created At</p>
              <p className="text-sm font-medium text-gray-900">
                {new Date(data.createdAt).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="text-sm font-medium text-gray-900">
                {new Date(data.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 