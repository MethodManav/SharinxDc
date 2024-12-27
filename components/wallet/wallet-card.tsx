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
      <motion.div
        onClick={() => setShowDetails(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <MotionCard delay={index * 0.1} className="cursor-pointer">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">
                {wallet.name}
              </CardTitle>
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
            ></motion.div>
          </CardContent>
        </MotionCard>
      </motion.div>

      <WalletDetailsDialog
        wallet={wallet}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
}
