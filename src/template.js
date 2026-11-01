import { siteName, email, socials, repositories, articleLinks } from './content/shared.js';

export const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const e = escape;
const icon = (name, cls = '') => `<svg class="icon ${cls}" width="24" height="24" aria-hidden="true"><use href="/assets/icons.svg#icon-${name}"></use></svg>`;
const arrow = () => icon('arrow-up-right');
// Original brand assets. Luge and RoomKit compose a mark with their name,
// just as their own interfaces do; never redraw the marks with text or icons.
const brand = (name, { dark = false, compact = false } = {}) => {
  if (name === 'luge') return `<span class="brand-lockup brand-luge"><img src="/assets/logos/${dark ? 'luge-night' : 'luge'}.png" alt="" width="207" height="256"><span>Luge</span></span>`;
  if (name === 'roomkit') return '<span class="brand-lockup brand-roomkit"><img src="/assets/logos/roomkit.svg" alt="" width="32" height="32"><span>RoomKit</span></span>';
  return `<img class="brand-image brand-${name}" src="/assets/logos/${name === 'wazo' && compact ? 'wazo-wordmark' : name}.svg" alt="${name === 'xivo' ? 'XiVO' : name === 'wazo' ? 'Wazo' : 'Tchat N Sign'}" ${name === 'xivo' ? 'width="56" height="90"' : name === 'wazo' ? (compact ? 'width="308" height="136"' : 'width="780" height="230"') : 'width="130" height="61"'}>`;
};
const lines = (text) => text.split('\n').map(e).join('<br>');
const tags = (items) => `<ul class="tags">${items.map((t) => `<li>${e(t)}</li>`).join('')}</ul>`;
const textLink = (url, text, cls = '') => `<a class="text-link ${cls}" href="${e(url)}">${e(text)}${arrow()}</a>`;
const sectionHead = (section, id) => `<div class="section-heading" data-reveal><p class="section-index caption-3">${e(section.label)}</p><div class="section-heading-row"><h2 id="${id}" class="heading-2">${lines(section.title)}</h2><p class="body-3">${e(section.intro)}</p></div></div>`;

function header(c, page) {
  const alternate = page === 'privacy' ? (c.lang === 'fr' ? '/en/privacy/' : '/confidentialite/') : c.alternate;
  return `<a class="skip-link" href="#main">${e(c.skip)}</a>
  <header class="site-header" id="site-header">
    <a class="wordmark" href="${c.path}"><span class="brand-mark" aria-hidden="true">a<span>.</span></span><span>${e(siteName)}</span></a>
    <nav class="desktop-nav" aria-label="${e(c.navigation)}">${c.nav.map(([id, label]) => `<a href="${c.path}#${id}" data-nav="${id}">${e(label)}</a>`).join('')}</nav>
    <div class="header-actions"><a class="language-switch" href="${alternate}" hreflang="${c.lang === 'fr' ? 'en' : 'fr'}" lang="${c.lang === 'fr' ? 'en' : 'fr'}" aria-label="${e(c.switchLanguage)}" data-language-switch><span${c.lang === 'fr' ? ' class="selected-language"' : ''}>FR</span><span class="language-divider">/</span><span${c.lang === 'en' ? ' class="selected-language"' : ''}>EN</span></a><a class="header-contact" href="${c.path}#contact">${e(c.contactLink)}${arrow()}</a><button class="menu-toggle" type="button" aria-label="${e(c.menu)}" aria-controls="mobile-menu" aria-expanded="false" data-menu-open hidden><span></span><span></span></button></div>
  </header>
  <dialog class="mobile-menu" id="mobile-menu" aria-label="${e(c.navigation)}"><div class="mobile-menu-top"><span class="wordmark">${e(siteName)}<span class="accent">.</span></span><button type="button" class="menu-close" data-menu-close aria-label="${e(c.close)}">×</button></div><nav>${c.nav.map(([id, label], i) => `<a href="${c.path}#${id}"><span class="caption-3">0${i + 1}</span>${e(label)}${arrow()}</a>`).join('')}<a href="${c.path}#contact"><span class="caption-3">05</span>${e(c.contactLink)}${arrow()}</a></nav><a class="mobile-email" href="mailto:${email}">${email}</a></dialog>`;
}

