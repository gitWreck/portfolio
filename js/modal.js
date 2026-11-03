/**
 * Project Detail Modal with Interactive Screenshot Gallery
 * Handles modal display, dynamic data population, screenshot carousels,
 * accessibility focus trapping, and keyboard controls.
 */

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
    const projects = (typeof PROJECT_DETAILS !== 'undefined') ? PROJECT_DETAILS : (window.PROJECT_DETAILS || {});
    const data = projects[projectId];
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

  if (closeBtn) closeBtn.addEventListener('click', () => closeModal(false));
  if (dismissBtn) dismissBtn.addEventListener('click', () => closeModal(false));

  // Close when clicking outside panel
  if (modal) {
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
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      closeModal(false);
    }
  });

  const inquireLink = document.getElementById('modal-inquire-link');
  if (inquireLink) {
    inquireLink.addEventListener('click', () => closeModal(true));
  }
}

// Export to global scope
if (typeof window !== 'undefined') {
  window.initProjectModals = initProjectModals;
}

