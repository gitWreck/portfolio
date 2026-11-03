# DTOCS-CFNR: Document Tracker & Kiosk Management System
### Office of the College Secretary (OCS)
### College of Forestry and Natural Resources (CFNR) — University of the Philippines Los Baños

---

> **📅 Project Milestones & Release History**
> - **Initial GitHub Release / First Push**: `October 2, 2024`
> - **Essentials Hub Feature Added**: `September 14, 2026`

---

## 📖 Overview

**DTOCS-CFNR** (Document Tracker Office of the College Secretary) is a comprehensive web-based document routing, student service kiosk, and office management system engineered for the Office of the College Secretary at CFNR, UP Los Baños. 

The system streamlines academic document processing, student queueing, real-time status tracking, and student welfare services through modern self-service kiosk interfaces and an administrative suite.

---

## 🚀 Key Modules & Features

### 1. 🗂️ Document Management & Transactions
- **End-to-End Tracking**: Real-time logging of incoming, in-transit, pending, and outgoing student and faculty documents.
- **Workflow & Stage Configuration**: Customizable document stages, approval sequences, and routing rules.
- **Search & Historical Logs**: High-performance, filterable DataTables with full transaction logs, student history, and remarks.
- **Printable Transmittals**: Generate and print standardized transaction slips, routing slips, and receiving receipts.

### 2. 🖥️ Student Kiosk & Queueing System
- **Self-Service Touchscreen Kiosk**: Dedicated touch interface allowing students to log visits, submit document requests, and inquire about document statuses.
- **Student ID Integration**: Live student verification and auto-population linked to CSAR student database records.
- **Live Queue Engine**: Real-time queue calling system powered by WebSockets (`node-server`) and MySQL.
- **Public Queue Display Screen**: High-visibility waiting room monitor view featuring live queue numbers, active windows, and audio announcements.

### 3. 🥫 Essentials Hub (Student Welfare Pantry) *(Added: September 14, 2026)*
An integrated welfare pantry service designed to support student well-being through an intuitive self-service kiosk and administration hub.

- **Student Kiosk (`data_essentials.php`)**: Student ID lookup, live CSAR student verification, category filtering, interactive item cards, daily limit enforcement, and self-dismissing 5-second countdown timer.
- **Claims & Audit Log (`essentials_log.php`)**: Detailed historical records, item breakdowns, student wishlists, and exportable tables.
- **Inventory Admin (`essentials_admin.php`)**: Item and category catalog management, unit quick-select pills, visual icon selector, and safe deactivation protection.
- **Welfare Analytics (`essentials_statistics.php`)**: KPI metrics, all-time vs. today item demand rankings, frequent beneficiaries, and student wishlist intelligence.

> 📖 **Full Details**: For detailed workflows, database schemas, and API documentation, see **[README_ESSENTIALS_HUB.md](README_ESSENTIALS_HUB.md)**.

### 4. 📊 Statistics & Data Analytics
- **Visual Analytics Dashboards**: Interactive charts powered by Chart.js 4.4.8.
- **Office Metrics**: Analysis of peak transaction hours, high-volume document types, 30-day volume trends, day-of-week distribution, student batch cohorts, proxy representation modes, and shift distribution.
- **Essentials Hub Analytics**: Separate analytics dashboard dedicated to student welfare pantry trends and item demands.

### 5. 👥 User Accounts & Access Control (RBAC)
- **Role-Based Access Control**: Multi-tier permissions across Administrative Staff, Office Assistants, and Kiosk-only accounts.
- **Profile & Security**: User profile settings, password hashing, and role-driven navigation menus.
- **Account Suppression**: Granular access hiding (e.g. specialized kiosk roles or restricted accounts).

---

## 🧪 Screenshot & Demo Mode (Mock Data)

For presentations, user manual screenshots, and thesis documentation without exposing live student records or requiring a database connection, DTOCS includes a built-in mock data toggle:

