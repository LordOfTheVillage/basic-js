const { NotImplementedError } = require("../extensions/index.js")

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

// class VigenereCipheringMachine {
//   encrypt() {
//     throw new NotImplementedError("Not implemented")
//   }
//   decrypt() {
//     throw new NotImplementedError("Not implemented")
//   }
// }
class VigenereCipheringMachine {
  constructor(mode) {
    if (mode === false) this.mode = "reverse"
    else this.mode = "direct"
  }

  isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i)
  }

  mod(n, m) {
    return ((n % m) + m) % m
  }

  hasArguments(args) {
    if (args.length < 2 || args[0] === undefined || args[1] === undefined)
      throw new Error("Incorrect arguments!")
  }

  encrypt() {
    this.hasArguments(arguments)
    let text = arguments[0].toUpperCase()
    let key = arguments[1].toUpperCase()
    let encrypted = ""
    let j = 0
    for (let i = 0; i < text.length; i++) {
      let currentLetter = text[i]
      const A = 65
      const a = 97

      if (this.isLetter(currentLetter)) {
        let Pi = currentLetter.charCodeAt(0) - A
        let Ki = key[j % key.length].charCodeAt() - A
        let letter = this.mod(Pi + Ki, 26)

        encrypted += String.fromCharCode(letter + A)

        j++
      } else {
        encrypted += currentLetter
      }
    }

    if (this.mode === "direct") return encrypted
    else return encrypted.split("").reverse().join("")
  }
  decrypt() {
    this.hasArguments(arguments)
    let cipher = arguments[0].toUpperCase()
    let key = arguments[1].toUpperCase()

    let decrypted = ""
    let j = 0
    for (let i = 0; i < cipher.length; i++) {
      let currentLetter = cipher[i]
      const A = 65
      const a = 97

      if (this.isLetter(currentLetter)) {
        let Ci = currentLetter.charCodeAt(0) - A
        let Ki = key[j % key.length].charCodeAt() - A
        let letter = this.mod(Ci - Ki, 26)

        decrypted += String.fromCharCode(letter + A)

        j++
      } else {
        decrypted += currentLetter
      }
    }

    if (this.mode === "direct") return decrypted
    else return decrypted.split("").reverse().join("")
  }
}

module.exports = {
  VigenereCipheringMachine,
}
