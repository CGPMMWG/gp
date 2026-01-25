(function(){
  const translations = {
    en: {
      text: {
        'da-hero-eyebrow': 'Performance and Digital Creativity',
        'da-hero-title': 'Digital Advertising Agency',
        'da-hero-lead': 'We launch integrated campaigns with segmentation, content, and real-time measurement to accelerate results.',
        'da-intro-title': 'Digital Advertising Agency',
        'da-intro-text-1': 'In the digital world, speaking to everyone equally means speaking to no one. Targets are increasingly smaller and more specific, so precise tools are required to reach them effectively.',
        'da-intro-text-2': 'Our services enable you to reach high-quality audiences, monitor each campaign minute by minute, and maximize return on investment.',
        'da-bullet-1-title': 'Research and Targeting',
        'da-bullet-1-text': 'Empirical field research to identify key segments. We replicate those segments and build audiences across digital platforms.',
        'da-bullet-2-title': 'Analytics and Tracking',
        'da-bullet-2-text': 'Every action is measurable. We track, analyze, and optimize critical variables in real time to improve performance.',
        'da-bullet-3-title': 'Content Strategy and Development',
        'da-bullet-3-text': 'We iterate messaging based on data, aligning content with digital strategy and leaving no room for intuition.',
        'da-card-1-title': 'YouTube Consulting',
        'da-card-1-text': 'Massive audiovisual reach with precise segmentation and low costs.',
        'da-card-2-title': 'Twitter Consulting',
        'da-card-2-text': 'Message amplification focused on conversation and influence.',
        'da-card-3-title': 'Facebook Consulting',
        'da-card-3-text': 'Direct investment management and advanced tracking within Meta.',
        'da-card-4-title': 'Mobile Advertising',
        'da-card-4-text': 'Mobile-optimized formats designed for impact and conversion.',
        'da-card-5-title': 'Google AdWords Consulting',
        'da-card-5-text': 'Capture real demand through keywords and continuous measurement.',
        'da-cta-title': 'Request a Digital Diagnosis',
        'da-cta-text': "Choose the type of support you need and we'll respond with a concrete proposal for your project.",
        'da-cta-primary': 'Marketing Advisory',
        'da-cta-secondary': 'Digital Advertising',
        'footer-contact-title': 'Contact',
        'footer-services-title': 'Services',
        'footer-service-1': 'Marketing Advisory',
        'footer-service-2': 'Strategic Consulting',
        'footer-service-3': 'Public Opinion Research',
        'footer-newsletter-title': 'Newsletter',
        'footer-newsletter-text': 'Subscribe to receive updates and strategic resources.',
        'footer-newsletter-button': 'Submit'
      },
      html: {
        'footer-address': '<strong>Address:</strong> Av. Rivadavia 1725, CABA',
        'footer-phones': '<strong>Phone:</strong> +54 11 5547-4630<br>+54 9 2325-457856',
        'footer-email': '<strong>Email:</strong> contacto@gp.com',
        'footer-text': '&copy; 2025 GP Political Consulting. All rights reserved.'
      },
      attrs: {
        'footer-newsletter-input': { placeholder: 'Email address' }
      }
    }
  };

  const snapshot = { taken: false, html: {}, attrs: {} };

  function takeSnapshot(){
    if (snapshot.taken) return;
    try {
      const ids = Object.keys(translations.en.text).concat(Object.keys(translations.en.html));
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) snapshot.html[id] = el.innerHTML;
      });
      const attrMap = translations.en.attrs || {};
      Object.keys(attrMap).forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        snapshot.attrs[id] = {};
        Object.keys(attrMap[id]).forEach((attr) => {
          snapshot.attrs[id][attr] = el.getAttribute(attr);
        });
      });
      snapshot.taken = true;
    } catch (e) { /* noop */ }
  }

  function restore(){
    try {
      Object.keys(snapshot.html).forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = snapshot.html[id];
      });
      Object.keys(snapshot.attrs).forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const attrs = snapshot.attrs[id] || {};
        Object.keys(attrs).forEach((attr) => {
          if (attrs[attr] === null || attrs[attr] === undefined) {
            el.removeAttribute(attr);
          } else {
            el.setAttribute(attr, attrs[attr]);
          }
        });
      });
    } catch (e) { /* noop */ }
  }

  function applyLanguage(lang){
    takeSnapshot();
    if (lang !== 'en') {
      restore();
      return;
    }
    try {
      const t = translations.en;
      Object.keys(t.text).forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = t.text[id];
      });
      Object.keys(t.html).forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = t.html[id];
      });
      const attrMap = t.attrs || {};
      Object.keys(attrMap).forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        Object.keys(attrMap[id]).forEach((attr) => {
          el.setAttribute(attr, attrMap[id][attr]);
        });
      });
    } catch (e) { /* noop */ }
  }

  function resolveLanguage(){
    try {
      if (typeof getRequestedLanguage === 'function') {
        return (getRequestedLanguage() || 'es').toLowerCase();
      }
    } catch (e) { /* noop */ }
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('lang');
      if (q) return q.toLowerCase();
    } catch (e) { /* noop */ }
    try {
      const stored = window.localStorage ? localStorage.getItem('trendLang') : null;
      if (stored) return stored.toLowerCase();
    } catch (e) { /* noop */ }
    return 'es';
  }

  function init(){
    const lang = resolveLanguage();
    applyLanguage(lang);
    if (typeof window.setLanguage === 'function' && !window.__daLangWrapped) {
      const original = window.setLanguage;
      window.setLanguage = function(l){
        original(l);
        applyLanguage(l);
      };
      window.__daLangWrapped = true;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
