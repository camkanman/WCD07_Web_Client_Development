import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Sediakan path ke aplikasi Next.js Anda untuk memuat next.config.js dan file .env di lingkungan tes Anda
  dir: './',
})

// Tambahkan konfigurasi kustom yang akan diteruskan ke Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Menangani alias modul (sesuaikan jika Anda memiliki alias yang berbeda)
    '^@/components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
  },
}

// createJestConfig diekspor dengan cara ini untuk memastikan bahwa next/jest dapat memuat konfigurasi Next.js yang bersifat async
export default createJestConfig(customJestConfig)
