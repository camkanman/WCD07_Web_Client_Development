import { motion } from "framer-motion";

const HoverButton = () => {
  return (
    <motion.div
      className="absolute right-0 flex items-center bg-black text-white px-8 py-6 rounded-l-full cursor-pointer overflow-hidden"
      initial={{ width: 120 }}
      whileHover={{ width: 330 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.span
        className="text-5xl"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        👋
      </motion.span>
      <motion.span
        className="ml-8 whitespace-nowrap text-3xl"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Hi I'm Husnu
      </motion.span>
    </motion.div>
  );
};

export default HoverButton;
