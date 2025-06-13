import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
    { id: 2, name: 'CSS', icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
    { id: 3, name: 'JavaScript', icon: <FaJs size={40} className="text-[#F7DF1E]" /> },
    { id: 4, name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
    { id: 5, name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
    { id: 6, name: 'Next.js', icon: <SiNextdotjs size={40} className="text-white" /> },
    { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
    { id: 8, name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#339933]" /> },
    { id: 9, name: 'Git', icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
    { id: 10, name: 'Java', icon: <FaJava size={40} className="text-[#FFFFFF]" /> },
  ];

  return (
    <div id="skills" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Keahlian Saya</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-2"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Berikut adalah beberapa teknologi dan alat yang saya kuasai.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary transition-all duration-300"
            >
              {skill.icon}
              <p className="mt-2 text-text-secondary">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;