function hero(c) {
  const h = c.hero;
  return `<section class="hero container" id="intro" aria-labelledby="hero-title">
    <div class="hero-copy">
      <div class="intro-person"><img src="/assets/images/sylvain.jpg" alt="" width="48" height="48"><div><p class="intro-name caption-1">${e(h.introduction)}</p><p class="caption-2">${e(h.roles)}</p></div></div>
      <h1 class="heading-1" id="hero-title"><span>${e(siteName)}</span><span class="hero-period" aria-hidden="true">.</span></h1>
      <p class="hero-tagline">${e(h.tagline)}</p>
      <p class="hero-description body-3">${e(h.description)}</p>
      <p class="current-role caption-2">${e(h.current)} <a href="https://tchatnsign.com/">${e(h.company)}${arrow()}</a></p>
      <a class="button button-dark" href="#projets">${e(h.cta)}${icon('arrow-down')}</a>
    </div>
    <div class="hero-art">
      <svg class="topography" viewBox="0 0 600 640" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1">${Array.from({ length: 9 }, (_, i) => `<path d="M ${15+i*10} ${180+i*5} C ${-20+i*6} ${360-i*10}, ${120+i*6} ${650-i*14}, ${330+i*7} ${600-i*13} S ${650-i*7} ${320-i*7}, ${540-i*13} ${140+i*11} S ${220+i*4} ${-100+i*15}, ${15+i*10} ${180+i*5} Z"/>`).join('')}</g></svg>
      <figure class="field-card"><img class="mountain-photo" src="/assets/images/mountains.jpg" alt="${e(h.imageAlt)}" width="1400" height="933" fetchpriority="high"><div class="photo-shade"></div><div class="field-card-top caption-3"><span>${e(h.imageIndex)}</span>${icon('compass')}</div><svg class="flight-route" viewBox="0 0 400 440" aria-hidden="true"><path d="M45 350C160 390 290 280 275 215S125 165 175 90S290 35 335 55" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 7"/><circle cx="45" cy="350" r="5" fill="currentColor"/><g transform="translate(319 33) rotate(25)"><path d="M0 18L18 0L15 25L10 16Z" fill="currentColor"/></g></svg><figcaption><span class="field-caption heading-5">${e(h.imageCaption)}</span><span class="caption-2">${e(h.imageSub)}</span></figcaption></figure>
      <div class="coordinate-note caption-3">${icon('airplane-tilt')}<span>${e(h.location)}</span><span class="coordinate-cross" aria-hidden="true">+</span></div>
    </div>
  </section>
  <div class="heritage container"><div class="heritage-label"><span class="caption-3">${e(h.note)}</span><span class="caption-2">${e(h.noteDetail)}</span></div><div class="heritage-brands"><a href="https://www.xivo.solutions/">${brand('xivo')}</a><a href="https://wazo.io/">${brand('wazo')}</a><a href="#projets">${brand('luge')}</a><a href="https://www.roomkit.live/">${brand('roomkit')}</a></div><a class="scroll-cue" href="#projets" aria-label="${e(h.scroll)}">${icon('arrow-down')}</a></div>`;
}

