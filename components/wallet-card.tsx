"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins } from "lucide-react";

interface WalletCardProps {
  chain: string;
  address: string;
  balance: number;
}

export function WalletCard({ chain, address, balance }: WalletCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">
            {chain === "ETH" ? "Ethereum" : "Solana"} Wallet
          </CardTitle>
          <Badge variant={chain === "ETH" ? "default" : "secondary"}>
            {chain}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Coins className="h-5 w-5 text-muted-foreground" />
            <span className="text-xl font-semibold">
              {balance} {chain}
            </span>
          </div>
          <div className="text-sm text-muted-foreground break-all">
            {address}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
