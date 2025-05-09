const { fahrenheitToCelsius } = require('./temperature.js');
const { convertLength } = require('./length.js');
const { isEven } = require('./number.js');
const { removeFirstOccurrence } = require('./string.js');
const { isPalindrome } = require('./palindrome.js');
const readline = require('readline');

// Membuat interface readline untuk input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi utama
function main() {
    console.log("Pilih operasi yang ingin dilakukan:");
    console.log("1. Fahrenheit ke Celsius");
    console.log("2. Centimeter ke Kilometer");
    console.log("3. Cek Bilangan Ganjil atau Genap");
    console.log("4. Hapus Kemunculan Pertama dari String");
    console.log("5. Cek Palindrom");
    
    rl.question('Masukkan pilihan (1/2/3/4/5): ', (choice) => {
        switch(choice) {
            case '1':
                convertTemperature();
                break;
            case '2':
                convertCmToKm();
                break;
            case '3':
                checkEvenOdd();
                break;
            case '4':
                removeString();
                break;
            case '5':
                checkPalindrome();
                break;
            default:
                console.log("Pilihan tidak valid!");
                rl.close();
        }
    });
}

// Fungsi untuk konversi suhu
function convertTemperature() {
    rl.question('Masukkan suhu dalam Fahrenheit: ', (input) => {
        // Mengkonversi input ke tipe number
        const fahrenheit = parseFloat(input);
        
        // Validasi input
        if (isNaN(fahrenheit)) {
            console.log("Input tidak valid. Harap masukkan angka.");
            rl.close();
            return;
        }
        
        // Konversi suhu
        const celsius = fahrenheitToCelsius(fahrenheit);
        
        // Menampilkan hasil
        console.log(`${fahrenheit}°F = ${celsius}°C`);
        
        // Menutup interface readline
        rl.close();
    });
}

// Fungsi untuk konversi cm ke km
function convertCmToKm() {
    rl.question('Masukkan panjang dalam centimeter: ', (input) => {
        // Mengkonversi input ke tipe number
        const cm = parseFloat(input);
        
        // Validasi input
        if (isNaN(cm)) {
            console.log("Input tidak valid. Harap masukkan angka.");
            rl.close();
            return;
        }
        
        // Konversi panjang
        const result = convertLength(cm, 'cm', 'km');
        
        // Menampilkan hasil
        console.log(`${cm} cm = ${result}`);
        
        // Menutup interface readline
        rl.close();
    });
}

// Fungsi untuk mengecek bilangan ganjil atau genap
function checkEvenOdd() {
    rl.question('Masukkan bilangan bulat: ', (input) => {
        // Mengkonversi input ke tipe number
        const number = parseInt(input);
        
        // Validasi input
        if (isNaN(number)) {
            console.log("Input tidak valid. Harap masukkan bilangan bulat.");
            rl.close();
            return;
        }
        
        // Cek apakah bilangan genap atau ganjil
        const result = isEven(number);
        
        // Menampilkan hasil
        if (result) {
            console.log(`${number} isEven: true`);
        } else {
            console.log(`${number} isEven: false`);
        }
        
        // Menutup interface readline
        rl.close();
    });
}

// Fungsi untuk menghapus kemunculan pertama dari string
function removeString() {
    rl.question('Masukkan string utama: ', (mainStr) => {
        rl.question('Masukkan string yang ingin dihapus: ', (searchStr) => {
            // Validasi input
            if (!mainStr || !searchStr) {
                console.log("Input tidak valid. String tidak boleh kosong.");
                rl.close();
                return;
            }
            
            // Menghapus kemunculan pertama dari string pencarian
            const result = removeFirstOccurrence(mainStr, searchStr);
            
            // Menampilkan hasil
            console.log(`String awal: "${mainStr}"`);
            console.log(`String pencarian: "${searchStr}"`);
            console.log(`Hasil: "${result}"`);
            
            // Menutup interface readline
            rl.close();
        });
    });
}

// Fungsi untuk mengecek palindrom
function checkPalindrome() {
    rl.question('Masukkan string yang ingin dicek: ', (str) => {
        // Validasi input
        if (!str) {
            console.log("Input tidak valid. String tidak boleh kosong.");
            rl.close();
            return;
        }
        
        // Cek apakah string adalah palindrom
        const result = isPalindrome(str);
            
        // Menampilkan hasil
        if (result) {
            console.log(`"${str}" palindrom.`);
        } else {
            console.log(`"${str}" bukan palindrom.`);
        }
        
        // Menutup interface readline
        rl.close();
    });
}

// Menjalankan program
main();