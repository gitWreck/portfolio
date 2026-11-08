# VOCO Operations & Dispatch Platform

Comprehensive operations platform and caller workstation for **VOCO Global Solutions**—powering real-time call dispatching, task tracking, ticketing workflows, lead intake triage, and team floor telemetry.

---

## Project Overview

- **Project Name**: VOCO Admin & Operations Floor (`va-voco-admin-side`)
- **Initial Date of Creation**: **January 1, 2026** (Git initial commit: `2026-01-01 17:14:29 +0800`)
- **Ecosystem Role**: Internal operational backbone paired with the public client portal ([`va-voco-client-side`](../va-voco-client-side)), enabling agents and supervisors to triage incoming leads, manage accounts, and process support queues.
- **Architecture**: Next.js 16 App Router (React 19)
- **Styling**: Tailwind CSS v4 with unified brand design tokens (`brand-navy` `#0F172A`, `brand-blue` `#1D4ED8`, `brand-cyan` `#38BDF8`)
- **Database**: PostgreSQL connection pool via `pg` with SSL support for Supabase/Cloud PostgreSQL

---

## Key Modules & Features

- **Live Operations Dashboard (`/`)**:
  - Live floor overview with active call metrics, urgent ticket queues, and agent availability status.
  - Quick-action dispatch links and recent activity streams.
- **Dedicated Caller Workstation (`/clients/[id]`)**:
  - Distraction-free full-height interface decoupled from standard chrome.
  - Live call timers (`LiveClock`), real-time call note logger (`NoteLogger`), inline task checklist (`TaskCompleter`), and caller presence tracking (`WorkstationTracker`).
- **Lead Intake Queue (`/leads`)**:
  - Live stream of customer inquiries originating from the public client portal (`messages` table).
  - Single-click lead claim action assigning inbound prospects to active agents.
- **Task Management Engine (`/tasks`)**:
  - Filter toolbar with live status, priority, due date, client synchronization, and page size controls.
  - Active filter chips with one-click "Clear all" and bidirectional URL query sync (`?search=...&client=...`).
- **Ticket Dispatch & Resolution (`/admin/tickets`)**:
  - Multi-tier ticketing board (Urgent, High, Normal, Low) with assigned agents and status workflows.
  - Accessible ticket creation and assignment modals with `Escape` key and backdrop click-outside dismissal.
- **Team Presence & Floor Telemetry (`/admin/team`)**:
  - Real-time agent status roster (Online, In-Call, Busy, Away, Offline) with activity heatmaps and shift logging.
- **Administration & RBAC (`/admin/users`, `/admin/clients`, `/admin/logs`)**:
  - Role-based access control (Admin, Supervisor, Caller, Agent).
  - Comprehensive audit log trail tracking system-wide state changes and user sessions.
- **Global Search & TopBar Controls**:
  - Global `Cmd+K` / `Ctrl+K` keyboard shortcut instantly focusing the global search bar from anywhere.
  - Polled notification center (`AdminNotificationCenter`) with unread counters and dismissal actions.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | [Next.js (App Router)](https://nextjs.org/) | `^16.1.1` | React App Router framework & Route Handlers |
| **Library** | [React](https://react.dev/) | `^19.2.3` | Modern React UI component engine |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.0.0` | Design token system, responsive utility styles |
| **Icons** | Custom SVG Design System | — | Dependency-free, stroke-consistent icon suite ([`components/Icons.js`](components/Icons.js)) |
| **Database Client** | [`pg` (node-postgres)](https://node-postgres.com/) | `^8.16.3` | PostgreSQL connection pool with parameterization |
| **Context** | [`AuthContext`](app/context/AuthContext.js) | — | Centralized authentication, session persistence, and RBAC |

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **PostgreSQL Database**: Local PostgreSQL instance or hosted database (e.g., Supabase)

### Environment Configuration

Create a `.env.local` file in the project root:

```env
# PostgreSQL connection string (Supabase or direct connection)
POSTGRES_URL="postgresql://postgres:[YOUR-PASSWORD]@[YOUR-HOST]:5432/[YOUR-DATABASE]?sslmode=require"
```

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Access admin dashboard at
# http://localhost:3000
```

### Production Build

```bash
# Compile and optimize production build
npm run build

# Start production server
npm run start
```

---

## Project Structure

```text
va-voco-admin-side/
├── app/
│   ├── admin/
│   │   ├── clients/page.js    # Client account directory & management
│   │   ├── logs/page.js       # System audit and activity logs
│   │   ├── team/page.js       # Live floor team roster & presence telemetry
│   │   ├── tickets/page.js    # Multi-tier ticket dispatch & resolution
│   │   └── users/page.js      # User management & role administration
│   ├── api/
│   │   ├── admin/             # Administrative API route handlers
│   │   ├── auth/              # Authentication verification endpoints
│   │   ├── clients/           # Client record CRUD endpoints
│   │   ├── dashboard/         # Aggregated floor telemetry endpoints
│   │   ├── leads/             # Lead queue fetching & claim endpoints
│   │   ├── logs/              # Activity logging endpoints
│   │   ├── notifications/     # Notification dispatch & read status
│   │   ├── tasks/             # Task CRUD and filter endpoints
│   │   ├── tickets/           # Ticket dispatch and assignment endpoints
│   │   └── user/              # User profile & presence endpoints
│   ├── clients/[id]/page.js   # Distraction-free caller workstation
│   ├── context/
│   │   └── AuthContext.js     # Global authentication provider and session state
│   ├── leads/page.js          # Inbound client leads claim queue
│   ├── login/page.js          # Secure authentication portal
│   ├── settings/page.js       # User profile and caller workstation settings
│   ├── tasks/page.js          # Operational task queue with multi-filter toolbar
│   ├── globals.css            # Tailwind v4 configuration & brand color tokens
│   ├── layout.js              # Root layout with AuthProvider & DashboardLayout
│   └── page.js                # Live Operations Dashboard
├── components/
│   ├── AdminNotificationCenter.js  # Real-time notification drawer
│   ├── ClientCard.js               # Client summary widget for workstation
│   ├── DashboardLayout.js          # App shell with responsive main container
│   ├── Icons.js                    # Centralized SVG icon system
│   ├── LiveClock.js                # Synchronized call and shift timer
│   ├── NoteLogger.js               # Real-time caller interaction note taker
│   ├── Sidebar.js                  # Navigation sidebar with role gating
│   ├── StatusBadge.js              # Universal status & priority badge component
│   ├── TaskCompleter.js            # Inline task checklist resolution controller
│   ├── TopBar.js                   # Operational header with Cmd+K search
│   ├── UserActivityTracker.js      # Agent presence & heartbeat logger
│   └── WorkstationTracker.js       # Workstation session telemetry
├── lib/
│   └── db.js                  # Database connection pool helper
├── mds/
│   └── design-layout-improvement-checklist.md # Impeccable UI/UX audit & resolution log
├── public/                    # Static assets and icons
└── package.json               # Dependencies and scripts
```

---

## Design System & Accessibility Compliance

The user interface follows the **Impeccable** design framework for operational dispatch systems:

- **Heuristic Review**: Full audit documented in [`mds/design-layout-improvement-checklist.md`](mds/design-layout-improvement-checklist.md) covering Nielsen's 10 Usability Heuristics.
- **Accessibility & Contrast**: Zero WCAG AA contrast failures across dark and light surface layers.
- **Ergonomics**: Universal `Cmd+K` search focus, `Escape` key and backdrop modal dismissal, and centralized status badges.

---

## License

Private repository. All rights reserved &copy; 2026 VOCO Global Solutions Inc.
