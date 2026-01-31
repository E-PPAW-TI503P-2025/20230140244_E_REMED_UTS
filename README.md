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
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/69df09b8-43e9-45c0-a801-47f504904ac6" />

### Tampilan database setelah penambahan buku
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/6a8b1824-db10-4607-b884-8d5fdf55eae8" />

### Tampilan daftar melihat buku pada postman
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/355db92d-15c2-4c28-b714-607aac42261c" />

### Tampilan detail buku menggunakan role admin pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/ee10f5c8-c75d-4a70-965c-45644a28a2f9" />

### Tampilan detail buku menggunakan role user pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/369b6b7b-48b3-4970-9c8e-e0bb9bbe5626" />

### Tampilan edit buku menggunakan role admin pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/308be1e0-1f88-45eb-948b-69e8c366e1d2" />

### Tampilan hapus buku menggunakan role admin pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/6dfca331-8c9e-4c67-9777-8bf38623b4b7" />

### Tampilan melihat daftar buku menggunakan role user pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/10e5abd1-9e78-4588-bd41-2178365234d4" />

### Tampilan melihat detail buku menggunakan role user pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/79c7a4bf-4ed1-42ed-9839-5424bdca6d01" />

### Tampilan pinjam buku menggunakan role user pada web
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/81d3ef0b-b5bc-4b3d-a1da-3aa849fc0a46" />

### Tampilan pinjam buku menggunakan role user pada postman
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/eb4d4237-5bb1-4275-b4e3-77a51f2fd133" />

### Tampilan database setelah user meminjam buku
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/c018f4e2-1254-4389-ac2f-46be8ad95cde" />

