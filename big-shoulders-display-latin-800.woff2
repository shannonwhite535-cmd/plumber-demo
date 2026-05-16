/* Hunter Tap & Gas - nav.js
   Handles mobile menu, dropdown, scroll shadow, FAQ accordion, current page highlighting */
(function(){
  'use strict';

  // Mobile menu toggle
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu){
    hamburger.addEventListener('click', function(){
      var open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    // Escape to close
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')){
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  // Nav dropdown
  document.querySelectorAll('.nav-dropdown').forEach(function(dd){
    var btn = dd.querySelector('.nav-dd-btn');
    if (!btn) return;
    btn.addEventListener('click', function(e){
      e.preventDefault();
      var open = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function(e){
      if (!dd.contains(e.target)){
        dd.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && dd.classList.contains('open')){
        dd.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  });

  // Scroll shadow on nav
  var nav = document.querySelector('nav.main-nav');
  if (nav){
    var onScroll = function(){
      if (window.scrollY > 8){ nav.classList.add('scrolled'); }
      else { nav.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // FAQ accordion (all .faq-q buttons)
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var expanded = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      var ans = document.getElementById(q.getAttribute('aria-controls'));
      if (ans){
        if (expanded){ ans.setAttribute('hidden', ''); }
        else { ans.removeAttribute('hidden'); }
      }
    });
  });

  // Mark current page link
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/index.html') path = '/';
  document.querySelectorAll('nav a, .mobile-menu a, .footer-col a').forEach(function(a){
    var href = a.getAttribute('href');
    if (!href) return;
    var hrefPath = href.replace(/\/$/, '');
    if (hrefPath === '/index.html') hrefPath = '/';
    if (hrefPath === path && hrefPath !== '/' || (path === '/' && (hrefPath === '/' || hrefPath === ''))){
      a.setAttribute('aria-current', 'page');
    }
  });

  // Copyright year
  document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });

  // Form submit guard (demo mode - no real submission)
  document.querySelectorAll('form[data-demo]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var alertBox = document.createElement('div');
      alertBox.setAttribute('role', 'status');
      alertBox.style.cssText = 'background:#15263d;color:#fff;padding:20px 24px;border-radius:6px;margin-top:16px;border-left:4px solid #b85c3c;font-size:15px;line-height:1.6';
      alertBox.innerHTML = '<strong style="color:#fff;display:block;margin-bottom:6px">Demo site</strong>This form is visual only. On a real Hunter Tap & Gas site, this would email Dean directly and redirect to a thank-you page.';
      var existing = form.querySelector('[role="status"]');
      if (existing) existing.remove();
      form.appendChild(alertBox);
    });
  });

})();
