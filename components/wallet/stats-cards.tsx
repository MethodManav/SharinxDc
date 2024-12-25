"use client";

import { motion } from "framer-motion";
import { MotionCard } from "@/components/ui/motion-card";
import { CardContent } from "@/components/ui/card";
import { Wallet, CircleDollarSign, Coins } from "lucide-react";

const iconColors = {
  total: "from-blue-500 to-purple-500",
  eth: "from-purple-500 to-pink-500",
  sol: "from-pink-500 to-orange-500",
};

interface StatsCardsProps {
  wallets: any[];
}

export function StatsCards({ wallets }: StatsCardsProps) {
  const totalWallets = wallets.length;
  const ethWallets = wallets.filter((w) => w.chain === "ETH").length;
  const solWallets = wallets.filter((w) => w.chain === "SOL").length;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MotionCard>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full p-2 bg-gradient-to-br ${iconColors.total}`}
            >
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Total Wallets</h2>
          </div>
          <motion.p
            className="text-4xl font-bold mt-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {totalWallets}
          </motion.p>
        </CardContent>
      </MotionCard>

      <MotionCard delay={0.1}>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full p-2 bg-gradient-to-br ${iconColors.eth}`}
            >
              <CircleDollarSign className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold">ETH Wallets</h2>
          </div>
          <motion.p
            className="text-4xl font-bold mt-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {ethWallets}
          </motion.p>
        </CardContent>
      </MotionCard>

      <MotionCard delay={0.2}>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full p-2 bg-gradient-to-br ${iconColors.sol}`}
            >
              <Coins className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold">SOL Wallets</h2>
          </div>
          <motion.p
            className="text-4xl font-bold mt-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {solWallets}
          </motion.p>
        </CardContent>
      </MotionCard>
    </div>
  );
}
