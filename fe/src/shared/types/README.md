# Shared Types

TypeScript interfaces and types used across features.

## Files

- `index.ts` - Common data types (User, UserProfile, etc.)

## How to Add New Shared Types

1. Add to `index.ts`:

```typescript
export interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: number;
  userId: number;
  message: string;
  read: boolean;
  createdAt: string;
}
```

2. Use in features:

```typescript
import { Comment } from '../../../shared/types';

const comment: Comment = {
  id: 1,
  postId: 1,
  userId: 1,
  content: 'Great post!',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
```

## Type Guidelines

- Use `interface` for objects (better for extending)
- Use `type` for unions and primitives
- Document complex types with JSDoc comments
- Keep types in single file if small, split if large
- Export all public types
