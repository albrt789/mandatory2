/* MANDATORY - Perbesar foto di bagian Moments */
(function () {
  'use strict';

  /* klik foto untuk memperbesar */
  const lb = document.getElementById('lb'), lbImg = lb.querySelector('div');
  const close = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true') };
  document.querySelectorAll('.moments .photo').forEach((p, i) => {
    p.tabIndex = 0; p.setAttribute('role', 'button'); p.setAttribute('aria-label', 'Perbesar foto ' + (i + 1));
    const open = () => { lbImg.style.backgroundImage = p.style.backgroundImage; lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false') };
    p.onclick = open; p.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } };
  });
  lb.onclick = close; addEventListener('keydown', e => { if (e.key === 'Escape') close() });
})();
