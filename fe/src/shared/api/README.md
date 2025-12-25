# API Client

Centralized API communication layer.

## Files

- `apiClient.ts` - HTTP client with fetch API

## How to Use

```typescript
import { apiClient } from '../../../shared/api/apiClient';

// GET request
const response = await apiClient.get<User>('/users/1');

// POST request
const response = await apiClient.post<User>('/users', { name: 'John' });

// PUT request
const response = await apiClient.put<User>('/users/1', { name: 'Jane' });

// DELETE request
await apiClient.delete<void>('/users/1');
```

## Features

- Automatic JSON serialization/deserialization
- JWT token injection from localStorage
- Centralized error handling
- Base URL from environment variables
- Type-safe responses

## Configuration

Set API URL in `.env.local`:

```
VITE_API_URL=http://localhost:8080/api
```

Or use default: `http://localhost:8080/api`

## Adding Interceptors

To add request/response interceptors:

1. Extend the `ApiClient` class:

```typescript
class ExtendedApiClient extends ApiClient {
  async request<T>(endpoint: string, options?: RequestInit) {
    // Add logging, retry logic, etc.
    return super.request(endpoint, options);
  }
}
```

2. Export instance instead of class
