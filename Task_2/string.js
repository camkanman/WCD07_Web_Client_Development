/**
 * Fungsi untuk menghapus kemunculan pertama dari string pencarian dalam sebuah string
 * @param {string} str - String utama
 * @param {string} searchStr - String yang akan dihapus
 * @returns {string} - String hasil setelah penghapusan
 */
function removeFirstOccurrence(str, searchStr) {
    // Mencari indeks kemunculan pertama dari string pencarian
    const index = str.indexOf(searchStr);
    
    // Jika string pencarian tidak ditemukan, kembalikan string asli
    if (index === -1) {
        return str;
    }
    
    // Menggabungkan bagian string sebelum dan sesudah string pencarian
    return str.substring(0, index) + str.substring(index + searchStr.length);
}

// Mengekspor fungsi agar dapat digunakan di file lain
module.exports = { removeFirstOccurrence };