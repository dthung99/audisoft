import { apiClient } from '../../../shared/api/apiClient';
import { LoginRequest, RegisterRequest, AuthResponse } from '../types';

export const authService = {
  login: (credentials: LoginRequest) =>
    apiClient.post<AuthResponse>('/auth/login', credentials),

  register: (data: RegisterRequest) =>
    apiClient.post<AuthResponse>('/auth/register', data),

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => apiClient.get('/auth/me'),

  setToken: (token: string) => {
    localStorage.setItem('authToken', token);
  },

  getToken: () => localStorage.getItem('authToken'),
};
