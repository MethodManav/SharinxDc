// Utility functions for wallet operations
import { generateKeyPair } from './crypto';

export interface Wallet {
  id: string;
  name: string;
  chain: string;
  address: string;
  privateKey: string;
  publicKey: string;
  seedPhrase: string;
  balance: number;
  created: string;
}

let currentSeedPhrase = '';

export function setCurrentSeedPhrase(phrase: string) {
  currentSeedPhrase = phrase;
}

export function createNewWallet(chain: string, name: string): Wallet {
  const { privateKey, publicKey } = generateKeyPair();
  const address = chain === 'ETH' 
    ? '0x' + Math.random().toString(16).slice(2, 42)
    : Math.random().toString(36).slice(2, 44);

  return {
    id: Math.random().toString(36).slice(2),
    name,
    chain,
    address,
    privateKey,
    publicKey,
    seedPhrase: currentSeedPhrase,
    balance: Math.random() * 10,
    created: new Date().toISOString(),
  };
}