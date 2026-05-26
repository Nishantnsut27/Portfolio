import { motion } from 'framer-motion';

const Card = ({ children, className = "", noPadding = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-2xl bg-[#0B0F19]/60 backdrop-blur-md border border-[#1E293B] shadow-lg hover:shadow-cyan-900/10 hover:border-[#2D3748] transition-all duration-300 ${noPadding ? '' : 'p-6'} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default Card;
