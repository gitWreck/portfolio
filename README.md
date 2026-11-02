# Systems Developer Portfolio: UPLB CFNR OCS & Commercial Web Engineering

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

## 📂 Highlighted Systems

| Track | System | Architecture Stack | Verified Scale / Metric |
| :--- | :--- | :--- | :--- |
| **UPLB OCS** | **Academic Document Tracking & Verification Platform** | PHP, MySQL, QR Barcodes, Role-Based Access, PDFKit | 10,000+ Requests Routed, 0 Misplaced Files |
| **UPLB OCS** | **Student Curricular Evaluation & Clearance Engine** | PHP, MariaDB, Curricular Rules Engine, FPDF | 100% Curricular Audit Accuracy, 600+ Graduating Seniors |
| **UPLB OCS** | **Course Prerequisite Waiver & Enrollment Endorsement Core** | PHP/Laravel, MySQL, Digital Approvals, SMS/Email Dispatch | 48hr Turnaround (down from 2 weeks), 1,400+ Petitions |
| **Commercial** | **Atlas Trucking & Multi-Hub Freight Operations Platform** | Next.js 16 (App Router), Expo 53, Firebase Firestore, Turborepo | 1,222 Commits, Multi-Island Logistics Hubs, SHA-256 Seals |
| **Commercial** | **High-Converting Client Booking & Intake Platform** | TypeScript, Tailwind/CSS Tokens, Supabase, Twilio | 4.2x Intake Completion Rate, <5% No-Show Rate |
| **Commercial** | **Cloud POS & Real-Time Kitchen Display System** | Vanilla JS, IndexedDB, WebSocket Hub, Thermal ESC/POS | <150ms Ticket Latency, 100% Offline Resilient PWA |

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                      # Semantic single-page application structure & modals
├── style.css                       # Complete tokenized CSS design system & responsive layout
├── script.js                       # Vanilla JS application controllers (modal, filters, canopy, form)
├── DESIGN.md                       # Design system rules, token specifications & craft floor
├── DOCS.md                         # Product roadmap, information architecture & implementation plan
├── PRODUCT.md                      # Strategic positioning & project identity specifications
├── README.md                       # Project documentation & overview
└── assets/
    └── screenshots/
        ├── README.md               # Screenshot drop-in guide & recording recommendations
        └── atlas/
            ├── README.md           # Atlas Transport Corporation platform documentation
            └── screenshots/        # High-resolution web & mobile platform captures
                ├── 08_admin_dashboard.png
                ├── 06_tracking_sample.png
                ├── 12_print_manifest.png
                └── mobile/
                    ├── 02_driver_dashboard.png
                    └── 03_checker_dashboard.png
```

---

## 🛠️ Local Development

Because this project uses vanilla web standards with no build tools or package dependencies required for runtime, running it locally requires only a standard static web server or browser.

### Option A: VS Code Live Server
1. Open the repository in Visual Studio Code.
2. Click **Go Live** on the bottom status bar or right-click `index.html` &rarr; **Open with Live Server**.

### Option B: Node.js `npx serve`
```bash
npx serve .
```
Navigate to `http://localhost:3000`.

### Option C: Python 3
```bash
python -m http.server 8000
```
Navigate to `http://localhost:8000`.

---

## 📜 License

Content, case study specifications, and architecture descriptions are proprietary. Source code is licensed under the MIT License.

