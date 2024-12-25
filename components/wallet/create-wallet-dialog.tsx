"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Plus } from "lucide-react";
import { createNewWallet } from "@/lib/utils/wallet";

export function CreateWalletDialog({
  onWalletCreate,
}: {
  onWalletCreate: (wallet: any) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [selectedChain, setSelectedChain] = useState<string>("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateWallet = async () => {
    if (!selectedChain || !name.trim()) return;

    setLoading(true);
    setTimeout(() => {
      const wallet = createNewWallet(selectedChain, name.trim());
      onWalletCreate(wallet);
      setLoading(false);
      setSelectedChain("");
      setName("");
      setOpen(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="h-5 w-5" />
          Create Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Wallet</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Wallet Name</Label>
              <Input
                id="name"
                placeholder="Enter wallet name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Blockchain</Label>
              <Select value={selectedChain} onValueChange={setSelectedChain}>
                <SelectTrigger>
                  <SelectValue placeholder="Select blockchain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ETH">Ethereum</SelectItem>
                  <SelectItem value="SOL">Solana</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            className="w-full"
            onClick={handleCreateWallet}
            disabled={!selectedChain || !name.trim() || loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
