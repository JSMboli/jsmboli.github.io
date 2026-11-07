/* Lightweight progressive enhancement: menu, theme, accessible publication search/filter. */
(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const topButton = document.querySelector('.back-top');
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('jsm-color-theme'); } catch (_) { /* storage disabled */ }
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeButton) {
      const isDark = theme === 'dark';
      themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeButton.setAttribute('title', isDark ? 'Use light colours' : 'Use dark colours');
      themeButton.innerHTML = isDark
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.5A8.8 8.8 0 0 1 8.5 3.8a8.8 8.8 0 1 0 11.7 11.7Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
    }
  }
  setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (systemDark ? 'dark' : 'light'));
  themeButton?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('jsm-color-theme', next); } catch (_) { /* no preference persistence */ }
  });
  function closeMenu(focusButton = false) {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (focusButton) menuButton.focus();
  }
  menuButton?.addEventListener('click', () => {
    const willOpen = mobileMenu.hidden;
    mobileMenu.hidden = !willOpen;
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menuButton.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobileMenu && !mobileMenu.hidden) closeMenu(true); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1080) closeMenu(); });
  // Maintain a visible back-to-top control without costly scroll work.
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      topButton?.classList.toggle('visible', window.scrollY > 500);
      ticking = false;
    });
  }, {passive:true});
  const pubSearch = document.getElementById('pub-search');
  const list = document.getElementById('publication-list');
  const resultLabel = document.getElementById('results-count');
  const empty = document.getElementById('publication-empty');
  if (pubSearch && list) {
    const publications = Array.from(list.querySelectorAll('.publication'));
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    let filter = 'all';
    function applyFilter() {
      const query = pubSearch.value.toLocaleLowerCase('en-GB').trim();
      let count = 0;
      publications.forEach(item => {
        const matchesKind = filter === 'all' || item.dataset.kind === filter;
        const matchesText = !query || (item.dataset.search || '').toLocaleLowerCase('en-GB').includes(query);
        const show = matchesKind && matchesText;
        item.hidden = !show;
        if (show) count += 1;
      });
      if (resultLabel) resultLabel.textContent = `Showing ${count} of ${publications.length} records`;
      if (empty) empty.hidden = count !== 0;
    }
    buttons.forEach(button => button.addEventListener('click', () => {
      filter = button.dataset.filter || 'all';
      buttons.forEach(b => { const on = b === button; b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on)); });
      applyFilter();
    }));
    pubSearch.addEventListener('input', applyFilter);
    applyFilter();
  }
})();
