'use client';

import { ToastContext, ToastType } from "@/context/toast-context";
import { useContext } from "react";

export default function Toast() {
  const { toasts, removeToast }  = useContext(ToastContext) || {toasts: [], removeToast: () => {}};

  const getToastStyles = (type: ToastType['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${getToastStyles('info')} px-4 py-3 rounded-lg shadow-lg flex items-center justify-between min-w-80 max-w-md transition-all duration-300 ease-in-out`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {toast.showUndo && toast.onUndo && (
              <button
                onClick={() => {
                  toast.onUndo?.();
                  removeToast(toast.id);
                }}
                className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded transition-colors"
              >
                Undo
              </button>
            )}
            
            <button
              onClick={() => removeToast(toast.id)}
              className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 