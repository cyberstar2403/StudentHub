document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-login-form]');
  const message = document.querySelector('[data-login-message]');
  if (!form || !message) return;

  const allowedPages = new Set([
    'about.html',
    'blog.html',
    'contact.html',
    'courses.html',
    'faq.html',
    'index.html',
    'materials.html',
    'resources.html',
    'study-tips.html',
    'tutorials.html',
  ]);

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    try {
      sessionStorage.setItem('studentHubAuthenticated', 'true');
    } catch {
      message.textContent = 'Your browser is blocking session storage. Enable it to continue.';
      message.className = 'login-message error';
      return;
    }

    const requestedPage = new URLSearchParams(window.location.search).get('return') || '';
    const page = requestedPage.split(/[?#]/)[0];
    window.location.assign(allowedPages.has(page) ? requestedPage : 'index.html');
  });
});
