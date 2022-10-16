const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = (n + "").split("").map((e) => +e)

  number = number.map((e, i) => {
    let result = number.slice()
    result.splice(i, 1)
    return Number(result.join(""))
  })

  return Math.max(...number)
}

console.log(deleteDigit(1001), 101)

module.exports = {
  deleteDigit,
}
