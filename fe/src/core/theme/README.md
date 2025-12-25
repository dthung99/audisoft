# Theme Configuration

Application theme and design system.

## Files

- `theme.ts` - Color, spacing, and other design tokens

## How to Use

```typescript
import { theme } from '../theme/theme';

const buttonColor = theme.colors.primary;  // #0066cc
const padding = theme.spacing.md;          // 1rem
```

## How to Extend

1. Add new colors:

```typescript
export const theme = {
  colors: {
    primary: '#0066cc',
    secondary: '#6c757d',
    success: '#28a745',
    error: '#dc3545',
    newColor: '#ff6b6b',  // Add here
  },
};
```

2. Add new spacing:

```typescript
spacing: {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  huge: '4rem',  // Add here
},
```

3. Create theme provider:

```typescript
// ThemeProvider.tsx
export const ThemeProvider = ({ children }) => {
  return (
    <div style={{
      '--primary': theme.colors.primary,
    } as React.CSSProperties}>
      {children}
    </div>
  );
};
```

## Integration with Tailwind

If using Tailwind, extend `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    colors: theme.colors,
    spacing: theme.spacing,
  },
};
```
