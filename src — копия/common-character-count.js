const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let count = 0
  const array = str2.split("")
  for (item of str1) {
    let index = array.findIndex((s) => s === item)
    if (index >= 0) {
      count++
      array.splice(index, 1)
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount,
}
