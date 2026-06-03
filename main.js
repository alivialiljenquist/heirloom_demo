/* ============================================================
   THE HEIRLOOM GROUP — Main JS
   ============================================================ */

// Sticky nav shadow on scroll
const navHeader = document.getElementById('nav-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navHeader.classList.add('scrolled');
  } else {
    navHeader.classList.remove('scrolled');
  }
}, { passive: true });

// Mobile hamburger toggle
const hamburger = document.getElementById('nav-hamburger');
const mobileNav = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// Graceful image fallback: hide broken <img> and show initials placeholder
document.querySelectorAll('.team-image').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const placeholder = img.nextElementSibling;
    if (placeholder && placeholder.classList.contains('team-image-placeholder')) {
      placeholder.style.display = 'flex';
    }
  });
});
document.querySelectorAll('.project-image').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});

// Contact form submit handler (placeholder — wire to backend/Formspree)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    // Simulate async submission — replace with real fetch/Formspree call
    setTimeout(() => {
      btn.textContent = 'Inquiry Sent';
      form.reset();
    }, 1200);
  });
}

// Smooth active-link highlight in nav on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const observerOptions = { rootMargin: '-50% 0px -50% 0px', threshold: 0 };
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--color-accent)'
          : '';
      });
    }
  });
}, observerOptions);
sections.forEach(s => sectionObserver.observe(s));

