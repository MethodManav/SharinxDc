'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Copy, Check, KeyRound } from 'lucide-react';

interface SeedPhraseDisplayProps {
  seedPhrase: string;
}

export function SeedPhraseDisplay({ seedPhrase }: SeedPhraseDisplayProps) {
  const [showPhrase, setShowPhrase] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(seedPhrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <KeyRound className="h-5 w-5" />
          <h3 className="font-semibold">Your Seed Phrase</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="relative">
        <div className={`p-4 bg-muted rounded-lg ${!showPhrase ? 'blur-md select-none' : ''}`}>
          <div className="grid grid-cols-3 gap-3">
            {seedPhrase.split(' ').map((word, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">{i + 1}.</span>
                <span className="font-mono">{word}</span>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowPhrase(!showPhrase)}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          {showPhrase ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Warning: Never share your seed phrase. Anyone with these words can access all your wallets.
      </p>
    </div>
  );
}