# Shared Hooks

Custom React hooks used across features.

## Files

- `useApi.ts` - Fetch data from API with loading/error states

## How to Add New Hooks

1. Create hook file:

```typescript
// useLocalStorage.ts
export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStoredValue = (value: any) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setStoredValue];
};
```

2. Use in components:

```typescript
const [user, setUser] = useLocalStorage('user', null);
```

## Hook Guidelines

- Start with `use` prefix
- Return state and functions
- Handle cleanup in `useEffect`
- Document parameters and return value
- Use TypeScript generics for flexibility
