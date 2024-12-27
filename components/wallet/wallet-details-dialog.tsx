'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Copy, Check, Key, KeyRound, Fingerprint } from 'lucide-react';
import type { Wallet } from '@/lib/utils/wallet';

interface WalletDetailsDialogProps {
  wallet: Wallet;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WalletDetailsDialog({ wallet, open, onOpenChange }: WalletDetailsDialogProps) {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const KeyDisplay = ({ value, label, isPrivate = false, icon: Icon }: { 
    value: string; 
    label: string; 
    isPrivate?: boolean;
    icon: React.ElementType;
  }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleCopy(value, label)}
          className="h-8 w-8"
        >
          {copiedField === label ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="relative">
        <div className={`font-mono text-sm p-3 rounded-md bg-muted break-all ${
          isPrivate && !showPrivateKey ? 'blur-md select-none' : ''
        }`}>
          {value}
        </div>
        {isPrivate && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowPrivateKey(!showPrivateKey)}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {showPrivateKey ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{wallet.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="grid gap-6">
            <KeyDisplay 
              label="Public Key"
              value={wallet.publicKey}
              icon={Fingerprint}
            />
            <KeyDisplay 
              label="Private Key"
              value={wallet.privateKey}
              isPrivate
              icon={Key}
            />
          </div>
          <div className="border-t pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <KeyRound className="h-4 w-4" />
                  <span className="text-sm font-medium">Seed Phrase</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(wallet.seedPhrase, 'Seed Phrase')}
                  className="h-8 w-8"
                >
                  {copiedField === 'Seed Phrase' ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="relative">
                <div className={`font-mono text-sm p-3 rounded-md bg-muted ${
                  !showSeedPhrase ? 'blur-md select-none' : ''
                }`}>
                  <div className="grid grid-cols-3 gap-2">
                    {wallet.seedPhrase.split(' ').map((word, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-muted-foreground">{i + 1}.</span>
                        <span>{word}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSeedPhrase(!showSeedPhrase)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  {showSeedPhrase ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Warning: Never share your seed phrase with anyone. Anyone with access to your seed phrase can control your wallet.
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}