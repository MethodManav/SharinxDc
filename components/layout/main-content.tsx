"use client";

import { motion } from "framer-motion";
import { WalletCard } from "@/components/wallet/wallet-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SeedPhraseCard } from "@/components/seed-phrase/seed-phrase-card";
import { CreateWalletCard } from "@/components/wallet/create-wallet-card";

interface MainContentProps {
  wallets: any[];
  onCreateWallet: (name: string, chain: string) => void;
}

export function MainContent({ wallets, onCreateWallet }: MainContentProps) {
  return (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tabs defaultValue="wallets" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="wallets">My Wallets</TabsTrigger>
          <TabsTrigger value="create">Create Wallet</TabsTrigger>
          <TabsTrigger value="seed">Seed Phrase</TabsTrigger>
        </TabsList>

        <TabsContent value="wallets" className="space-y-6">
          {wallets.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {wallets.map((wallet, index) => (
                <WalletCard key={wallet.address} {...wallet} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No wallets created yet. Create your first wallet to get started.
            </div>
          )}
        </TabsContent>

        <TabsContent value="create">
          <CreateWalletCard onCreateWallet={onCreateWallet} />
        </TabsContent>

        <TabsContent value="seed">
          <SeedPhraseCard />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
