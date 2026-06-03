(function () {
  if (!document.querySelector('.nl-shell')) return;

  const SNAPSHOT = {
    taken: false,
    title: '',
    html: {},
    attrs: {}
  };

  const EN = {
    title: 'How to Do Politics in Unequal Municipalities | GOPE Consulting Newsletter',
    html: {
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
      '.nl-kicker': ['Strategy &middot; Territory &middot; 2026'],
      '.nl-title': ['How to Do Politics in Unequal Municipalities'],
      '.nl-meta': ['GOPE Consulting Strategic Newsletter &middot; 6 min read'],
      '.nl-lead': ['Governing where gated communities, middle-class neighborhoods and vulnerable sectors coexist.'],
      'article > p': [
        'In unequal municipalities, politics is not organized around a single reality. Within the same district, gated communities, productive areas, traditional middle-class neighborhoods, urban peripheries, informal settlements and sectors with very different relationships with the State can coexist.',
        'That coexistence is not only territorial. It is also political. Each sector sees the municipality from a different experience: some demand security, urban order and lower taxes; others need transportation, healthcare, infrastructure, state presence and basic responses that still do not arrive effectively.',
        'That is why doing politics in unequal municipalities requires more than a strong slogan. It requires understanding how each group lives, what it expects from local government and what kind of leadership it considers credible.',
        'The most common mistake is trying to speak to everyone with the same message. In fragmented districts, that strategy usually loses precision. Local politics needs a common narrative, but also a fine territorial reading that allows priorities to be adapted without breaking the identity of the project.',
        'In a national election, major issues usually organize the debate: inflation, employment, insecurity, taxes, education or the economic direction of the country. But in a municipal election, those issues translate into much more concrete experiences.',
        'Inflation is felt in local shops. Insecurity is experienced on the block, at the bus stop or at the entrance to the neighborhood. Lack of infrastructure appears in an unpaved street, an open ditch, a broken streetlight or an overcrowded health center.',
        'In unequal municipalities, the territory works as a map of different problems. Not all residents live in the same city, even if they share the same district.',
        'For some sectors, the municipality represents bureaucracy, taxes, permits and poor services. For others, it represents the possibility of accessing basic rights, assistance, territorial presence and social support.',
        'A serious political strategy must begin from that difference. It is not possible to build a competitive municipal proposal if the resident is treated as a homogeneous category.',
        'One of the main challenges of unequal municipalities is that social interests are not always compatible at first glance.',
        'In gated communities, demands may be related to security, access routes, traffic, taxes, regulation, service quality and predictability. In middle-class neighborhoods, concerns often include the cost of living, tax pressure, deterioration of public space, insecurity and the quality of management. In peripheries and informal settlements, priorities may focus on basic infrastructure, transportation, healthcare, urbanization, employment, lighting and State presence.',
        'The political challenge is not to choose one sector and abandon the rest. The challenge is to build a narrative that connects different demands under the same idea of municipality.',
        'Competitive local politics understands that difference and works with it strategically.',
        'In recent years, many political forces have grown from strong national identities. That can be an advantage when building a brand, but it can also become a limitation if the municipal strategy remains trapped inside the ideological voter.',
        'A voter who supports a national idea may demand something different when evaluating local government. At the municipal level, the discussion stops being purely ideological and becomes more concrete: streets, security, taxes, healthcare, transportation, permits, cleaning, traffic, clubs, schools, shops and citizen services.',
        'That is why a local campaign cannot simply repeat national slogans. It needs to translate political identity into municipal solutions.',
        'A political space may have a clear position on the size of the State, but in the territory it must answer a more direct question: what will it do about broken streets, insecurity, taxes, procedures, transportation and neighborhoods that feel the municipality does not reach them?',
        'That is where a symbolic campaign differs from a real government project.',
        'In unequal municipalities, segmentation should not be only digital. It is not enough to divide audiences by age, interests or social media behavior. The most important segmentation is territorial.',
        'Each area of the district has a particular combination of problems, expectations and levels of trust. An effective strategy must identify those differences and organize the message according to real priorities.',
        'This means working with data, field visits, surveys, neighborhood listening, electoral result analysis, conversations with shop owners, institutions, clubs, local leaders and community organizations.',
        'The key is not to promise everything everywhere. The key is knowing which problem organizes the conversation in each territory.',
        'In some places, the priority will be security. In others, transportation. In others, taxes. In others, healthcare. In others, urbanization. And in many cases, it will be a combination of all those demands.',
        'Local politics becomes competitive when it stops improvising and starts reading the territory with method.',
        'The great strategic challenge is to build a narrative that can speak to very different sectors without seeming contradictory.',
        'A municipal campaign in an unequal district needs to avoid two mistakes. The first is fragmenting the message so much that the project loses identity. The second is building such a general message that it does not connect with anyone in particular.',
        'The way forward is to organize diversity under a simple and recognizable idea.',
        'The common narrative does not eliminate differences. It organizes them.',
        'In unequal municipalities, it is not enough to point out what is not working. Criticism can organize discontent, but building a majority requires a government proposal.',
        'Residents may share anger toward the current administration, but before changing their vote they usually ask themselves whether the alternative is prepared to govern.',
        'That is why a local political force must show three things: diagnosis, team and priorities.',
        'The leap from opposition to government does not happen through visibility alone. It happens when citizens begin to perceive that there is a serious alternative, with technical capacity, territorial sensitivity and political leadership.',
        'Doing politics in unequal municipalities requires understanding that there is not just one resident, one demand or one way of experiencing the territory.',
        'A single district can contain deeply different realities: gated communities, middle-class neighborhoods, commercial areas, industrial parks, peripheries and informal settlements. Politics that seeks to govern that map must avoid both ideological simplification and opportunistic discourse.',
        'The key is to build a common narrative, supported by a precise reading of each territory. Talking about order, efficiency, proximity or transformation only has impact when those ideas are translated into concrete responses for each community.',
        'In municipal politics, the winner is the one who manages to turn territorial fragmentation into a strategy of representation.',
        'It is not about speaking to everyone in the same way. It is about understanding each sector without losing a common direction.'
      ],
      '.nl-number': [
        '1. The Municipality as a Map of Inequalities',
        '2. Gated Communities, Middle-Class Neighborhoods and Peripheries: Different Demands, Same District',
        '3. The Risk of Speaking Only to Your Own Voter',
        '4. Territorial Segmentation: Listen Before Promising',
        '5. A Common Narrative for Different Realities',
        '6. From Opposition to Government Project'
      ],
      '.nl-aside': [
        '<strong>For example:</strong> order can mean crime control for a gated community, recovery of public space for the middle class, and effective State presence for a neglected area. The word is the same, but its meaning changes according to the territory.',
        '<strong>A more orderly, efficient and close municipality</strong> can mean less bureaucracy for the middle class, simpler permits for business owners, public works and real presence for neglected areas, and security or urban planning for gated communities.',
        '<strong>Diagnosis</strong>, to show that it understands the district.<br><strong>Team</strong>, to show that it can govern.<br><strong>Priorities</strong>, to show that it will not improvise.'
      ],
      'article h2': ['Conclusion: Governing Inequality Without Denying Difference'],
      '.nl-footer-note': ['Subscribe to the GOPE Consulting newsletter to receive these analyses directly in your inbox.'],
      'footer .footer-col:nth-child(1) h4': ['Contact'],
      'footer .footer-col:nth-child(1) p': [
        '<strong>Phones:</strong> <a href="https://wa.me/541122705173" target="_blank" rel="noopener">+54 11 2270 5173</a><br><a href="https://wa.me/541139282896" target="_blank" rel="noopener">+54 11 3928 2896</a>',
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
      '.language-selector::aria-label': ['Language selector'],
      '.lang-toggle::aria-label': ['Select language'],
      '.lang-toggle img::alt': ['Language'],
      '.lang-menu::aria-label': ['Languages'],
      '.nl-hero img::alt': ['Unequal municipalities'],
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
    Object.entries(pack.html || {}).forEach(([selector, values]) => {
      document.querySelectorAll(selector).forEach((node, index) => {
        if (values[index] !== undefined) node.innerHTML = values[index];
      });
    });
    Object.entries(pack.attrs || {}).forEach(([key, values]) => {
      const sep = key.lastIndexOf('::');
      const selector = key.slice(0, sep);
      const attr = key.slice(sep + 2);
      document.querySelectorAll(selector).forEach((node, index) => {
        if (values[index] !== undefined) node.setAttribute(attr, values[index]);
      });
    });
  }

  function applyNewsletterMunicipiosLanguage(language) {
    takeSnapshot();
    const lang = (language || 'es').toLowerCase();

    if (lang === 'en') {
      applyPack(EN);
      return;
    }

    if (SNAPSHOT.title) document.title = SNAPSHOT.title;
    Object.keys(EN.html).forEach(restoreHTML);
    Object.keys(EN.attrs).forEach((key) => {
      const sep = key.lastIndexOf('::');
      restoreAttr(key.slice(0, sep), key.slice(sep + 2));
    });
    document.documentElement.lang = 'es';
  }

  function currentLanguage() {
    try {
      const params = new URLSearchParams(window.location.search);
      return (
        params.get('lang') ||
        localStorage.getItem('trendLang') ||
        localStorage.getItem('siteLanguage') ||
        document.documentElement.lang ||
        'es'
      ).toLowerCase();
    } catch (error) {
      return 'es';
    }
  }

  function bindPageLanguage() {
    if (typeof window.setLanguage === 'function' && !window.__newsletterMunicipiosLangWrapped) {
      const originalSetLanguage = window.setLanguage;
      window.setLanguage = function (language) {
        originalSetLanguage(language);
        applyNewsletterMunicipiosLanguage(language);
      };
      window.__newsletterMunicipiosLangWrapped = true;
    }

    document.querySelectorAll('.lang-option').forEach((button) => {
      if (button.dataset.newsletterMunicipiosBound === '1') return;
      button.addEventListener('click', function () {
        applyNewsletterMunicipiosLanguage(this.getAttribute('data-lang') || 'es');
      });
      button.dataset.newsletterMunicipiosBound = '1';
    });

    window.addEventListener('tm-language-change', function (event) {
      applyNewsletterMunicipiosLanguage(event.detail && event.detail.language);
    });
  }

  function init() {
    bindPageLanguage();
    applyNewsletterMunicipiosLanguage(currentLanguage());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
