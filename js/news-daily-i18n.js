// News Daily translations (ES default, EN override)
(function(){
  const translations = {
    en: {
      text: {
        'daily-date': 'Thursday, January 8, 2026',
        'daily-title': 'GP Strategic Newsletter',
        'daily-lead-title': 'Social fragmentation and the end of stable majorities',
        'daily-lead-excerpt': 'The electorate breaks into layers with overlapping demands. Competing requires reading local tensions, coordinating micro-segments, and sustaining a narrative that orders diversity.',
        'daily-card-1-title': 'Rising outsiders: how the political board is being reshaped',
        'daily-card-1-excerpt': 'Distrust in traditional structures opens space for figures who capture attention with direct communication, performance, and a break from the status quo.',
        'daily-card-2-title': 'Governing without room: unpopular decisions in critical contexts',
        'daily-card-2-excerpt': 'When there is no good news, the challenge is to sustain legitimacy with clarity, presence, and strategy.',
        'daily-card-3-title': 'Venezuela after the collapse: power without legitimacy and transition without consensus',
        'daily-card-3-excerpt': 'Power persists while legitimacy erodes. The transition is no longer a date, but a dilemma of conditions and real capacity to govern.',
        'daily-section-title': 'Full newsletter',
        'daily-list-1-title': 'Social fragmentation and the end of stable majorities',
        'daily-list-1-excerpt': 'How to compete in fragmented and volatile electorates with territorial precision and flexible coalitions.',
        'daily-list-2-title': 'Rising outsiders: how the political board is being reshaped',
        'daily-list-2-excerpt': 'The rise of figures without party machines who gain legitimacy from their distance to the system.',
        'daily-list-3-title': 'Governing without room: unpopular decisions in critical contexts',
        'daily-list-3-excerpt': 'Managing political costs without breaking legitimacy when the margin for maneuver is minimal.',
        'daily-list-4-title': 'Venezuela after the collapse: power without legitimacy',
        'daily-list-4-excerpt': 'Power persists while legitimacy erodes. The transition is no longer a date.',
        'footer-contact-title': 'Contact',
        'footer-services-title': 'Services',
        'footer-service-1': 'Institutional planning and strengthening',
        'footer-service-2': 'Political communication and campaigns',
        'footer-service-3': 'Public opinion research',
        'footer-service-4': 'Training and school of government',
        'footer-newsletter-title': 'Newsletter',
        'footer-newsletter-text': 'Subscribe to receive updates and strategic resources.',
        'footer-newsletter-button': 'Submit'
      },
      html: {
        'daily-follow': 'Follow us: Facebook &middot; WhatsApp',
        'daily-lead-kicker': 'Strategy &middot; Vote &middot; 2025',
        'daily-card-1-kicker': 'Ecosystem &middot; Voter &middot; 2025',
        'daily-card-2-kicker': 'Government &middot; Crisis &middot; 2025',
        'daily-card-3-kicker': 'Region &middot; Transition &middot; 2025',
        'daily-list-1-kicker': 'Strategy &middot; Vote &middot; 2025',
        'daily-list-2-kicker': 'Ecosystem &middot; Voter &middot; 2025',
        'daily-list-3-kicker': 'Government &middot; Crisis &middot; 2025',
        'daily-list-4-kicker': 'Region &middot; Transition &middot; 2025',
        'footer-address': '<strong>Address:</strong> Av. Rivadavia 1725, CABA',
        'footer-phones': '<strong>Phone:</strong> 54 11 554746300<br>54 9 2325457856',
        'footer-email': '<strong>Email:</strong> contacto@gp.com',
        'footer-text': '&copy; 2025 GP Political Consulting. All rights reserved.'
      },
      attrs: {
        'daily-lead-image': { alt: 'Social fragmentation' },
        'daily-card-1-image': { alt: 'Political outsiders' },
        'daily-card-2-image': { alt: 'Governing without room' },
        'daily-card-3-image': { alt: 'Venezuela after the collapse' },
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
    if (typeof window.setLanguage === 'function' && !window.__dailyLangWrapped) {
      const original = window.setLanguage;
      window.setLanguage = function(l){
        original(l);
        applyLanguage(l);
      };
      window.__dailyLangWrapped = true;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
