# State Management

Global state management configuration.

## Options

Choose one approach and configure it here:

### 1. Redux (Best for complex state)

```bash
npm install @reduxjs/toolkit react-redux
```

```typescript
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
```

### 2. Zustand (Simple and lightweight)

```bash
npm install zustand
```

```typescript
// store.ts
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

### 3. Context API (Built-in React)

```typescript
// AuthContext.tsx
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
```

## Recommended Choice

For new projects: **Zustand** (simplicity + power)
For complex apps: **Redux** (powerful devtools)
For simple apps: **Context API** (no dependencies)

## How to Set Up Zustand

1. Create store in this folder
2. Export hooks from store
3. Use in components with `const { state, action } = useStore()`
