# Laporan Tugas Praktikum 3: API Presensi

Berikut adalah hasil pengujian endpoint API Presensi menggunakan Postman.

### 1. Presensi Check-in (Berhasil)
Ini adalah hasil ketika seorang karyawan berhasil melakukan check-in untuk pertama kali. Server merespon dengan status `201 Created`.

![Check-in Berhasil](./SS/check-in-berhasil.png)

---

### 2. Presensi Check-in (Gagal karena Duplikat)
Ini adalah hasil ketika karyawan yang sama mencoba melakukan check-in lagi sebelum check-out. Server menolak dengan pesan error yang sesuai.

![Check-in Gagal Duplikat](./SS/check-in-gagal-duplikat.png)

---

### 3. Presensi Check-out (Berhasil)
Ini adalah hasil ketika karyawan yang sudah check-in berhasil melakukan check-out. Server merespon dengan status `200 OK`.

![Check-out Berhasil](./SS/check-out-berhasil.png)

---

### 4. Presensi Check-out (Gagal karena Belum Check-in)
Ini adalah hasil ketika seorang karyawan mencoba check-out padahal belum ada catatan check-in yang aktif. Server memberikan pesan error `404 Not Found`.

![Check-out Gagal Belum Check-in](./SS/check-out-gagal-belum-checkin.png)

---

### 5. Laporan Harian (Gagal sebagai Karyawan)
Ini adalah hasil ketika pengguna dengan role 'karyawan' mencoba mengakses laporan harian. Sesuai desain, middleware `isAdmin` memblokir akses dan mengembalikan status `403 Forbidden`.

![Laporan Gagal Forbidden](./SS/laporan-gagal-forbidden.png)

---

### 6. Laporan Harian (Berhasil sebagai Admin)
Setelah role diubah menjadi 'admin' di dalam middleware, pengguna berhasil mengakses laporan harian dan server merespon dengan data presensi dan status `200 OK`.

![Laporan Berhasil Admin](./SS/laporan-berhasil-admin.png)