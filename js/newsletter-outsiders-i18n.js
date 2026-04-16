(function () {
  if (!document.querySelector('.nl-shell')) return;

  const SNAPSHOT = {
    taken: false,
    title: '',
    html: {},
    attrs: {}
  };

  const EN = {
    title: 'Outsiders on the Rise | GP Newsletter',
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
      '.nl-kicker': ['Ecosystem · Voter · 2025'],
      '.nl-title': ['Outsiders on the rise: how the political board is being reshaped'],
      '.nl-meta': ['GP strategic newsletter · 6 min read'],
      '.nl-lead': ['Competition is no longer centered on traditional party structures. Figures without political machinery capture votes, legitimacy, and real power through distrust, performance, and disintermediation.'],
      'article > p': [
        'For decades, political competition was dominated by traditional party structures: hierarchical, territorial, and predictable organizations. Yet in recent years, and even more strongly as 2025 approaches, that model shows clear signs of exhaustion. In its place, outsider figures are emerging who, without the classic backing of parties, manage to capture attention, votes, and real power.',
        'This phenomenon is neither anecdotal nor circumstantial. It responds to deep transformations in the political ecosystem, in voter behavior, and in the way legitimacy is built.',
        'Current voters do not begin from trust, but from suspicion. Traditional institutions, parties, parliaments, unions, and the media, no longer function as automatic guarantors of credibility. In many contexts, they are perceived as slow, disconnected, or captured by their own interests.',
        'In this scenario, the outsider does not compete despite not belonging to the system, but precisely because of it. Their main asset is symbolic distance from the status quo.',
        'One of the most relevant changes is the shift from ideology to perceived execution. Voters no longer ask only what a candidate thinks, but: Do they speak clearly? Do they respond quickly? Do they understand my everyday problems? Do they seem authentic?',
        'Outsiders usually stand out here: they simplify the message, reduce intermediaries, and prioritize direct communication. They do not promise doctrinal coherence, but action, disruption, and decision.',
        'Social media and digital channels now make it possible to build political power without going through traditional structures. The outsider understands this better than anyone: they speak without filters, build a narrative in real time, and turn every intervention into an event.',
        'It is not only about saying different things, but about saying them in a way the traditional system cannot replicate.',
        'The contemporary voter is less loyal and more volatile. They change options more easily and evaluate election by election. This weakens historic parties, which relied on stable identities, and benefits figures capable of capturing specific moments of social discontent.',
        'In this context, the outsider works as an escape valve: they channel frustration, anger, or exhaustion, even without offering fully structured solutions.',
        'The rise of outsiders is not without risks: institutional fragility, difficulty governing without structure, excessive dependence on the individual figure. However, ignoring the phenomenon is a strategic mistake. It is not an anomaly, but a clear sign that the rules of the game have changed.',
        'The advance of outsiders does not only redefine who reaches power, but how power is built. Political organizations, and business organizations too, that fail to understand this logic risk becoming obsolete: long messages, slow processes, and closed structures no longer connect with audiences that demand speed, clarity, and authenticity.',
        'Understanding the new voter is not an ideological question, but a strategic one. And in 2025, strategy is the real battlefield.'
      ],
      '.nl-number': [
        '1. The new starting point: structural distrust',
        '2. From ideology to political performance',
        '3. Direct communication and disintermediation',
        '4. The new voter: less loyalty, more evaluation',
        '5. Risks and limits of the phenomenon'
      ],
      '.nl-aside': ['<strong>Algorithmic logic:</strong> constant visibility, short emotional messages, and polarization as an engine of reach.'],
      'article h2': ['Conclusion: it is not who wins, but how they win'],
      '.nl-footer-note': ['If you want to receive these analyses in your inbox, subscribe to the GP newsletter.'],
      'footer .footer-col:nth-child(1) h4': ['Contact'],
      'footer .footer-col:nth-child(1) p': [
        '<strong>Address:</strong> Av. Rivadavia 1725, CABA',
        '<strong>Phone:</strong> 54 11 554746300<br>54 9 2325457856',
        '<strong>Email:</strong> contacto@gp.com'
      ],
      'footer .footer-col:nth-child(2) h4': ['Services'],
      'footer .footer-col:nth-child(2) li': [
        'Institutional planning and strengthening',
        'Political communication and campaigns',
        'Public opinion research',
        'Training and school of government'
      ],
      'footer .footer-col:nth-child(3) h4': ['Newsletter'],
      'footer .footer-col:nth-child(3) p': ['Subscribe to receive updates and strategic resources.'],
      'footer .footer-newsletter button': ['Send'],
      '#footer-text': ['&copy; 2025 GP Political Consulting. All rights reserved.']
    },
    attrs: {
      'html::lang': ['en'],
      '.tm-header-badge::aria-label': ['GP home'],
      '.tm-header-badge img::alt': ['GP Political Consulting'],
      '.tm-quick-menu::aria-label': ['Quick links'],
      '.language-selector::aria-label': ['Language selector'],
      '.lang-toggle::aria-label': ['Select language'],
      '.lang-toggle img::alt': ['Language'],
      '.lang-menu::aria-label': ['Languages'],
      '.nl-hero img::alt': ['Illustration of political outsiders'],
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

  function applyNewsletterOutsidersLanguage(language) {
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
    if (window.__newsletterOutsidersLangWrapped) return;
    if (typeof window.setLanguage === 'function') {
      const originalSetLanguage = window.setLanguage;
      window.setLanguage = function (language) {
        originalSetLanguage(language);
        applyNewsletterOutsidersLanguage(language);
      };
      window.__newsletterOutsidersLangWrapped = true;
    }

    document.querySelectorAll('.lang-option').forEach((button) => {
      if (button.dataset.newsletterOutsidersBound === '1') return;
      button.addEventListener('click', function () {
        const language = this.getAttribute('data-lang') || 'es';
        applyNewsletterOutsidersLanguage(language);
      });
      button.dataset.newsletterOutsidersBound = '1';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindPageLanguage();
    applyNewsletterOutsidersLanguage(currentLanguage());
  });
})();
