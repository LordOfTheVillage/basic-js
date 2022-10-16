const { NotImplementedError } = require("../extensions/index.js")

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

function dateSample(data) {
  if (typeof data !== "string" || data == "" || typeof Number(data) != "number")
    return false
  if (
    Number(data) < 1 ||
    Number(data) >= 15 ||
    data <= 0 ||
    isNaN(Number(data))
  )
    return false

  const ln2 = 0.693
  const k = ln2 / HALF_LIFE_PERIOD // 1.20942 * 10e-4
  return Math.ceil(Math.log(MODERN_ACTIVITY / +data) / k)
}

console.log(dateSample("-52892"))

module.exports = {
  dateSample,
}
