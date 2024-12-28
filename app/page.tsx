"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { MainContent } from "@/components/layout/main-content";
import { Sidebar } from "@/components/layout/sidebar";
import { createNewWallet } from "@/lib/utils/wallet";
import { generateSeedPhrase } from "@/lib/utils/crypto";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [wallets, setWallets] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [seedPhrase, setSeedPhrase] = useState("");
  const { toast } = useToast();
  useEffect(() => {
    setSeedPhrase(generateSeedPhrase);
  }, []);

  const handleWalletCreate = (name: string, chain: string) => {
    const newWallet = createNewWallet(chain, name, seedPhrase);
    setWallets([...wallets, newWallet]);
    toast({
      title: "Wallet Created",
      description: `Your ${chain} wallet "${name}" has been created successfully.`,
    });
  };

  const filteredWallets = wallets.filter((wallet) =>
    filter === "all" ? true : wallet.chain === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            wallets={wallets}
            onFilterChange={setFilter}
            currentFilter={filter}
          />
          <MainContent
            wallets={filteredWallets}
            phrase={seedPhrase}
            onCreateWallet={handleWalletCreate}
          />
        </div>
      </div>
    </div>
  );
}
