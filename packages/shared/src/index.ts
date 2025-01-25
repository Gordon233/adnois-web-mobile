// Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Constants
export const API_VERSION = 'v1';

// Utility functions
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
