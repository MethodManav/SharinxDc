'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

export function CreateWallet({ onWalletCreate }: { onWalletCreate: (wallet: any) => void }) {
  const [loading, setLoading] = useState(false);
  const [selectedChain, setSelectedChain] = useState<string>('');

  const handleCreateWallet = async () => {
    setLoading(true);
    // Simulate wallet creation
    setTimeout(() => {
      const wallet = {
        chain: selectedChain,
        address: selectedChain === 'ETH' 
          ? '0x' + Math.random().toString(16).slice(2, 42)
          : Math.random().toString(36).slice(2, 44),
        balance: 0,
      };
      onWalletCreate(wallet);
      setLoading(false);
      setSelectedChain('');
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Wallet</CardTitle>
        <CardDescription>
          Choose a blockchain network to create your new wallet
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={selectedChain} onValueChange={setSelectedChain}>
          <SelectTrigger>
            <SelectValue placeholder="Select blockchain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ETH">Ethereum</SelectItem>
            <SelectItem value="SOL">Solana</SelectItem>
          </SelectContent>
        </Select>
        <Button 
          className="w-full"
          onClick={handleCreateWallet}
          disabled={!selectedChain || loading}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Wallet
        </Button>
      </CardContent>
    </Card>
  );
}