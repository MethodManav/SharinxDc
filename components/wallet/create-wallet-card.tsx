'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CreateWalletForm } from '@/components/seed-phrase/create-wallet-form';

interface CreateWalletCardProps {
  onCreateWallet: (name: string, chain: string) => void;
}

export function CreateWalletCard({ onCreateWallet }: CreateWalletCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Wallet</CardTitle>
        <CardDescription>
          Create a new wallet using your seed phrase
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CreateWalletForm onCreateWallet={onCreateWallet} />
      </CardContent>
    </Card>
  );
}