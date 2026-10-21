/* MANDATORY - Guestbook: rating bintang dan catatan baru */
(function () {
  'use strict';

  /* rating */
  const rate = document.getElementById('rate'); let rv = 5;
  function stars() { rate.innerHTML = [1, 2, 3, 4, 5].map(n => `<button type="button" data-n="${n}" class="${n <= rv ? 'on' : ''}" aria-label="${n} bintang">★</button>`).join('') }
  rate.onclick = e => { if (e.target.dataset.n) { rv = +e.target.dataset.n; stars() } }; stars();
  document.getElementById('noteForm').onsubmit = e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target)), esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const c = document.createElement('div'); c.className = 'card new';
    c.innerHTML = `<div class="stars">${'★'.repeat(rv)}${'☆'.repeat(5 - rv)}</div><blockquote>“${esc(d.pesan)}”</blockquote><small>${esc(d.nama)} · Guest · baru saja</small>`;
    document.querySelector('.guest > div').prepend(c);
    document.getElementById('thanks').hidden = false; e.target.reset(); rv = 5; stars();
  };
})();
