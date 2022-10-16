const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let reulst = 0
  while (n > 0 || reulst > 9) {
    if (n === 0) {
      n = reulst
      reulst = 0
    }
    reulst = reulst + (n % 10)
    n = Math.floor(n / 10)
  }
  return reulst
}

module.exports = {
  getSumOfDigits,
}
