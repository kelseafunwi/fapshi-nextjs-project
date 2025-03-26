import { toast } from 'react-hot-toast';

/**
 * Toast types for different notification styles
 */
export type ToastType = 'success' | 'error' | 'loading' | 'info';

/**
 * Toast service for handling application notifications
 */
export class ToastService {
  /**
   * Shows a toast notification
   * 
   * @param message - Message to display
   * @param type - Type of toast (success, error, loading, info)
   * @returns Toast ID if needed for updating loading state
   * 
   * @example
   * ```typescript
   * const toastService = new ToastService();
   * 
   * // Success toast
   * toastService.show('Operation successful!', 'success');
   * 
   * // Loading toast
   * const loadingId = toastService.show('Processing...', 'loading');
   * // ... after operation completes
   * toastService.dismiss(loadingId);
   * ```
   */
  show(message: string, type: ToastType = 'info') {
    const options = {
      duration: type === 'loading' ? Infinity : 5000,
      className: 'bg-red-950 text-white',
      style: {
        padding: '16px',
        borderRadius: '10px',
        background: 'rgba(127, 29, 29, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        color: '#fff',
      },
    };

    switch (type) {
      case 'success':
        return toast.success(message, options);
      case 'error':
        return toast.error(message, options);
      case 'loading':
        return toast.loading(message, options);
      default:
        return toast(message, options);
    }
  }

  /**
   * Dismisses a specific toast by ID
   * 
   * @param toastId - ID of the toast to dismiss
   * 
   * @example
   * ```typescript
   * const toastService = new ToastService();
   * const id = toastService.show('Loading...', 'loading');
   * // Later...
   * toastService.dismiss(id);
   * ```
   */
  dismiss(toastId: string) {
    toast.dismiss(toastId);
  }

  /**
   * Updates an existing toast
   * 
   * @param toastId - ID of the toast to update
   * @param message - New message
   * @param type - New type
   * 
   * @example
   * ```typescript
   * const toastService = new ToastService();
   * const id = toastService.show('Processing...', 'loading');
   * // Later...
   * toastService.update(id, 'Success!', 'success');
   * ```
   */
  update(toastId: string, message: string, type: ToastType) {
    toast.dismiss(toastId);
    return this.show(message, type);
  }
} 