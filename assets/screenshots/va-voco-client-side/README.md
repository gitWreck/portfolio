# VOCO Client Portal

Modern, accessible single-page web platform for **VOCO Global Solutions** - providing dedicated virtual staffing, business process outsourcing (BPO), and technical operational support.

---

## Project Overview

- **Project Name**: VOCO Client-Side (`va-website`)
- **Initial Date of Creation**: **December 27, 2025** (Git initial commit: `2025-12-27 15:16:31 +0800`)
- **Architecture**: Next.js 16 App Router (React 19, Turbopack)
- **Styling**: Tailwind CSS v4 with custom brand design tokens
- **Data Persistence**: Next.js Server Actions with PostgreSQL connection pool (`pg`)

---

## Key Features

- **High-Performance Landing Surface**: Fast single-page layout with smooth section scrolling (`#home`, `#about`, `#services`, `#contact`) and responsive typography.
- **Accessible WCAG AA Design System**: Contrast-verified color palette (slate neutrals, brand-navy `#0F172A`, brand-blue `#1D4ED8`) with accessible focus rings and keyboard navigation.
- **Mobile-First Responsive Navigation**: Stateful slide-out drawer menu with accessible ARIA toggle states and outside-click dismissal.
- **Interactive Capabilities Grid**: Service catalog featuring live performance metrics (CSAT, resolution times, ROI) on card faces and expanded in accessible modal dialogs (`role="dialog"`, `Escape` listener).
- **Server Action Contact Pipeline**: Secure parameterized SQL queries storing prospective client inquiries directly to PostgreSQL with inline status notifications and prefilled subject routing.
- **Single Source of Truth**: Centralized service metadata, tags, and icon bindings defined in `data/services.js`.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | [Next.js (App Router)](https://nextjs.org/) | `^16.1.1` | Server-rendered React framework & API routes |
| **Library** | [React](https://react.dev/) | `^19.2.3` | UI component library |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.0.0` | Utility-first design tokens & responsive styling |
| **Icons** | [FontAwesome SVG Core](https://fontawesome.com/) | `^7.1.0` | Scalable vector icon graphics |
| **Database Client** | [`pg` (node-postgres)](https://node-postgres.com/) | `^8.16.3` | Connection pool for PostgreSQL / Supabase |
| **Build Tooling** | Turbopack, PostCSS, ESLint | - | Fast local HMR and production bundle optimization |

---

## How to Run

### Development Server

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Compile and run the production build:

```bash
npm run build
npm start
```

---

## Database Schema

The client intake pipeline writes inquiries to the `messages` table in PostgreSQL:

```sql
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  lastname VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## Project Structure

```text
va-voco-client-side/
|-- app/
|   |-- actions.js          # Server Actions (submitContactForm with parameterized SQL)
|   |-- globals.css         # Tailwind v4 import & custom brand color variables
|   |-- layout.js           # Root layout with font configuration, Navbar, and Footer
|   `-- page.js             # Single-page layout aggregating all landing sections
|-- components/
|   |-- About.jsx           # Company mission, trust metrics, and capability highlights
|   |-- ContactForm.jsx     # Accessible inquiry form with inline status indicators
|   |-- Features.jsx        # Value proposition grid (24/7 Coverage, Vetted Talent, SLAs)
|   |-- Footer.jsx          # Semantic footer with navigation, contact info, and legal links
|   |-- Home.jsx            # Hero section with responsive text overlays and quick CTAs
|   |-- Navbar.jsx          # Fixed navigation header with mobile drawer menu
|   `-- Services.jsx        # Interactive service grid with accessible detail modals
|-- data/
|   `-- services.js         # Centralized service capabilities, metrics, and icons
|-- lib/
|   `-- db.js               # PostgreSQL connection pool configuration with SSL support
|-- mds/
|   `-- design-improvement-checklist.md  # Detailed UX/UI audit checklist and resolution log
|-- public/                 # Static assets, logos, and illustration imagery
|-- jsconfig.json           # Path aliasing configuration (@/* -> ./*)
|-- next.config.mjs         # Next.js build and Turbopack configuration
|-- postcss.config.mjs      # PostCSS Tailwind plugin configuration
`-- package.json            # Project dependencies and operational scripts
```

---

## Design & Accessibility Compliance

The user interface was audited and refined against the **Impeccable** design framework and Nielsen's 10 Usability Heuristics:

- **Verified Heuristics Score**: **37 / 40**
- **WCAG AA Compliance**: Zero critical color contrast violations across all surface layers (slate, brand-navy `#0F172A`, brand-blue `#1D4ED8`).
- **Modal Ergonomics**: Service details feature focus management, `role="dialog"`, backdrop dismissal, and keyboard `Escape` closing.
- **Audit Documentation**: Complete heuristic log preserved in [`mds/design-improvement-checklist.md`](mds/design-improvement-checklist.md).

---

## License

Private repository. All rights reserved &copy; 2025-2026 VOCO Global Solutions Inc.
