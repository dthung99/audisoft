import { apiClient } from '../../../shared/api/apiClient';
import { Sample, CreateSampleRequest, UpdateSampleRequest } from '../types';

export const sampleService = {
  createSample: (userId: number, data: CreateSampleRequest) =>
    apiClient.post<Sample>(`/sample?userId=${userId}`, data),

  getSample: (id: number) =>
    apiClient.get<Sample>(`/sample/${id}`),

  getUserSamples: (userId: number) =>
    apiClient.get<Sample[]>(`/sample/user/${userId}`),

  getAllSamples: () =>
    apiClient.get<Sample[]>('/sample'),

  updateSample: (id: number, userId: number, data: UpdateSampleRequest) =>
    apiClient.put<Sample>(`/sample/${id}?userId=${userId}`, data),

  deleteSample: (id: number, userId: number) =>
    apiClient.delete<void>(`/sample/${id}?userId=${userId}`),
};
