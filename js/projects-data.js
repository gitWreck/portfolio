/**
 * Project Database for Architectural Deep Dives & Grid Presentation
 * Defines metadata, metrics, architectural writeups, and screenshot galleries.
 */

const PROJECT_DETAILS = {
  'dtocs-cfnr': {
    id: 'dtocs-cfnr',
    title: 'DTOCS-CFNR: Document Tracker & Kiosk Management System',
    tagline: 'Comprehensive document routing, self-service student kiosk, and real-time WebSocket queueing platform for UPLB CFNR.',
    track: 'forestry',
    trackLabel: 'UPLB OCS Flagship Platform',
    badgeText: 'UPLB OCS Flagship System',
    status: 'Office Production',
    date: 'October 2024',
    dateSort: '2024-10-02',
    browserUrl: 'ocs.cfnr.uplb.edu.ph/dtocs',
    previewImg: 'assets/screenshots/dtocs/screenshots/03_transactions.png',
    previewAlt: 'DTOCS-CFNR Document Tracking & Management Interface',
    summary: 'Integrated academic document routing platform, touchscreen student kiosk, and real-time WebSocket queueing engine for the CFNR Office of the College Secretary. Features CSAR student verification, public monitor queue broadcasts, and office data analytics.',
    tags: ['PHP', 'MySQL (PDO)', 'Node.js', 'WebSockets', 'Touchscreen Kiosk'],
    cardMetric: 'Live Queue Sync · CSAR DB Integration',
    stack: 'PHP 5.5+/8.x, MySQL/MariaDB (PDO), Node.js (WebSockets), DataTables, Chart.js 4.4, Bootstrap 4',
    metric: 'Real-Time Queue Sync · CSAR Live Integration',
    scope: 'Office of the College Secretary (CFNR, UP Los Baños)',
    problem: 'Managing physical student document transmittals, inquiries, and reception room queue traffic across administrative staff and student assistants caused queue congestion, tracking blind spots, and paper trail delays.',
    solution: 'Engineered DTOCS-CFNR: a unified platform integrating end-to-end document stage tracking, self-service touchscreen kiosks with live CSAR student database lookup, a dedicated Node.js WebSocket queueing engine broadcasting to public waiting room monitors with audio chimes, and interactive Chart.js analytics.',
    outcome: 'Eliminated paper routing bottlenecks and queue confusion. Enabled instantaneous student status lookups at kiosks, real-time public waiting room displays, and transparent accountability via granular role-based access control.',
    screenshots: [
      {
        title: 'Staff & Administrative Role-Based Login Portal',
        url: 'assets/screenshots/dtocs/screenshots/01_login.png'
      },
      {
        title: 'Document Management & Real-Time Transaction Routing Log',
        url: 'assets/screenshots/dtocs/screenshots/03_transactions.png'
      },
      {
        title: 'Transaction Stage Actions & Official Document Routing Slips',
        url: 'assets/screenshots/dtocs/screenshots/03_transactions_actions.png'
      },
      {
        title: 'Self-Service Touchscreen Student Kiosk Main Screen',
        url: 'assets/screenshots/dtocs/screenshots/04_kiosk.png'
      },
      {
        title: 'Student Kiosk: Document Request & Submission Portal',
        url: 'assets/screenshots/dtocs/screenshots/04_kiosk_documents.png'
      },
      {
        title: 'Student Kiosk: Real-Time Document Status Inquiry & Verification',
        url: 'assets/screenshots/dtocs/screenshots/04_kiosk_inquiry.png'
      },
      {
        title: 'Waiting Room Public Queue Display Board (Live WebSocket Broadcast)',
        url: 'assets/screenshots/dtocs/screenshots/06_queue_display.png'
      },
      {
        title: 'Office Analytics Dashboard & Peak Transaction Volume Heatmaps',
        url: 'assets/screenshots/dtocs/screenshots/02_statistics_documents.png'
      },
      {
        title: 'Granular User Accounts & Role-Based Access Control (RBAC)',
        url: 'assets/screenshots/dtocs/screenshots/05_accounts.png'
      }
    ]
  },
  'dtocs-essential-hub': {
    id: 'dtocs-essential-hub',
    title: 'Essentials Hub: Student Welfare Pantry & Resource Management',
    tagline: 'Touchscreen welfare pantry kiosk, quota-enforced supply distribution, and real-time beneficiary analytics for CFNR students.',
    track: 'forestry',
    trackLabel: 'UPLB OCS Student Welfare System',
    badgeText: 'UPLB OCS Student Welfare',
    status: 'Office Production',
    date: 'October 2026',
    dateSort: '2026-10-22',
    browserUrl: 'ocs.cfnr.uplb.edu.ph/essentials-hub',
    previewImg: 'assets/screenshots/dtocs-essential-hub/screenshots/07_essential_hub_main_web.png',
    previewAlt: 'Essentials Hub Student Welfare Pantry Kiosk Interface',
    summary: 'Integrated student welfare pantry portal enabling forestry students to claim essential supplies and fieldwork gear. Features touchscreen CSAR authentication, daily claim limit bounds, 5-second privacy auto-reset, non-destructive inventory logs, and welfare analytics.',
    tags: ['PHP (PDO)', 'MySQL', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Welfare Kiosk'],
    cardMetric: 'Daily Quota Control · 100% Audit Integrity',
    stack: 'PHP (PDO), MySQL, HTML5/CSS3, JavaScript (ES6+), jQuery, Chart.js 4.4, CSAR DB Integration',
    metric: 'Daily Quota Enforcement · 100% Audit Integrity',
    scope: 'Office of the College Secretary (CFNR, UP Los Baños)',
    problem: 'Distributing student welfare supplies, field gear, uniforms, and academic necessities lacked an equitable claim verification system, risking inventory depletion, lack of student privacy, and untracked supply distribution.',
    solution: 'Built the Essentials Hub: a touchscreen kiosk with 9-digit CSAR validation, visual category filtering, interactive item cards with strict per-student daily claim limits, an auto-dismissing 5-second privacy countdown, an inventory admin suite with safe non-destructive item archiving (is_active=0), and welfare analytics.',
    outcome: 'Delivered an equitable, dignified welfare distribution system for forestry students. Enforces automated daily claim limits, protects historical audit trails, and provides real-time demand intelligence for college procurement.',
    screenshots: [
      {
        title: 'Student Welfare Pantry Web Portal (Widescreen Overview)',
        url: 'assets/screenshots/dtocs-essential-hub/screenshots/07_essential_hub_main_web.png'
      },
      {
        title: 'Student Kiosk Claim Portal with Live CSAR Student Verification',
        url: 'assets/screenshots/dtocs-essential-hub/screenshots/07_essential_hub_main.png'
      },
      {
        title: 'Welfare Supplies Catalog with Interactive Quota Bounds & Categories',
        url: 'assets/screenshots/dtocs-essential-hub/screenshots/07_essential_hub_selection.png'
      },
      {
        title: 'Claim Submission Confirmation with 5-Second Privacy Auto-Reset',
        url: 'assets/screenshots/dtocs-essential-hub/screenshots/07_essential_hub_confirmation.png'
      },
      {
        title: 'Administrative Claims Log, Student Wishlists & Item History Records',
        url: 'assets/screenshots/dtocs-essential-hub/screenshots/07_essential_hub_log.png'
      },
      {
        title: 'Welfare Demand Analytics Dashboard, KPI Cards & Item Utilization Trends',
        url: 'assets/screenshots/dtocs-essential-hub/screenshots/07_essential_hub_statistics.png'
      }
    ]
  },
  'atlas-trucking': {
    id: 'atlas-trucking',
    title: 'Atlas Trucking & Multi-Hub Freight Operations Platform',
    tagline: 'Multi-role inter-island logistics platform managing multi-hub freight operations across Manila, Cebu, Davao, and Odiongan.',
    track: 'commercial',
    trackLabel: 'Commercial Enterprise Monorepo',
    badgeText: 'Atlas Transport Corporation',
    status: 'Production Monorepo',
    date: 'September 2026',
    dateSort: '2026-09-26',
    browserUrl: 'admin.atlastransport.ph/dashboard',
    previewImg: 'assets/screenshots/atlas/screenshots/08_admin_dashboard.png',
    previewAlt: 'Atlas Trucking Platform Admin Console',
    summary: 'Enterprise inter-island freight management system handling multi-hub operations (Manila, Cebu, Davao, Odiongan). Integrates real-time milestone tracking, cryptographic SHA-256 seal verification, mobile barcode intake, and automated billing manifests.',
    tags: ['Next.js', 'React Native', 'Android', 'Firebase Firestore', 'Turborepo'],
    cardMetric: '1,222 Commits · Multi-Island Fleet',
    stack: 'Next.js 16 (App Router), React 19, React Native (Expo 53), Firebase Firestore, Turborepo, SHA-256 Seals',
    metric: '1,222 Commits, Multi-Island Logistics Hubs, 100% Sealed Chain-of-Custody',
    scope: 'Production Monorepo (Atlas Transport Corporation)',
    problem: 'Coordinating complex inter-island roll-on/roll-off (RORO) sea shipping and overland wingvan trucking across dispersed regional hubs led to manifest reconciliation lags, manual paper gate passes, and lack of real-time milestone tracking for cargo clients.',
    solution: 'Architected an npm/Turborepo monorepo with 4 dedicated web consoles (Admin, Manager, Checker, Public Tracking) and an Expo 53 mobile field app with hardware barcode/QR scanning. Implemented cryptographic SHA-256 seal locking for wingvans, automated thermal shipping manifests, and Firestore real-time state synchronization.',
    outcome: 'Eliminated package loss across inter-island sea transits. Streamlined warehouse barcode intake and delivered 100% verifiable digital proof-of-delivery (e-POD) for commercial enterprise shipments.',
    screenshots: [
      {
        title: 'Admin Console & Fleet Health Overview',
        url: 'assets/screenshots/atlas/screenshots/08_admin_dashboard.png'
      },
      {
        title: 'Public Real-Time Milestone Tracking (/track/[id])',
        url: 'assets/screenshots/atlas/screenshots/06_tracking_sample.png'
      },
      {
        title: 'Inter-Island Hub Delivery Schedule Matrix',
        url: 'assets/screenshots/atlas/screenshots/01_home_delivery_schedule.png'
      },
      {
        title: 'Multi-Hub Regional Warehouse Coverage',
        url: 'assets/screenshots/atlas/screenshots/01_home_warehouse_coverage.png'
      },
      {
        title: 'Integrated Client & Operations Support Portal',
        url: 'assets/screenshots/atlas/screenshots/01_home_atlas_support.png'
      },
      {
        title: 'Role-Based Authentication & Guarded Consoles',
        url: 'assets/screenshots/atlas/screenshots/02_login.png'
      },
      {
        title: 'Real-Time Dispatch Messaging & Incident Log',
        url: 'assets/screenshots/atlas/screenshots/03_dashboard_messages.png'
      },
      {
        title: 'Official Shipping Manifest with QR Security Seal',
        url: 'assets/screenshots/atlas/screenshots/12_print_manifest.png'
      },
      {
        title: 'Delivery Reconciliation & Discrepancy Audit Manifest',
        url: 'assets/screenshots/atlas/screenshots/13_print_delivery_manifest.png'
      },
      {
        title: 'Mobile Driver App: Route Checkpoints & e-POD Dispatch',
        url: 'assets/screenshots/atlas/screenshots/mobile/02_driver_dashboard.png'
      },
      {
        title: 'Mobile Warehouse App: High-Speed Barcode & QR Scanner',
        url: 'assets/screenshots/atlas/screenshots/mobile/03_checker_dashboard.png'
      },
      {
        title: 'Mobile Customer App: Direct Driver & Operations Chat',
        url: 'assets/screenshots/atlas/screenshots/mobile/14_customer_chat_conversation.png'
      }
    ]
  },
  'va-voco-admin-side': {
    id: 'va-voco-admin-side',
    title: 'VOCO Operations Floor & Dispatch Workstation',
    tagline: 'High-throughput caller workstation, real-time call dispatching, and live floor telemetry platform for international BPO operations.',
    track: 'commercial',
    trackLabel: 'VOCO Global Solutions Inc.',
    badgeText: 'VOCO Global Solutions Inc.',
    status: 'Production Operations Floor',
    date: 'January 2026',
    dateSort: '2026-01-01',
    browserUrl: 'admin.vocoglobal.com/dashboard',
    previewImg: 'assets/screenshots/va-voco-admin-side/screenshots/01_dashboard.png',
    previewAlt: 'VOCO Operations Floor Dashboard & Floor Telemetry',
    summary: 'Enterprise caller workstation and operations telemetry system powering real-time call dispatching, task tracking, ticket resolution workflows, and floor team telemetry with PostgreSQL connection pooling.',
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'PostgreSQL (pg)', 'RBAC'],
    cardMetric: 'Real-Time Floor Telemetry · RBAC',
    stack: 'Next.js 16 (App Router), React 19, Tailwind CSS v4, PostgreSQL (pg pool), AuthContext RBAC',
    metric: 'Real-Time Caller Telemetry & Dispatch Workstation',
    scope: 'Production Operations Floor (VOCO Global Solutions)',
    problem: 'Supervising distributed callers, inbound client leads, and urgent support tickets across disparate spreadsheets caused blind spots in caller presence, unassigned client inquiries, and high ticket resolution delays.',
    solution: 'Architected a centralized operational workstation featuring distraction-free caller modes, live shift timers (LiveClock), real-time call note loggers (NoteLogger), Cmd+K global search, multi-tier ticket dispatch, and polled notifications backed by a parameterized PostgreSQL connection pool.',
    outcome: 'Eliminated inquiry triage delays. Delivered zero-latency floor presence telemetry, full audit logging for compliance, and WCAG AA accessibility across all workstation layers.',
    screenshots: [
      {
        title: 'Live Operations Dashboard & Floor Telemetry',
        url: 'assets/screenshots/va-voco-admin-side/screenshots/01_dashboard.png'
      },
      {
        title: 'Operational Task Queue & Multi-Filter Toolbar',
        url: 'assets/screenshots/va-voco-admin-side/screenshots/02_my_tasks.png'
      },
      {
        title: 'Live Team Floor Telemetry & Presence Roster',
        url: 'assets/screenshots/va-voco-admin-side/screenshots/04_live_floor.png'
      },
      {
        title: 'Multi-Tier Ticket Dispatch & Resolution Board',
        url: 'assets/screenshots/va-voco-admin-side/screenshots/05_task_dispatch.png'
      },
      {
        title: 'Client Directory & Account Profile Management',
        url: 'assets/screenshots/va-voco-admin-side/screenshots/06_manage_clients.png'
      },
      {
        title: 'System Audit Trail & Session Activity Logs',
        url: 'assets/screenshots/va-voco-admin-side/screenshots/07_activity_logs.png'
      }
    ]
  },
  'va-voco-client-side': {
    id: 'va-voco-client-side',
    title: 'VOCO Client Acquisition Portal & Staffing Platform',
    tagline: 'Accessible, high-converting client acquisition portal with interactive service discovery and server-action intake.',
    track: 'commercial',
    trackLabel: 'VOCO Global Solutions Inc.',
    badgeText: 'VOCO Global Solutions Inc.',
    status: 'Production Client Portal',
    date: 'December 2025',
    dateSort: '2025-12-27',
    browserUrl: 'vocoglobal.com',
    previewImg: 'assets/screenshots/va-voco-client-side/screenshots/01_home.png',
    previewAlt: 'VOCO Client Portal Interface',
    summary: 'Modern, accessible single-page web platform for virtual staffing and BPO services. Features WCAG AA contrast compliance, accessible service detail modals, and Next.js 16 Server Actions for parameterized SQL lead ingestion.',
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Server Actions', 'PostgreSQL', 'WCAG AA'],
    cardMetric: '37/40 Heuristics · WCAG AA Compliant',
    stack: 'Next.js 16 (Turbopack), React 19, Tailwind CSS v4, Next.js Server Actions, PostgreSQL (pg)',
    metric: '37/40 Heuristics Score · WCAG AA Compliant',
    scope: 'Production Client Surface (VOCO Global Solutions)',
    problem: 'Legacy BPO agency websites suffered from slow load times, poor mobile ergonomics, failing color contrast ratios, and unvalidated client intake forms that leaked or dropped prospective client leads.',
    solution: 'Designed a high-performance single-page web platform with accessible WCAG AA design tokens, interactive service catalog modals, slideout mobile drawer navigation, and Next.js 16 Server Actions executing parameterized SQL queries into PostgreSQL.',
    outcome: 'Scored 37/40 on Impeccable design heuristic evaluation with zero WCAG AA color contrast violations, sub-second page loads, and direct pipeline integration feeding inquiries into the caller operations floor.',
    screenshots: [
      {
        title: 'High-Converting Client Acquisition Landing & Hero',
        url: 'assets/screenshots/va-voco-client-side/screenshots/01_home.png'
      },
      {
        title: 'Company Mission, Trust Metrics & Capability Highlights',
        url: 'assets/screenshots/va-voco-client-side/screenshots/03_about.png'
      },
      {
        title: 'Interactive Service Capabilities Grid & Detail Modals',
        url: 'assets/screenshots/va-voco-client-side/screenshots/04_services.png'
      }
    ]
  }
};

// Export to global scope
if (typeof window !== 'undefined') {
  window.PROJECT_DETAILS = PROJECT_DETAILS;
}