function projects(c) {
  const { luge: l, roomkit: r } = c.now;
  return `<section class="section container" id="projets" aria-labelledby="projects-title">${sectionHead(c.now, 'projects-title')}
    <div class="featured-grid">
      <article class="featured featured-luge" data-reveal><div class="project-topline"><span class="caption-3"><span class="status-dot"></span>${e(l.type)}</span><span class="caption-3">01</span></div>
        <div class="luge-orbit" role="img" aria-label="${e(l.graphicLabel)}"><div class="orbit-ring orbit-ring-outer"></div><div class="orbit-ring orbit-ring-inner"></div><div class="orbit-center"><img class="luge-orbit-mark" src="/assets/logos/luge-night.png" alt="" width="207" height="256"><span class="caption-3">${e(l.center)}</span></div>${l.orbit.map((label, i) => `<span class="orbit-node orbit-node-${i}">${icon(['users', 'code', 'arrow-up-right'][i])}${e(label)}</span>`).join('')}</div>
        <div class="project-copy"><h3 class="project-name">${brand('luge', { dark: true })}</h3><p class="title-1">${e(l.subtitle)}</p><p class="body-3">${e(l.description)}</p>${tags(l.tags)}${textLink(`mailto:${email}?subject=${encodeURIComponent('Parlons de Luge / Let’s talk about Luge')}`, l.link)}</div>
      </article>
      <article class="featured featured-roomkit" data-reveal><div class="project-topline"><span class="caption-3">${e(r.type)}</span><span class="caption-3">02</span></div>
        <div class="room-diagram" role="img" aria-label="${e(r.graphicLabel)}"><div class="room-diagram-top"><span></span><span></span><span></span><span class="caption-4">room.py</span></div><div class="room-code"><span class="code-comment"># ${e(r.codeComment)}</span><br><span class="code-keyword">from</span> roomkit <span class="code-keyword">import</span> RoomKit<br><br>kit = <span class="code-function">RoomKit</span>()<br>room = <span class="code-keyword">await</span> kit.<span class="code-function">create_room</span>()</div><div class="room-channels">${r.channels.map((channel, i) => `<span>${icon(['airplane-tilt', 'code', 'cube'][i])}${e(channel)}</span>`).join('')}</div></div>
        <div class="project-copy"><h3 class="project-name">${brand('roomkit')}</h3><p class="title-1">${e(r.subtitle)}</p><p class="body-3">${e(r.description)}</p>${tags(r.tags)}${textLink('https://www.roomkit.live/', r.link)}</div>
      </article>
    </div>
    <a class="current-company" href="https://tchatnsign.com/" data-reveal><span class="company-logo" aria-hidden="true">${brand('tchatnsign')}</span><div><span class="caption-3 muted">${e(c.now.role)}</span><h3 class="title-2">${e(c.now.roleText)}</h3></div><p class="body-6">${e(c.now.roleDetail)}</p><span class="company-arrow" aria-label="${e(c.now.roleLink)}">${arrow()}</span></a>
  </section>`;
}

function openSource(c) {
  const s = c.openSource;
  return `<section class="section open-source container" id="open-source" aria-labelledby="opensource-title">${sectionHead(s, 'opensource-title')}
    <div class="project-toolbar"><div class="filters" role="group" aria-label="${e(s.filterLabel)}" data-filters hidden>${s.filters.map(([id, label]) => `<button type="button" class="filter-button" data-filter="${id}" aria-pressed="${id === 'all'}">${e(label)}</button>`).join('')}</div>${textLink('https://github.com/sboily', s.link)}</div>
    <p class="sr-only" role="status" data-filter-status data-result-label="${e(s.result)}">${repositories.length} ${e(s.result)}</p>
    <div class="repository-grid">${repositories.map((p, i) => `<article class="repository" data-category="${p.category}"><a href="https://github.com/${p.owner}/${p.repo}" class="repository-link"><div class="repository-top"><span class="repo-symbol" aria-hidden="true">${e(p.symbol)}</span><span class="caption-4">${e(p.language)}</span>${arrow()}</div><h3 class="title-2">${e(p.name)}</h3><p class="body-6">${e(s.descriptions[i])}</p><span class="repository-owner caption-4">${e(p.owner)} / ${e(p.repo)}</span></a></article>`).join('')}</div>
  </section>`;
}

function journey(c) {
  const j = c.journey;
  return `<section class="journey-band" id="parcours" aria-labelledby="journey-title"><div class="container section journey-layout"><div class="journey-intro" data-reveal><p class="section-index caption-3">${e(j.label)}</p><h2 id="journey-title" class="heading-2">${lines(j.title)}</h2><p class="body-3">${e(j.intro)}</p><div class="dos-computer" aria-hidden="true"><div class="computer-case"><div class="computer-screen"><span>C:\\&gt;_</span><span class="screen-year">1988</span></div><div class="computer-drive"><i></i><span>●</span></div></div><div class="computer-base"></div><div class="computer-keyboard"></div></div></div>
      <div class="journey-events"><ol class="timeline">${j.years.map((item) => `<li data-reveal><span class="timeline-date caption-3">${e(item.date)}</span><div><h3 class="title-2">${e(item.title)}</h3><p class="body-6">${e(item.text)}</p></div></li>`).join('')}</ol><div class="ventures"><h3 class="caption-3">${e(j.venturesTitle)}</h3>${j.ventures.map((v) => `<a class="venture" href="${e(v.url)}"><div><span class="venture-name">${brand(v.name.toLowerCase(), { compact: true })}</span><span class="caption-4">${e(v.role)}</span></div><p class="body-6">${e(v.text)}</p>${arrow()}</a>`).join('')}</div><div class="timeline-today"><span class="status-dot"></span><span class="caption-3">${e(j.today)}</span><p class="body-6">${e(j.todayText)}</p></div></div>
    </div></section>
    <div class="manifesto container" role="group" aria-label="${e(j.statement.replace('\n', ' '))}">${icon('compass')}<p class="heading-2" data-word-reveal aria-hidden="true">${j.statement.split('\n').map((line) => `<span class="manifesto-line">${line.split(' ').map((word) => `<span class="reveal-word">${e(word)}</span>`).join(' ')}</span>`).join('')}</p></div>`;
}

