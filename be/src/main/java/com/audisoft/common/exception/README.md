# Exception Handling

This folder contains custom exceptions for the application.

## Files

- `ResourceNotFoundException.java` - Thrown when a resource is not found
- `GlobalExceptionHandler.java` - Handles all exceptions and returns proper HTTP responses

## How to Add New Exceptions

1. Create a new exception class extending `RuntimeException`:

```java
public class CustomException extends RuntimeException {
    public CustomException(String message) {
        super(message);
    }
}
```

2. Add handler in `GlobalExceptionHandler.java`:

```java
@ExceptionHandler(CustomException.class)
public ResponseEntity<Map<String, String>> handleCustomException(CustomException ex) {
    Map<String, String> error = new HashMap<>();
    error.put("message", ex.getMessage());
    error.put("status", "CUSTOM_ERROR");
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
}
```

3. Throw exception in service:

```java
throw new CustomException("Something went wrong");
```
