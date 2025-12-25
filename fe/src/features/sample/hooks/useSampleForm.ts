import { useState } from 'react';
import { CreateSampleRequest, UpdateSampleRequest } from '../types';

export const useSampleForm = (initialData?: CreateSampleRequest | UpdateSampleRequest) => {
  const [formData, setFormData] = useState<any>(
    initialData || {
      title: '',
      content: '',
      description: '',
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title?.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.content?.trim()) {
      newErrors.content = 'Content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const reset = () => {
    setFormData({
      title: '',
      content: '',
      description: '',
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    validate,
    reset,
    setFormData,
    setErrors,
  };
};
