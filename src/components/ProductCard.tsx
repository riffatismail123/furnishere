'use client';

import Image from "next/image";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";

type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ product }: ProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, qty: 1 });
  };

  return (
    <motion.div
      className="
        bg-linear-to-br from-white/10 via-white/5 to-white/10
        backdrop-blur-lg
        border border-white/20
        rounded-2xl
        overflow-hidden
        shadow-[0_0_20px_rgba(0,255,255,0.3)]
        hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]
        transition-all duration-500
        group
      "
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold text-cyan-300 mb-2"
          whileHover={{ x: 5 }}
        >
          {product.name}
        </motion.h3>
        
        <p className="text-2xl font-bold text-white mb-4">
          Rs {product.price.toLocaleString()}
        </p>
        
        <motion.button
          onClick={handleAddToCart}
          className="
            w-full
            bg-linear-to-r from-cyan-500 to-blue-600
            py-3 rounded-lg
            text-white font-medium
            shadow-[0_0_15px_rgba(0,255,255,0.5)]
            hover:shadow-[0_0_25px_rgba(0,255,255,0.8)]
            transition-all duration-300
          "
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}