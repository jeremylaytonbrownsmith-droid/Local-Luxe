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

  /* ── 2c. AJAX form submit (branded thank-you, no Formspree redirect) ── */
  function buildFormSuccess() {
    var wrap = document.createElement('div');
    wrap.className = 'form-success';
    wrap.setAttribute('role', 'status');
    wrap.innerHTML =
      '<div class="form-success-icon">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="32" height="32"><path d="M20 6 9 17l-5-5"/></svg>' +
      '</div>' +
      '<div class="form-success-script">thank you</div>' +
      '<h3 class="form-success-title">Your message has been sent</h3>' +
      '<p class="form-success-text">Thank you for reaching out to Local Luxe Concierge. We’ve received your inquiry and a member of our team will be in touch with you shortly.</p>';
    return wrap;
  }

  function showFormError(form, btn, originalText) {
    if (btn) { btn.disabled = false; btn.innerHTML = originalText; }
    var err = form.querySelector('.form-error');
    if (!err) {
      err = document.createElement('div');
      err.className = 'form-error';
      err.setAttribute('role', 'alert');
      form.insertBefore(err, form.firstChild);
    }
    err.innerHTML = 'Sorry — something went wrong sending your message. Please try again, or email us directly at <a href="mailto:info@localluxeconcierge.com">info@localluxeconcierge.com</a>.';
  }

  document.querySelectorAll('form[action*="formspree.io"]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          var success = buildFormSuccess();
          form.parentNode.insertBefore(success, form);
          form.style.display = 'none';
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          showFormError(form, btn, originalText);
        }
      }).catch(function () {
        showFormError(form, btn, originalText);
      });
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
    '.hw-inspect-panel',
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
