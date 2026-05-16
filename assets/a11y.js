/* Hunter Tap & Gas - a11y.js
   Three user controls, all persisted in localStorage:
   - Plain English mode (jargon swap)
   - Text size (3 levels)
   - High contrast mode
*/
(function(){
  'use strict';

  var KEYS = { pe: 'htgc_pe', size: 'htgc_size', hc: 'htgc_hc' };
  var body = document.body;

  // Read saved prefs
  function read(){
    try {
      return {
        pe: localStorage.getItem(KEYS.pe) === '1',
        size: parseInt(localStorage.getItem(KEYS.size) || '1', 10),
        hc: localStorage.getItem(KEYS.hc) === '1'
      };
    } catch (e){ return { pe:false, size:1, hc:false }; }
  }

  // Write
  function save(k, v){ try { localStorage.setItem(k, v); } catch (e){} }

  // Apply prefs to body / CSS
  function apply(prefs){
    body.classList.toggle('pe-mode', !!prefs.pe);
    body.classList.toggle('hc-mode', !!prefs.hc);
    var scale = prefs.size === 3 ? 1.3 : prefs.size === 2 ? 1.15 : 1;
    document.documentElement.style.setProperty('--user-font-scale', scale);
    // Update pressed state on buttons
    var peBtn = document.getElementById('a11y-pe');
    if (peBtn) peBtn.setAttribute('aria-pressed', prefs.pe ? 'true' : 'false');
    var hcBtn = document.getElementById('a11y-hc');
    if (hcBtn) hcBtn.setAttribute('aria-pressed', prefs.hc ? 'true' : 'false');
    document.querySelectorAll('[data-size-btn]').forEach(function(b){
      b.setAttribute('aria-pressed', parseInt(b.getAttribute('data-size-btn'), 10) === prefs.size ? 'true' : 'false');
    });
  }

  // Inject panel HTML
  function buildPanel(){
    var trigger = document.createElement('button');
    trigger.className = 'a11y-trigger';
    trigger.setAttribute('aria-label', 'Accessibility options');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'a11y-panel');
    trigger.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 7H15v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>';

    var panel = document.createElement('div');
    panel.className = 'a11y-panel';
    panel.id = 'a11y-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Accessibility options');
    panel.innerHTML = ''
      + '<button class="a11y-close" aria-label="Close accessibility panel">&times;</button>'
      + '<h2>Accessibility</h2>'
      + '<div class="a11y-group">'
        + '<span class="a11y-label" id="a11y-lbl-size">Text size</span>'
        + '<div class="a11y-btns" role="group" aria-labelledby="a11y-lbl-size">'
          + '<button class="a11y-btn size-1" data-size-btn="1" aria-pressed="true">A</button>'
          + '<button class="a11y-btn size-2" data-size-btn="2" aria-pressed="false">A</button>'
          + '<button class="a11y-btn size-3" data-size-btn="3" aria-pressed="false">A</button>'
        + '</div>'
      + '</div>'
      + '<div class="a11y-group">'
        + '<span class="a11y-label" id="a11y-lbl-pe">Plain English mode</span>'
        + '<div class="a11y-btns">'
          + '<button class="a11y-btn" id="a11y-pe" aria-pressed="false" aria-describedby="a11y-pe-desc">Swap jargon for plain words</button>'
        + '</div>'
        + '<span id="a11y-pe-desc" class="sr-only" style="position:absolute;left:-9999px">Replaces trade terms like "backflow prevention" with plain English explanations.</span>'
      + '</div>'
      + '<div class="a11y-group">'
        + '<span class="a11y-label" id="a11y-lbl-hc">High contrast mode</span>'
        + '<div class="a11y-btns">'
          + '<button class="a11y-btn" id="a11y-hc" aria-pressed="false">Black on white, no colour</button>'
        + '</div>'
      + '</div>';

    document.body.appendChild(trigger);
    document.body.appendChild(panel);

    trigger.addEventListener('click', function(){
      var open = panel.classList.toggle('open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    panel.querySelector('.a11y-close').addEventListener('click', function(){
      panel.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    });

    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && panel.classList.contains('open')){
        panel.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });

    document.addEventListener('click', function(e){
      if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== trigger && !trigger.contains(e.target)){
        panel.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    // Wire controls
    panel.querySelectorAll('[data-size-btn]').forEach(function(b){
      b.addEventListener('click', function(){
        var v = parseInt(b.getAttribute('data-size-btn'), 10);
        save(KEYS.size, v);
        var prefs = read();
        apply(prefs);
      });
    });
    panel.querySelector('#a11y-pe').addEventListener('click', function(){
      var prefs = read();
      var next = !prefs.pe;
      save(KEYS.pe, next ? '1' : '0');
      apply(read());
    });
    panel.querySelector('#a11y-hc').addEventListener('click', function(){
      var prefs = read();
      var next = !prefs.hc;
      save(KEYS.hc, next ? '1' : '0');
      apply(read());
    });
  }

  // Boot
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ buildPanel(); apply(read()); });
  } else {
    buildPanel();
    apply(read());
  }
})();
