// Simulated crypto functions
export function generateKeyPair() {
  const privateKey = Array.from({ length: 64 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
  
  const publicKey = Array.from({ length: 128 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');

  return { privateKey, publicKey };
}

const wordList = [
  "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract",
  "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid"
  // ... (in a real implementation, this would be the full BIP39 word list)
];

export function generateSeedPhrase(): string {
  return Array.from({ length: 12 }, () => 
    wordList[Math.floor(Math.random() * wordList.length)]
  ).join(' ');
}