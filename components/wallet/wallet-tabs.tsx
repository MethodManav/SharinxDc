'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SeedPhraseCard } from '@/components/seed-phrase/seed-phrase-card';
import { CreateWalletCard } from '@/components/wallet/create-wallet-card';

interface WalletTabsProps {
  onCreateWallet: (name: string, chain: string) => void;
}

export function WalletTabs({ onCreateWallet }: WalletTabsProps) {
  return (
    <Tabs defaultValue="create" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="create">Create Wallet</TabsTrigger>
        <TabsTrigger value="seed">Seed Phrase</TabsTrigger>
      </TabsList>
      <TabsContent value="create">
        <CreateWalletCard onCreateWallet={onCreateWallet} />
      </TabsContent>
      <TabsContent value="seed">
        <SeedPhraseCard />
      </TabsContent>
    </Tabs>
  );
}