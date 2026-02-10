/* ========================================================
   main.js — UX polish only (no content rendering)
   • IntersectionObserver reveal animations
   • Active nav link highlighting on scroll
   • Mobile hamburger toggle
   ======================================================== */

(function () {
  'use strict';

  /* ── 1. Scroll-reveal via IntersectionObserver ───────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);   // animate once
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: show everything immediately
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ── 2. Active nav link on scroll ────────────────────── */
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollY = window.scrollY + 120;   // offset for sticky header
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();   // run once on load

  /* ── 3. Mobile hamburger toggle ──────────────────────── */
  const toggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      navList.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    navList.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }
})();