function notes(c) {
  const n = c.notes;
  return `<section class="section notes-section container" id="notes" aria-labelledby="notes-title">${sectionHead(n, 'notes-title')}<div class="notes-list">${n.items.map((a, i) => `<article class="note" data-reveal><a href="${articleLinks[i]}"><div class="note-index caption-3">${e(a.number)}</div><div class="note-body"><div class="note-meta caption-4"><span>${e(a.type)}</span><span>${e(a.source)}</span><span lang="en">${e(a.language)}</span></div><h3 class="heading-5">${e(a.title)}</h3><p class="body-6">${e(a.description)}</p></div><time class="note-year caption-2">${e(a.year)}</time><span class="note-arrow">${arrow()}</span></a></article>`).join('')}</div><div class="notes-more">${textLink('https://linuxfr.org/users/sboily', n.more)}</div></section>`;
}

const dice = `<svg class="d20" viewBox="0 0 200 220" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M100 10 183 60 183 160 100 210 17 160 17 60Z"/><path d="M100 10 150 135 50 135Z M17 60 100 10 183 60 150 135 183 160 100 210 50 135 17 160 17 60 50 135M50 135 100 210 150 135"/><path d="M17 60 50 135M183 60 150 135"/></g><text x="100" y="113" text-anchor="middle" fill="currentColor" font-size="36" font-family="Manrope, sans-serif">20</text></svg>`;
function offscreen(c) {
  const o = c.offscreen;
  return `<section class="offscreen-band" id="hors-piste" aria-labelledby="offscreen-title"><div class="container section">${sectionHead(o, 'offscreen-title')}<div class="games-grid">${o.games.map((g) => `<article class="game-card game-${g.visual}" data-reveal><div class="game-visual" aria-hidden="true">${g.visual === 'cards' ? '<div class="playing-card card-one"><span>4</span><span class="card-glyph">◇</span><span>4</span></div><div class="playing-card card-two"><span>4</span><span class="card-glyph">✳</span><span>4</span></div><div class="playing-card card-three"><span>4</span><span class="card-glyph">◈</span><span>4</span></div>' : dice}</div><div class="game-copy"><p class="caption-3">${e(g.tags)}</p><h3 class="heading-4">${e(g.name)}</h3><p class="title-3">${e(g.title)}</p><p class="body-6">${e(g.description)}</p>${textLink(g.url, g.link)}</div></article>`).join('')}</div><p class="dnd-credit caption-5">${e(o.dndCredit)}</p><div class="personal" data-reveal><div><h3 class="heading-5">${e(o.personalTitle)}</h3><p class="body-3">${e(o.personal)}</p></div><ul class="interests">${o.interests.map(([name, label]) => `<li>${icon(name)}<span class="caption-1">${e(label)}</span></li>`).join('')}</ul></div></div></section>`;
}

function contact(c) {
  return `<section class="contact-section container" id="contact" aria-labelledby="contact-title" data-reveal><p class="section-index caption-3">${e(c.contact.label)}</p><h2 class="heading-1" id="contact-title">${e(c.contact.title)}</h2><p class="body-3">${e(c.contact.text)}</p><a class="button button-dark" href="mailto:${email}">${e(c.contact.cta)}${arrow()}</a><div class="email-line"><a href="mailto:${email}">${email}</a><button class="copy-email" type="button" data-copy-email="${email}" data-copy-success="${e(c.contact.copied)}" data-copy-error="${e(c.contact.copyError)}" aria-label="${e(c.contact.copy)}" title="${e(c.contact.copy)}" hidden><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/></svg></button></div><span class="copy-status caption-2" role="status" data-copy-status></span><div class="contact-socials">${socials.map((s) => `<a class="social-link" href="${e(s.url)}">${icon(s.icon)}<span>${e(s.name)}</span></a>`).join('')}</div></section>`;
}

