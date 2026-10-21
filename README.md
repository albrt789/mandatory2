# Mandatory - Website

## Struktur
```
mandatory2/
├── index.html          Beranda (company profile)
├── reservasi.html      Halaman reservasi meja
├── css/
│   ├── style.css       Gaya bersama (warna ada di :root)
│   └── reservasi.css   Gaya khusus halaman reservasi
├── js/
│   ├── marquee.js      Teks berjalan
│   ├── menu.js         Data menu (MENU), tab kategori, pencarian
│   ├── guestbook.js    Rating bintang + catatan baru
│   ├── effects.js      Animasi scroll, menu navbar aktif, garis progres
│   ├── lightbox.js     Perbesar foto Moments
│   └── reservasi.js    Formulir reservasi -> WhatsApp (isi WA_NUMBER di sini)
└── images/             Foto & logo (lihat tabel)
```

## Nama gambar = tempatnya
Mau ganti foto? Timpa file dengan nama yang sama (JPG, rasio disarankan di kolom kanan).

| File | Dipakai di | Rasio |
|---|---|---|
| logo.jpeg | Navbar & footer | kotak |
| hero.jpg | Latar penuh bagian atas beranda (diberi lapisan gelap) | lebar, min. 1600px |
| moment-1.jpg ... moment-4.jpg | Share Your Moments (klik untuk memperbesar) | 1:1 / 4:5 |
| loyalty.jpg | Bagian "Join for FREE" (kartu loyalti, tampil miring) | tegak |
| reservasi.jpg | Halaman reservasi | 2:1 |

## Menjalankan
Buka `index.html` di browser, atau pakai Live Server (VS Code) / `python -m http.server 8000`.

## Perlu dicek
- `js/reservasi.js`: ubah `WA_NUMBER` ke nomor WhatsApp kafe (format 62xxxxxxxxxx).
- `js/menu.js`: harga Quick Bites sebagian masih tebakan.
- `index.html`: alamat di bagian menu (No.69 A) dan footer (No. 25) berbeda, samakan.
"# mandatory2" 
