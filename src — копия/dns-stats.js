const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let setDomains = domains.map((e) => e.split(".").reverse().join("."))
  let obj = {}

  for (let i = 0; i < setDomains.length; i++) {
    for (let j = 0; j < setDomains[i].split(".").length; j++) {
      let k = 0
      let name = setDomains[i]
        .split(".")
        .filter((e) => j >= k++)
        .join(".")

      name = "." + name
      obj[name] = 0

      for (let p = 0; p < setDomains.length; p++) {
        let m = 0
        let name1 = setDomains[p]
          .split(".")
          .filter((e) => j >= m++)
          .join(".")
        name1 = "." + name1
        if (name === name1) obj[name] += 1
      }
    }
  }

  return obj
}

module.exports = {
  getDNSStats,
}
