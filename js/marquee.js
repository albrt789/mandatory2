/* MANDATORY - Teks berjalan (marquee) */
(function () {
  'use strict';

  /* marquee */
  const t1 = ['Crafted with care', 'Slow living & good coffee', 'Depok', 'Specialty pour-over', 'Seasonal kitchen'];
  const t2 = ['Mandatory Journal', 'Senopati corner', '#mandatorycafe', 'Slow living moments', 'Daily rituals', 'Sip & stay'];
  [['m1', t1, '✿'], ['m2', t2, '✦']].forEach(([id, a, s]) => { const h = a.map(x => `<span>${s} ${x}</span>`).join(''); document.getElementById(id).innerHTML = h + h });
})();
