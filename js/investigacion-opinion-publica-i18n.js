(function(){
  const translations = {
    en: {
      title: 'Public Opinion Research | GP Political Consulting',
      text: {
        'ip-hero-kicker': 'Decide with data. Anticipate scenarios.',
        'ip-hero-title': 'Public Opinion Research',
        'ip-hero-lead': 'We turn electoral and public opinion data into actionable insights to make strategic decisions ahead of time and reduce political uncertainty.',
        'ip-hero-subline': 'In politics, intuition without data is risk. Data without analysis is noise. Our work turns complex information into clear decisions.',
        'ip-intro-title': 'What we do',
        'ip-what-text': 'Public opinion research is a strategic tool for political decision-making. At GP we design studies to understand social climates, detect early signals, and anticipate scenarios, integrating data, context, and analysis to intervene with precision.',
        'ip-what-title-1': 'Measure social and political climates',
        'what-1': 'Reading social temperature, legitimacy, and latent demands to anticipate movements.',
        'ip-what-title-2': 'Detect emerging trends',
        'what-2': 'We identify early signals before they consolidate into agenda or vote.',
        'ip-what-title-3': 'Anticipate electoral scenarios',
        'what-3': 'Models and tracking to estimate scenarios and sensitivity to events.',
        'ip-what-title-4': 'Assess leaderships and narratives',
        'what-4': 'We test perception, narrative, and policies to adjust positioning and messaging.',
        'ip-approach-title': 'Our approach',
        'ip-approach-text': "We don't run generic studies: each investigation responds to a specific political decision.",
        'ip-step-1-title': 'Strategic methodological design',
        'ip-step-1-text': 'We choose the method that answers the decision: surveys, tracking, qualitative work, territorial analysis, or a combination of sources.',
        'ip-step-2-title': 'Deep data analysis',
        'ip-step-2-text': 'We integrate electoral data, current opinion, and context to detect patterns, tensions, and opportunities.',
        'ip-step-3-title': 'Actionable insights',
        'ip-step-3-text': 'Clear, prioritized recommendations: what to do, where, and with which narrative to decide with evidence.',
        'ip-key-title': 'Key information',
        'ip-key-text': "Explore what we measure, who it's for, and why to work on it with GP.",
        'ip-acc-title-1': 'What we measure',
        'ip-acc-1-item-1': 'Leader image and positioning.',
        'ip-acc-1-item-2': 'Public agenda and sensitive issues.',
        'ip-acc-1-item-3': 'Voting intention and electoral volatility.',
        'ip-acc-1-item-4': 'Electorate segmentation.',
        'ip-acc-1-item-5': 'Reaction to messages, policies, and events.',
        'ip-acc-1-item-6': 'Reputational risks and narrative opportunities.',
        'ip-acc-title-2': "Who it's for",
        'ip-acc-2-item-1': 'Candidates and campaign teams.',
        'ip-acc-2-item-2': 'Governments and public decision-makers.',
        'ip-acc-2-item-3': 'Political spaces and coalitions.',
        'ip-acc-2-item-4': 'Consulting firms and strategy teams.',
        'ip-acc-2-item-5': 'Organizations with political influence.',
        'ip-acc-title-3': 'Why GP',
        'ip-acc-3-item-1': 'Analytical, not ideological, approach.',
        'ip-acc-3-item-2': 'Political reading + methodological rigor.',
        'ip-acc-3-item-3': 'Experience in complex and volatile scenarios.',
        'ip-acc-3-item-4': 'Results designed to decide, not just inform.',
        'ip-highlight-text': "Political advantage isn't in knowing more, but in understanding earlier. Deciding with data, anticipating scenarios, and reducing uncertainty separates those who react from those who lead.",
        'ip-cta-title': 'Ready to research',
        'ip-cta-text': 'Need to understand the landscape before acting? We design tailored research for your political context.',
        'ip-cta-primary': 'Contact GP',
        'ip-cta-secondary': 'Request an initial diagnosis',
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
        'footer-newsletter-input': { placeholder: 'Email address' },
        'ip-hero-image': { alt: 'Public opinion research' },
        'ip-cta-primary': { 'aria-label': 'Contact GP' },
        'ip-cta-secondary': { 'aria-label': 'Request an initial diagnosis' }
      }
    }
  };

  const snapshot = { taken: false, html: {}, attrs: {}, title: '' };

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
      snapshot.title = document.title;
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
      if (snapshot.title) document.title = snapshot.title;
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
      if (t.title) document.title = t.title;
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
    if (typeof window.setLanguage === 'function' && !window.__ipLangWrapped) {
      const original = window.setLanguage;
      window.setLanguage = function(l){
        original(l);
        applyLanguage(l);
      };
      window.__ipLangWrapped = true;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
