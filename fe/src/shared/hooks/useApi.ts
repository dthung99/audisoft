import { useState, useCallback } from 'react';
import { apiClient } from '../api/apiClient';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useApi = <T,>() => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (endpoint: string, options?: RequestInit) => {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await apiClient.get<T>(endpoint);
        setState({ data: response.data, loading: false, error: null });
        return response.data;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setState({ data: null, loading: false, error: errorMessage });
        throw err;
      }
    },
    []
  );

  return { ...state, execute };
};
