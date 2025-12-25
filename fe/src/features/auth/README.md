# Auth Feature

Authentication feature (sample).

## Structure

```
auth/
├── components/      # Auth-specific components (LoginForm, etc.)
├── pages/           # Page components (LoginPage, RegisterPage)
├── services/        # API calls (authService)
├── types/           # TypeScript types (LoginRequest, etc.)
├── hooks/           # Custom hooks (if any)
├── index.ts         # Public API
└── README.md        # Documentation
```

## How to Use

```typescript
import { authService, LoginForm } from '../../features/auth';

// Use service
await authService.login({ email, password });

// Use component
<LoginForm onSubmit={handleLogin} />

// Use types
const request: LoginRequest = { email, password };
```

## Public API (from index.ts)

- `authService` - Authentication API calls
- `LoginForm` - Login form component
- Types: `LoginRequest`, `RegisterRequest`, `AuthResponse`

## Adding New Components

Create in `components/` folder and export from `index.ts`:

```typescript
// components/ForgotPasswordForm.tsx
export const ForgotPasswordForm = () => { ... };

// index.ts
export { ForgotPasswordForm } from './components/ForgotPasswordForm';
```
