/**
 * Portfolio Architecture & Client Interaction Orchestrator
 * UPLB College of Forestry & Natural Resources Edition
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initProjectsGrid === 'function') initProjectsGrid();
  initThemeSwitcher();
  initProjectFilters();
  if (typeof initProjectModals === 'function') initProjectModals();
  if (typeof initEmailCopy === 'function') initEmailCopy();
  if (typeof initContactForm === 'function') initContactForm();
  if (typeof initGraphicsShowcase === 'function') initGraphicsShowcase();
  initMobileNav();
  if (typeof initCanopyDelightMode === 'function') initCanopyDelightMode();
});

/* --------------------------------------------------------------------------
 * Project Filter Switching & Dynamic Count Synchronization
 * -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Dynamically sync count badges with DOM
  function updateFilterCounts() {
    const allCount = document.querySelectorAll('.project-card').length;
    const forestryCount = document.querySelectorAll('.project-card[data-category="forestry"]').length;
    const commercialCount = document.querySelectorAll('.project-card[data-category="commercial"]').length;

    const elAll = document.getElementById('count-all');
    const elForestry = document.getElementById('count-forestry');
    const elCommercial = document.getElementById('count-commercial');

    if (elAll) elAll.textContent = allCount;
    if (elForestry) elForestry.textContent = forestryCount;
    if (elCommercial) elCommercial.textContent = commercialCount;
  }
  updateFilterCounts();

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
 * Theme Switcher: Light by Default, with Dark Mode Option
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
