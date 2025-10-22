# Laporan Tugas Praktikum 4: Koneksi Database Sequelize

Berikut adalah hasil pengujian endpoint API Presensi setelah dihubungkan ke database MySQL menggunakan Sequelize.

### 1. Endpoint Presensi Check-in
Tes pertama adalah melakukan check-in. Server merespon dengan status `201 Created` dan mengembalikan data presensi yang baru saja dibuat di database.

![Hasil Check-in Berhasil](./ss/check-in-berhasil.png)

### 2. Endpoint Presensi Check-out
Tes kedua adalah melakukan check-out. Server menemukan data check-in yang aktif, mengisikan waktu check-out, dan merespon dengan status `200 OK`.

![Hasil Check-out Berhasil](./ss/check-out-berhasil.png)

### 3. Endpoint Laporan Harian (Sebagai Admin)
Tes ketiga adalah mengakses laporan harian. Setelah role diubah menjadi 'admin' di middleware, server merespon dengan status `200 OK` dan mengembalikan semua data dari tabel `Presensis`.

![Hasil Laporan Harian Berhasil](./ss/laporan-berhasil-admin.png)

---

## Skenario Error Handling

Berikut adalah pengujian untuk skenario-skenario gagal:

#### Check-in Gagal (Duplikat)
Mencoba check-in untuk kedua kalinya tanpa me-restart server. Sesuai logika, server menolak dengan status `400 Bad Request`.

![Check-in Gagal Duplikat](./ss/check-in-gagal-duplikat.png)

#### Check-out Gagal (Belum Check-in)
Mencoba check-out setelah berhasil check-out (sehingga tidak ada data aktif). Sesuai logika, server merespon dengan status `404 Not Found`.

![Check-out Gagal Belum Check-in](./ss/check-out-gagal-belum-checkin.png)

#### Laporan Gagal (Sebagai Karyawan)
Mencoba mengakses laporan dengan role default 'karyawan'. Middleware `isAdmin` berhasil memblokir akses dengan status `403 Forbidden`.

![Laporan Gagal Forbidden](./ss/laporan-gagal-forbidden.png)

---

### 4. Tampilan Database Setelah Presensi
Berikut adalah bukti bahwa data benar-benar tersimpan secara permanen di database MySQL (diambil dari MySQL Workbench).

*(Jangan lupa ambil screenshot tabel `Presensis` dari MySQL Workbench dan letakkan di sini)*
![Tampilan Database](./ss/database-setelah-presensi.png)