function footer(c) {
  return `<footer class="site-footer container"><div class="footer-main"><a href="${c.path}" class="wordmark">${e(siteName)}<span class="accent">.</span></a><p class="caption-2">${e(c.footer.signature)}</p><a class="back-to-top caption-1" href="#top">${e(c.footer.top)}${icon('arrow-up-right')}</a></div><div class="footer-bottom caption-5"><span>© ${new Date().getUTCFullYear()} Sylvain Boily</span><a href="${c.privacyPath}">${e(c.footer.privacy)}</a><a href="https://github.com/anganyAI/angany-website">${e(c.footer.source)}</a><a class="photo-credit" href="https://unsplash.com/photos/9B9nMbOwAME">${e(c.footer.photo)}</a></div></footer>`;
}

export function render(c, page = 'home') {
  const isHome = page === 'home';
  const path = page === 'privacy' ? c.privacyPath : page === '404' ? '/404.html' : c.path;
  const alternate = page === 'privacy' ? (c.lang === 'fr' ? '/en/privacy/' : '/confidentialite/') : c.alternate;
  const title = isHome ? c.title : `${page === 'privacy' ? c.footer.privacy : c.notFound.title} — ${siteName}`;
  const body = isHome ? `${hero(c)}${projects(c)}${openSource(c)}${journey(c)}${notes(c)}${offscreen(c)}${contact(c)}` : `<section class="simple-page container"><p class="section-index caption-3">${page === 'privacy' ? e(c.footer.privacy) : '404 / ' + e(c.notFound.title)}</p><h1 class="heading-1">${e(page === 'privacy' ? c.privacy.title : c.notFound.title)}</h1>${page === 'privacy' ? c.privacy.paragraphs.map((p) => `<p class="body-3">${e(p)}</p>`).join('') : `<p class="body-3">${e(c.notFound.text)}</p>`}<a class="button button-dark" href="${c.path}">${e(page === 'privacy' ? c.back : c.notFound.link)}${icon('arrow-right')}</a></section>`;
  const structured = { '@context': 'https://schema.org', '@type': 'ProfilePage', name: title, url: `https://angany.ai${c.path}`, inLanguage: c.lang, mainEntity: { '@type': 'Person', name: 'Sylvain Boily', url: 'https://angany.ai/', jobTitle: 'CTO', worksFor: { '@type': 'Organization', name: 'Tchat N Sign', url: 'https://tchatnsign.com/' }, sameAs: socials.map((s) => s.url), email, image: 'https://angany.ai/assets/images/sylvain.jpg' } };
  return `<!doctype html>
<html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${e(title)}</title><meta name="description" content="${e(c.description)}"><meta name="theme-color" content="#f5f3ee">${page === '404' ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="https://angany.ai${path}"><link rel="alternate" hreflang="${c.lang}" href="https://angany.ai${path}"><link rel="alternate" hreflang="${c.lang === 'fr' ? 'en' : 'fr'}" href="https://angany.ai${alternate}"><link rel="alternate" hreflang="x-default" href="https://angany.ai${page === 'privacy' ? '/confidentialite/' : '/'}">`}
<meta property="og:type" content="website"><meta property="og:locale" content="${c.locale}"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(c.description)}"><meta property="og:url" content="https://angany.ai${path}"><meta property="og:image" content="https://angany.ai/assets/images/social-card.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="@quintana_"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="preload" href="/assets/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/styles.css"><script src="/assets/main.js" defer></script>${isHome ? `<script type="application/ld+json">${JSON.stringify(structured).replace(/</g, '\\u003c')}</script>` : ''}</head>
<body id="top" data-page="${page}">${header(c, page)}<main id="main" tabindex="-1">${body}</main>${footer(c)}</body></html>`;
}
