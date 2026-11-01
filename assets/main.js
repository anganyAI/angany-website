// Progressive enhancement: content and every destination work without JavaScript.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const menu = document.querySelector('#mobile-menu');
const menuButton = document.querySelector('[data-menu-open]');
if (typeof HTMLDialogElement !== 'undefined' && menu instanceof HTMLDialogElement && typeof menu.showModal === 'function') {
  document.documentElement.classList.add('enhanced');
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    menu.showModal();
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-is-open');
    if (!reducedMotion.matches) {
      menu.querySelectorAll('nav a').forEach((link, i) => link.animate(
        [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 500, delay: Math.min(i * 60, 400), easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' },
      ));
    }
  });
  const resetMenuState = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-is-open');
  };
  const closeMenu = () => {
    menu.close();
    resetMenuState();
  };
  menu.querySelector('[data-menu-close]').addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  menu.addEventListener('cancel', resetMenuState);
  menu.addEventListener('close', resetMenuState);
  window.matchMedia('(min-width: 851px)').addEventListener('change', (event) => {
    if (event.matches && menu.open) closeMenu();
  });
}

document.querySelectorAll('[data-language-switch]').forEach((link) => {
  const update = () => {
    const url = new URL(link.href);
    url.hash = location.hash;
    link.href = url.href;
  };
  update();
  window.addEventListener('hashchange', update);
});

const filters = document.querySelector('[data-filters]');
if (filters) {
  filters.hidden = false;
  const projects = [...document.querySelectorAll('[data-category]')];
  const status = document.querySelector('[data-filter-status]');
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach((project) => {
      project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    });
    status.textContent = `${projects.filter((p) => !p.hidden).length} ${status.dataset.resultLabel}`;
  });
}

const copy = document.querySelector('[data-copy-email]');
if (copy && navigator.clipboard?.writeText) {
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const status = document.querySelector('[data-copy-status]');
    try {
      await navigator.clipboard.writeText(copy.dataset.copyEmail);
      status.textContent = copy.dataset.copySuccess;
    } catch {
      status.textContent = copy.dataset.copyError;
    }
  });
}

if ('IntersectionObserver' in window) {
  if (!reducedMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.add('is-visible');
        observer.unobserve(target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      // Content already in the viewport stays visible, even on anchor navigation.
      if (element.getBoundingClientRect().top >= innerHeight) element.classList.add('will-reveal');
      observer.observe(element);
    });
    const wordObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.style.opacity = '1';
        wordObserver.unobserve(target);
      });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0.8 });
    document.querySelectorAll('.reveal-word').forEach((word, i) => {
      word.style.opacity = '.3';
      word.style.transitionDelay = `${i * 70}ms`;
      wordObserver.observe(word);
    });
  }
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      document.querySelectorAll('[data-nav]').forEach((link) => {
        const activeId = target.id === 'open-source' ? 'projets' : target.id;
        if (link.dataset.nav === activeId) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach((section) => navObserver.observe(section));
}

reducedMotion.addEventListener('change', ({ matches }) => {
  if (!matches) return;
  document.querySelectorAll('.will-reveal').forEach((el) => el.classList.add('is-visible'));
  document.querySelectorAll('.reveal-word').forEach((el) => { el.style.opacity = '1'; });
});
