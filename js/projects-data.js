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
  'saas-scheduler': {
    id: 'saas-scheduler',
    title: 'High-Converting Client Booking & Intake Platform',
    tagline: 'Bespoke intake scheduling solution for professional consulting and medical clinics.',
    track: 'commercial',
    trackLabel: 'Commercial Client Product',
    badgeText: 'Commercial Client',
    status: 'Deployed Client Product',
    browserUrl: 'book.consultingclinic.io',
    previewImg: 'assets/screenshots/saas-scheduler.gif',
    previewAlt: 'Commercial Booking Platform',
    hasPlaceholder: true,
    placeholderHint: 'Drop <code>saas-scheduler.gif</code> / <code>.png</code> in <code>assets/screenshots/</code>',
    summary: 'Custom scheduling solution designed for professional consultancies. Features multi-timezone calendar synchronization, automated SMS reminders, and integrated intake forms.',
    tags: ['React', 'Next.js', 'Supabase', 'Google Apps Script', 'Twilio API'],
    cardMetric: '4.2x intake form completion',
    stack: 'React, Next.js, TypeScript, Supabase, Google Apps Script API, Twilio SMS',
    metric: '4.2x intake completion rate',
    scope: 'SaaS Platform Deployment',
    problem: 'Standard off-the-shelf booking tools lacked dynamic intake form branching, multi-staff calendar priority rules, and automated localized SMS appointment confirmations.',
    solution: 'Built a specialized booking flow with dynamic questionnaire routing, two-way calendar sync (Google/Outlook), and automated timezone conversion for international clients.',
    outcome: 'Client no-show rate plummeted from 24% to under 5%. Client self-reported intake completion rate increased 4.2x due to streamlined mobile step UX.'
  },
  'retail-pos': {
    id: 'retail-pos',
    title: 'Cloud POS & Real-Time Kitchen Display System',
    tagline: 'Offline-first progressive web application powering multi-station restaurant operations.',
    track: 'commercial',
    trackLabel: 'Commercial Client Product',
    badgeText: 'Commercial Client',
    status: 'Deployed Client Product',
    browserUrl: 'pos.restaurantcloud.app',
    previewImg: 'assets/screenshots/retail-pos.gif',
    previewAlt: 'Commercial Restaurant POS',
    hasPlaceholder: true,
    placeholderHint: 'Drop <code>retail-pos.gif</code> / <code>.png</code> in <code>assets/screenshots/</code>',
    summary: 'Progressive web application powering multi-station restaurant ordering, real-time ticket routing to kitchen displays via WebSockets, and end-of-day revenue reconciliation.',
    tags: ['JavaScript (ES6+)', 'Node.js', 'WebSockets', 'Android Touchscreen', 'Java POS'],
    cardMetric: '<150ms ticket latency',
    stack: 'JavaScript (ES6+), Node.js, WebSockets, HTML5/CSS3, Android / Java Thermal ESC/POS',
    metric: '<150ms order delivery, 100% offline resilient',
    scope: 'Multi-branch Commercial Deployment',
    problem: 'Frequent restaurant internet interruptions caused lost tickets and frustrated staff using cloud-only point-of-sale systems.',
    solution: 'Engineered an offline-first PWA using IndexedDB for local order persistence and optimistic UI updates. When connection drops, orders queue locally and sync automatically upon reconnection.',
    outcome: 'Eliminated service downtime during outages. Ticket delivery latency between ordering tablets and kitchen stations reduced to under 150 milliseconds.'
  }
};

// Export to global scope
if (typeof window !== 'undefined') {
  window.PROJECT_DETAILS = PROJECT_DETAILS;
}
