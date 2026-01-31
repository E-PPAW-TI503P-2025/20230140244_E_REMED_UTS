# Library System with Geolocation

Backend sederhana untuk manajemen perpustakaan dengan fitur peminjaman berbasis lokasi menggunakan Node.js, Express, dan Sequelize.

## Instalasi & Cara Menjalankan

1. Pastikan Database MySQL sudah berjalan. Buat database baru bernama library_geo_db.
2. Buka terminal di folder proyek dan jalankan:
   ```bash
   npm install
   ```
3. Konfigurasi password database di config/database.js jika diperlukan (default: user root, password kosong).
4. Jalankan server:
   ```bash
   node server.js
   ```

## Struktur Database
- Books: id, title, author, stock, createdAt, updatedAt
- BorrowLogs: id, userId, bookId, latitude, longitude, borrowDate, createdAt, updatedAt

## Cara Login / Simulasi Akses

Aplikasi ini tidak memiliki endpoint `/login`. Autentikasi dilakukan dengan mengirimkan **Headers** pada setiap request di Postman/Insomnia.

### 1. Masuk sebagai Admin
Untuk mengakses fitur pengelolaan buku (Tambah, Edit, Hapus), gunakan Header berikut pada request Anda:
- **Key:** `x-user-role`
- **Value:** `admin`

### 2. Masuk sebagai User (Peminjam)
Untuk mengakses fitur peminjaman buku, gunakan Header berikut:
- **Key:** `x-user-role`
- **Value:** `user`
- **Key:** `x-user-id`
- **Value:** `1` (Ganti angka ini dengan ID user lain untuk simulasi user berbeda)

**Contoh di Postman:**
Buka tab **Headers** (di bawah URL bar), lalu isi kolom **Key** dan **Value** sesuai instruksi di atas sebelum menekan tombol **Send**.

## Endpoint API & Pengujian
Gunakan Postman untuk menguji endpoint berikut.

1. Public (Semua User)
- GET /api/books: Melihat semua buku.
- GET /api/books/:id: Melihat detail buku.

2. Admin Mode
- Headers Wajib: x-user-role: admin
- POST /api/books
    - Body: { "title": "Buku A", "author": "Penulis A", "stock": 5 }
- PUT /api/books/:id
    - Body: { "stock": 10 }
- DELETE /api/books/:id

3. User Mode (Peminjaman)
- Headers Wajib: x-user-role: user x-user-id: 1 (Contoh ID User)
- POST /api/borrow
    - Body:
    ```json
    {
    "bookId": 1,
    "latitude": -6.2088,
    "longitude": 106.8456
    }
    ```
## Screenshot

### Tampilan menambah buku menggunakan role admin pada postman
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/25a7f075-0c3f-498b-85d7-a635ca08ce74" />

### Tampilan menambah buku menggunakan role admin pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/dd34acf3-ae8c-4a80-a9a5-bf1fefa18369" />

### Tampilan database setelah penambahan buku
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/6a8b1824-db10-4607-b884-8d5fdf55eae8" />

### Tampilan melihat buku pada postman
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/355db92d-15c2-4c28-b714-607aac42261c" />

### 
