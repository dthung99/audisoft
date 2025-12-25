export interface Sample {
  id: number;
  userId: number;
  title: string;
  content: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSampleRequest {
  title: string;
  content: string;
  description?: string;
}

export interface UpdateSampleRequest {
  title?: string;
  content?: string;
  description?: string;
}
