"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WalletCard } from "@/components/wallet/wallet-card";
import { StatsCards } from "@/components/wallet/stats-cards";
import { Navbar } from "@/components/layout/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [wallets, setWallets] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const handleWalletCreate = (wallet: any) => {
    setWallets([...wallets, wallet]);
  };

  const filteredWallets = wallets.filter((wallet) =>
    filter === "all" ? true : wallet.chain === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Navbar onWalletCreate={handleWalletCreate} />

      <motion.main
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-8">
          <StatsCards wallets={wallets} />

          <motion.div
            className="w-full md:w-64"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Filter by chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chains</SelectItem>
                <SelectItem value="ETH">Ethereum</SelectItem>
                <SelectItem value="SOL">Solana</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredWallets.map((wallet, index) => (
              <WalletCard key={wallet.address} {...wallet} index={index} />
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  );
}
