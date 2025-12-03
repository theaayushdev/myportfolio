// Minimal enhancements
// Smooth scrolling for anchor links (broad browser support)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#' || !document.querySelector(targetId)) return;
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', targetId);
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
