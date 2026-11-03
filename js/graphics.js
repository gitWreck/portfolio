/**
 * Graphic Design Showcase & Lightbox Controller
 * Renders pubmat cards, handles year filter switching, and provides full-resolution lightbox modal.
 */

function initGraphicsShowcase() {
  const grid = document.getElementById('graphics-grid');
  if (!grid) return;

  const designs = (typeof GRAPHIC_DESIGNS !== 'undefined') ? GRAPHIC_DESIGNS : (window.GRAPHIC_DESIGNS || []);
  if (!designs || designs.length === 0) return;

  // 1. Render all graphic cards
  grid.innerHTML = '';
  designs.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'graphic-card';
    card.setAttribute('data-year', item.year);
    card.setAttribute('data-index', index);

    card.innerHTML = `
      <div class="graphic-preview-wrap" data-index="${index}" style="cursor: pointer;" title="Click to inspect high-resolution pubmat">
        <img src="${item.image}" alt="${item.title}" class="graphic-img" loading="lazy">
        <div class="graphic-overlay">
          <button type="button" class="btn-zoom-graphic" data-index="${index}" aria-label="Zoom pubmat: ${item.title}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            <span>Inspect Pubmat</span>
          </button>
        </div>
      </div>
      <div class="graphic-card-body">
        <div class="graphic-meta-row">
          <span class="graphic-date-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ${item.date}
          </span>
          <span class="graphic-category-pill">${item.category}</span>
        </div>
        <h3 class="graphic-title">${item.title}</h3>
        <p class="graphic-caption">${item.caption}</p>
        <div class="graphic-card-footer">
          <a href="${item.fbUrl}" target="_blank" rel="noopener noreferrer" class="btn-fb-link" title="Open verified post on Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span>Facebook Post &rarr;</span>
          </a>
          <button type="button" class="btn-text-open-zoom" data-index="${index}">
            Zoom &rarr;
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // 2. Filter toolbar logic
  const filterBtns = document.querySelectorAll('.graphic-filter-btn');
  const cards = grid.querySelectorAll('.graphic-card');

  // Update filter count badges
  function updateGraphicCounts() {
    const elAll = document.getElementById('count-gfx-all');
    const el2026 = document.getElementById('count-gfx-2026');
    const el2025 = document.getElementById('count-gfx-2025');
    const el2024 = document.getElementById('count-gfx-2024');

    if (elAll) elAll.textContent = designs.length;
    if (el2026) el2026.textContent = designs.filter(d => d.year === '2026').length;
    if (el2025) el2025.textContent = designs.filter(d => d.year === '2025').length;
    if (el2024) el2024.textContent = designs.filter(d => d.year === '2024').length;
  }
  updateGraphicCounts();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const year = btn.getAttribute('data-year');

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      cards.forEach(card => {
        const cardYear = card.getAttribute('data-year');
        if (year === 'all' || cardYear === year) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Lightbox Modal
  initGraphicLightbox(designs);
}

function initGraphicLightbox(designs) {
  const modal = document.getElementById('graphic-lightbox-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('lightbox-close-btn');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const dateEl = document.getElementById('lightbox-date');
  const categoryEl = document.getElementById('lightbox-category');
  const captionEl = document.getElementById('lightbox-caption');
  const fbLink = document.getElementById('lightbox-fb-link');
  const counterEl = document.getElementById('lightbox-counter');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentIndex = 0;
  let lastFocused = null;

  function showGraphic(index) {
    if (index < 0) index = designs.length - 1;
    if (index >= designs.length) index = 0;
    currentIndex = index;

    const item = designs[currentIndex];
    if (imgEl) {
      imgEl.src = item.image;
      imgEl.alt = item.title;
    }
    if (titleEl) titleEl.textContent = item.title;
    if (dateEl) dateEl.textContent = item.date;
    if (categoryEl) categoryEl.textContent = item.category;
    if (captionEl) captionEl.textContent = item.caption;
    if (fbLink) fbLink.href = item.fbUrl;
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${designs.length}`;
  }

  function openLightbox(index, triggerEl) {
    lastFocused = triggerEl || document.activeElement;
    showGraphic(index);

    modal.hidden = false;
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      modal.hidden = true;
      document.body.style.overflow = '';
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    }, 200);
  }

  // Click delegates on cards (button, text link, or image wrapper)
  document.addEventListener('click', (e) => {
    const zoomBtn = e.target.closest('.btn-zoom-graphic') || e.target.closest('.btn-text-open-zoom') || e.target.closest('.graphic-preview-wrap');
    if (zoomBtn) {
      // Don't trigger if clicked on the Facebook outbound link
      if (e.target.closest('.btn-fb-link')) return;
      const idx = parseInt(zoomBtn.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        openLightbox(idx, zoomBtn);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showGraphic(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showGraphic(currentIndex + 1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showGraphic(currentIndex - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      showGraphic(currentIndex + 1);
      e.preventDefault();
    }
  });
}

// Export to global scope
if (typeof window !== 'undefined') {
  window.initGraphicsShowcase = initGraphicsShowcase;
}
