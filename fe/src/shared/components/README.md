# Shared Components

Reusable UI components used across features.

## Files

- `Button.tsx` - Customizable button component
- `Input.tsx` - Input field with validation

## How to Add New Shared Components

1. Create component file:

```typescript
// TextArea.tsx
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = ({ label, error, ...props }: TextAreaProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <textarea {...props} />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
```

2. Use in features:

```typescript
import { TextArea } from '../../../shared/components/TextArea';

<TextArea label="Description" error={errors.description} />
```

## Component Guidelines

- Fully customizable via props
- Include error state handling
- Use Tailwind CSS for styling
- Keyboard accessible
- TypeScript typed
- Export with `React.forwardRef` for ref forwarding
