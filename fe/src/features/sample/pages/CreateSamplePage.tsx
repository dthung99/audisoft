import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SampleForm } from '../components/SampleForm';
import { sampleService } from '../services/sampleService';

export default function CreateSamplePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('userId'));

  const handleSubmit = async (data: any) => {
    setLoading(true);
    setError('');
    try {
      await sampleService.createSample(userId, data);
      navigate('/sample');
    } catch (err) {
      setError('Failed to create sample');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Sample</h1>
      {error && <div className="text-red-600 mb-4 p-3 bg-red-50 rounded">{error}</div>}
      <SampleForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}
