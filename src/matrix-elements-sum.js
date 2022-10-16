const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length === 1) return matrix[0][0]
  return matrix.reduce((count, row, i) => {
    if (row.length === 1) {
      if (matrix[i - 1][0] !== 0)
        return (typeof count === "object" ? count[0] : count) + row[0]
      else return (typeof count === "object" ? count[0] : count) + 0
    }
    if (i - 1 == 0) {
      count = [...count].reduce((sum, elem) => sum + elem)
    }
    return (
      count +
      row.reduce((bill, e, j) => {
        if (j == 1 && matrix[i - 1][j - 1] === 0) {
          bill = 0
        }
        if (matrix[i - 1][j] !== 0) {
          return bill + e
        }
        return bill + 0
      })
    )
  })
}

console.log(getMatrixElementsSum([[0]]))

module.exports = {
  getMatrixElementsSum,
}
