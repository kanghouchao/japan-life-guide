// Chinese Culture Page Scroll Animations

document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  initScrollAnimations();
});

function initScrollAnimations() {
  // Create intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all culture sections
  const cultureSections = document.querySelectorAll('.culture-section');
  cultureSections.forEach(section => {
    observer.observe(section);
  });

  // Add smooth scroll for navigation links (if any internal navigation is added)
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add parallax effect to hero section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  });

  // Add hover effects for interactive elements
  addHoverEffects();
}

function addHoverEffects() {
  // Add hover effect to highlight items
  const highlightItems = document.querySelectorAll('.highlight-item');
  highlightItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add click animation to visual elements
  const visualElements = document.querySelectorAll('.visual-placeholder');
  visualElements.forEach(element => {
    element.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });

  
}

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.width = '0%';
  progressBar.style.height = '3px';
  progressBar.style.backgroundColor = '#c41e3a';
  progressBar.style.zIndex = '9999';
  progressBar.style.transition = 'width 0.3s ease';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// Initialize scroll progress indicator
document.addEventListener('DOMContentLoaded', function() {
  addScrollProgress();
});