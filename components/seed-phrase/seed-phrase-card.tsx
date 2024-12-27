'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SeedPhraseDisplay } from './seed-phrase-display';
import { generateSeedPhrase } from '@/lib/utils/crypto';
import { setCurrentSeedPhrase } from '@/lib/utils/wallet';
import { RefreshCw, ShieldAlert } from 'lucide-react';

export function SeedPhraseCard() {
  const [seedPhrase, setSeedPhrase] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const phrase = generateSeedPhrase();
    setSeedPhrase(phrase);
    setCurrentSeedPhrase(phrase);
    setIsLoading(false);
  }, []);

  const handleRegenerateSeedPhrase = () => {
    const phrase = generateSeedPhrase();
    setSeedPhrase(phrase);
    setCurrentSeedPhrase(phrase);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="h-[200px] flex items-center justify-center">
            <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Seed Phrase</CardTitle>
            <CardDescription>Your wallet recovery phrase</CardDescription>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleRegenerateSeedPhrase}
            title="Generate new seed phrase"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3 text-sm text-muted-foreground">
          <ShieldAlert className="h-5 w-5 text-yellow-500" />
          <p>Keep your seed phrase safe. It's the only way to recover your wallet if you lose access.</p>
        </div>
        <SeedPhraseDisplay seedPhrase={seedPhrase} />
      </CardContent>
    </Card>
  );
}