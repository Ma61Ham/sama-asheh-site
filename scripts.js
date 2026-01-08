// Simple tab switching logic for the shop page.
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.shop-toggle .tab');
  const sections = document.querySelectorAll('.shop-grid');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Skip if this tab is already active
      if (tab.classList.contains('active')) return;
      // Activate the clicked tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Show the corresponding section
      const target = tab.getAttribute('data-target');
      sections.forEach(sec => {
        if (sec.id === target) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
    });
  });
});