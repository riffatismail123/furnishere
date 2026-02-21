'use client';

import { useCart } from "@/components/CartContext";
import NeonContainer from "@/components/NeonContainer";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cart.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 text-center"
      >
        <NeonContainer>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl text-cyan-300"
          >
            Your cart is empty
          </motion.div>
          <p className="text-gray-400 mt-2">Add some beautiful furniture to get started!</p>
        </NeonContainer>
      </motion.div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="
          text-3xl font-bold mb-8
          bg-linear-to-r from-cyan-300 to-white
          bg-clip-text text-transparent
        "
      >
        Shopping Cart
      </motion.h2>
      
      <AnimatePresence>
        {cart.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            layout
          >
            <NeonContainer>
              <div className="flex justify-between items-center">
                <div>
                  <motion.h3 
                    className="text-xl font-semibold text-cyan-300"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.h3>
                  <div className="flex gap-6 mt-2 text-gray-300">
                    <p>Quantity: {item.qty}</p>
                    <p>Price: Rs {item.price.toLocaleString()}</p>
                    <p className="text-cyan-400">
                      Subtotal: Rs {(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => removeFromCart(item.id)}
                  className="
                    bg-linear-to-r from-red-500 to-red-600
                    px-4 py-2 rounded-lg
                    text-white font-medium
                    shadow-[0_0_15px_rgba(255,0,0,0.5)]
                    hover:shadow-[0_0_25px_rgba(255,0,0,0.8)]
                    transition-all duration-300
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Remove
                </motion.button>
              </div>
            </NeonContainer>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Cart Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <NeonContainer>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-300">Total Amount:</span>
            <motion.span 
              className="
                text-3xl font-bold
                bg-linear-to-r from-cyan-300 to-white
                bg-clip-text text-transparent
              "
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(0,255,255,0.5)",
                  "0 0 20px rgba(0,255,255,0.8)",
                  "0 0 10px rgba(0,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Rs {totalPrice.toLocaleString()}
            </motion.span>
          </div>
          
          <motion.button
            className="
              w-full mt-4
              bg-linear-to-r from-cyan-500 to-blue-600
              py-3 rounded-lg
              text-white font-bold text-lg
              shadow-[0_0_20px_rgba(0,255,255,0.5)]
              hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]
              transition-all duration-300
            "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Proceed to Checkout
          </motion.button>
        </NeonContainer>
      </motion.div>
    </div>
  );
}