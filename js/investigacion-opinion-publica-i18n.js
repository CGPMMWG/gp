(function () {
  if (!document.querySelector('.ip-hero')) return;

  const SNAPSHOT = {
    taken: false,
    title: '',
    html: {},
    attrs: {},
    hrefs: {}
  };

  const EN = {
    title: 'GOPE Consulting · Public Opinion Research',
    html: {
      '.tm-quick-menu': ['<a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a><a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">LinkedIn</a><a href="https://www.whatsapp.com/" target="_blank" rel="noopener" aria-label="WhatsApp">WhatsApp</a>'],
      '.lang-option[data-lang="es"]': ['Spanish'],
      '.lang-option[data-lang="en"]': ['English'],
      '.desktop-menu #nav-inicio': ['Home'],
      '.desktop-menu #nav-servicios': ['Services'],
      '.desktop-menu #nav-newsletter': ['Newsletter'],
      '.desktop-menu #nav-contacto': ['Contact'],
      '.mobile-menu li:nth-child(1) a': ['Home'],
      '.mobile-menu li:nth-child(2) a': ['Services'],
      '.mobile-menu #nav-newsletter-mobile': ['Newsletter'],
      '.mobile-menu li:nth-child(4) a': ['Contact'],
      '.ip-hero-kicker': ['Decide with data. Anticipate scenarios.'],
      '.ip-hero h1': ['Public Opinion Research'],
      '.ip-hero-lead': ['We turn electoral and public opinion data into actionable insights so you can make strategic decisions earlier and reduce political uncertainty.'],
      '.ip-hero-subline': ['In politics, intuition without data is risk. Data without analysis is noise. Our work is to turn complex information into clear decisions.'],
      '.ip-intro h2': [
        'What we do',
        'Our approach',
        'Key information'
      ],
      '.ip-what-text p': ['Public opinion research is a strategic tool for political decision-making. At GOPE Consulting, we design studies aimed at understanding social climates, detecting early signals, and anticipating scenarios by integrating data, context, and analysis so you can intervene with precision.'],
      '.ip-what-title': [
        'Measure social and political climates',
        'Detect emerging trends',
        'Anticipate electoral scenarios',
        'Evaluate leadership and narratives'
      ],
      '.ip-what-body': [
        'Reading social temperature, legitimacy, and latent demands to anticipate shifts.',
        'We identify early signals before they consolidate into agenda-setting issues or voting behavior.',
        'Models and tracking to estimate scenarios and sensitivity to events.',
        'We test perception, narrative, and policies to adjust positioning and messaging.'
      ],
      '.ip-service-box h3': [
        'Understand how the electorate thinks and speaks',
        'Analyze agenda installation',
        'Direct communication and citizen contact'
      ],
      '.ip-service-box p': [
        'Through focus groups and qualitative studies, we identify perceptions, arguments, doubts, and emotions that do not always appear in a traditional survey.',
        'We study which issues gain relevance, which messages manage to take hold, and which opportunities exist to intervene in public conversation.',
        'We implement direct contact actions through WhatsApp, SMS, IVR, call centers, and mass phone meetings to inform, listen, mobilize, and segment specific audiences.'
      ],
      '.ip-step h3': [
        'Strategic methodological design',
        'Deep data analysis',
        'Actionable insights'
      ],
      '.ip-step p': [
        'We choose the method that answers the decision at hand: surveys, tracking, qualitative research, territorial analysis, or a combination of sources.',
        'We integrate electoral data, current opinion, and context to detect patterns, tensions, and opportunities.',
        'Clear and prioritized recommendations: what to do, where, and with which narrative so decisions are evidence-based.'
      ],
      'section[style="margin:26px 0 8px;"] .ip-intro p': ['We do not run generic studies: every research project responds to a specific political decision.'],
      'section[style="margin:26px 0 0;"] .ip-intro p': ['Explore what we measure, who it is for, and why working on it with GOPE Consulting matters.'],
      '.ip-acc-title': [
        'What do we measure?',
        'Who is it for?',
        'Why GOPE Consulting?'
      ],
      '#ip-1 li': [
        'Image and positioning of leaders.',
        'Public agenda and sensitive issues.',
        'Voting intention and electoral volatility.',
        'Electorate segmentation.',
        'Reaction to messages, policies, and events.',
        'Reputational risks and narrative opportunities.'
      ],
      '#ip-2 li': [
        'Candidates and campaign teams.',
        'Governments and public decision-makers.',
        'Political groups and coalitions.',
        'Consulting firms and strategy teams.',
        'Organizations with political influence.'
      ],
      '#ip-3 li': [
        'Analytical, not ideological, approach.',
        'Political reading plus methodological rigor.',
        'Experience in complex and volatile scenarios.',
        'Results designed for decision-making, not just reporting.'
      ],
      '.ip-highlight p': ['Political advantage is not about knowing more, but about understanding earlier. Deciding with data, anticipating scenarios, and reducing uncertainty separates those who react from those who lead.'],
      '#cta h2': ['Before acting, understand the scenario'],
      '#cta > p': ['Need to understand the scenario before acting? We design custom research for your political context.'],
      '.ip-cta-buttons a:first-child': ['Contact GOPE Consulting'],
      '.ip-cta-buttons a.secondary': ['Request an initial assessment'],
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
      ],
      'footer .footer-col:nth-child(3) h4': ['Newsletter'],
      'footer .footer-col:nth-child(3) p': ['Subscribe to receive updates and strategic resources.'],
      'footer .footer-newsletter button': ['Send'],
      '#footer-text': ['&copy; 2026 GOPE Consulting. All rights reserved.']
    },
    attrs: {
      'html::lang': ['en'],
      '.tm-header-badge::aria-label': ['GOPE Consulting home'],
      '.tm-quick-menu::aria-label': ['Quick links'],
      '.language-selector::aria-label': ['Language selector'],
      '.lang-toggle::aria-label': ['Select language'],
      '.lang-menu::aria-label': ['Languages'],
      '.tm-header-badge img::alt': ['GOPE Consulting'],
      '.lang-toggle img::alt': ['Language'],
      '.ip-hero > img::alt': ['Public opinion research'],
      'footer .footer-newsletter input::placeholder': ['Email address'],
      '.ip-cta-buttons a:first-child::aria-label': ['Contact GOPE Consulting'],
      '.ip-cta-buttons a.secondary::aria-label': ['Request an initial assessment']
    },
    hrefs: {
      '.ip-cta-buttons a:first-child': ['index.html#contact-form']
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

  function snapshotHref(selector) {
    if (SNAPSHOT.hrefs[selector]) return;
    const nodes = document.querySelectorAll(selector);
    if (!nodes.length) return;
    SNAPSHOT.hrefs[selector] = Array.from(nodes).map((node) => node.getAttribute('href'));
  }

  function takeSnapshot() {
    if (SNAPSHOT.taken) return;
    SNAPSHOT.title = document.title;
    Object.keys(EN.html).forEach(snapshotHTML);
    Object.keys(EN.attrs).forEach((key) => {
      const sep = key.lastIndexOf('::');
      snapshotAttr(key.slice(0, sep), key.slice(sep + 2));
    });
    Object.keys(EN.hrefs).forEach(snapshotHref);
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

  function restoreHref(selector) {
    const values = SNAPSHOT.hrefs[selector];
    if (!values) return;
    document.querySelectorAll(selector).forEach((node, index) => {
      if (values[index] !== undefined) node.setAttribute('href', values[index]);
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
    Object.keys(pack.hrefs).forEach((selector) => {
      const values = pack.hrefs[selector];
      document.querySelectorAll(selector).forEach((node, index) => {
        if (values[index] !== undefined) node.setAttribute('href', values[index]);
      });
    });
  }

  function applyPublicOpinionLanguage(language) {
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
    Object.keys(EN.hrefs).forEach(restoreHref);
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
    if (window.__publicOpinionLangWrapped) return;
    if (typeof window.setLanguage === 'function') {
      const originalSetLanguage = window.setLanguage;
      window.setLanguage = function (language) {
        originalSetLanguage(language);
        applyPublicOpinionLanguage(language);
      };
      window.__publicOpinionLangWrapped = true;
    }

    document.querySelectorAll('.lang-option').forEach((button) => {
      if (button.dataset.publicOpinionBound === '1') return;
      button.addEventListener('click', function () {
        const language = this.getAttribute('data-lang') || 'es';
        applyPublicOpinionLanguage(language);
      });
      button.dataset.publicOpinionBound = '1';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindPageLanguage();
    applyPublicOpinionLanguage(currentLanguage());
  });
})();
