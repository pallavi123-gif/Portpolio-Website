// Portfolio Website - Main Logic

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });
}

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (siteNav) {
      siteNav.classList.remove('active');
    }
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-up').forEach(section => {
  observer.observe(section);
});
