# Cloud Architecture Overview

This document provides a simple system-context view of the monorepo: a React frontend communicating with an Express API backed by an in-memory store.

```mermaid
flowchart TD
  User([User Browser]):::client -->|HTTPS| Frontend["React Frontend (SPA)"\nPort 3000]:::web

  Frontend -->|GET, POST /api/tasks| API[Express API Server\nPort 3030]:::api
  Frontend -->|GET, PUT, PATCH, DELETE /api/tasks/:id| API
  API --> Store[(In-Memory Store)]:::data

  subgraph Cloud[Deployment Context]
    Frontend
    API
    Store
  end

  classDef client fill:#f5f5f5,stroke:#212121,stroke-width:1px,color:#212121;
  classDef web fill:#1976d2,stroke:#0f4ea5,stroke-width:1px,color:#ffffff;
  classDef api fill:#ff9800,stroke:#c66900,stroke-width:1px,color:#212121;
  classDef data fill:#9e9e9e,stroke:#616161,stroke-width:1px,color:#212121;
```

- Notes:
  - The in-memory store is ephemeral and non-persistent.
  - The frontend interacts with the backend via RESTful endpoints returning JSON.
  - In local development, both services run within the same environment; cloud deployment would place them behind HTTPS.

## Legend
- Client: End-user browser; light gray.
- Web: React frontend SPA; blue (primary).
- API: Express REST API; orange (secondary).
- Data: In-memory store (ephemeral); gray.

## Sequence: Create TODO
```mermaid
sequenceDiagram
  participant U as User Browser
  participant F as React Frontend (SPA)
  participant A as Express API Server
  participant S as In-Memory Store

  U->>F: Open "Add Task" and submit
  F->>A: POST /api/tasks\n{title, description, dueDate}
  A->>S: Insert new task
  S-->>A: OK (task id)
  A-->>F: 201 Created\n{task}
  F->>A: GET /api/tasks (optional refresh)
  A-->>F: 200 OK\n[sorted list]
  F-->>U: Task appears in list
```
