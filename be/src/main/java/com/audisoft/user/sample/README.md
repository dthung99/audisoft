# Sample Module

This is a sample module demonstrating the modular backend architecture.

## Structure

```
sample/
├── entity/          # JPA entities (Sample.java)
├── repository/      # Data access layer
├── service/         # Business logic
├── controller/      # REST API endpoints
└── README.md        # Documentation
```

## What This Module Does

- Create, read, update, delete samples
- Retrieve user's samples
- Retrieve all samples

## How to Add a Similar Module

1. Create a new folder: `be/src/main/java/com/audisoft/{module-name}/`
2. Add subdirectories: `entity/`, `repository/`, `service/`, `controller/`
3. Create your entity class in `entity/` folder
4. Create repository extending `JpaRepository<Entity, ID>` in `repository/`
5. Create service class with business logic in `service/`
6. Create controller with REST endpoints in `controller/`
7. Add this README.md for documentation

## Example Flow

**Request**: `POST /api/sample` with `{ title, content, description, userId }`
↓
**Controller**: `SampleController.createSample()`
↓
**Service**: `SampleService.createSample()` - business logic
↓
**Repository**: `SampleRepository.save()` - database access
↓
**Entity**: `Sample` - JPA model
↓
**Response**: 201 Created with Sample object

## Dependencies

- Spring Data JPA
- PostgreSQL Database
- Lombok (for @Data, @RequiredArgsConstructor)

## Testing

Create corresponding test class: `be/src/test/java/com/audisoft/sample/service/SampleServiceTest.java`
