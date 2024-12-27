// Utility functions for wallet operations
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { HDNodeWallet } from "ethers";
import nacl from "tweetnacl";

export interface Wallet {
  id: string;
  name: string;
  chain: string;
  privateKey: string;
  publicKey: string;
}

export function createNewWallet(
  chain: string,
  name: string,
  seedPhrase: string
): Wallet {
  const address =
    chain === "ETH" ? ethKeyPair(seedPhrase) : SolanaKeyPair(seedPhrase);

  return {
    id: Math.random().toString(36).slice(2),
    name,
    chain,
    privateKey: address.privateKey,
    publicKey: address.publicKey,
  };
}

export function SolanaKeyPair(phrase: string): {
  publicKey: string;
  privateKey: string;
} {
  let counter = 0;
  const path = `m/44'/501'/${counter}'/0'`;

  try {
    const seedHex = mnemonicToSeedSync(phrase).toString("hex");
    const { key } = derivePath(path, seedHex);
    const derivedSeed = new Uint8Array(key);
    const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secretKey);
    counter++;
    return {
      publicKey: keypair.publicKey.toString(),
      privateKey: Buffer.from(secretKey).toString("hex"),
    };
  } catch (error: any) {
    console.error("Error generating key pair:", error.message);
    throw new Error("Failed to generate Solana key pair");
  }
}

export function ethKeyPair(phrase: string): {
  publicKey: string;
  privateKey: string;
} {
  let counter = 0;
  const path = `m/44'/60'/${counter}'/0'`;
  try {
    const seed = mnemonicToSeedSync(phrase);
    const seedUint8Array = new Uint8Array(seed);
    const hdNode = HDNodeWallet.fromSeed(seedUint8Array);
    const secretKey = hdNode.derivePath(path);
    counter++;
    return {
      publicKey: secretKey.publicKey,
      privateKey: secretKey.privateKey,
    };
  } catch (error: any) {
    console.error("Error generating key pair:", error.message);
    throw new Error("Failed to generate Solana key pair");
  }
}