- **Configuration File**: [`test/config.php`](file:///c:/xampp/htdocs/dtocs-devs/test/config.php)
- **Toggle Mode**:
  ```php
  // Switch to Mock Data Mode for screenshots:
  define('DATA_SOURCE', 'TEST');

  // Switch back to live MySQL Database:
  define('DATA_SOURCE', 'DATABASE');
  ```
- **Pre-Configured Demo Accounts**:
  - **Admin**: `admin` / `admin123` (Juan P. Dela Cruz)
  - **Staff**: `staff` / `staff123` (Maria Clara Santos)
  - **Student Assistant**: `sa` / `sa123` (Angelo M. Reyes)
  - **Special**: `special` / `special123` (Dr. Roberto E. Garcia)

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Backend** | PHP (compatible with PHP 5.5+ and 7.x/8.x) |
| **Database** | MySQL / MariaDB (`dtocs_dev`, `csar.students`) via PDO & MySQLi |
| **Real-time Server**| Node.js with `ws` (WebSocket) and `mysql2` |
| **Frontend** | HTML5, JavaScript (ES6+), jQuery, AJAX |
| **UI Styling** | Vanilla CSS + Bootstrap 4, CFNR Forest Green (`#043d33`, `#00563f`), UP Maroon (`#7b1113`), and Gold (`#f59e0b`) |
| **Data Grid** | DataTables (Responsive, Buttons, FixedHeaders) |
| **Data Viz** | Chart.js 4.4.8 |
| **Icons** | FontAwesome 6.7.1 Pro / Free |

---

## 📁 Directory Structure

```plaintext
dtocs-dev/
├── components/
│   ├── account/          # User accounts management & settings
│   ├── connection/       # Database connection handlers (PDO) & data source toggle
│   ├── documents/        # Document routing, tracking, and logs
│   ├── home/             # Main dashboard views and scripts
│   ├── log_book/         # Kiosk interface, Queue display, and Essentials Hub
│   │   ├── data_essentials.php    # Essentials Hub student kiosk view
│   │   ├── data_essentials.js     # Essentials Hub kiosk logic & state
│   │   ├── data_essentials.css    # Kiosk styling & responsiveness
│   │   ├── essentials_admin.php   # Essentials Hub item inventory manager
│   │   ├── essentials_log.php     # Essentials Hub claim history log
│   │   ├── query_essentials.php   # Backend API for essentials hub
│   │   ├── queue.php              # Office queue management
│   │   └── display.php            # Public queue display board
│   ├── login/            # Authentication & session controllers
│   ├── navigation/       # Top navbar, role menus, and routing
│   ├── statistics/       # Office analytics, Essentials stats & Chart.js reports
│   └── transactions/     # Transaction receipting & document processing
├── node-server/          # Node.js WebSocket server for real-time queueing
├── test/                 # Test & mock data suite for screenshots and presentations
│   ├── config.php        # Single-word toggle between 'TEST' and 'DATABASE'
│   ├── data.json         # Realistic mock data (accounts, transactions, docs, stats)
│   ├── mock_handler.php  # Mock API response router
│   └── README.md         # Quick reference guide for demo mode
├── mds/                  # Documentation and development checklists
├── README.md             # Main DTOCS-CFNR project documentation
└── README_ESSENTIALS_HUB.md # Dedicated Essentials Hub documentation
```

---

## ⚙️ Installation & Setup

### 1. Prerequisites
- **Web Server**: Apache via XAMPP / WAMP / LAMP.
- **PHP**: PHP 5.5.x or higher.
- **MySQL / MariaDB**: Server running on port `3306`.
- **Node.js**: Node 14+ (for running the WebSocket queue broadcaster).

### 2. Web Application Setup
1. Clone or copy this repository into your web root directory (e.g. `c:\xampp\htdocs\dtocs-dev`).
2. Ensure MySQL is started and import the database schema (`dtocs_dev`).
3. Verify connection configuration in `components/connection/connection.php`.
4. Open your browser and navigate to:
   ```
   http://localhost/dtocs-dev/
   ```

### 3. Node.js WebSocket Queue Server
To activate real-time queue calling and display sync:
```bash
cd node-server
npm install
node server.js
```
The WebSocket server runs on port `8080` (or configured port) and broadcasts live queue states directly to `display.php` and `queue.php`.

---

## 🔒 Security & Best Practices
- **Prepared Statements**: All database operations in `query_essentials.php`, `query.php`, and account modules utilize PDO prepared statements to guard against SQL injection.
- **XSS Sanitization**: Input strings and student feedback are sanitized before output rendering.
- **Referential Integrity**: Deleting active records with existing transaction histories triggers safe deactivation to protect historical audit trails.

---

## 🏛️ Maintained By
**Office of the College Secretary (OCS)**  
College of Forestry and Natural Resources (CFNR)  
University of the Philippines Los Baños (UPLB)
