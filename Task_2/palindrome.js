/**
 * Fungsi untuk mengecek apakah sebuah string adalah palindrom
 * @param {string} str - String yang akan dicek
 * @returns {boolean} - true jika palindrom, false jika bukan
 */
function isPalindrome(str) {
    // Mengubah string menjadi lowercase dan menghapus karakter non-alphanumeric
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Membalik string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Membandingkan string asli dengan string yang dibalik
    return cleanStr === reversedStr;
}

// Mengekspor fungsi agar dapat digunakan di file lain
module.exports = { isPalindrome };