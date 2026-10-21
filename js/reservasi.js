(function () {
  'use strict';

  /* ===== PENGATURAN: ganti dengan nomor WhatsApp kafe (format internasional, tanpa + atau spasi) ===== */
  const WA_NUMBER = '6281283185894';

  const f = document.getElementById('resForm'), err = document.getElementById('err');
  f.tanggal.min = new Date().toISOString().split('T')[0];
  f.onsubmit = e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    if (!d.nama.trim() || !d.wa.trim() || !d.tanggal || !d.waktu || !d.tamu) {
      err.textContent = 'Lengkapi nama, nomor WhatsApp, tanggal, waktu, dan jumlah tamu.'; err.hidden = false; return
    }
    err.hidden = true;
    const tgl = new Date(d.tanggal).toLocaleDateString('id-ID', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
    const msg = `Halo Mandatory, saya ingin mengajukan reservasi.\n\nNama: ${d.nama}\nWhatsApp: ${d.wa}\nTanggal: ${tgl}\nWaktu: ${d.waktu}\nJumlah tamu: ${d.tamu}\nCatatan: ${d.catatan || '-'}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  };
})();
