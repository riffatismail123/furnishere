'use client';

import ProductCard from "@/components/ProductCard";
import { furniture } from "@/data/furniture";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        grid 
        md:grid-cols-3 
        gap-8 
        p-10
        relative
      "
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
      
      {furniture.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}