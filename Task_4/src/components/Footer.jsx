import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-light mb-4">
              Have something in mind?
            </h2>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="/images/avatar.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/48";
                  }}
                />
              </div>
              <h3 className="text-4xl font-light">let's build it together.</h3>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full font-medium"
          >
            Get in touch
          </motion.button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="mb-4 md:mb-0">
            Build with <span className="text-pink-500">❤</span> by Brightscout & Ayush
          </p>
          
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Webflow</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;