/**
 * Use directed graph to create
 */

module.exports = class Tile {
  constructor(letter) {
    this._letter = letter
    this._to = []
  }

  get letter() {
    return this._letter
  }

  get to() {
    return this._to
  }

  addTo(tile) {
    if (!this.pointsTo(tile.letter)) {
      this._to = this._to.concat(tile.letter)
    }
  }

  removeTo(tile) {
    const position = this.to.indexOf(tile.letter)
    if (position !== -1) {
      const currentTo = this.to
      this._to = currentTo
        .slice(0, position)
        .concat(currentTo.slice(position + 1))
    } else {
      console.error(tile, ' cannot be found in to array')
    }
  }

  pointsTo(tile) {
    return this.to.includes(tile.letter)
  }

  isEmpty() {
    return this._to.length === 0
  }
}
