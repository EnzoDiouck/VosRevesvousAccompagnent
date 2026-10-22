/*
 * Vos rêves vous accompagnent — affichage du contenu
 * Les textes et images viennent de /content/infos.json (modifiable depuis /admin).
 */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function paragraphs(text) {
    return String(text || '').split(/\n\s*\n/).filter(Boolean).map(function (p) {
      return '<p>' + esc(p.trim()).replace(/\n/g, '<br>') + '</p>';
    }).join('');
  }

  function render(d) {
    document.querySelectorAll('[data-bind]').forEach(function (el) {
      var v = d[el.dataset.bind];
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-bind-src]').forEach(function (el) {
      var v = d[el.dataset.bindSrc];
      if (v) el.src = v;
    });
    document.querySelectorAll('[data-bind-paragraphs]').forEach(function (el) {
      el.innerHTML = paragraphs(d[el.dataset.bindParagraphs]);
    });

    if (d.lien_tarif) {
      document.querySelectorAll('.tarif-link').forEach(function (a) { a.href = d.lien_tarif; });
    }
    if (d.instagram) {
      var url = 'https://www.instagram.com/' + d.instagram.replace(/^@/, '') + '/';
      document.querySelectorAll('.insta-link').forEach(function (a) { a.href = url; a.hidden = false; });
    }

    document.getElementById('etapes').innerHTML = (d.etapes || []).map(function (e, i) {
      return '<li class="etape reveal">' +
        (e.image ? '<img class="etape-img" src="' + esc(e.image) + '" alt="' + esc(e.titre) + '" loading="lazy">' : '') +
        '<h3>' + String(i + 1).padStart(2, '0') + ' — ' + esc(e.titre) + '</h3>' +
        (e.sous_titre ? '<h4>' + esc(e.sous_titre) + '</h4>' : '') +
        '<p>' + esc(e.texte) + '</p>' +
        '</li>';
    }).join('');
  }

  /* Apparition douce au défilement */
  var io = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px' })
    : null;
  function reveal() {
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('in');
    });
  }

  /* Menu mobile */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    btn.setAttribute('aria-expanded', nav.classList.toggle('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
  });

  /* Bordure de l'en-tête au défilement */
  var topbar = document.querySelector('.topbar');
  addEventListener('scroll', function () { topbar.classList.toggle('scrolled', scrollY > 10); }, { passive: true });

  document.getElementById('year').textContent = new Date().getFullYear();

  fetch('/content/infos.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .catch(function () { return {}; })
    .then(function (d) { render(d); reveal(); });

  /* Connexion à l'admin depuis un e-mail d'invitation Netlify */
  if (/(invite|recovery|confirmation|email_change)_token|access_token/.test(location.hash)) {
    var s = document.createElement('script');
    s.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    s.onload = function () {
      window.netlifyIdentity.on('login', function () { location.href = '/admin/'; });
    };
    document.head.appendChild(s);
  }
})();
