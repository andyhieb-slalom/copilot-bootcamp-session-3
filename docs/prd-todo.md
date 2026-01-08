# Product Requirements Document (PRD) - TODO App Upgrade: Due Dates, Priorities, and Filters

## 1. Overview

We are upgrading the basic TODO app to support due dates, simple priority levels, and date-based filters so users can better organize tasks and focus on what’s urgent. This MVP is intentionally lean and front-end only, using local storage, to remain simple and teachable without backend changes.

---

## 2. MVP Scope

- Due date: optional ISO `YYYY-MM-DD` field on each task; invalid values ignored (treated as absent).
- Priority: enum `P1 | P2 | P3`; default `P3` when unspecified.
- Filters: All, Today, Overdue.
- Filter behavior: 
  - All: shows completed and incomplete tasks.
  - Today/Overdue: show only incomplete tasks.
- Storage: local only (no backend/external storage changes).
- Validation: 
  - `title` is required.
  - `priority` defaults to `P3` if invalid or missing.
  - `dueDate` must be ISO `YYYY-MM-DD`; invalid values ignored.

---

## 3. Post-MVP Scope

- Overdue highlight: visually emphasize overdue tasks (e.g., red styling) to improve scanability.
- Sorting rules for task list: 
  - Overdue first,
  - then by priority (P1 → P2 → P3),
  - then by due date ascending (soonest first),
  - undated tasks last.

---

## 4. Out of Scope

- Notifications.
- Recurring tasks.
- Multi-user functionality.
- Keyboard navigation and special accessibility features.
- External storage or backend changes (stay local-only).
