# DTOs (Data Transfer Objects)

This folder contains data transfer objects used across the application.

## Files

- `ApiResponse.java` - Standard API response wrapper for all endpoints

## How to Use ApiResponse

```java
// Success response
ApiResponse.success("Message", data)

// Error response
ApiResponse.error("Error message")
```

## How to Add New DTOs

1. Create a new DTO class:

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String name;
    private String email;
}
```

2. Use in controller:

```java
@GetMapping
public ResponseEntity<ApiResponse<UserDTO>> getUser() {
    UserDTO user = new UserDTO("John", "john@example.com");
    return ResponseEntity.ok(ApiResponse.success("User retrieved", user));
}
```

## Naming Convention

- Request DTOs: `{Entity}Request` (e.g., `UserRequest`)
- Response DTOs: `{Entity}DTO` or `{Entity}Response`
