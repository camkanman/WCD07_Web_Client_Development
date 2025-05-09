/**
 * Fungsi untuk mengecek apakah suatu bilangan genap atau ganjil
 * @param {number} n - Bilangan yang akan dicek
 * @returns {boolean} - true jika bilangan genap, false jika bilangan ganjil
 */
function isEven(n) {
    // Bilangan genap adalah bilangan yang habis dibagi 2 (sisa bagi = 0)
    return n % 2 === 0;
}

// Mengekspor fungsi agar dapat digunakan di file lain
module.exports = { isEven };