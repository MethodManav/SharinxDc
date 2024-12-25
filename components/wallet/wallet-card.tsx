"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MotionCard } from "@/components/ui/motion-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Calendar } from "lucide-react";
import { WalletDetailsDialog } from "./wallet-details-dialog";
import type { Wallet } from "@/lib/utils/wallet";

interface WalletCardProps extends Wallet {
  index: number;
}

export function WalletCard({ index, ...wallet }: WalletCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <MotionCard
        delay={index * 0.1}
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setShowDetails(true)}
      >
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">{wallet.name}</CardTitle>
            <Badge
              variant={wallet.chain === "ETH" ? "default" : "secondary"}
              className="animate-in zoom-in duration-300"
            >
              {wallet.chain}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <Coins className="h-5 w-5 text-muted-foreground" />
              <span className="text-xl font-semibold">
                {wallet.balance.toFixed(4)} {wallet.chain}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date(wallet.created).toLocaleDateString()}</span>
            </div>
            <div className="text-sm text-muted-foreground break-all">
              {wallet.address}
            </div>
          </motion.div>
        </CardContent>
      </MotionCard>

      <WalletDetailsDialog
        wallet={wallet}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
}