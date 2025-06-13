import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Kontak</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-2"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya melalui form di bawah ini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
            </div>

            {/* <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3> */}
            {/* <div class="text-left">
              <h3 class="text-xl font-semibold mb-6">Informasi Kontak</h3>
            </div> */}


            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <FaEnvelope className="text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-text-secondary text-sm">Email</p>
                  <p className="text-text-primary">mulyadihusnu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <FaPhone className="text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-text-secondary text-sm">Telepon</p>
                  <p className="text-text-primary">+62 8313 0694 430</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <FaMapMarkerAlt className="text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-text-secondary text-sm">Lokasi</p>
                  <p className="text-text-primary">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-left">
                    <label htmlFor="name" className="block text-text-secondary mb-2 text-sm">Nama</label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-secondary border border-accent rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <div className="text-left">
                    <label htmlFor="name" className="block text-text-secondary mb-2 text-sm">Email</label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-secondary border border-accent rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <div className="text-left">
                  <label htmlFor="subject" className="block text-text-secondary mb-2 text-sm">Subjek</label>
                </div>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-secondary border border-accent rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Subjek pesan"
                />
              </div>

              <div>
                <div className="text-left">
                  <label htmlFor="message" className="block text-text-secondary mb-2 text-sm">Pesan</label>
                </div>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-secondary border border-accent rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;