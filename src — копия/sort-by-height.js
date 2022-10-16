const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = []
  arr = arr
    .filter((e, i) => {
      if (e === -1) indexes.push(i)
      return e !== -1
    })
    .sort((a, b) => a - b)

  indexes.forEach((i) => {
    arr.splice(i, 0, -1)
  })

  return arr
}

module.exports = {
  sortByHeight,
}
