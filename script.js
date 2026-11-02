/**
 * Portfolio Architecture & Client Interaction Scripts
 * UPLB College of Forestry & Natural Resources Edition
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initProjectFilters();
  initProjectModals();
  initEmailCopy();
  initContactForm();
  initMobileNav();
  initCanopyDelightMode();
});

/* --------------------------------------------------------------------------
 * Project Database for Architectural Deep Dives
 * -------------------------------------------------------------------------- */
const PROJECT_DETAILS = {
  'ocs-document-tracker': {
    title: 'OCS Academic Document Tracking & Verification Platform',
    tagline: 'End-to-end routing and status tracking for student petitions, TCG requests, and administrative transmittals.',
    track: 'forestry',
    trackLabel: 'UPLB OCS Core System',
    stack: 'PHP, MySQL, QR Barcodes, Role-Based Access, PDFKit',
    metric: '10,000+ Requests Routed, 0 Misplaced Files',
    scope: 'UPLB CFNR Office of the College Secretary Production',
    problem: 'Academic petitions, clearance forms, and True Copy of Grades (TCG) requests frequently experienced delays and tracking blind spots as physical paper folders moved between advisers, department chairs, and the College Secretary.',
    solution: 'Engineered a centralized web-based document routing system. Every submitted request is assigned a unique tracking number with a QR verification code. Staff log handover stages with timestamped audit logs, while students can check real-time document status without visiting the office.',
    outcome: 'Eliminated misplaced document inquiries. Reduced document processing turnaround from 10 days to under 48 hours with transparent accountability across all administrative units.'
  },
  'graduation-audit': {
    title: 'Student Curricular Evaluation & Clearance Engine',
    tagline: 'Automated audit engine verifying graduation eligibility, general education rules, and honors qualifications.',
    track: 'forestry',
    trackLabel: 'UPLB OCS Records Engine',
    stack: 'PHP, MariaDB, Curricular Rules Engine, FPDF, CSV Exporter',
    metric: '100% Curricular Audit Accuracy, 600+ Graduating Seniors',
    scope: 'College-Wide Academic Administration',
    problem: 'Evaluating graduating student transcripts and scholastic status required manual checklist cross-referencing against changing curricula, leading to prolonged evaluation bottlenecks and risk of human calculation error.',
    solution: 'Designed an automated rules engine that ingests student academic histories, verifies prerequisite chains, detects outstanding deficiencies, and computes general weighted averages (GWA) against Latin honors criteria.',
    outcome: 'Cut final graduation clearance deliberation from 3 weeks to 2 days. Ensured 100% compliance with university academic policies.'
  },
  'prerequisite-waiver': {
    title: 'Course Prerequisite Waiver & Enrollment Endorsement Core',
    tagline: 'Multi-tier digital approval pipeline for student prerequisite waivers, overload requests, and cross-registration.',
    track: 'forestry',
    trackLabel: 'UPLB OCS Workflow Core',
    stack: 'PHP/Laravel, MySQL, Digital Approvals, Email/SMS Dispatch',
    metric: '48hr Turnaround (was 2 weeks), 1,400+ Petitions Processed',
    scope: 'Enrollment Season Production',
    problem: 'During hectic semester registration periods, students needing course prerequisite waivers or unit overload endorsements flooded the office with physical endorsement slips that required multiple faculty signatures.',
    solution: 'Built an asynchronous multi-tier endorsement workflow (Academic Adviser -> Department Chair -> College Secretary) with email dispatch, digital approvals, and temporary reservation slot locks.',
    outcome: 'Eliminated physical queuing at the OCS office during enrollment peaks. Cut waiver approval turnaround from 2 weeks to 48 hours.'
  },
  'atlas-trucking': {
    title: 'Atlas Trucking & Multi-Hub Freight Operations Platform',
    tagline: 'Multi-role inter-island logistics platform managing multi-hub freight operations across Manila, Cebu, Davao, and Odiongan.',
    track: 'commercial',
    trackLabel: 'Commercial Enterprise Monorepo',
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
    title: 'High-Converting Client Booking & Intake Platform',
    tagline: 'Bespoke intake scheduling solution for professional consulting and medical clinics.',
    track: 'commercial',
    trackLabel: 'Commercial Client Product',
    stack: 'TypeScript, Tailwind/CSS Tokens, Supabase, Twilio',
    metric: '4.2x intake completion rate',
    scope: 'SaaS Platform Deployment',
    problem: 'Standard off-the-shelf booking tools lacked dynamic intake form branching, multi-staff calendar priority rules, and automated localized SMS appointment confirmations.',
    solution: 'Built a specialized booking flow with dynamic questionnaire routing, two-way calendar sync (Google/Outlook), and automated timezone conversion for international clients.',
    outcome: 'Client no-show rate plummeted from 24% to under 5%. Client self-reported intake completion rate increased 4.2x due to streamlined mobile step UX.'
  },
  'retail-pos': {
    title: 'Cloud POS & Real-Time Kitchen Display System',
    tagline: 'Offline-first progressive web application powering multi-station restaurant operations.',
    track: 'commercial',
    trackLabel: 'Commercial Client Product',
    stack: 'Vanilla JS, IndexedDB, WebSocket Hub, Thermal ESC/POS',
    metric: '<150ms order delivery, 100% offline resilient',
    scope: 'Multi-branch Commercial Deployment',
    problem: 'Frequent restaurant internet interruptions caused lost tickets and frustrated staff using cloud-only point-of-sale systems.',
    solution: 'Engineered an offline-first PWA using IndexedDB for local order persistence and optimistic UI updates. When connection drops, orders queue locally and sync automatically upon reconnection.',
    outcome: 'Eliminated service downtime during outages. Ticket delivery latency between ordering tablets and kitchen stations reduced to under 150 milliseconds.'
  }
};

