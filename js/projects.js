/**
 * Project Grid Dynamic Renderer
 * Generates project cards from PROJECT_DETAILS in js/projects-data.js.
 * Keeps index.html lightweight, modular, and easy to maintain.
 */

function initProjectsGrid() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (typeof PROJECT_DETAILS === 'undefined' || !PROJECT_DETAILS) {
    console.warn('PROJECT_DETAILS is not defined.');
    return;
  }

  const icons = {
    doc: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
    welfare: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>',
    commercial: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
  };

  const projectIds = Object.keys(PROJECT_DETAILS).sort((a, b) => {
    const dateA = new Date(PROJECT_DETAILS[a].dateSort || PROJECT_DETAILS[a].date || 0);
    const dateB = new Date(PROJECT_DETAILS[b].dateSort || PROJECT_DETAILS[b].date || 0);
    return dateB - dateA;
  });
  let html = '';

  projectIds.forEach(id => {
    const p = PROJECT_DETAILS[id];

    // Determine badge icon
    let badgeIcon = icons.commercial;
    if (p.id === 'dtocs-cfnr') badgeIcon = icons.doc;
    else if (p.id === 'dtocs-essential-hub') badgeIcon = icons.welfare;

    // Render tags
    const tagsHtml = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join('\n              ');

    // Media element (with placeholder fallback support if specified)
    let mediaHtml = '';
    if (p.hasPlaceholder) {
      mediaHtml = `
                <img src="${p.previewImg}" 
                     alt="${p.previewAlt || p.title}" 
                     class="project-media"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="media-placeholder-hint">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  <span>${p.placeholderHint || 'Image preview coming soon'}</span>
                </div>`;
    } else {
      mediaHtml = `
                <img src="${p.previewImg}" 
                     alt="${p.previewAlt || p.title}" 
                     class="project-media">`;
    }

    html += `
          <!-- Project: ${p.title} -->
          <article class="project-card track-${p.track}" data-category="${p.track}" data-id="${p.id}">
            <div class="project-preview-frame">
              <div class="preview-browser-header">
                <span class="preview-dot"></span>
                <span class="preview-dot"></span>
                <span class="preview-dot"></span>
                <span class="preview-title-bar">${p.browserUrl}</span>
              </div>
              <div class="preview-media-container">${mediaHtml}
              </div>
            </div>

            <div class="card-meta">
              <span class="track-badge ${p.track}">
                ${badgeIcon}
                ${p.badgeText || p.trackLabel}
              </span>
              <div class="card-meta-right">
                ${p.date ? `
                <span class="project-date">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  ${p.date}
                </span>
                <span class="card-meta-separator" aria-hidden="true">&bull;</span>` : ''}
                <span class="project-status">${p.status}</span>
              </div>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-summary">
              ${p.summary}
            </p>
            <div class="project-tags">
              ${tagsHtml}
            </div>
            <div class="card-footer">
              <span class="metric-pill">${p.cardMetric || p.metric}</span>
              <button type="button" class="btn-text open-modal-btn" data-project="${p.id}">
                Inspect Architecture &rarr;
              </button>
            </div>
          </article>
`;
  });

  container.innerHTML = html;
}

// Export to global scope
if (typeof window !== 'undefined') {
  window.initProjectsGrid = initProjectsGrid;
}

