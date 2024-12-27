'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, CircleDollarSign, Coins } from 'lucide-react';

interface SidebarProps {
  wallets: any[];
  onFilterChange: (value: string) => void;
  currentFilter: string;
}

export function Sidebar({ wallets, onFilterChange, currentFilter }: SidebarProps) {
  const totalWallets = wallets.length;
  const ethWallets = wallets.filter(w => w.chain === 'ETH').length;
  const solWallets = wallets.filter(w => w.chain === 'SOL').length;

  return (
    <motion.div 
      className="w-full lg:w-80 space-y-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <StatItem
              icon={Wallet}
              label="Total Wallets"
              value={totalWallets}
              gradient="from-blue-500 to-purple-500"
            />
            <StatItem
              icon={CircleDollarSign}
              label="ETH Wallets"
              value={ethWallets}
              gradient="from-purple-500 to-pink-500"
            />
            <StatItem
              icon={Coins}
              label="SOL Wallets"
              value={solWallets}
              gradient="from-pink-500 to-orange-500"
            />
          </div>

          <div className="pt-4 border-t">
            <Select value={currentFilter} onValueChange={onFilterChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chains</SelectItem>
                <SelectItem value="ETH">Ethereum</SelectItem>
                <SelectItem value="SOL">Solana</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function StatItem({ 
  icon: Icon, 
  label, 
  value, 
  gradient 
}: { 
  icon: any; 
  label: string; 
  value: number; 
  gradient: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`rounded-full p-2 bg-gradient-to-br ${gradient}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}