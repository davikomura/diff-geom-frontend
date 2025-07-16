import { motion } from "framer-motion";

type ConceptChipProps = {
  title: string;
  anchor: string;
  index: number;
};

export const ConceptChip = ({ title, anchor, index }: ConceptChipProps) => {
  return (
    <motion.a
      href={`#${anchor}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                 text-gray-100 bg-gray-800/80 border border-gray-700 shadow hover:bg-gray-700
                 hover:text-white hover:scale-105 transition-all cursor-pointer"
    >
      {title}
    </motion.a>
  );
};