/* --------------------------------------------------------------------------
 * Project Filter Switching
 * -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter');

      // Update button active state
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (selectedFilter === 'all' || category === selectedFilter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
 * Project Detail Modal with Interactive Screenshot Gallery
 * -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const dismissBtn = document.getElementById('modal-dismiss-btn');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  // Gallery DOM Elements
  const gallerySection = document.getElementById('modal-gallery-section');
  const galleryCounter = document.getElementById('modal-gallery-counter');
  const galleryMainImg = document.getElementById('modal-gallery-main-img');
  const galleryTitle = document.getElementById('modal-gallery-title');
  const galleryExpand = document.getElementById('modal-gallery-expand');
  const galleryThumbs = document.getElementById('modal-gallery-thumbs');
  const galleryPrev = document.getElementById('modal-gallery-prev');
  const galleryNext = document.getElementById('modal-gallery-next');

  let lastFocusedElement = null;
  let activeScreenshots = [];
  let currentGalleryIndex = 0;

  function setGalleryIndex(index) {
    if (!activeScreenshots.length) return;
    if (index < 0) index = activeScreenshots.length - 1;
    if (index >= activeScreenshots.length) index = 0;
    currentGalleryIndex = index;

    const item = activeScreenshots[currentGalleryIndex];
    if (galleryCounter) {
      galleryCounter.textContent = `${currentGalleryIndex + 1} / ${activeScreenshots.length}`;
    }
    if (galleryTitle) {
      galleryTitle.textContent = item.title || `Capture ${currentGalleryIndex + 1}`;
    }
    if (galleryMainImg) {
      galleryMainImg.src = item.url;
      galleryMainImg.alt = item.title || 'System interface capture';
    }
    if (galleryExpand) {
      galleryExpand.href = item.url;
    }

    if (galleryThumbs) {
      const thumbBtns = galleryThumbs.querySelectorAll('.modal-gallery-thumb');
      thumbBtns.forEach((tb, i) => {
        if (i === currentGalleryIndex) {
          tb.classList.add('active');
          tb.setAttribute('aria-selected', 'true');
          tb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        } else {
          tb.classList.remove('active');
          tb.setAttribute('aria-selected', 'false');
        }
      });
    }
  }

  function setupGallery(screenshots) {
    if (!gallerySection) return;
    if (!screenshots || screenshots.length === 0) {
      gallerySection.hidden = true;
      activeScreenshots = [];
      return;
    }

    activeScreenshots = screenshots;
    gallerySection.hidden = false;

    if (galleryThumbs) {
      galleryThumbs.innerHTML = '';
      activeScreenshots.forEach((item, index) => {
        const thumbBtn = document.createElement('button');
        thumbBtn.type = 'button';
        thumbBtn.className = 'modal-gallery-thumb';
        thumbBtn.setAttribute('role', 'tab');
        thumbBtn.setAttribute('aria-label', item.title || `Screenshot ${index + 1}`);
        thumbBtn.setAttribute('aria-selected', 'false');

        const thumbImg = document.createElement('img');
        thumbImg.src = item.url;
        thumbImg.alt = item.title || `Thumbnail ${index + 1}`;
        thumbBtn.appendChild(thumbImg);

        thumbBtn.addEventListener('click', () => {
          setGalleryIndex(index);
        });

        galleryThumbs.appendChild(thumbBtn);
      });
    }

    setGalleryIndex(0);
  }

  if (galleryPrev) {
    galleryPrev.addEventListener('click', () => setGalleryIndex(currentGalleryIndex - 1));
  }
  if (galleryNext) {
    galleryNext.addEventListener('click', () => setGalleryIndex(currentGalleryIndex + 1));
  }

  function openModal(projectId, triggerEl) {
    const data = PROJECT_DETAILS[projectId];
    if (!data) return;

    lastFocusedElement = triggerEl || document.activeElement;

    // Populate data
    const badgeEl = document.getElementById('modal-track-badge');
    badgeEl.className = `track-badge ${data.track}`;
    badgeEl.textContent = data.trackLabel;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-tagline').textContent = data.tagline;
    document.getElementById('modal-stack').textContent = data.stack;
    document.getElementById('modal-metric').textContent = data.metric;
    document.getElementById('modal-scope').textContent = data.scope;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-solution').textContent = data.solution;
    document.getElementById('modal-outcome').textContent = data.outcome;

    // Initialize screenshot gallery
    setupGallery(data.screenshots || []);

    // Show modal
    modal.hidden = false;
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    closeBtn.focus();
  }

  function closeModal(immediateUnlock = false) {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    if (immediateUnlock) {
      document.body.style.overflow = '';
      modal.hidden = true;
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    } else {
      setTimeout(() => {
        modal.hidden = true;
        document.body.style.overflow = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
          lastFocusedElement.focus();
        }
      }, 200);
    }
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId, btn);
    });
  });

  closeBtn.addEventListener('click', () => closeModal(false));
  dismissBtn.addEventListener('click', () => closeModal(false));

  // Close when clicking outside panel
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(false);
    }
  });

  // Focus trap & arrow key navigation inside open modal
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    } else if (e.key === 'ArrowLeft' && activeScreenshots.length > 1) {
      setGalleryIndex(currentGalleryIndex - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight' && activeScreenshots.length > 1) {
      setGalleryIndex(currentGalleryIndex + 1);
      e.preventDefault();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      closeModal(false);
    }
  });

  const inquireLink = document.getElementById('modal-inquire-link');
  if (inquireLink) {
    inquireLink.addEventListener('click', () => closeModal(true));
  }
}

/* --------------------------------------------------------------------------
 * Copy Email to Clipboard
 * -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text');
  const copyFeedback = document.getElementById('copy-feedback');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', async () => {
    const email = emailText.textContent.trim();
    let copied = false;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch (err) {
        copied = false;
      }
    }

    if (!copied) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        copied = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch (e) {
        copied = false;
      }
    }

    copyFeedback.textContent = copied ? 'Copied!' : 'Failed';
    setTimeout(() => {
      copyFeedback.textContent = 'Copy';
    }, 2000);
  });
}

/* --------------------------------------------------------------------------
 * Contact Form Validation & State
 * -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (statusEl) statusEl.hidden = true;

    const nameInput = document.getElementById('client-name');
    const emailInput = document.getElementById('client-email');
    const typeSelect = document.getElementById('project-type');
    const detailsInput = document.getElementById('project-details');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const typeError = document.getElementById('type-error');
    const detailsError = document.getElementById('details-error');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      if (nameError) nameError.hidden = false;
      isValid = false;
    } else {
      if (nameError) nameError.hidden = true;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      if (emailError) emailError.hidden = false;
      isValid = false;
    } else {
      if (emailError) emailError.hidden = true;
    }

    // Validate Project Scope
    if (!typeSelect.value) {
      if (typeError) typeError.hidden = false;
      isValid = false;
    } else {
      if (typeError) typeError.hidden = true;
    }

    // Validate Details
    if (!detailsInput.value.trim()) {
      if (detailsError) detailsError.hidden = false;
      isValid = false;
    } else {
      if (detailsError) detailsError.hidden = true;
    }

    if (!isValid) return;

    // Simulate submission state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Transmitting Brief...</span>';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Submit Inquiry</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      `;

      if (statusEl) {
        statusEl.hidden = false;
        statusEl.className = 'form-status success';
        statusEl.textContent = 'Salamat! Your project brief has been received. I will review the architecture scope and reply within 24 hours.';
      }
    }, 800);
  });
}

/* --------------------------------------------------------------------------
 * Mobile Navigation Drawer
 * -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const links = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    drawer.hidden = isExpanded;
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.hidden = true;
    });
  });
}

/* --------------------------------------------------------------------------
 * Fun Canopy Mode: Floating Forest Foliage Canvas
 * -------------------------------------------------------------------------- */
