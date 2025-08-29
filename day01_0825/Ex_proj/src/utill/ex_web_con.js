// src/utill/ex_web_con.js
// - 슬라이드(Fade), 공지/갤러리 탭, 레이어 팝업만 담당
// - 사이드바 드롭다운은 sidebar_toggle.js가 담당(분리)
export default function initExWeb(root) {
  if (!root) {
    console.warn('[Ex_web] root not found');
    return () => {};
  }
  console.debug('[Ex_web] init mounted');

  const disposers = [];
  let sliderTimer = null;

  /* === B. 페이드 슬라이드 === */
  const slides = Array.from(root.querySelectorAll('.slide-item'));
  let idx = 0;

  const show = (i) => {
    slides.forEach((el, n) => el.classList.toggle('is-active', n === i));
    idx = i;
  };
  const next = () => show((idx + 1) % slides.length);

  if (slides.length > 0) {
    show(0);
    sliderTimer = setInterval(next, 3000); // 3초 간격
    disposers.push(() => clearInterval(sliderTimer));
  }

  /* === C-1. 탭(공지/갤러리) === */
  const tabBtns = Array.from(root.querySelectorAll('.tab-btn'));
  const panels = Array.from(root.querySelectorAll('.tab-panel'));

  const onTab = (e) => {
    const key = e.currentTarget.dataset.tab; // 'notice' | 'gallery'
    // 버튼 상태
    tabBtns.forEach((b) => {
      const active = b.dataset.tab === key;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    // 패널 상태: id="panel-{key}"
    panels.forEach((p) => p.classList.toggle('is-active', p.id === `panel-${key}`));
  };

  tabBtns.forEach((b) => {
    b.addEventListener('click', onTab);
    disposers.push(() => b.removeEventListener('click', onTab));
  });

  /* === C-2. 레이어 팝업 === */
  const openers = Array.from(root.querySelectorAll('[data-open]'));
  const modals = new Map();

  const showModal = (id) => {
    const el = root.querySelector(`#${id}`);
    if (!el) return;

    el.hidden = false;

    const dim = el.querySelector('.modal-dim');
    const closeBtns = el.querySelectorAll(`[data-close="${id}"]`);
    const onEsc = (ev) => ev.key === 'Escape' && hideModal(id);
    const onClose = () => hideModal(id);

    document.addEventListener('keydown', onEsc);
    dim && dim.addEventListener('click', onClose);
    closeBtns.forEach((btn) => btn.addEventListener('click', onClose));

    modals.set(id, () => {
      document.removeEventListener('keydown', onEsc);
      dim && dim.removeEventListener('click', onClose);
      closeBtns.forEach((btn) => btn.removeEventListener('click', onClose));
    });
  };

  const hideModal = (id) => {
    const el = root.querySelector(`#${id}`);
    if (!el) return;
    el.hidden = true;
    const off = modals.get(id);
    off && off();
    modals.delete(id);
  };

  const onOpen = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.open;
    showModal(id);
  };
  openers.forEach((op) => {
    op.addEventListener('click', onOpen);
    disposers.push(() => op.removeEventListener('click', onOpen));
  });

  /* === 정리 함수 === */
  return function cleanup() {
    disposers.forEach((fn) => {
      try { fn(); } catch {}
    });
    if (sliderTimer) clearInterval(sliderTimer);
  };
}
