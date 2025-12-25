# Shared Utilities

Utility functions and helpers used across features.

## Files

- `validation.ts` - Form validation functions

## How to Add New Utilities

1. Create utility file:

```typescript
// dateUtils.ts
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US');
};

export const formatTime = (date: string): string => {
  return new Date(date).toLocaleTimeString('en-US');
};

export const isExpired = (date: string): boolean => {
  return new Date(date) < new Date();
};
```

2. Use in components:

```typescript
import { formatDate } from '../../../shared/utils/dateUtils';

<p>{formatDate(post.createdAt)}</p>
```

## Utility Guidelines

- Pure functions (no side effects)
- No external dependencies
- Well-documented
- Handle edge cases
- TypeScript typed
- Unit tested
