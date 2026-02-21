'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const cartItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        sticky top-0 z-50
        flex justify-between items-center
        p-4 px-8
        bg-linear-to-r from-black/90 via-black/80 to-black/90
        backdrop-blur-xl
        border-b border-white/10
        shadow-[0_0_30px_rgba(0,255,255,0.3)]
      "
    >
      <motion.h1 
        className="
          text-2xl font-bold
          bg-linear-to-r from-cyan-400 via-white to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]
        "
        whileHover={{ scale: 1.05 }}
        animate={{ 
          textShadow: [
            "0 0 10px rgba(0,255,255,0.5)",
            "0 0 20px rgba(0,255,255,0.8)",
            "0 0 10px rgba(0,255,255,0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Chiniot Furniture <br/>  by Riffat Ismail
      </motion.h1>

      <div className="flex gap-6">
        {[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/cart", label: "Cart", badge: cartItemsCount },
          { href: "/admin", label: "Admin" },
        ].map((link) => (
          <motion.div
            key={link.href}
            className="relative"
            onHoverStart={() => setHoveredLink(link.href)}
            onHoverEnd={() => setHoveredLink(null)}
          >
            <Link href={link.href}>
              <motion.span
                className={`
                  relative px-3 py-2 block cursor-pointer
                  ${hoveredLink === link.href ? 'text-cyan-300' : 'text-gray-200'}
                  transition-colors duration-300
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {link.badge ? link.badge > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
                      absolute -top-1 -right-1
                      bg-cyan-500
                      text-white text-xs
                      w-5 h-5
                      flex items-center justify-center
                      rounded-full
                      shadow-[0_0_10px_rgba(0,255,255,0.7)]
                    "
                  >
                    {link.badge}
                  </motion.span>
                ) : null}
              </motion.span>
            </Link>
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredLink === link.href ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}