document.addEventListener('DOMContentLoaded', () => {
  const contentSections = document.querySelectorAll('.content-section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  contentSections.forEach(section => {
    observer.observe(section);
  });
});