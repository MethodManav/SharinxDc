"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WalletCard } from "@/components/wallet/wallet-card";
import { Navbar } from "@/components/layout/navbar";
import { MainContent } from "@/components/layout/main-content";
import { Sidebar } from "@/components/layout/sidebar";
import { createNewWallet } from "@/lib/utils/wallet";

export default function Home() {
  const [wallets, setWallets] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const handleWalletCreate = (name: string, chain: string) => {
    const newWallet = createNewWallet(chain, name);
    setWallets([...wallets, newWallet]);
  };

  const filteredWallets = wallets.filter((wallet) =>
    filter === "all" ? true : wallet.chain === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Navbar
        onWalletCreate={function (wallet: any): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            wallets={wallets}
            onFilterChange={setFilter}
            currentFilter={filter}
          />
          <MainContent
            wallets={filteredWallets}
            onCreateWallet={handleWalletCreate}
          />
        </div>
      </div>
    </div>
  );
}