function initCanopyDelightMode() {
  const toggleBtn = document.getElementById('canopy-toggle-btn');
  const btnText = document.getElementById('canopy-btn-text');
  const canvas = document.getElementById('canopy-canvas');
  if (!toggleBtn || !canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId = null;
  let isActive = false;
  let leaves = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class LeafParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : -20;
      this.size = 8 + Math.random() * 12;
      this.speedY = 0.8 + Math.random() * 1.4;
      this.speedX = (Math.random() - 0.4) * 0.8;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.03;
      this.opacity = 0.25 + Math.random() * 0.5;
      // Palette: canopy emerald or warm amber/bark leaf
      const isBark = Math.random() > 0.65;
      this.color = isBark
        ? `rgba(217, 119, 6, ${this.opacity})` // Warm amber leaf
        : `rgba(52, 211, 153, ${this.opacity})`; // Canopy emerald leaf
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.015) + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;

      // Draw leaf shape
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.quadraticCurveTo(this.size * 0.7, 0, 0, this.size);
      ctx.quadraticCurveTo(-this.size * 0.7, 0, 0, -this.size);
      ctx.fill();

      // Leaf mid-rib vein
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -this.size * 0.8);
      ctx.lineTo(0, this.size * 0.8);
      ctx.stroke();

      ctx.restore();
    }
  }

  function startAnimation() {
    leaves = Array.from({ length: 32 }, () => new LeafParticle());
    canvas.classList.add('active');

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const leaf of leaves) {
        leaf.update();
        leaf.draw();
      }
      animationId = requestAnimationFrame(loop);
    }
    loop();
  }

  function stopAnimation() {
    canvas.classList.remove('active');
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 600);
  }

  toggleBtn.addEventListener('click', () => {
    isActive = !isActive;
    if (isActive) {
      toggleBtn.classList.add('active');
      btnText.textContent = 'Canopy: Active';
      startAnimation();
    } else {
      toggleBtn.classList.remove('active');
      btnText.textContent = 'Canopy Mode';
      stopAnimation();
    }
  });
}

/* --------------------------------------------------------------------------
 * Theme Switcher: Light (White) by Default, with Dark Mode Option
 * -------------------------------------------------------------------------- */
function initThemeSwitcher() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const btnText = document.getElementById('theme-btn-text');

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (e) {}

  if (!savedTheme) {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    savedTheme = prefersDark ? 'dark' : 'light';
  }

  applyTheme(savedTheme, false);

  function applyTheme(theme, save = true) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (sunIcon) sunIcon.hidden = true;
      if (moonIcon) moonIcon.hidden = false;
      if (btnText) btnText.textContent = 'Dark';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (sunIcon) sunIcon.hidden = false;
      if (moonIcon) moonIcon.hidden = true;
      if (btnText) btnText.textContent = 'Light';
    }

    if (save) {
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}
    }
  }

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme, true);
  });
}

