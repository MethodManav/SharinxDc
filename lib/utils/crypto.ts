import { generateMnemonic } from "bip39";

export function generateSeedPhrase(): string {
  const mnemonic = generateMnemonic();
  return mnemonic;
}
