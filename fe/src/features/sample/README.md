# Sample Feature

This is a sample feature demonstrating the feature-based frontend architecture.

## Structure

```
sample/
├── components/      # Feature-specific components
│   ├── SampleCard.tsx       # Display single sample
│   └── SampleForm.tsx       # Create/Edit sample form
├── pages/           # Full page components
│   ├── SamplesListPage.tsx  # List all samples
│   └── CreateSamplePage.tsx # Create new sample
├── services/        # API integration
│   └── sampleService.ts     # Sample API calls
├── types/           # TypeScript types
│   └── index.ts           # Sample interfaces
├── hooks/           # Custom hooks
│   └── useSampleForm.ts     # Form state management
├── index.ts         # Public API (barrel export)
└── README.md        # This file
```

## Feature Flow

```
Page (SamplesListPage)
  ↓
Components (SampleCard)
  ↓
Services (sampleService) → API Client
  ↓
Backend API
```

## How to Add a Similar Feature

1. Create folder: `fe/src/features/{feature-name}/`
2. Add subdirectories: `components/`, `pages/`, `services/`, `types/`, `hooks/`
3. Create TypeScript types in `types/index.ts`
4. Create API service in `services/{feature}Service.ts`
5. Create custom hooks in `hooks/` if needed
6. Create reusable components in `components/`
7. Create page components in `pages/`
8. Export public API in `index.ts`
9. Add routes to `core/router/Router.tsx`
10. Add this README.md for documentation

## Component Example

```typescript
// Component: SampleCard.tsx
interface SampleCardProps {
  sample: Sample;
  onEdit?: (sample: Sample) => void;
  onDelete?: (id: number) => void;
}

export const SampleCard = ({ sample, onEdit, onDelete }: SampleCardProps) => {
  return (
    <div className="border rounded p-4">
      <h2>{sample.title}</h2>
      <p>{sample.content}</p>
      <button onClick={() => onEdit?.(sample)}>Edit</button>
      <button onClick={() => onDelete?.(sample.id)}>Delete</button>
    </div>
  );
};
```

## Service Example

```typescript
// Service: sampleService.ts
export const sampleService = {
  createSample: (userId: number, data: CreateSampleRequest) =>
    apiClient.post<Sample>(`/sample?userId=${userId}`, data),

  getSample: (id: number) =>
    apiClient.get<Sample>(`/sample/${id}`),

  deleteSample: (id: number, userId: number) =>
    apiClient.delete<void>(`/sample/${id}?userId=${userId}`),
};
```

## Hook Example

```typescript
// Hook: useSampleForm.ts
export const useSampleForm = (initialData?: CreateSampleRequest) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    // validation logic
  };

  return { formData, errors, validate };
};
```

## Usage in Pages

```typescript
// Page: SamplesListPage.tsx
export default function SamplesListPage() {
  const [samples, setSamples] = useState<Sample[]>([]);

  useEffect(() => {
    sampleService.getAllSamples().then(res => setSamples(res.data));
  }, []);

  return (
    <div>
      {samples.map(sample => (
        <SampleCard key={sample.id} sample={sample} />
      ))}
    </div>
  );
}
```

## Key Principles

- **Isolation**: Feature is self-contained, can be deleted without affecting others
- **Public API**: Only export what's needed via `index.ts`
- **Types**: All data structures typed in `types/index.ts`
- **Services**: API calls centralized in `services/`
- **Hooks**: Reusable logic in custom hooks
- **Components**: Feature-specific, not shared with other features
- **Pages**: Full-screen views using components

## Integration

To use this feature in your app:

1. Add route in `core/router/Router.tsx`:
```typescript
import SamplesListPage from '../../features/sample/pages/SamplesListPage';

{
  path: '/sample',
  element: <SamplesListPage />,
}
```

2. Import and use service:
```typescript
import { sampleService } from '../../features/sample';
```

3. Import and use components:
```typescript
import { SampleCard } from '../../features/sample';
```
