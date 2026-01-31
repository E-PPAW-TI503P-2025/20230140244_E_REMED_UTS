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