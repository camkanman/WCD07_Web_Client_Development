import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Tentang Saya</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <div className="bg-secondary aspect-square rounded-lg flex items-center justify-center">
              {/* <p className="text-text-secondary">Foto Anda</p> */}
              <img
                  src= 'https://bing.com/th/id/OIP.03LYGwTlAKftmA4i4yUygwHaHc?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain'
                  alt="Gambar Proyek"
                  className="object-cover w-full h-full"
                />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="section-subtitle">Siapa Saya?</h3>
            <p className="text-text-secondary mb-4">
              Saya adalah seorang web developer dengan pengalaman dalam membangun aplikasi web yang responsif dan modern. 
              Saya memiliki keahlian dalam HTML, CSS, JavaScript, React, dan Next.js.
            </p>
            <p className="text-text-secondary mb-4">
              Saya selalu bersemangat untuk belajar teknologi baru dan meningkatkan keterampilan saya. 
              Saya percaya bahwa pengembangan web bukan hanya tentang kode, tetapi juga tentang menciptakan pengalaman pengguna yang luar biasa.
            </p>
            <p className="text-text-secondary">
              Di luar dunia pemrograman, saya menikmati [hobi Anda], [hobi lainnya], dan [aktivitas lain yang Anda sukai].
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Pendidikan</h4>
                <p className="text-text-secondary">Gelar Anda</p>
                <p className="text-text-secondary">Universitas Anda</p>
                <p className="text-text-secondary">2019 - 2023</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Pengalaman</h4>
                <p className="text-text-secondary">Web Developer</p>
                <p className="text-text-secondary">Perusahaan Anda</p>
                <p className="text-text-secondary">2023 - Sekarang</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;