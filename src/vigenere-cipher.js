const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const A_CODE = 65;
const ALPHABET_SIZE = 26;

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  process(text, key, mode) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const message = String(text).toUpperCase();
    const keyword = String(key).toUpperCase();

    let result = '';
    let keyPos = 0;

    for (let i = 0; i < message.length; i += 1) {
      const code = message.charCodeAt(i);

      if (code >= A_CODE && code < A_CODE + ALPHABET_SIZE) {
        const msgIdx = code - A_CODE;
        const keyIdx = keyword.charCodeAt(keyPos % keyword.length) - A_CODE;

        const shift = mode === 'encrypt' ? keyIdx : -keyIdx;
        const newIdx = ((msgIdx + shift) % ALPHABET_SIZE + ALPHABET_SIZE) % ALPHABET_SIZE;

        result += String.fromCharCode(newIdx + A_CODE);
        keyPos += 1;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
      }

  encrypt(message, key) {
    return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, 'decrypt');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
