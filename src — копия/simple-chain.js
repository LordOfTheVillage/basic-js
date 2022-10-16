const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (typeof value === "function" && value === undefined)
      value = "function () {}"
    this.chain.push("( " + value + " )")
    return this
  },
  removeLink(index) {
    index -= 1
    if (
      typeof index !== "number" ||
      !Number.isInteger(index) ||
      index >= this.chain.length ||
      index < 0
    ) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    } else this.chain.splice(index, 1)

    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    const array = this.chain.join("~~")
    this.chain = []
    return array
  },
}

module.exports = {
  chainMaker,
}
