const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === true) str = "true"
  if (str === false) str = "false"
  if (str === null) str = "null"
  if (options.addition === true) options.addition = "true"
  if (options.addition === false) options.addition = "false"
  if (options) {
    var properties = {
      repeatTimes: options.repeatTimes !== undefined ? options.repeatTimes : 1,
      separator: options.separator !== undefined ? options.separator : "+",
      addition: options.addition !== undefined ? options.addition : "",
      additionRepeatTimes:
        options.additionRepeatTimes !== undefined
          ? options.additionRepeatTimes
          : 1,
      additionSeparator:
        options.additionSeparator !== undefined
          ? options.additionSeparator
          : "|",
    }
  }
  let result = ""

  for (let i = 0; i < properties.repeatTimes; i++) {
    let createdString = str
    for (let j = 0; j < properties.additionRepeatTimes; j++) {
      if (j == 0) createdString += properties.addition
      else createdString += properties.additionSeparator + properties.addition
    }
    if (i === 0) result += createdString
    else result += properties.separator + createdString
  }

  return result
}

module.exports = {
  repeater,
}
