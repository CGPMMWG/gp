// Newsletter Fragmentacion translations (ES default, EN override)
(function(){
  const translations = {
    en: {
      text: {
        'nl-title': 'Social fragmentation and the end of stable majorities',
        'nl-lead': 'Today electoral competition no longer revolves around stable majorities. The new map is fragmented, volatile, and demands a fine reading to build coalitions that stand the test of time.',
        'nl-number-1': '1. The end of the average voter',
        'nl-p-1': 'For much of the 20th century, politics was organized around relatively stable majorities. Defined social classes, strong party identities, and predictable demands made it possible to build broad strategies, uniform messages, and lasting coalitions.',
        'nl-p-2': 'That world no longer exists. Today, the electoral scene is marked by fragmentation: weak identities, overlapping demands, and voters who switch choices quickly. The "average voter" is no longer a useful reference. In its place appears a fractured, volatile electorate that is difficult to capture with a single narrative.',
        'nl-p-3': 'For decades, campaigns were designed for an ideal subject: the average voter. A statistical figure that made it possible to simplify messages, prioritize issues, and organize communication.',
        'nl-p-4': 'Today, that voter practically does not exist. Society has fragmented into multiple layers: economic, cultural, and symbolic demands that are not always coherent with each other; priorities that shift by context and territory; and political identities that are weaker and less durable.',
        'nl-number-2': '2. Micro-segmentation: opportunity and risk',
        'nl-p-5': 'Micro-segmentation emerges as a response to this scenario. It makes it possible to identify niches, map specific demands, and tailor messages with greater precision.',
        'nl-p-6': 'Micro-segmentation is a tool, not a strategy in itself.',
        'nl-number-3': '3. Weak identities, multiple demands',
        'nl-p-7': 'Today\'s voter is not defined exclusively by political affiliation. They can combine economic claims with conservative values, demands for order with expectations of social protection, and distrust of the system with a need for concrete solutions.',
        'nl-p-8': 'This overlap of demands forces us to abandon simplistic readings. It is not about choosing one axis and discarding the rest, but understanding how tensions coexist within the same electorate. Politics no longer orders identities: it interprets them.',
        'nl-number-4': '4. Flexible coalitions: from rigid blocs to dynamic agreements',
        'nl-p-9': 'In this context, traditional coalitions—closed, ideological, and permanent—lose effectiveness. What emerges are flexible coalitions, built around objectives, moments, and specific priorities.',
        'nl-p-10': 'This implies accepting internal heterogeneity, prioritizing tactical agreements without losing strategic direction, and understanding that stability does not come from homogeneity, but from a narrative that orders diversity. The key is not to eliminate differences, but to manage them.',
        'nl-number-5': '5. Territory, data, and a fine reading of the electorate',
        'nl-p-11': 'Fragmentation does not express itself in the same way everywhere. Each territory combines its own economic, cultural, and symbolic variables. That is why strategy demands detailed territorial analysis, ongoing public opinion reading, and data-based segmentation—not intuition.',
        'nl-p-12': 'The most common mistake is copying successful strategies from other contexts without adapting them. In fragmented electorates, precision matters more than volume.',
        'nl-conclusion-title': 'Conclusion: competing in fractured electorates',
        'nl-p-13': 'Understanding this transformation is not an academic exercise: it is a basic condition for competing. Fragmentation demands finer reading, narratives capable of ordering diversity, and flexible coalitions that do not lose identity.',
        'nl-p-14': 'Today, those who best interpret the tensions of the electorate win, not those who try to homogenize them. Competition is decided by precision, coherence, and the ability to adapt without breaking.',
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
        'nl-kicker': 'Strategy &middot; Vote &middot; 2025',
        'nl-meta': 'GP strategic newsletter &middot; 6 min read',
        'nl-aside-1': '<strong>Strategic risk:</strong> when the strategy is reduced to adding micro-audiences without a common frame, the message becomes inconsistent, the project identity is diluted, and the resulting coalition is fragile.',
        'footer-address': '<strong>Address:</strong> Av. Rivadavia 1725, CABA',
        'footer-phones': '<strong>Phone:</strong> 54 11 554746300<br>54 9 2325457856',
        'footer-email': '<strong>Email:</strong> contacto@gp.com',
        'footer-text': '&copy; 2025 GP Political Consulting. All rights reserved.'
      },
      attrs: {
        'nl-hero-image': { alt: 'Illustration about social fragmentation' },
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
    if (typeof window.setLanguage === 'function' && !window.__nlFragLangWrapped) {
      const original = window.setLanguage;
      window.setLanguage = function(l){
        original(l);
        applyLanguage(l);
      };
      window.__nlFragLangWrapped = true;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
