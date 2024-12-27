"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SeedPhraseDisplay } from "./seed-phrase-display";
import { CreateWalletForm } from "./create-wallet-form";
import { generateSeedPhrase } from "@/lib/utils/crypto";
import { RefreshCw } from "lucide-react";

interface SeedPhraseManagerProps {
  onCreateWallet: (name: string, chain: string) => void;
}

export function SeedPhraseManager({ onCreateWallet }: SeedPhraseManagerProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="h-[300px] flex items-center justify-center">
            <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Wallet Manager</CardTitle>
          <Button
            variant="outline"
            size="icon"
            title="Generate new seed phrase"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border-t pt-6">
          <CreateWalletForm onCreateWallet={onCreateWallet} />
        </div>
      </CardContent>
    </Card>
  );
}
