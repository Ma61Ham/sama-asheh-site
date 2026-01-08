// Helper selectors
const body = document.body;
const cursorEl = document.getElementById('site-cursor');
const parallaxLayers = document.querySelectorAll('.bg-watercolor__layer');
const fadeElements = document.querySelectorAll('.motion-fade-up');
const galleryToggleBtn = document.getElementById('toggle-beyond-gallery');
const galleryArrow = document.getElementById('gallery-toggle-arrow');
const galleryCollapsible = document.getElementById('beyond-gallery-collapsible');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCloseBtn = document.getElementById('lightbox-close');
const lightboxPrevBtn = document.getElementById('lightbox-prev');
const lightboxNextBtn = document.getElementById('lightbox-next');
let currentLightboxIndex = 0;

// Custom cursor movement
window.addEventListener('pointermove', (e) => {
  cursorEl.style.left = e.clientX + 'px';
  cursorEl.style.top = e.clientY + 'px';
});
window.addEventListener('pointerdown', () => { cursorEl.classList.add('cursor-brush--active-press'); });
window.addEventListener('pointerup', () => { cursorEl.classList.remove('cursor-brush--active-press'); });
window.addEventListener('keydown', (e) => { if (e.key === 'Tab') cursorEl.style.display = 'none'; });
window.addEventListener('click', () => { cursorEl.style.display = ''; });
if (/Mobi|Android/i.test(navigator.userAgent)) cursorEl.style.display = 'none';

// Parallax watercolor effect
function updateParallax() {
  const scrollY = window.scrollY || window.pageYOffset;
  parallaxLayers.forEach(layer => {
    const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0.12;
    layer.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });
}
window.addEventListener('scroll', updateParallax, { passive: true });
updateParallax();

// IntersectionObserver for fade-up and staggered reveal
const intersectionObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('is-visible');
      // Stagger children if it's the gallery
      if (el.id === 'art-gallery' || el.classList.contains('art-gallery')) {
        const children = el.querySelectorAll('.stagger');
        children.forEach((child, idx) => {
          child.style.setProperty('--delay', (idx * 0.08) + 's');
          setTimeout(() => child.classList.add('is-visible'), idx * 80 + 200);
        });
      }
      obs.unobserve(el);
    }
  });
}, { threshold: 0.12 });
fadeElements.forEach(el => intersectionObserver.observe(el));

// Gallery toggle handler
function toggleGallery() {
  const isOpen = galleryCollapsible.classList.toggle('is-open');
  galleryArrow.classList.toggle('is-rotated', isOpen);
  galleryToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  galleryCollapsible.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  if (isOpen) {
    setTimeout(() => {
      galleryCollapsible.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const staggerItems = document.querySelectorAll('#art-gallery .stagger');
      staggerItems.forEach((it, i) => {
        it.style.setProperty('--delay', (i * 0.06) + 's');
        setTimeout(() => it.classList.add('is-visible'), i * 60 + 160);
      });
    }, 320);
  }
}
galleryToggleBtn.addEventListener('click', toggleGallery);
galleryToggleBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleGallery(); }
});

// Lightbox functionality
const galleryList = Array.from(document.querySelectorAll('.art-gallery__item'));
function openLightboxAtIndex(index) {
  if (index < 0) index = galleryList.length - 1;
  if (index >= galleryList.length) index = 0;
  currentLightboxIndex = index;
  const item = galleryList[index];
  const imgEl = item.querySelector('img');
  lightboxImage.src = imgEl.src;
  lightboxImage.alt = imgEl.alt || '';
  lightboxCaption.textContent = (item.querySelector('.art-gallery__caption') || { textContent: '' }).textContent;
  lightboxOverlay.classList.add('is-visible');
  lightboxOverlay.setAttribute('aria-hidden', 'false');
  lightboxCloseBtn.focus();
}
function closeLightbox() {
  lightboxOverlay.classList.remove('is-visible');
  lightboxOverlay.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  lightboxCaption.textContent = '';
}
function showNextInLightbox() { openLightboxAtIndex((currentLightboxIndex + 1) % galleryList.length); }
function showPrevInLightbox() { openLightboxAtIndex((currentLightboxIndex - 1 + galleryList.length) % galleryList.length); }
galleryList.forEach((galleryItem, idx) => {
  galleryItem.addEventListener('click', (e) => {
    e.preventDefault();
    openLightboxAtIndex(idx);
  });
  galleryItem.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); openLightboxAtIndex(idx); }
  });
  galleryItem.setAttribute('tabindex', '0');
});
lightboxCloseBtn.addEventListener('click', closeLightbox);
lightboxNextBtn.addEventListener('click', showNextInLightbox);
lightboxPrevBtn.addEventListener('click', showPrevInLightbox);
lightboxOverlay.addEventListener('click', (e) => { if (e.target === lightboxOverlay) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightboxOverlay.classList.contains('is-visible')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNextInLightbox();
  if (e.key === 'ArrowLeft') showPrevInLightbox();
});

// Commission form mailto handler
function handleCommissionForm(e) {
  e.preventDefault();
  const name = document.getElementById('client-name').value.trim();
  const email = document.getElementById('client-email').value.trim();
  const description = document.getElementById('art-description').value.trim();
  const payment = document.getElementById('payment-method').value.trim();
  if (!name || !email || !description || !payment) {
    alert('Please fill out all required fields.');
    return false;
  }
  const subject = encodeURIComponent('Artwork Request from ' + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nArtwork Description:\n${description}\n\nPreferred Payment Method: ${payment}`);
  if (!confirm('Open your email client to send the artwork request?')) return false;
  window.location.href = `mailto:sama.asheh2@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

// Smooth scroll for nav
document.querySelectorAll('#main-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Stagger observation for gallery to ensure proper entrance
const artGallery = document.getElementById('art-gallery');
if (artGallery) intersectionObserver.observe(artGallery);
// Cursor brighten on hover
document.querySelectorAll('.art-gallery__image').forEach(img => {
  img.addEventListener('pointerenter', () => { cursorEl.style.boxShadow = '0 8px 26px rgba(197,137,255,0.28)'; });
  img.addEventListener('pointerleave', () => { cursorEl.style.boxShadow = '0 6px 16px rgba(197,137,255,0.18)'; });
});

// End of script