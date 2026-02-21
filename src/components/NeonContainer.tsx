'use client';

import { motion } from "framer-motion";

export default function NeonContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 40px rgba(0,255,200,0.7)"
      }}
      className="
        bg-linear-to-br from-white/10 via-white/5 to-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-[0_0_25px_rgba(0,255,200,0.5)]
        hover:shadow-[0_0_35px_rgba(0,255,200,0.7)]
        rounded-2xl
        p-6
        transition-all duration-500
        relative
        overflow-hidden
      "
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      {children}
    </motion.div>
  );
}