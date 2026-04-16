(function () {
  if (!document.querySelector('.da-hero')) return;

  const SNAPSHOT = {
    taken: false,
    title: '',
    html: {},
    attrs: {},
    hrefs: {}
  };

  const EN = {
    title: 'GP Political Consulting · Digital Advertisement Agency',
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
      '.da-hero-eyebrow': ['Performance and digital creativity'],
      '.da-hero h1': ['Digital Advertisement Agency'],
      '.da-hero-lead': ['We launch integrated campaigns with targeting, content, and real-time measurement to accelerate results.'],
      '.da-intro h2': ['Digital Advertisement Agency'],
      '.da-intro > p': [
        'In the digital world, speaking to everyone in the same way means speaking to no one. Audiences are increasingly smaller and more specific, so you need the right tools to reach them precisely.',
        'Our services help you reach effective audiences, monitor every campaign minute by minute, and maximize return on investment.'
      ],
      '.da-bullet h3': [
        'Research and Targeting',
        'Analytics and Tracking',
        'Content Strategy and Development'
      ],
      '.da-bullet p': [
        'Hands-on field research to identify key segments. We replicate those segments and build audiences across digital platforms.',
        'Every action is measurable. We track, monitor, and optimize the critical variables minute by minute to improve performance.',
        'We iterate messages based on data, aligning content with the digital strategy without leaving room for intuition.'
      ],
      '.da-card-body h4': [
        'YouTube Consulting',
        'Twitter Consulting',
        'Facebook Consulting',
        'Mobile Advertising',
        'Google Adwords Consulting'
      ],
      '.da-card-body p': [
        'Mass audiovisual reach with precise targeting and low costs.',
        'Message amplification focused on conversation and influence.',
        'Direct media investment management and advanced tracking on Meta.',
        'Mobile formats optimized for impact and conversion.',
        'Capture real demand with keywords and continuous measurement.'
      ],
      '.da-cta h3': ['Request a digital assessment'],
      '.da-cta > p': ['Choose the type of support you need and we will reply with a concrete proposal for your project.'],
      '.da-cta-primary': ['Marketing advisory'],
      '.da-cta-secondary': ['Digital advertising'],
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
      '.da-hero > img::alt': ['Team managing digital ads across multiple screens'],
      '.footer-newsletter input::placeholder': ['Email address']
    },
    hrefs: {
      '.da-cta-primary': ['mailto:contacto@gp.com?subject=Request%20for%20marketing%20advisory'],
      '.da-cta-secondary': ['mailto:contacto@gp.com?subject=Request%20for%20digital%20advertising']
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

  function applyDigitalAdvertisementLanguage(language) {
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
    if (window.__digitalAdvertisementLangWrapped) return;
    if (typeof window.setLanguage === 'function') {
      const originalSetLanguage = window.setLanguage;
      window.setLanguage = function (language) {
        originalSetLanguage(language);
        applyDigitalAdvertisementLanguage(language);
      };
      window.__digitalAdvertisementLangWrapped = true;
    }

    document.querySelectorAll('.lang-option').forEach((button) => {
      if (button.dataset.digitalAdvertisementBound === '1') return;
      button.addEventListener('click', function () {
        const language = this.getAttribute('data-lang') || 'es';
        applyDigitalAdvertisementLanguage(language);
      });
      button.dataset.digitalAdvertisementBound = '1';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindPageLanguage();
    applyDigitalAdvertisementLanguage(currentLanguage());
  });
})();
