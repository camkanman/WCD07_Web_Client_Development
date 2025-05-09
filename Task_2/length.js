/**
 * Fungsi untuk mengkonversi panjang antara centimeter dan kilometer
 * @param {number} value - Nilai yang akan dikonversi
 * @param {string} fromUnit - Satuan asal ('cm' atau 'km')
 * @param {string} toUnit - Satuan tujuan ('cm' atau 'km')
 * @returns {string} - Hasil konversi dengan format nilai dan satuan
 */
function convertLength(value, fromUnit, toUnit) {
    // Validasi input
    if (isNaN(value)) {
        return "Input harus berupa angka";
    }
    
    // Validasi satuan
    if (!['cm', 'km'].includes(fromUnit) || !['cm', 'km'].includes(toUnit)) {
        return "Unit harus 'cm' atau 'km'";
    }
    
    let result;
    
    // Konversi berdasarkan satuan
    if (fromUnit === 'cm' && toUnit === 'km') {
        // Konversi dari cm ke km (1 km = 100000 cm)
        result = value / 100000;
        return `${result} km`;
    } else if (fromUnit === 'km' && toUnit === 'cm') {
        // Konversi dari km ke cm (1 km = 100000 cm)
        result = value * 100000;
        return `${result} cm`;
    } else {
        // Jika satuan asal dan tujuan sama, tidak perlu konversi
        return `${value} ${toUnit}`;
    }
}

// Mengekspor fungsi agar dapat digunakan di file lain
module.exports = { convertLength };