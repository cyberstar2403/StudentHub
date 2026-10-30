document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation: toggle the menu and keep its state accessible.
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !isOpen);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  if (navigation) {
    const signOutButton = document.createElement('button');
    signOutButton.className = 'nav-signout';
    signOutButton.textContent = 'Sign out';
    signOutButton.type = 'button';
    signOutButton.addEventListener('click', () => {
      try {
        sessionStorage.removeItem('studentHubAuthenticated');
      } catch (error) {
        console.error('Unable to clear the StudentHub demo session.', error);
        window.alert('Unable to sign out because browser session storage is unavailable.');
        return;
      }
      window.location.assign('login.html');
    });
    navigation.append(signOutButton);
  }

  // Search and category filtering share one small, reusable controller.
  ['courses', 'materials', 'tutorials', 'blog'].forEach(type => {
    const list = document.querySelector(`[data-list="${type}"]`);
    if (!list) return;
    const search = document.querySelector(`[data-search-input="${type}"]`);
    const filter = document.querySelector(`[data-filter="${type}"]`);
    const count = document.querySelector(`[data-result-count="${type}"]`);
    const empty = document.querySelector(`[data-empty="${type}"]`);
    const cards = [...list.querySelectorAll('.searchable-card')];
    const update = () => {
      const term = (search?.value || '').trim().toLowerCase();
      const category = (filter?.value || 'all').toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const matchesText = (card.dataset.search || '').includes(term);
        const matchesCategory = category === 'all' || card.dataset.category === category;
        const show = matchesText && matchesCategory;
        card.hidden = !show;
        if (show) visible++;
      });
      if (count) count.textContent = `${visible} ${type === 'materials' ? 'documents' : type}`;
      if (empty) empty.hidden = visible !== 0;
    };
    search?.addEventListener('input', update);
    filter?.addEventListener('change', update);
  });

  // Course and tutorial details expand in place.
  document.querySelectorAll('[data-detail]').forEach(button => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.dataset.detail);
      if (!panel) return;
      const opening = panel.hidden;
      panel.hidden = !opening;
      button.textContent = opening ? 'Close details ↑' : (button.dataset.detail.startsWith('course-') ? 'Course outline →' : 'Open tutorial →');
      button.setAttribute('aria-expanded', String(opening));
    });
  });

  // Article cards open a focused reading view.
  const articleCards = [...document.querySelectorAll('[data-article]')];
  const articlePanels = [...document.querySelectorAll('.reading-panel')];
  articleCards.forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.article;
    articlePanels.forEach(panel => { panel.hidden = panel.id !== `article-${id}`; });
    const area = document.querySelector('[data-reading-area]');
    if (area) {
      area.scrollIntoView({ behavior: 'smooth', block: 'start' });
      area.querySelector(`#article-${id}`)?.focus?.();
    }
  }));
  document.querySelectorAll('[data-close-article]').forEach(button => button.addEventListener('click', () => {
    articlePanels.forEach(panel => { panel.hidden = true; });
    document.querySelector('[data-list="blog"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  // Accessible FAQ accordion: only one answer is expanded at a time.
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const wasOpen = button.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-question').forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        const answer = other.closest('.faq-item')?.querySelector('.faq-answer');
        if (answer) answer.hidden = true;
      });
      if (!wasOpen) {
        button.setAttribute('aria-expanded', 'true');
        const answer = button.closest('.faq-item')?.querySelector('.faq-answer');
        if (answer) answer.hidden = false;
      }
    });
  });

  // Newsletter is a local interaction only; no email is transmitted or stored.
  document.querySelectorAll('[data-newsletter]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      const email = form.elements.email;
      if (!email.checkValidity()) {
        message.textContent = 'Please enter a valid email address.';
        message.className = 'form-message error';
        email.focus();
        return;
      }
      message.textContent = 'Thanks for your interest! This demo does not store or send email addresses.';
      message.className = 'form-message success';
      form.reset();
    });
  });

  // Contact form validates required fields and reports a frontend-only success.
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const message = contactForm.querySelector('[data-contact-message]');
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const fields = [...contactForm.querySelectorAll('input, textarea')];
      let firstInvalid = null;
      fields.forEach(field => {
        const valid = field.checkValidity();
        field.setAttribute('aria-invalid', String(!valid));
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        message.textContent = 'Please check the highlighted fields and complete the form correctly.';
        message.className = 'form-message error';
        firstInvalid.focus();
        return;
      }
      message.textContent = 'Message validated successfully. This frontend demo does not send or save your message.';
      message.className = 'form-message success';
      contactForm.reset();
      fields.forEach(field => field.removeAttribute('aria-invalid'));
    });
    contactForm.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
    });
  }
});
