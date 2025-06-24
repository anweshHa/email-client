'use client';

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type ToastType = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  showUndo?: boolean;
  onUndo?: () => void;
};

type ToastContextType = {
  toasts: ToastType[];
  addToast: (toast: Omit<ToastType, 'id'>) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (toast: Omit<ToastType, 'id'>) => {
    const id = Date.now().toString();
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);

    // Auto remove toast after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const value = { toasts, addToast, removeToast };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export { ToastContext }; 