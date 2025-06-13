import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Proyek 1',
      description: 'Deskripsi singkat tentang proyek 1 dan teknologi yang digunakan.',
      image: 'https://logospng.org/download/npm/npm-2048.png',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com',
    },
    {
      id: 2,
      title: 'Proyek 2',
      description: 'Deskripsi singkat tentang proyek 2 dan teknologi yang digunakan.',
      image: 'https://www.bytefusion.de/wp-content/uploads/2019/06/maven.png',
      tech: ['Next.js', 'TypeScript', 'MongoDB'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com',
    },
    {
      id: 3,
      title: 'Proyek 3',
      description: 'Deskripsi singkat tentang proyek 3 dan teknologi yang digunakan.',
      image: 'https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png',
      tech: ['Vue.js', 'SCSS', 'Firebase'],
      github: 'https://github.com/yourusername/project3',
      demo: 'https://project3-demo.com',
    },
  ];

  return (
    <div id="projects" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Proyek Saya</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-2"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan. Klik pada tautan untuk melihat demo atau kode sumber.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-secondary aspect-video rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src= {project.image}
                  alt="Gambar Proyek"
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-accent/20 text-text-secondary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;