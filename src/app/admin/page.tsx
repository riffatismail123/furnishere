'use client';

import { useState } from "react";
import NeonContainer from "@/components/NeonContainer";
import { motion } from "framer-motion";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState("");

  function login() {
    if (email === "admin@gmail.com" && password === "1234") {
      setLogged(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  }

  if (logged) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 max-w-4xl mx-auto"
      >
        <NeonContainer>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="
              text-4xl font-bold mb-4
              bg-linear-to-r from-cyan-300 to-white
              bg-clip-text text-transparent
            ">
              Admin Panel
            </h1>
            <p className="text-gray-300 text-lg">
              Welcome back, Administrator! 👋
            </p>
            
            {/* Quick stats or admin content can go here */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {["Total Orders", "Total Products", "Total Users"].map((stat, i) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="
                    bg-white/5
                    backdrop-blur-lg
                    border border-white/10
                    rounded-xl
                    p-6
                    text-center
                    shadow-[0_0_15px_rgba(0,255,255,0.3)]
                  "
                >
                  <h3 className="text-cyan-300 font-semibold mb-2">{stat}</h3>
                  <p className="text-2xl text-white">0</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </NeonContainer>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-10 flex justify-center items-center min-h-[70vh]"
    >
      <NeonContainer>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="w-96 max-w-full"
        >
          <h2 className="
            text-3xl font-bold mb-6 text-center
            bg-linear-to-r from-cyan-300 to-white
            bg-clip-text text-transparent
          ">
            Admin Login
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-cyan-300 mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                placeholder="Enter your email"
                value={email}
                className="
                  w-full
                  p-3 
                  bg-white/5
                  backdrop-blur-lg
                  border border-white/20
                  rounded-lg
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:border-cyan-400
                  focus:shadow-[0_0_15px_rgba(0,255,255,0.5)]
                  transition-all duration-300
                "
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-cyan-300 mb-2 text-sm font-medium">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                value={password}
                className="
                  w-full
                  p-3 
                  bg-white/5
                  backdrop-blur-lg
                  border border-white/20
                  rounded-lg
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:border-cyan-400
                  focus:shadow-[0_0_15px_rgba(0,255,255,0.5)]
                  transition-all duration-300
                "
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-center"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              onClick={login}
              className="
                w-full
                bg-linear-to-r from-cyan-500 to-blue-600
                px-4 py-3
                rounded-lg
                text-white font-semibold
                shadow-[0_0_20px_rgba(0,255,255,0.5)]
                hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]
                transition-all duration-300
                mt-2
              "
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login to Dashboard
            </motion.button>
          </div>

          
        </motion.div>
      </NeonContainer>
    </motion.div>
  );
}