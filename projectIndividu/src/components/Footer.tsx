import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-4 mb-6"
          >
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary text-center">
              &copy; {new Date().getFullYear()} Husnu Mulyadi. Hak Cipta Dilindungi.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;