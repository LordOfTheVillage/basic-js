const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  members = members.filter((e) => {
    return typeof e === "string"
  })
  if (members.length === 0) return false
  let name = ""
  members.forEach((e) => {
    if (e.trim() !== "") name += e.trim()[0]
  })
  return name.toUpperCase().split("").sort().join("")
}

module.exports = {
  createDreamTeam,
}
