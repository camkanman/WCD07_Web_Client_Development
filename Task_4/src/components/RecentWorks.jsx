import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { name: "Decodable.co", desc: "Brand Design – Webflow Development – Web Design" },
    { name: "Gofirefly.io", desc: "Brand Design – Webflow Development – Web Design" },
    { name: "Blinkops.com", desc: "Brand Design – Webflow Development – Web Design" },
    { name: "Withkanvas.com", desc: "Brand Design – Webflow Development – Web Design" }
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const RecentWork = () => {
    return (
        <section id="work" className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <h2 className="text-4xl font-normal sticky top-20">Recent Work</h2>
                        </div>
                        
                        <div className="md:col-span-2">
                            {projects.map((project, index) => (
                                <motion.div 
                                    key={index} 
                                    className="group flex items-center justify-between py-8 border-t border-gray-200 hover:opacity-80 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex-grow">
                                        <h3 className="text-5xl font-normal mb-2">{project.name}</h3>
                                        <p className="text-gray-600 text-base">{project.desc}</p>
                                    </div>
                                    <motion.div 
                                        className="ml-8"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                            <span className="text-xl">↗</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RecentWork;
