import { Sample } from '../types';
import { Button } from '../../../shared/components/Button';

interface SampleCardProps {
  sample: Sample;
  onEdit?: (sample: Sample) => void;
  onDelete?: (id: number) => void;
  isOwner?: boolean;
}

export const SampleCard = ({ sample, onEdit, onDelete, isOwner = false }: SampleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{sample.title}</h2>
      {sample.description && <p className="text-gray-600 mb-3">{sample.description}</p>}
      <p className="text-gray-800 mb-4">{sample.content}</p>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{new Date(sample.createdAt).toLocaleDateString()}</span>

        {isOwner && (
          <div className="space-x-2">
            {onEdit && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onEdit(sample)}
              >
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(sample.id)}
              >
                Delete
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
