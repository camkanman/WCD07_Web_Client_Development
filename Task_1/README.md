# 🚀 Dokumentasi Proyek TypeScript

Selamat datang di dokumentasi proyek TypeScript ini! Dokumen ini menjelaskan fungsi-fungsi yang ada di setiap folder dan bagaimana fungsi-fungsi tersebut digunakan dalam aplikasi utama.
## Daftar Isi

- 🚀 Dokumentasi Proyek TypeScript

- Daftar Isi

- 📁 Struktur Folder

- 📂 Folder Circle

- Class Circle

- Penggunaan di Main.ts

- 📂 Folder Dates

- Class DateUtils

- Penggunaan di Main.ts

- 📂 Folder Name

- Class NameUtils

- Penggunaan di Main.ts

- 📄 Main.ts

- Class MainApp

- Cara Menjalankan Aplikasi

## 📁 Struktur Folder

Proyek ini terdiri dari beberapa folder yang masing-masing berisi class dengan fungsi spesifik:

  

- circle : Berisi class untuk perhitungan lingkaran

- dates : Berisi class untuk manipulasi tanggal

- name : Berisi class untuk manipulasi nama

- Main.ts : File utama yang menggunakan semua class di atas

## 📂 Folder Circle

### Class Circle

Class Circle digunakan untuk melakukan berbagai perhitungan terkait lingkaran.

Konstruktor:

```typescript

constructor ( public  radius : number ) { }

```

Fungsi-fungsi:

- findDiameter() : Menghitung diameter lingkaran (2 × radius)

- findCircumference() : Menghitung keliling lingkaran (2 × π × radius)

- findArea() : Menghitung luas lingkaran (π × radius²)

### Penggunaan di Main.ts

Di dalam Main.ts , class Circle digunakan sebagai berikut:

```typescript
// Inisialisasi dengan radius 5
this.circle = new Circle(5);

// Menjalankan fungsi Circle
runCircleFunction(): void {
    const diameter = this.circle.findDiameter();
    const circumference = this.circle.findCircumference().toFixed(4);
    const area = Math.floor(this.circle.findArea() * 1000) / 1000;
    console.log("diameter = " + diameter + ", circumference = " + circumference + ", area = " + area);
}
```
Output yang dihasilkan:

```plaintext

diameter = 10, circumference = 31.4159, area = 78.539

```

## 📂 Folder Dates

### Class DateUtils

Class DateUtils digunakan untuk melakukan perhitungan selisih antara dua tanggal.

Konstruktor:

```typescript

constructor(public  startDate: string, public  endDate: string) {}

```

Fungsi-fungsi:

- getDifferenceBetweenDates() : Menghitung selisih hari antara dua tanggal dan mengembalikan hasilnya dalam bentuk string

### Penggunaan di Main.ts

Di dalam Main.ts , class DateUtils digunakan sebagai berikut:

```typescript
// Inisialisasi dengan dua tanggal
this.dateUtils = new DateUtils('2024-03-29', '2024-03-21');

// Menjalankan fungsi DateUtils
runDateFunction(): void {
    const processDate = this.dateUtils.getDifferenceBetweenDates();
    console.log("Output : " + processDate.toString());
}
```

Output yang dihasilkan:

```plaintext

Output : -8

```

(Nilai negatif karena tanggal akhir lebih awal dari tanggal awal)

## 📂 Folder Name

### Class NameUtils

Class NameUtils digunakan untuk memanipulasi string nama.

Konstruktor:

```typescript

constructor ( public  inputName : string ) { }

```

Fungsi-fungsi:

- getInitialNameUppercase() : Mengambil inisial dari setiap kata dalam nama dan mengembalikannya dalam huruf kapital

### Penggunaan di Main.ts

Di dalam Main.ts , class NameUtils digunakan sebagai berikut:

```typescript
// Inisialisasi dengan nama "john doe"
this.nameUtils = new NameUtils("john doe");

// Menjalankan fungsi NameUtils
runNameFunction(): void {
    const sampleName = this.nameUtils.getInitialNameUppercase();
    console.log("Output : " + sampleName);
}
```

Output yang dihasilkan:

```plaintext

Output : JD

```

## 📄 Main.ts

### Class MainApp

Class MainApp adalah class utama yang menggunakan semua class lainnya. Class ini menginisialisasi objek dari class Circle , DateUtils , dan NameUtils , kemudian menyediakan metode untuk menjalankan fungsi-fungsi dari masing-masing class tersebut.

Konstruktor:

```typescript
constructor() {
    // Create an instance with a specific radius.
    this.circle = new Circle(5);
    // Create an instance with a specific date1 and date2.
    this.dateUtils = new DateUtils('2024-03-29', '2024-03-21');
    this.nameUtils = new NameUtils("john doe");
}
```

Fungsi-fungsi:

- runCircleFunction() : Menjalankan fungsi-fungsi dari class Circle

- runDateFunction() : Menjalankan fungsi dari class DateUtils

- runNameFunction() : Menjalankan fungsi dari class NameUtils

### Cara Menjalankan Aplikasi

Untuk menjalankan aplikasi, Anda perlu mengeksekusi file Main.ts dengan TypeScript runtime. Berikut adalah contoh cara menjalankannya:

```bash
# Pastikan TypeScript sudah terinstal
npm install -g typescript ts-node

# Jalankan aplikasi
ts-node Main.ts
```
Aplikasi akan menjalankan semua fungsi dan menampilkan hasilnya di konsol.

Selamat mencoba! 🎉