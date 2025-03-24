# Task 3: Complete the missing CSS

## Halaman Index
```
<img src="./imgs/logo.svg" alt="workoutaja logo">
<img src="./imgs/whatsapp-icon.svg" alt="whatsapp icon">
<img src="./imgs/woman.svg" alt="illustration of a woman doing workout on a gym">
<img id="balls" src="./imgs/balls.svg" alt="decorative balls on the bottom left os the page">
```
**Menyesuaikan path location pada index.html**
  - Melakukan perubahan path ke folder images yang sudah tersedia di project, karena folder imgs tidak tersedia. sehingga seperti di bawah:
```
<img src="./images/logo.svg" alt="workoutaja logo">
<img src="./images/whatsapp-icon.svg" alt="whatsapp icon">
<img src="./images/woman.svg" alt="illustration of a woman doing workout on a gym">
<img id="balls" src="./images/balls.svg" alt="decorative balls on the bottom left os the page">
```
  
## Navbar Styling
```
/* Check Margin */
nav {
  font-family: 'Mulish', sans-serif;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
```
**Menyesuaikan margin `nav`:**
- Menambahkan`margin-bottom: 30px;` untuk memberi jarak antara navbar dan elemen di bawahnya.

## Menu List Pada Navbar
```
/* Check list styling */
nav ul {
  display: flex;
  gap: 48px;
  font-size: 18px;
  list-style: none;
  font-weight: lighter;
}
```
**Menyesuaikan styling list pada `nav ul`:**
- Menambahkan`font-size: 18px;`, `list-style: none;`, dan `font-weight: lighter;` untuk membuat tampilan lebih rapi dan lebih ringan.

## Link Pada Navbar
```
/* Check list link style */
nav ul li a {
  text-decoration: none;
}
```
**Menambahkan styling pada `nav ul li a`:**
- Ditambahkan `text-decoration: none;` agar tautan tidak memiliki garis bawah.

## Efek Hover pada Link
```
/* Make text bold on hover */
nav ul li a:hover {
  font-weight: 800;
  color: #333;
}
```
**Menambahkan efek hover pada `nav ul li a:hover`:**
-   Ditambahkan `font-weight: 800;` dan `color: #333;` agar saat hover, teks menjadi lebih tebal dan berwarna hitam lebih tebal.

## Styling untuk Teks Utama
### a. Judul
```
/* Check margin and font styling */
.text  h1 {
  font-family: 'Mulish', sans-serif;
  font-size: 48px;
  font-weight: 300;
}
```
**Font Family:**
- Menggunakan `'Mulish', sans-serif` untuk judul agar terlihat tegas.    

**Ukuran & Berat:**
- `font-size: 48px;` untuk ukuran besar dan `font-weight: 300;` untuk ketebalan huruf.

### b. Span di dalam Judul
```
/* Check font styling */
.text h1 span {
  color: #89c5cc;
  font-weight: 700;
  display: inline-block; /* Agar margin bekerja dengan baik */
  margin-top: 10px; /* Atur jarak antara teks di atasnya */
  margin-bottom: 20px; /* Menambah jarak antar paragraf */
}
```
**Memperbaiki styling `span` dalam `h1`:**
-   Ditambahkan `color: #89c5cc;`, `font-weight: 700;`, `display: inline-block;`, `margin-top: 10px;`, dan `margin-bottom: 20px;` agar lebih menonjol dan memiliki jarak yang baik dengan teks lainnya.

### c. Paragraf
```
.text p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}
```
**Mengubah tampilan `p` dalam `.text`:**
- Ditambahkan `font-size: 16px;`, `margin-bottom: 10%;`, dan `color: #7D7987;` untuk tampilan lebih proporsional dan mudah dibaca.

## Tombol di Bagian Teks
```
.text button {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  gap: 8px;
  background: #69B99D;
  color: white;
  padding: 14px  32px;
  order: none;
  border-radius: 5px; /* Ensuring rounded button */
  cursor: pointer;
  font-size: 1rem;
  align-items: center;
}
```
**Memperbaiki desain tombol dalam `.text button`:**
- Ditambahkan `background: #69B99D;`, `color: white;`, `padding: 14px 32px;`, `border-radius: 5px;`, `cursor: pointer;`, dan `font-size: 1rem;` untuk tampilan lebih menarik dan responsif.

## Efek Hover pada Tombol
```
/* Handle when user hover on the button */
.text button:hover {
  background: #239c98;
}
```
**Menambahkan efek hover pada tombol:**
-   Ditambahkan `background: #239c98;` agar tombol berubah warna saat di-hover.

## Footer
```
/* Check the text styling */
footer {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}
```
**Menyesuaikan footer:**
- Ditambahkan `text-align: center;`, `margin-top: 20px;`, dan `font-size: 14px;` agar lebih rapi dan selaras di bagian bawah halaman.

**Link di Footer**
```
/* Check the text styling */
footer a {
  color: #000;
  text-decoration: none;
  font-weight: 700;
}
```
**Font Style:**
- Link di footer ditampilkan dengan warna hitam, tanpa garis bawah, dan dengan berat huruf 700 untuk menonjolkan teks link.