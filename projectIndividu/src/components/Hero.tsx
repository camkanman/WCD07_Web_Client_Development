import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center">
      <div className="container-custom">
        {/* TAMBAHKAN items-center DI SINI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-text-secondary text-xl md:text-2xl font-medium">Halo, saya</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary text-center">
            Lho Kok Tanya Saya?
          </h1>
          {/* TAMBAHKAN text-center DI SINI */}
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl text-center">
            Web Developer dengan fokus pada pengembangan aplikasi web modern dan responsif.
            Saya memiliki keahlian dalam React, Next.js, dan Tailwind CSS.
          </p>

          {/* Konten di bawah ini akan otomatis ikut ke tengah karena parent-nya */}
          <div className="flex gap-4 mt-4">
            <motion.a
              href="/files/CV.pdf"
              download
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Unduh CV
            </motion.a>
            <motion.a
              href="#contact"
              className="btn border border-accent text-text-primary hover:bg-accent/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Saya
            </motion.a>
          </div>

          <div className="flex gap-4 mt-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaTwitter size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;