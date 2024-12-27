"use client";

import { motion } from "framer-motion";
import { CreateWalletDialog } from "@/components/wallet/create-wallet-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wallet } from "lucide-react";

interface NavbarProps {
  onWalletCreate: (wallet: any) => void;
}

export function Navbar({ onWalletCreate }: NavbarProps) {
  return (
    <motion.nav
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6">
        {/* Logo and Title */}
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Wallet className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SharinXDc
          </h1>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
