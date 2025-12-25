import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SampleCard } from '../components/SampleCard';
import { Button } from '../../../shared/components/Button';
import { sampleService } from '../services/sampleService';
import { Sample } from '../types';

export default function SamplesListPage() {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('userId'));

  useEffect(() => {
    fetchSamples();
  }, []);

  const fetchSamples = async () => {
    setLoading(true);
    try {
      const response = await sampleService.getAllSamples();
      setSamples(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load samples');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this sample?')) {
      try {
        await sampleService.deleteSample(id, userId);
        setSamples(samples.filter((s) => s.id !== id));
      } catch (err) {
        setError('Failed to delete sample');
      }
    }
  };

  const handleEdit = (sample: Sample) => {
    navigate(`/sample/${sample.id}/edit`, { state: { sample } });
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Samples</h1>
        <Button variant="primary" onClick={() => navigate('/sample/new')}>
          New Sample
        </Button>
      </div>

      {error && <div className="text-red-600 mb-4 p-3 bg-red-50 rounded">{error}</div>}

      {loading ? (
        <p className="text-gray-600">Loading samples...</p>
      ) : samples.length === 0 ? (
        <p className="text-gray-600">No samples yet. Create one!</p>
      ) : (
        <div>
          {samples.map((sample) => (
            <SampleCard
              key={sample.id}
              sample={sample}
              isOwner={sample.userId === userId}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
