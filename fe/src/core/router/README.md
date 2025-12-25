# Router Configuration

Central route management for the application.

## Files

- `Router.tsx` - React Router configuration

## How to Add Routes

1. Create page component in feature folder
2. Add route in `Router.tsx`:

```typescript
import PostsListPage from '../../features/posts/pages/PostsListPage';

export const router = createBrowserRouter([
  {
    path: '/posts',
    element: <PostsListPage />,
  },
  {
    path: '/posts/:id',
    element: <PostDetailPage />,
  },
]);
```

## Route Structure

```typescript
{
  path: '/feature/:id',           // URL path
  element: <FeaturePage />,       // Component to render
  errorElement: <ErrorPage />,    // Error fallback
  children: [                     // Nested routes
    { path: 'sub', element: <SubPage /> }
  ],
}
```

## Best Practices

- Use nested routes for layouts
- Use `:id` for dynamic segments
- Use `*` for 404 fallback
- Group related routes
- Use lazy loading for large components

## Example with Auth Layout

```typescript
{
  path: '/auth',
  element: <AuthLayout />,
  children: [
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ],
}
```
