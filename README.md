# Portofolio Ebi

Selamat datang di proyek sederhana membuat portofolio pribadi milik saya sendiri **(Febrian Eka Putra).**

---

## Deskripsi Proyek

Website ini saya buat untuk memperkenalkan diri, menampilkan keterampilan saya sebagai calon Fullstack Web Developer, dan menyediakan fitur sederhana yang interaktif untuk pengunjung. Website ini saya buat menggunakan HTML, Tailwind, Vanilla Js, dan saya buat jadi Single Page Aplication, seluruh navigasi dan interaksinya terjadi dalam satu halaman tanpa reload, untuk memberikan pengalaman pengguna jadi lebih smooth, responsif, cepat, dan menarik.

---

## Struktur Folder

```
├── assets/
│   └── images/
│       ├── background.png
│       ├── ebi.gif
│       └── ebi.jpg
├── js/
│   └── script.js
└── index.html
```

---

## Fitur Utama

1. **Navigasi Responsif**  
   Navbar dan footer akan **muncul/sembunyi otomatis** berdasarkan posisi scroll halaman. Memberikan pengalaman visual yang bersih di bagian hero/landing.

2. **Modal Nama (Pop-up Interaktif)**  
   Saat pertama kali membuka halaman, pengguna diminta **mengisi nama** melalui modal popup. Nama ini disimpan di `localStorage` dan digunakan untuk menyapa pengguna di berbagai bagian halaman.

3. **Sistem Pesan**  
   - Pengguna dapat **mengirim pesan** melalui form yang tersedia.  
   - Pesan akan langsung muncul di halaman.  
   - Pesan disimpan menggunakan `localStorage`, jadi tetap terlihat walau halaman di-*refresh*.

4. **Sapaan Berdasarkan Waktu**  
   Menampilkan ucapan otomatis seperti:
   - *"Selamat pagi"* (04.00 – 11.00)  
   - *"Selamat siang"* (11.00 – 15.00)  
   - *"Selamat sore"* (15.00 – 18.00)  
   - *"Selamat malam"* (18.00 – 04.00)  

   Ucapan ini digabung dengan nama pengguna untuk memberikan sentuhan personal.

5. **Desain Responsif**  
   Tampilan adaptif untuk berbagai perangkat (HP, tablet, desktop), menggunakan utilitas Tailwind CSS. Layout akan otomatis menyesuaikan ukuran layar.

6. **Smooth Scroll (Gulir Halus)**  
   Navigasi antar bagian seperti Beranda, Tentang Saya, dan Hubungi Saya memakai efek scroll yang halus dan nyaman dilihat.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**
- **Tailwind CSS** (via CDN)
- **Vanilla JS**
- **LocalStorage API**

---

## Kontak

- GitHub: [@hello-ebi](https://github.com/hello-ebi)
- LinkedIn: [Febrian Eka Putra](https://www.linkedin.com/in/febrian-eka-putra-92a8a735a)
- X: [@penantanghilang](https://x.com/penantanghilang)

---

> Dibuat dengan semangat belajar dan ketekunan oleh **Febrian Eka Putra**