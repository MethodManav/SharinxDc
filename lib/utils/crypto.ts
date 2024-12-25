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