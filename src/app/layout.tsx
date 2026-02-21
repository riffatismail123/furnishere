'use client';

import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Chiniot Luxury Furniture</title>
        <meta name="description" content="Premium handcrafted Chiniot furniture with elegant carving and timeless luxury." />
      </head>
      <body className="bg-black text-white relative min-h-screen">
        {/* Animated background gradient - Only render on client */}
        <div className="fixed inset-0 -z-20 bg-black" />
        {mounted && (
          <motion.div 
            className="fixed inset-0 -z-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(0,255,255,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,255,255,0.15) 0%, transparent 40%)",
                "radial-gradient(circle at 30% 70%, rgba(0,255,255,0.15) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(0,255,255,0.15) 0%, transparent 40%)",
                "radial-gradient(circle at 20% 20%, rgba(0,255,255,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,255,255,0.15) 0%, transparent 40%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        )}

        {/* Floating particles effect - Only render on client */}
        {mounted && (
          <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        <CartProvider>
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {children}
          </motion.main>
        </CartProvider>

        {/* Footer - Only render animated parts on client */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="
            relative z-10
            mt-20 py-8
            border-t border-white/10
            bg-linear-to-b from-transparent to-black/50
            backdrop-blur-sm
          "
        >
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">About Us</h3>
                <p className="text-gray-400 text-sm">
                  Crafting luxury Chiniot furniture since 1980, bringing elegance to your home.
                </p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  {["Products", "Gallery", "About", "Contact"].map((link) => (
                    <motion.li 
                      key={link}
                      whileHover={mounted ? { x: 5 } : {}}
                      className="text-gray-400 hover:text-cyan-300 cursor-pointer transition-colors"
                    >
                      {link}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>📍 Chiniot, Pakistan</li>
                  <li>📞 +92 300 1234567</li>
                  <li>✉️ info@chiniotfurniture.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["FB", "IG", "TW", "YT"].map((social) => (
                    <motion.div
                      key={social}
                      whileHover={mounted ? { scale: 1.2, rotate: 5 } : {}}
                      className="
                        w-10 h-10
                        bg-white/5
                        backdrop-blur-lg
                        border border-white/10
                        rounded-full
                        flex items-center justify-center
                        text-cyan-400
                        shadow-[0_0_15px_rgba(0,255,255,0.3)]
                        hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]
                        cursor-pointer
                        transition-all duration-300
                      "
                    >
                      {social}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.div 
              className="mt-8 pt-8 text-center text-gray-500 text-sm border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              © 2026 Chiniot Luxury Furniture. All rights reserved.digitalized by riffat ismail
            </motion.div>
          </div>
        </motion.footer>
      </body>
    </html>
  );
}