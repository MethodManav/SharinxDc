"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Wallet = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-xl p-8 max-w-4xl w-full shadow-2xl"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-extrabold text-4xl md:text-5xl text-gray-100 leading-tight"
            >
              Welcome to <span className="text-purple-400">SharinxDC</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans text-lg"
            >
              Your ultimate decentralized wallet solution! SharinxDC simplifies
              crypto management, offering a secure, seamless, and user-friendly
              way to create and manage your wallet. Secure Your Crypto. Own Your
              Future. Create your wallet today! 🚀
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Link href={"/dashboard"}>
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Solana
                </Button>
              </Link>
              <Link href={"/dashboard"}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Ethereum
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex-1 flex justify-center items-center"
          >
            <Image
              src="/image/chill.png"
              alt="Cryptocurrency Illustration"
              width={900}
              height={900}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Wallet;
