# AI Medical Assistant - Complete Build Reference Guide

A comprehensive guide to the architecture, features, and best practices used in the **felineco/be-fe** monorepo.

---

## 📋 Table of Contents

1. [Backend Features](#backend-features)
2. [Frontend Features](#frontend-features)
3. [Build & Deployment Patterns](#build--deployment-patterns)
4. [Development Workflow](#development-workflow)
5. [Code Quality Standards](#code-quality-standards)
6. [Key Architectural Decisions](#key-architectural-decisions)

---

## 🔧 Backend Features

### Core Framework & Stack
- **Framework:** NestJS 11.1.3 (TypeScript)
- **Database:** MongoDB (Mongoose)
- **Real-time:** WebSocket (Socket.IO 4.8.1)
- **Runtime:** Node.js (Alpine Linux)

### 1. Authentication & Authorization (RBAC)
- **JWT Authentication:** HTTP-only cookies for tokens
- **OAuth Support:** Google & Facebook login
- **Token Refresh:** Auto-refresh on 401 responses
- **Permission Model:** Privilege + Operation compound key
  - Privileges: USER, SESSION_TEMPLATE
  - Operations: CREATE, READ, UPDATE, DELETE, MANAGE
- **Decorator-Based Guards:** `@Auth(...policies)` for route protection

### 2. Real-time WebSocket Communication
- **Gateway:** `/ws/ai-assistants` with JWT auth via cookies
- **Room-based Broadcasting:** `user_${userId}` for targeted sync
- **Multi-device Support:** Same user, multiple sockets receive updates
- **In-Memory Session State:** Per-user state stored in RAM
  - Images/Audios/Transcriptions/Output Fields
  - Language preferences
  - AI thinking status
- **Orphan Cleanup:** Auto-delete user models after 1 hour inactivity
- **Sync Events:**
  - Server → Client: `sync:initialize`, `sync:add_images`, `sync:update_note_fields`, `sync:ai_status`
  - Client → Server: `audio_chunk` (streaming)

### 3. AI Integration
- **Image Analysis:** OpenAI GPT-5 with structured outputs (Zod)
- **Audio Transcription:** Google Gemini 2.5-FLASH-LITE with incremental context
- **Token Usage Tracking:** Monitor costs
- **Retry Logic:** Exponential backoff for failures

### 4. Audio Processing
- **Chunk Size:** 2 seconds (configurable)
- **Overlap:** 2 seconds between chunks for transcription context
- **Format:** M4A (audio/mp4)
- **Processing:** FFmpeg for chunk combining, trimming
- **Queue System:** In-memory deque for real-time batching

### 5. File Storage (AWS S3)
- **Integration:** Presigned URLs for client direct upload
- **Path Structure:** `bucket/images/{userId}/{timestamp}-{random}.{ext}`
- **Expiration:** 10 minutes default for presigned URLs
- **Server Role:** Download + analyze, don't handle upload traffic

### 6. In-Memory Queue System (2 Types)
**AudioQueueService** (real-time audio chunks):
- Key: `${sessionId}.${audioId}`
- Batches chunks and processes together
- Deduplicates via `processing` flag

**QueueService** (analysis triggers):
- Key: `sessionId`
- Batches pending triggers into single analysis
- Auto-retry: up to 3 times with exponential backoff (1s, 2s, 3s)

### 7. Configuration Management
- **Config Modules:** 8 specialized modules (ai, auth, database, logging, s3, queue, grpc, environment)
- **Environment Variables:** 65 total with sensible defaults
- **Runtime Exposure:** `/api/settings` endpoint for frontend
- **Validation:** ConfigService validates on startup

### 8. Health Checks
- **Terminus Health Check:** `/api/health` endpoint
- **Docker Integration:** Used for container liveness probes
- **Frequency:** Every 30 seconds

### 9. API Documentation
- **Swagger Support:** Configurable via SWAGGER_ENABLED env var
- **Endpoint Prefix:** `/api` for all routes
- **Custom Response Format:** `@ApiWrappedResponse()` decorator

### 10. Database Features
- **ODM:** Mongoose for MongoDB
- **Schemas:** Strongly-typed models
- **Indexes:** Compound indexes on critical queries (Permission: privilege+operation)
- **Embedded Documents:** OutputField[] in SessionTemplate
- **Relationships:** User → Roles → Permissions

### 11. Logging & Monitoring
- **Winston Logger:** Structured logging
- **CloudWatch Integration:** Production logging
- **Request/Response Logging:** Via interceptors
- **Error Tracking:** Global exception filter

### 12. Development Utilities
- **Seeding Service:** Database initialization (roles, permissions, default users)
- **Test Module:** Development-only testing endpoints
- **Hot Reload:** `nest start --watch` with auto-reload

---

## 🎨 Frontend Features

### 1. Multi-Language Support (i18n)

### 2. Theme Management: Light/Dark Mode

### 3. Responsive Design

### 4. API Client & Interceptors: Axios + Store redux

### 5. Routing
- **Router Type:** HashRouter (static hosting friendly)

