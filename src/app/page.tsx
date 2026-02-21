'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          grid md:grid-cols-2 
          gap-10 
          items-center
          
          bg-linear-to-br from-white/5 via-white/10 to-white/5
          backdrop-blur-xl
          rounded-3xl
          p-8
          
          border border-white/20
          relative
          overflow-hidden
          
          shadow-[0_0_30px_rgba(0,255,255,0.3),0_0_60px_rgba(0,255,255,0.1)]
          hover:shadow-[0_0_50px_rgba(0,255,255,0.5),0_0_100px_rgba(0,255,255,0.2)]
          transition-shadow duration-700
        "
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="
            text-4xl md:text-5xl font-bold 
            bg-linear-to-r from-cyan-300 via-white to-cyan-300 
            bg-clip-text text-transparent
            drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]
            animate-pulse
          ">
            Chiniot Luxury Furniture
          </h1>

          <motion.p 
            className="mt-4 text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium handcrafted Chiniot furniture with elegant carving
            and timeless luxury.
          </motion.p>

          <motion.div 
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {["Beds", "Sofas", "Dining", "Cabinets"].map((item, index) => (
              <motion.span
                key={item}
                className="
                  px-4 py-2 
                  bg-white/5 
                  backdrop-blur-md
                  border border-white/10
                  rounded-full 
                  text-cyan-300
                  shadow-[0_0_15px_rgba(0,255,255,0.3)]
                  hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]
                  transition-all duration-300
                  cursor-default
                "
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="relative h-87.5 w-full rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className=" w-full h-125 absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-transparent to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Image
            src="/0.jpg"
            alt="Luxury Chiniot Furniture Sofa"
            title="Luxury Chiniot Furniture Sofa"
            fill
            priority
            className="object-contain group-hover:scale-110 transition-all duration-700"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}