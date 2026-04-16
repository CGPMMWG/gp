(function () {
  if (!document.querySelector('.cs-hero')) return;

  const SNAPSHOT = {
    taken: false,
    title: '',
    html: {},
    attrs: {},
    hrefs: {}
  };

  const EN = {
    title: 'GP Political Consulting · Strategic Consulting',
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
      '.cs-hero-eyebrow': ['Strategy for better decisions'],
      '.cs-hero h1': ['Strategic Consulting'],
      '.cs-hero-lead': ['When politics becomes complex, strategy makes the difference. We turn diagnosis into direction and coherent action.'],
      '.cs-intro h2': ['From diagnosis to strategic direction'],
      '.cs-intro > p': [
        'Every political project starts with an idea, a conviction, and a goal. But between that initial intention and real impact, message fragmentation, contextual pressure, urgency, and lack of focus usually appear.',
        'In increasingly volatile political scenarios, communicating is not enough. You need to understand the context, organize decisions, and build a strategy that sustains the project over time. That is where our work begins.'
      ],
      '.cs-bullet h3': [
        'Deep diagnosis',
        'Strategic direction',
        'Coherent narrative'
      ],
      '.cs-bullet p': [
        'Political, social, and territorial analysis to identify actors, tensions, and opinion climates that condition the project.',
        'We define real goals, priorities, and coherent positioning so decisions are made on solid ground.',
        'We build a narrative that legitimizes the strategy by aligning discourse, actions, and public decisions.'
      ],
      '.cs-duo-heading h3': ['In the private and public spheres'],
      '.cs-duo-body h3': [
        'Political advisory',
        'Business management'
      ],
      '.cs-duo-card:first-child li': [
        'Development and positioning of image and strategic narrative.',
        'Coordination of content, spokespersons, and public agenda.',
        'Campaign planning and crisis management with a data-driven approach.',
        'Training in persuasive and argumentative communication.'
      ],
      '.cs-duo-card.alt li': [
        'Diagnosis and improvement of key processes and decision-making.',
        'Implementation of digital tools and automation.',
        'Design and support for action plans and internal governance.',
        'Development of leadership, culture, and organizational narrative.'
      ],
      '.cs-accordion-title': [
        'From diagnosis to strategic direction',
        'Giving meaning to the political project',
        'A narrative that sustains the strategy',
        'Turning strategy into action',
        'Supporting, adjusting, and sustaining'
      ],
      '.cs-accordion-content p': [
        'Every process begins with a deep reading of the political, social, and territorial landscape. We analyze actors, tensions, opinion climates, and power dynamics that shape the project.',
        'A strategy is not just a plan: it is a clear direction. We define real goals, priorities, and coherent positioning before the electorate or the public.',
        'We develop a strategic narrative that gives meaning to the project beyond short-term situations, explaining why something is said, when, and from where.',
        'We define workflows, decision criteria, and coordination mechanisms. We professionalize management so you can respond quickly without losing coherence.',
        'Continuous monitoring, constant interpretation of the context, and strategic adjustments when the scenario requires it in order to keep the course.'
      ],
      '.cs-highlight h3': ['Strategy for better decisions'],
      '.cs-highlight p': ['Our consulting is designed for electoral campaigns, political projects, and public administrations that need clarity, focus, and coherence in complex contexts. In politics, the difference is not made by the one who speaks louder, but by the one who knows where they are going.'],
      '.cs-cta h3': ['Request a strategic assessment'],
      '.cs-cta > p': ['Choose the type of support you need and we will reply with a concrete proposal for your project.'],
      '.cs-cta-primary': ['Political advisory'],
      '.cs-cta-secondary': ['Business management'],
      'footer .footer-col:nth-child(1) h4': ['Contact'],
      'footer .footer-col:nth-child(1) p': [
        '<strong>Address:</strong> Av. Rivadavia 1725, CABA',
        '<strong>Phone:</strong> 54 11 554746300<br>54 9 2325457856',
        '<strong>Email:</strong> contacto@gp.com'
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
      '#footer-text': ['&copy; 2025 GP Political Consulting. All rights reserved.']
    },
    attrs: {
      'html::lang': ['en'],
      '.tm-header-badge::aria-label': ['GP home'],
      '.tm-quick-menu::aria-label': ['Quick links'],
      '.language-selector::aria-label': ['Language selector'],
      '.lang-toggle::aria-label': ['Select language'],
      '.lang-menu::aria-label': ['Languages'],
      '.tm-header-badge img::alt': ['GP Political Consulting'],
      '.lang-toggle img::alt': ['Language'],
      '.cs-hero > img::alt': ['Team analyzing political strategy'],
      '.cs-duo-card:first-child img::alt': ['Political advisory'],
      '.cs-duo-card.alt img::alt': ['Business management'],
      '.footer-newsletter input::placeholder': ['Email address']
    },
    hrefs: {
      '.cs-cta-primary': ['mailto:contacto@gp.com?subject=Request%20for%20political%20advisory'],
      '.cs-cta-secondary': ['mailto:contacto@gp.com?subject=Request%20for%20business%20management']
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

  function applyStrategicConsultingLanguage(language) {
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
    if (window.__strategicConsultingLangWrapped) return;
    if (typeof window.setLanguage === 'function') {
      const originalSetLanguage = window.setLanguage;
      window.setLanguage = function (language) {
        originalSetLanguage(language);
        applyStrategicConsultingLanguage(language);
      };
      window.__strategicConsultingLangWrapped = true;
    }

    document.querySelectorAll('.lang-option').forEach((button) => {
      if (button.dataset.strategicConsultingBound === '1') return;
      button.addEventListener('click', function () {
        const language = this.getAttribute('data-lang') || 'es';
        applyStrategicConsultingLanguage(language);
      });
      button.dataset.strategicConsultingBound = '1';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindPageLanguage();
    applyStrategicConsultingLanguage(currentLanguage());
  });
})();
