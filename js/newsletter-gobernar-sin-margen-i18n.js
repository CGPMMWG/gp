(function () {
  if (!document.querySelector('.nl-shell')) return;

  const SNAPSHOT = {
    taken: false,
    title: '',
    html: {},
    attrs: {}
  };

  const EN = {
    title: 'Governing Without Room to Spare | GOPE Consulting newsletter',
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
      '.nl-kicker': ['Government · Crisis · 2025'],
      '.nl-title': ['Governing without room to spare: unpopular decisions in critical contexts'],
      '.nl-meta': ['GOPE Consulting Newsletter · 6 min read'],
      '.nl-lead': ['When there is no good news, the challenge is to sustain legitimacy without denying the cost. The key is to manage political damage with clarity, presence, and strategy.'],
      'article > p': [
        'There are moments when governing stops being a battle over agenda and becomes an exercise in damage management. Critical economic conditions, social conflict, unavoidable adjustments, or external crises reduce room for maneuver to a minimum.',
        'In those scenarios, the central question is no longer how to gain support, but how to avoid losing control. Governing without room to spare requires a different kind of leadership, a different communication logic, and above all, a clear strategy to manage political costs without breaking legitimacy.',
        'Every unpopular decision has a cost. Denying it is the first mistake. Economic adjustments, cuts, structural reforms, or emergency measures generate rejection, anxiety, and conflict.',
        'The difference between a government that withstands pressure and one that collapses is not in avoiding the cost, but in anticipating it, measuring it correctly, and distributing it strategically. When political cost is underestimated, it accumulates. And when it accumulates without control, it turns into a crisis of authority.',
        'One of the most common mistakes in critical contexts is trying to sell hard decisions as if they were achievements. Voters quickly perceive the dissonance between discourse and reality.',
        'Strategic honesty does not eliminate conflict, but it reduces the feeling of deception.',
        'In critical contexts, prolonged silence or excessive delegation communicates weakness. The governing figure must assume the symbolic cost of the decision.',
        'It is not about overexposure, but about clear presence: showing up in difficult moments, setting an explicit course, and conveying control even in adverse scenarios. When leadership disappears, conflict fills the vacuum.',
        'Not all wear and tear is fatal. Governing implies wear and tear. The problem arises when wear turns into loss of control.',
        'The difference lies in three key signals: fragmentation of the internal message, improvised reactions under pressure, and an inability to prioritize conflicts. A government can go through moments of low popularity and still retain power. What it cannot sustain is the perception of disorder.',
        'In scenarios with no room to spare, strategy stops being expansive and becomes defensive. It defines which battles to fight, which to postpone, and which to avoid.',
        'A solid strategy makes it possible to organize unpopular decisions within a coherent framework, avoid public contradictions, and preserve political capital for key moments. Without strategy, every decision becomes an open front. With strategy, even bad news can be managed.',
        'Critical contexts do not reward discursive creativity or forced optimism. They reward clarity, firmness, and coherence. Governing without room to spare is not an anomaly: it is a recurring phase in the exercise of power.',
        'Those who understand this logic do not seek to please, but to sustain legitimacy while moving through conflict. Because when there is no good news, the real political asset is not popularity. It is control.'
      ],
      '.nl-number': [
        '1. Political cost is not eliminated, it is managed',
        '2. Adjustments and crises: the mistake of communicating as if they were good news',
        '3. Economic crises and conflict: the role of visible leadership',
        '4. Wear and tear vs. loss of control',
        '5. Strategy as an anchor in critical contexts'
      ],
      '.nl-aside': ['<strong>Effective communication:</strong> in adverse situations, the goal is not enthusiasm, but understanding and predictability. Explain why, acknowledge the real impact, and avoid technical jargon or euphemisms.'],
      'article h2': ['Conclusion: governing when there is no applause'],
      '.nl-footer-note': ['If you want to receive these analyses in your inbox, subscribe to the GOPE Consulting newsletter.'],
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
      '.nl-hero img::alt': ['Critical contexts'],
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

  function applyNewsletterGobernarLanguage(language) {
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
    if (window.__newsletterGobernarLangWrapped) return;
    if (typeof window.setLanguage === 'function') {
      const originalSetLanguage = window.setLanguage;
      window.setLanguage = function (language) {
        originalSetLanguage(language);
        applyNewsletterGobernarLanguage(language);
      };
      window.__newsletterGobernarLangWrapped = true;
    }

    document.querySelectorAll('.lang-option').forEach((button) => {
      if (button.dataset.newsletterGobernarBound === '1') return;
      button.addEventListener('click', function () {
        const language = this.getAttribute('data-lang') || 'es';
        applyNewsletterGobernarLanguage(language);
      });
      button.dataset.newsletterGobernarBound = '1';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindPageLanguage();
    applyNewsletterGobernarLanguage(currentLanguage());
  });
})();
