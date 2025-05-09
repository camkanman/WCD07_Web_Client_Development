// Fungsi untuk mengkonversi suhu dari Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
    // Rumus konversi: (°F - 32) × 5/9 = °C
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius.toFixed(2); // Mengembalikan hasil dengan 2 angka desimal
}

// Mengekspor fungsi agar dapat digunakan di file lain
module.exports = { fahrenheitToCelsius };