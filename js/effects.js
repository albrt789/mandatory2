/* MANDATORY - Efek scroll: muncul halus, menu aktif, garis progres */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* muncul halus saat di-scroll */
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }), { threshold: .12 });
  document.querySelectorAll('.sec,.quote').forEach(el => { el.classList.add('reveal'); io.observe(el) });

  /* menu navigasi aktif sesuai posisi + progress bar */
  const links = [...document.querySelectorAll('.nav ul a')];
  const spy = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + x.target.id)) }), { rootMargin: '-45% 0px -50% 0px' });
  ['home', 'story', 'menu', 'moments', 'feedback'].forEach(id => spy.observe(document.getElementById(id)));
  const bar = document.getElementById('progress');
  addEventListener('scroll', () => { bar.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%' }, { passive: true });
})();
