import { Input } from '../../../shared/components/Input';
import { Button } from '../../../shared/components/Button';
import { useSampleForm } from '../hooks/useSampleForm';

interface SampleFormProps {
  onSubmit: (data: any) => Promise<void>;
  loading?: boolean;
  initialData?: any;
  submitLabel?: string;
}

export const SampleForm = ({
  onSubmit,
  loading = false,
  initialData,
  submitLabel = 'Create Sample',
}: SampleFormProps) => {
  const { formData, errors, handleChange, validate, reset } = useSampleForm(initialData);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await onSubmit(formData);
      reset();
    } catch (err) {
      // Error handled by parent component
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
      <Input
        label="Title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
        placeholder="Sample title"
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.content ? 'border-red-500' : 'border-gray-300'
          }`}
          rows={6}
          placeholder="Write your sample content here..."
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
      </div>

      <Input
        label="Description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Optional brief description"
      />

      <Button type="submit" variant="primary" loading={loading}>
        {submitLabel}
      </Button>
    </form>
  );
};
