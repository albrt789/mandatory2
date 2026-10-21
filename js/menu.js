/* MANDATORY - Menu: data, tab kategori, dan pencarian */
(function () {
  'use strict';

  /* menu: [nama, deskripsi, hot, iced, tag] */
  const MENU = [
    {
      id: 'picks', title: 'Mandatory Picks', note: 'Iced only', col: 0, items: [
        ['Kopi Mandatory', 'Espresso + milk + homemade palm sugar.', 0, 23, 'Signature'],
        ['Blue Jam Latte', 'Espresso + milk + pure blueberry.', 0, 28],
        ['Banana Latte', 'Espresso + milk + banana syrup.', 0, 28],
        ['Salted Butter', 'Espresso + milk + butterscotch syrup + sea salt.', 0, 30],
        ['Pistachio Latte', 'Espresso + milk + pistachio syrup.', 0, 28],
        ['Peachycano', 'Americano + peach syrup + water.', 0, 25],
        ['Tropicano', 'Americano + passion fruit + water.', 0, 25]]
    },
    {
      id: 'essentials', title: 'Essentials', note: 'Hot / Iced', col: 0, items: [
        ['Espresso', 'Single shot, rich extraction.', 20, 0],
        ['Long Black', 'Single shot of espresso + water.', 23, 25],
        ['Latte', 'Single shot of espresso + steamed milk.', 25, 27],
        ['Cappuccino', 'Double ristretto + milk + foam.', 25, 27]]
    },
    {
      id: 'alternatives', title: 'Alternatives', note: 'Hot / Iced', col: 1, items: [
        ['Chocolate', 'Chocolate powder + milk + sugar.', 28, 28],
        ['Banana Chocolate', 'Chocolate powder + milk + banana syrup.', 0, 30],
        ['Matcha', 'Matcha powder + milk + simple syrup.', 28, 28],
        ['Matcha Berry', 'Pure blueberry + milk + pure strawberry.', 0, 32],
        ['Matcha Pistachio', 'Matcha powder + milk + pistachio syrup.', 0, 32],
        ['Blueberry Yakult', 'Pure blueberry + milk + yakult + boba.', 0, 28],
        ['Strawberry Yakult', 'Strawberry syrup + milk + yakult + boba.', 0, 28],
        ['Lychee Tea', 'Tea powder + lychee fruit + water.', 0, 25],
        ['Lemon Tea', 'Tea powder + lemon slice + water.', 23, 25],
        ['Mineral Water', '', 10, 0]]
    },
    {
      id: 'bites', title: 'Quick Bites', note: 'Snacks & mains', col: 1, items: [
        ['Butter Croissant', '', 22, -1], ['Chocolate Croissant', '', 24, -1], ['Tuna Puff', '', 22, -1], ['Beef & Cheese Quiche', '', 24, -1],
        ['French Fries', '', 22, -1], ['French Fries Cheesy Mayo', '', 27, -1],
        ['Mix Platter', 'French fries, sosis, chicken karaage', 35, -1],
        ['Pisang Goreng (palm sugar)', '', 25, -1], ['Pisang Goreng Srikaya', '', 25, -1], ['Otak-otak', '', 20, -1], ['Tahu Isi', '', 20, -1],
        ['Nasi Goreng', '', 30, -1], ['Mie Goreng', '', 30, -1], ['Spaghetti Aglio Olio', '', 35, -1], ['Spaghetti Carbonara', '', 35, -1]]
    }
  ];
  const k = n => n + 'K';
  const price = (h, i) => i === -1 ? k(h) : (h && i ? `${k(h)} · ${k(i)}` : k(h || i));
  const tabs = [['all', 'Semua menu'], ...MENU.map(m => [m.id, m.title])];
  const box = document.getElementById('menuBox'), tb = document.getElementById('tabs');
  function render(f) {
    box.innerHTML = [0, 1].map(c => '<div>' + MENU.filter(m => m.col === c && (f === 'all' || f === m.id)).map(m =>
      `<h3>${m.title}<small>${m.note}</small></h3>` + m.items.map(([n, d, h, i, tag]) =>
        `<div class="item"><div><span>${n}${tag ? `<em>${tag}</em>` : ''}</span><span>${price(h, i)}</span></div>${d ? `<p>${d}</p>` : ''}</div>`).join('')).join('') + '</div>').join('');
    tb.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.f === f));
  }
  tb.innerHTML = tabs.map(([id, l]) => `<button type="button" data-f="${id}">${l}</button>`).join('');
  const q = document.getElementById('search');
  function applySearch() {
    const v = q.value.trim().toLowerCase(); let any = false;
    box.querySelectorAll('.item').forEach(it => { const ok = !v || it.textContent.toLowerCase().includes(v); it.hidden = !ok; if (ok) any = true });
    box.querySelectorAll('h3').forEach(h => { let n = h.nextElementSibling, vis = false; while (n && n.classList.contains('item')) { if (!n.hidden) vis = true; n = n.nextElementSibling } h.hidden = !vis });
    let e = box.querySelector('.empty');
    if (!any && !e) { e = document.createElement('p'); e.className = 'empty'; e.textContent = 'Menu tidak ditemukan. Coba kata kunci lain.'; box.appendChild(e) } else if (any && e) e.remove();
  }
  q.oninput = applySearch;
  tb.onclick = e => { const f = e.target.dataset.f; if (f) { box.style.gridTemplateColumns = f === 'all' ? '' : '1fr'; render(f); applySearch() } };
  render('all');
})();
