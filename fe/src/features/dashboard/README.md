# Dashboard Feature

Main dashboard feature (sample).

## Structure

```
dashboard/
├── components/      # Dashboard components
├── pages/           # Dashboard page
├── services/        # API calls (if needed)
├── types/           # TypeScript types
├── hooks/           # Custom hooks
├── index.ts         # Public API
└── README.md        # Documentation
```

## How to Use

```typescript
import { DashboardPage } from '../../features/dashboard';

<Route path="/dashboard" element={<DashboardPage />} />
```

## Adding Dashboard Widgets

1. Create component in `components/`:

```typescript
// components/StatCard.tsx
export const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg p-4">
    {icon}
    <h3>{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);
```

2. Use in page:

```typescript
// pages/DashboardPage.tsx
<StatCard title="Posts" value={postCount} />
<StatCard title="Users" value={userCount} />
```

## Public API

Nothing exported yet. Add components to `index.ts` as needed.
