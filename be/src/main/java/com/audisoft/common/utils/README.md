# Utilities

This folder contains utility classes and helper functions.

## How to Add Utilities

1. Create a utility class with static methods:

```java
public class StringUtils {
    public static boolean isValidEmail(String email) {
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    public static String capitalize(String str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
}
```

2. Use in your code:

```java
if (StringUtils.isValidEmail(email)) {
    // process email
}
```

## Common Utilities to Add

- `DateUtils.java` - Date and time utilities
- `StringUtils.java` - String manipulation
- `ValidationUtils.java` - Validation helpers
- `NumberUtils.java` - Number formatting
