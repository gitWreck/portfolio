/**
 * Contact & Client Inquiry Handlers
 * Handles one-click clipboard copying and interactive project inquiry form validation.
 */

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

// Export to global scope
if (typeof window !== 'undefined') {
  window.initEmailCopy = initEmailCopy;
  window.initContactForm = initContactForm;
}

