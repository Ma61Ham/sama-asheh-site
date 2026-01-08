// Minimal interactivity for Sama Asheh’s surreal site
document.addEventListener('DOMContentLoaded', () => {
  // Highlight the current nav link based on the URL path
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
  // Fade-up animation using IntersectionObserver
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.product-card, .post-card, .cta-card').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
});