# Andre Jose Esplana — Web Developer & Programmer Portfolio

A high-performance, accessible developer portfolio showcasing institutional state university administrative software alongside commercial client web applications. Grounded in registrar-level data integrity developed for the **Office of the College Secretary (OCS)** at the **University of the Philippines Los Baños (UPLB) College of Forestry and Natural Resources (CFNR)**, balanced with modern commercial product engineering.

---

## 🌟 Positioning & Dual Track Strategy

This portfolio is architected around two complementary engineering strengths:

1. **UPLB CFNR Office of the College Secretary (Institutional Systems)**:
   - High-stakes registrar workflows, student transcript evaluation, cryptographic QR document verification, multi-office paperless routing, and zero-downtime academic clearance pipelines.
2. **Commercial Client Engineering (Boutique Web Products)**:
   - Performant SaaS platforms, real-time logistics monorepos, hardware-integrated point-of-sale systems, and high-converting intake scheduling tools.

---

## 🚀 Key Features

- **Dual-Theme Design System**:
  - **Light Mode (Default)**: Botanical Field Journal aesthetic (`#f7faf7` canvas, `#ffffff` surfaces, high-contrast `#0a2014` typography exceeding WCAG AAA standards).
  - **Dark Mode**: Forest Night aesthetic (`#060e0a` background, `#0c1811` cards, emerald accents).
  - **Anti-FOUC Synchronization**: Inline synchronous execution in `<head>` honoring `localStorage` and system `prefers-color-scheme` with zero flash of unstyled theme.
- **Architectural Deep-Dive Dossier Modal**:
  - Detailed spec breakdown for each project: Problem &rarr; Solution &rarr; Verified Outcome.
  - Interactive multi-screenshot gallery with previous/next chevron navigation, thumbnail strip, keyboard arrow traversal, and direct full-resolution view.
  - Accessible modal dialog complying with WCAG 2.1 (focus trap, Escape key listener, and focus restoration to triggering buttons).
- **Interactive Project Filter**:
  - Perspective switcher toggling between **All Projects (6)**, **UPLB CFNR OCS Systems (3)**, and **Commercial Client Projects (3)** with dynamic category counts.
- **Canopy Mode**:
  - Canvas-based organic leaf physics particle animation celebrating the forest heritage.
- **Client Inquiry Brief Form**:
  - Accessible, fully-validated contact brief form with custom input validation and state management.
- **Direct Clipboard Integration**:
  - One-click email copy with visual feedback toast and automatic `document.execCommand('copy')` fallback for non-secure contexts.
- **Zero Framework Bloat**:
  - Built strictly with semantic **HTML5**, modern **CSS3 Custom Properties**, and modular **Vanilla JavaScript (ES6+)**. Entire code payload loads in milliseconds.

---

---

## 🛠️ Core Technology Stack & Skills

- **Backend & Database Systems**: **PHP** (PDO), **MySQL** / MariaDB, **Node.js**, **Supabase**, **Java**, **Google Apps Script**, REST APIs & WebSockets.
- **Frontend & Web Development**: **JavaScript** (ES6+), **React**, **Next.js**, **HTML5**, **CSS3**, Responsive UI Architecture.
- **Mobile & Hardware Integration**: **React Native**, **Android** (Java / Expo), Touchscreen Student Kiosks, Offline-First PWAs.
- **Visual Design & Media**: **Canva**, **Adobe Photoshop**, **Adobe Illustrator**, Publication Materials & Typography.

## 📂 Highlighted Systems

| Track | System | Architecture Stack | Verified Scale / Metric |
| :--- | :--- | :--- | :--- |
| **UPLB OCS** | **DTOCS-CFNR: Document Tracker & Kiosk Management System** | PHP 5.5+/8.x, MySQL/MariaDB, Node.js WebSockets, DataTables, Chart.js 4.4 | Real-Time Queue Sync, CSAR Live Integration, 9 Screenshots |
| **UPLB OCS** | **Essentials Hub: Student Welfare Pantry & Resource Management Platform** | PHP (PDO), MySQL, Touchscreen Kiosk, Daily Quota Bounds, Chart.js | Daily Quota Enforcement, 100% Audit Integrity, 6 Screenshots |
| **Commercial** | **Atlas Trucking & Multi-Hub Freight Operations Platform** | Next.js 16 (App Router), Expo 53, Firebase Firestore, Turborepo | 1,222 Commits, Multi-Island Logistics Hubs, SHA-256 Seals |
| **Commercial** | **VOCO Operations Floor & Dispatch Workstation** | Next.js 16 (App Router), React 19, Tailwind CSS v4, PostgreSQL | Real-Time Caller Telemetry & Dispatch Workstation, 6 Screenshots |
| **Commercial** | **VOCO Client Acquisition Portal & Staffing Platform** | Next.js 16 (Turbopack), React 19, Server Actions, PostgreSQL | 37/40 Heuristics Score, WCAG AA Compliant, 3 Screenshots |

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                      # Semantic single-page layout & accessibility structure
├── style.css                       # Master CSS import orchestrator
├── script.js                       # Main application lifecycle orchestrator
├── css/                            # Modular Design System Stylesheets
│   ├── tokens.css                  # Design tokens, UPLB CFNR colors & dark theme variables
│   ├── base.css                    # Modern CSS reset, container layouts, buttons & footer
│   ├── header.css                  # Sticky glassmorphic navigation & mobile drawer
│   ├── hero.css                    # Hero typography, badge pills & proof metrics strip
│   ├── projects.css                # Work section, perspective filters & mock browser cards
│   ├── graphics.css                # Visual design grid, pubmat cards & hover overlays
│   ├── sections.css                # Capabilities, services, heritage & client FAQ
│   ├── contact.css                 # Project brief inquiry form & one-click email card
│   └── modals.css                  # Project dossier modal, screenshot carousel & lightbox
├── js/                             # Modular JavaScript Controllers
│   ├── projects-data.js            # Architectural project database & metadata registry
│   ├── projects.js                 # Dynamic project card renderer & filter synchronizer
│   ├── graphics-data.js            # Facebook publication materials catalog & verified dates
│   ├── graphics.js                 # Pubmat grid renderer, year filter & image lightbox
│   ├── modal.js                    # Dossier dialog, interactive gallery carousel & focus trap
│   ├── canopy.js                   # Interactive foliage particle canvas physics
│   └── contact.js                  # One-click email copy & inquiry brief validation
└── assets/
    ├── graphics/                   # High-res publication materials & infographic designs
    └── screenshots/                # Real-world system screenshots (DTOCS, Essentials Hub, Atlas, VOCO)
```

---

## 📜 License

Content, case study specifications, and architecture descriptions are proprietary. Source code is licensed under the MIT License.

