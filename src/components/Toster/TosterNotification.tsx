import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast as reactToastifyToast, ToastContainer, TypeOptions } from 'react-toastify';

interface Toast {
  id: number;
  message: string;
  type: TypeOptions;
  toastReactId: React.ReactText;
}

class ToastManager {
  private static toasts: Toast[] = [];
  private static toastIdCounter: number = 1;

  public static addToast(message: string, type: TypeOptions = "default"): void {
    if (!message) return;

    if (this.toasts.some(toast => toast.message === message)) {
      return;
    }

    const toastId = this.toastIdCounter++;

    const toastReactId = reactToastifyToast(message, { type });
    const newToast: Toast = { id: toastId, message, type, toastReactId };
    this.toasts.push(newToast);

    setTimeout(() => {
      this.removeToast(toastId);
    }, 5000); // 5000 milliseconds
  }

  public static removeToast(toastId: number): void {
    const toastIndex = this.toasts.findIndex(toast => toast.id === toastId);
    if (toastIndex !== -1) {
      const toast = this.toasts[toastIndex];
      reactToastifyToast.dismiss(toast.toastReactId);
      this.toasts.splice(toastIndex, 1);
    }
  }
}

export const addToast = ToastManager.addToast.bind(ToastManager);
export const removeToast = ToastManager.removeToast.bind(ToastManager);

const TosterNotification: React.FC = () => {
  return <ToastContainer position="top-right" autoClose={3000} />;
};

export default TosterNotification;
