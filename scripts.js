(function () {

  /* ── 1. Sticky header shrink ── */
  const header = document.querySelector('.site-header');
  if (header) {
    const tick = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* ── 2. Parallax hero (homepage only) ── */
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', function () {
      heroImage.style.transform = 'translateY(' + (window.scrollY * 0.35) + 'px)';
    }, { passive: true });
  }

  /* ── 2b. Mobile dropdown toggles ── */
  document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  /* ── 3. Scroll reveal ── */
  // Grid children get staggered delays
  var GRID_SELS = [
    '.values-grid > .value-card',
    '.services-grid > .service-card',
    '.check-grid > .check-card',
    '.plans-grid > .plan-card',
    '.steps-grid > .step',
    '.areas-grid > .area-card',
    '.faq-list > .faq-item',
    '.three-panels > .panel',
  ];

  // Single elements reveal as one
  var SINGLE_SELS = [
    '.section-header',
    '.mission-heading',
    '.mission-body',
    '.hw-box',
    '.intro-body',
    '.intro-image',
    '.about-text',
    '.about-image',
    '.gs-text',
    '.contact-form-col',
    '.contact-info-col',
    '.areas-intro',
  ];

  GRID_SELS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = Math.min(i * 0.1, 0.4) + 's';
    });
  });

  SINGLE_SELS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.classList.add('reveal');
    });
  });

  if (!window.IntersectionObserver) {
    // Fallback: just show everything
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

})();
