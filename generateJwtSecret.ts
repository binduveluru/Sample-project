const nodeCrypto = require('crypto');
 
// Generate a 64-byte random string in hexadecimal format
const generateJwtSecret = (): string => {
  return nodeCrypto.randomBytes(64).toString('hex');
};
 
// Generate and log the secret
const secret = generateJwtSecret();
console.log(secret);