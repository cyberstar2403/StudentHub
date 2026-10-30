(() => {
  const currentPage = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  if (currentPage === 'login.html') return;

  let isAuthenticated = false;
  try {
    isAuthenticated = sessionStorage.getItem('studentHubAuthenticated') === 'true';
  } catch (error) {
    console.error('Unable to verify the StudentHub demo session.', error);
  }
  if (isAuthenticated) return;

  const returnTo = `${currentPage}${window.location.search}${window.location.hash}`;
  window.location.replace(`login.html?return=${encodeURIComponent(returnTo)}`);
})();
