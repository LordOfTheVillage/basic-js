const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

let transform = (arr) => {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  let flag = false
  return arr.flatMap((v, i, a) => {
    if (i === 0) {
      flag = false
    }
    if (a[i + 1] === "--discard-prev" && !flag) {
      if (a[i - 1] === "--double-next") return [v]
      else return []
    }
    if (a[i - 1] === "--discard-next") {
      flag = true
      return []
    }
    if (a[i - 1] === "--double-next" && !flag) {
      if (a[i + 1] === "--double-prev") return [v, v, v]
      else return [v, v]
    }
    if (a[i + 1] === "--double-prev" && !flag) return [v, v]

    if (
      v.toString() === "--double-prev" ||
      v.toString() === "--double-next" ||
      v.toString() === "--discard-prev" ||
      v.toString() === "--discard-next"
    )
      return []

    return v
  })
}

module.exports = {
  transform,
}
