// Newsletter Gobernar sin margen translations (ES default, EN override)
(function(){
  const translations = {
    en: {
      text: {
        'nl-title': 'Governing without room: unpopular decisions in critical contexts',
        'nl-lead': 'When there is no good news, the challenge is to sustain legitimacy without denying the cost. The key is to manage political damage with clarity, presence, and strategy.',
        'nl-number-1': '1. Political cost is not eliminated, it is managed',
        'nl-p-1': 'There are moments when governing stops being a battle over agenda and becomes an administration of damage. Critical economic contexts, social conflicts, unavoidable adjustments, or external crises reduce room for maneuver to a minimum.',
        'nl-p-2': 'In those scenarios, the central question is no longer how to gain support, but how to avoid losing control. Governing without room requires a different kind of leadership, a different communication logic, and above all, a clear strategy to manage political costs without breaking legitimacy.',
        'nl-p-3': 'Every unpopular decision has a cost. Denying it is the first mistake. Economic adjustments, cuts, structural reforms, or emergency measures generate rejection, anxiety, and conflict.',
        'nl-p-4': 'The difference between a government that endures and one that collapses is not in avoiding the cost, but in anticipating it, measuring it correctly, and distributing it strategically. When political cost is underestimated, it accumulates. And when it accumulates without control, it turns into a crisis of authority.',
        'nl-number-2': '2. Adjustments and crisis: the mistake of communicating as if they were good news',
        'nl-p-5': 'One of the most frequent mistakes in critical contexts is trying to sell tough decisions as if they were achievements. The voter quickly perceives the dissonance between discourse and reality.',
        'nl-p-6': 'Strategic honesty does not eliminate conflict, but it reduces the feeling of deception.',
        'nl-number-3': '3. Economic crises and conflicts: the role of visible leadership',
        'nl-p-7': 'In critical contexts, prolonged silence or excessive delegation communicates weakness. The governing figure must assume the symbolic cost of the decision.',
        'nl-p-8': 'This is not about overexposure, but about clear presence: show up in difficult moments, mark an explicit course, and convey control even in adverse scenarios. When leadership disappears, the vacuum is filled by conflict.',
        'nl-number-4': '4. Wear and tear vs. loss of control',
        'nl-p-9': 'Not all wear and tear is fatal. Governing implies wear and tear. The problem appears when wear and tear becomes loss of control.',
        'nl-p-10': 'The difference lies in three key signals: fragmentation of the internal message, improvised reactions under pressure, and inability to prioritize conflicts. A government can go through periods of low popularity and still hold power. What it cannot sustain is the perception of disorder.',
        'nl-number-5': '5. Strategy as an anchor in critical contexts',
        'nl-p-11': 'In scenarios without room, strategy stops being expansive and becomes defensive. It defines which battles to fight, which to postpone, and which to avoid.',
        'nl-p-12': 'A solid strategy allows unpopular decisions to be organized within a coherent frame, avoids public contradictions, and preserves political capital for key moments. Without strategy, each decision becomes an open front. With strategy, even bad news can be managed.',
        'nl-conclusion-title': 'Conclusion: governing when there are no applause lines',
        'nl-p-13': 'Critical contexts do not reward rhetorical creativity or forced optimism. They reward clarity, firmness, and coherence. Governing without room is not an anomaly: it is a recurring phase of exercising power.',
        'nl-p-14': 'Those who understand this logic do not seek to please, but to sustain legitimacy while they move through conflict. Because when there is no good news, the true political asset is not popularity. It is control.',
        'nl-footer-note': 'If you want to receive these analyses in your inbox, subscribe to the GP newsletter.',
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
        'nl-kicker': 'Government &middot; Crisis &middot; 2025',
        'nl-meta': 'GP strategic newsletter &middot; 6 min read',
        'nl-aside-1': '<strong>Effective communication:</strong> in adverse situations the goal is not enthusiasm, but understanding and predictability. Explain the why, acknowledge the real impact, and avoid technicism or euphemism.',
        'footer-address': '<strong>Address:</strong> Av. Rivadavia 1725, CABA',
        'footer-phones': '<strong>Phone:</strong> 54 11 554746300<br>54 9 2325457856',
        'footer-email': '<strong>Email:</strong> contacto@gp.com',
        'footer-text': '&copy; 2025 GP Political Consulting. All rights reserved.'
      },
      attrs: {
        'nl-hero-image': { alt: 'Critical contexts' },
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
    if (typeof window.setLanguage === 'function' && !window.__nlGovLangWrapped) {
      const original = window.setLanguage;
      window.setLanguage = function(l){
        original(l);
        applyLanguage(l);
      };
      window.__nlGovLangWrapped = true;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
