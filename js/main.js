(function() {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const LS_THEME = "prefTheme";
  const LS_LANG = "prefLang";

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(theme) {
    const root = document.documentElement;
    const next = theme || (prefersDark ? 'dark' : 'dark'); 
    root.setAttribute('data-theme', next);
    localStorage.setItem(LS_THEME, next);
    const dark = next === 'dark';
    const btn = $('#themeToggle');
    if (btn) btn.setAttribute('aria-checked', String(dark));
    const meta = $('#meta-theme-color');
    if (meta) meta.setAttribute('content', getComputedStyle(root).getPropertyValue('--bg').trim());
  }

  function initTheme() {
    const saved = localStorage.getItem(LS_THEME);
    setTheme(saved || (prefersDark ? 'dark' : 'dark'));
    const btn = $('#themeToggle');
    if (btn) btn.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
  }

  function getLang() { return localStorage.getItem(LS_LANG) || 'fr'; }
  function setLang(lang) {
    const next = (lang === 'en') ? 'en' : 'fr';
    localStorage.setItem(LS_LANG, next);
    document.documentElement.lang = next;
    updateLangButtons(next);
    translatePage(next);
  }
  function updateLangButtons(lang) { $$('.lang-btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang))); }
  function getText(key) { const dict = window.I18N?.[getLang()] || {}; return key.split('.').reduce((o, k) => o && o[k], dict); }
  function translateElement(el, key) { const html = getText(key); if (html != null) el.innerHTML = html; }
  function translatePage(lang) {
    if (!window.I18N?.[lang]) return; $$("[data-i18n]").forEach(el => translateElement(el, el.dataset.i18n));
    const pageId = $('meta[name="page-id"]')?.content || 'home'; const title = getText(`meta.title.${pageId}`); if (title) document.title = title;
  }
  function initLang() {
    const start = getLang(); document.documentElement.lang = start; updateLangButtons(start); translatePage(start);
    $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
  }

  const CATS = new Map([
    ['ia','IA'], ['ai','IA'], ['cyber','Cybersécurité'], ['cybersécurité','Cybersécurité'],
    ['frontend','Frontend'], ['backend','Backend'], ['devops','DevOps'], ['data','Data']
  ]);
  function normalizeTags(ctx = document) {
    $$('.tag', ctx).forEach(tag => {
      const raw = (tag.dataset.tag || tag.textContent || '').toString();
      const key = raw.trim().toLowerCase();
      const mapped = CATS.get(key) || raw.trim();
      tag.dataset.tag = mapped; 
    });
  }

  function initAccordion() {
    $$('[data-accordion] .accordion__trigger').forEach(btn => {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      function toggle(open) {
        const isOpen = open ?? btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(isOpen));
        panel.classList.toggle('is-open', isOpen);
        panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : '0px';
      }
      btn.addEventListener('click', () => toggle());
      btn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
      panel.style.maxHeight = '0px';
    });
  }

  function initCarousel() {
    $$('[data-carousel]').forEach(car => {
      const track = $('.carousel__track', car); if (!track) return;
      const imgs = $$('img', track); if (!imgs.length) return;
      const prev = $('.carousel__btn.prev', car); const next = $('.carousel__btn.next', car);
      let i = 0; const n = imgs.length;
      function go(idx) { i = (idx + n) % n; track.style.transform = `translateX(-${i*100}%)`; updateThumbs(); }
      prev?.addEventListener('click', () => go(i-1)); next?.addEventListener('click', () => go(i+1));
      car.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') go(i-1); if (e.key === 'ArrowRight') go(i+1); });
      const thumbs = $('.carousel__thumbs', car); thumbs.innerHTML = imgs.map((im, idx) => `<img data-i="${idx}" src="${im.getAttribute('src')}" alt="">`).join('');
      thumbs.addEventListener('click', e => { const t = e.target.closest('img'); if (!t) return; go(parseInt(t.dataset.i,10)); });
      function updateThumbs(){ $$('.carousel__thumbs img', car).forEach((t, idx) => t.classList.toggle('is-active', idx===i)); }
      let sx = 0, dx = 0; track.addEventListener('pointerdown', e => { sx = e.clientX; track.setPointerCapture(e.pointerId); });
      track.addEventListener('pointerup', e => { dx = e.clientX - sx; if (Math.abs(dx) > 40) { if (dx < 0) go(i+1); else go(i-1); } sx = 0; dx = 0; });
      go(0);
    });
  }

  function setYear() { const el = $('#year'); if (el) el.textContent = new Date().getFullYear(); }

  function markExternal() {
    $$('a[target="_blank"]').forEach(a => a.classList.add('link'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    normalizeTags();
    initAccordion();
    initCarousel();
    setYear();
    markExternal();
  });
})();