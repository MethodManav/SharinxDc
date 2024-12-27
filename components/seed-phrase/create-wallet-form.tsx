'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

interface CreateWalletFormProps {
  onCreateWallet: (name: string, chain: string) => void;
}

export function CreateWalletForm({ onCreateWallet }: CreateWalletFormProps) {
  const [name, setName] = useState('');
  const [chain, setChain] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !chain) return;

    setLoading(true);
    try {
      onCreateWallet(name, chain);
      setName('');
      setChain('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Wallet Name</Label>
        <Input
          id="name"
          placeholder="Enter wallet name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Blockchain</Label>
        <Select value={chain} onValueChange={setChain} required>
          <SelectTrigger>
            <SelectValue placeholder="Select blockchain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ETH">Ethereum</SelectItem>
            <SelectItem value="SOL">Solana</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={loading || !name || !chain}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Create Wallet
      </Button>
    </form>
  );
}