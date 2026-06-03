(function () {
  if (!document.querySelector('.daily-shell')) return;

  const SNAPSHOT = {
    taken: false,
    title: '',
    html: {},
    attrs: {}
  };

  const EN = {
    title: 'GOPE Consulting Newsletter',
    html: {
      '.tm-quick-menu': ['<a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a><a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">LinkedIn</a><a href="https://www.whatsapp.com/" target="_blank" rel="noopener" aria-label="WhatsApp">WhatsApp</a>'],
      '.lang-option[data-lang="es"]': ['Spanish'],
      '.lang-option[data-lang="en"]': ['English'],
      '.desktop-menu #nav-inicio': ['Home'],
      '.desktop-menu #nav-servicios': ['Services'],
      '.desktop-menu #nav-newsletter': ['Newsletter'],
      '.desktop-menu #nav-contacto': ['Contact'],
      '.mobile-menu #nav-inicio': ['Home'],
      '.mobile-menu #nav-servicios': ['Services'],
      '.mobile-menu #nav-newsletter-mobile': ['Newsletter'],
      '.mobile-menu #nav-contacto-mobile': ['Contact'],
      '.daily-top div': [
        'Thursday, January 8, 2026',
        'Follow us: Facebook &middot; WhatsApp'
      ],
      '.daily-masthead h1': ['GOPE Consulting Newsletter'],
      '.daily-lead .daily-kicker': ['Strategy &middot; Vote &middot; 2026'],
      '.daily-title': ['Social fragmentation and the end of stable majorities'],
      '.daily-excerpt': ['The electorate is breaking into layers with overlapping demands. Competing now requires reading local tensions, coordinating microsegments, and sustaining a narrative that brings order to diversity.'],
      '.daily-side .daily-kicker': [
        'Ecosystem &middot; Voter &middot; 2026',
        'Strategy &middot; Territory &middot; 2026',
        'Government &middot; Crisis &middot; 2025'
      ],
      '.daily-side h3': [
        'Outsiders on the rise: how the political board is being reshaped',
        'How to do politics in unequal municipalities',
        'Governing without room to spare: unpopular decisions in critical contexts'
      ],
      '.daily-side p': [
        'Distrust in traditional structures creates space for figures who capture attention through direct communication, performance, and a break with the status quo.',
        'Governing where gated communities, middle-class neighborhoods, and informal settlements coexist requires a shared narrative and precise territorial reading.',
        'When there is no good news, the challenge is to sustain legitimacy without denying the political cost of deciding under pressure.'
      ],
      '.daily-section h2': ['All newsletter articles'],
      '.daily-list .daily-kicker': [
        'Strategy &middot; Vote &middot; 2026',
        'Ecosystem &middot; Voter &middot; 2026',
        'Strategy &middot; Territory &middot; 2026',
        'Government &middot; Crisis &middot; 2025',
        'Region &middot; Transition &middot; 2026'
      ],
      '.daily-list h3': [
        'Social fragmentation and the end of stable majorities',
        'Outsiders on the rise: how the political board is being reshaped',
        'How to do politics in unequal municipalities',
        'Governing without room to spare: unpopular decisions',
        'Venezuela after the collapse: power without legitimacy'
      ],
      '.daily-list p': [
        'How to compete in fragmented and volatile electorates with territorial precision and flexible coalitions.',
        'The rise of figures without party machinery who gain legitimacy from their distance from the system.',
        'How to build a local strategy where very different social, territorial, and political demands coexist without losing a common narrative.',
        'How to sustain legitimacy when political room narrows and governing means managing costs, conflict, and control.',
        'Power persists while legitimacy erodes. Transition is no longer a date, but a dispute over real conditions.'
      ],
      'footer .footer-col:nth-child(1) h4': ['Contact'],
      'footer .footer-col:nth-child(1) p': [
        '<strong>Phone:</strong> <a href="https://wa.me/541122705173" target="_blank" rel="noopener">+54 11 2270 5173</a><br><a href="https://wa.me/541139282896" target="_blank" rel="noopener">+54 11 3928 2896</a>',
        '<strong>Email:</strong> <a href="mailto:info@gopeconsulting.com">info@gopeconsulting.com</a>'
      ],
      'footer .footer-col:nth-child(2) h4': ['Services'],
      'footer .footer-col:nth-child(2) li a': [
        'Marketing Advisory',
        'Strategic Consulting',
        'Public Opinion Research'
      ],      'footer .footer-col:nth-child(3) h4': ['Newsletter'],
      'footer .footer-col:nth-child(3) p': ['Subscribe to receive updates and strategic resources.'],
      'footer .footer-newsletter button': ['Send'],
      '#footer-text': ['&copy; 2026 GOPE Consulting. All rights reserved.']
    },
    attrs: {
      'html::lang': ['en'],
      '.tm-header-badge::aria-label': ['GOPE Consulting home'],
      '.tm-header-badge img::alt': ['GOPE Consulting'],
      '.tm-quick-menu::aria-label': ['Quick links'],
      '.language-selector::aria-label': ['Language selector'],
      '.lang-toggle::aria-label': ['Select language'],
      '.lang-toggle img::alt': ['Language'],
      '.lang-menu::aria-label': ['Languages'],
      '.daily-lead-link::aria-label': ['Open article Social fragmentation and the end of stable majorities'],
      '.daily-card-link::aria-label': [
        'Open article Outsiders on the rise',
        'Open article How to do politics in unequal municipalities',
        'Open article Governing without room to spare'
      ],
      '.daily-lead img::alt': ['Social fragmentation'],
      '.daily-card img::alt': [
        'Political outsiders',
        'Unequal municipalities',
        'Governing without room to spare'
      ],
      'footer .footer-newsletter input::placeholder': ['Email address']
    }
  };

  function snapshotHTML(selector) {
    if (SNAPSHOT.html[selector]) return;
    const nodes = document.querySelectorAll(selector);
    if (!nodes.length) return;
    SNAPSHOT.html[selector] = Array.from(nodes).map((node) => node.innerHTML);
  }

  function snapshotAttr(selector, attr) {
    const key = `${selector}::${attr}`;
    if (SNAPSHOT.attrs[key]) return;
    const nodes = document.querySelectorAll(selector);
    if (!nodes.length) return;
    SNAPSHOT.attrs[key] = Array.from(nodes).map((node) => node.getAttribute(attr));
  }

  function takeSnapshot() {
    if (SNAPSHOT.taken) return;
    SNAPSHOT.title = document.title;
    Object.keys(EN.html).forEach(snapshotHTML);
    Object.keys(EN.attrs).forEach((key) => {
      const sep = key.lastIndexOf('::');
      snapshotAttr(key.slice(0, sep), key.slice(sep + 2));
    });
    SNAPSHOT.taken = true;
  }

  function restoreHTML(selector) {
    const values = SNAPSHOT.html[selector];
    if (!values) return;
    document.querySelectorAll(selector).forEach((node, index) => {
      if (values[index] !== undefined) node.innerHTML = values[index];
    });
  }

  function restoreAttr(selector, attr) {
    const values = SNAPSHOT.attrs[`${selector}::${attr}`];
    if (!values) return;
    document.querySelectorAll(selector).forEach((node, index) => {
      const value = values[index];
      if (value === undefined || value === null) node.removeAttribute(attr);
      else node.setAttribute(attr, value);
    });
  }

  function applyPack(pack) {
    if (pack.title) document.title = pack.title;
    Object.keys(pack.html).forEach((selector) => {
      const values = pack.html[selector];
      document.querySelectorAll(selector).forEach((node, index) => {
        if (values[index] !== undefined) node.innerHTML = values[index];
      });
    });
    Object.keys(pack.attrs).forEach((key) => {
      const sep = key.lastIndexOf('::');
      const selector = key.slice(0, sep);
      const attr = key.slice(sep + 2);
      const values = pack.attrs[key];
      document.querySelectorAll(selector).forEach((node, index) => {
        if (values[index] !== undefined) node.setAttribute(attr, values[index]);
      });
    });
  }

  function applyNewsDailyLanguage(language) {
    takeSnapshot();

    if ((language || 'es').toLowerCase() === 'en') {
      applyPack(EN);
      return;
    }

    if (SNAPSHOT.title) document.title = SNAPSHOT.title;
    Object.keys(EN.html).forEach(restoreHTML);
    Object.keys(EN.attrs).forEach((key) => {
      const sep = key.lastIndexOf('::');
      restoreAttr(key.slice(0, sep), key.slice(sep + 2));
    });
  }

  function currentLanguage() {
    try {
      const params = new URLSearchParams(window.location.search);
      return (params.get('lang') || localStorage.getItem('trendLang') || 'es').toLowerCase();
    } catch (error) {
      return 'es';
    }
  }

  function bindPageLanguage() {
    if (window.__newsDailyLangWrapped) return;
    if (typeof window.setLanguage === 'function') {
      const originalSetLanguage = window.setLanguage;
      window.setLanguage = function (language) {
        originalSetLanguage(language);
        applyNewsDailyLanguage(language);
      };
      window.__newsDailyLangWrapped = true;
    }

    document.querySelectorAll('.lang-option').forEach((button) => {
      if (button.dataset.newsDailyBound === '1') return;
      button.addEventListener('click', function () {
        const language = this.getAttribute('data-lang') || 'es';
        applyNewsDailyLanguage(language);
      });
      button.dataset.newsDailyBound = '1';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindPageLanguage();
    applyNewsDailyLanguage(currentLanguage());
  });
})();
