const Tile = require('../src/tile')

module.exports = class Decoder {
  constructor(letter) {
    this._tiles = []
  }

  get tiles() {
    return this._tiles
  }

  set tiles(newTiles) {
    this._tiles = newTiles
  }

  decodeTriplet(hint) {
    if (!this.isCorrectTriplet(hint)) {
      throw new TypeError('Triplet not in correct forma')
    }

    const [head, middle, end] = hint
    this.upsertTile(head, middle)
    this.upsertTile(middle, end)
    this.upsertTile(end)
  }

  // returns the tile with no links
  getNullTile() {
    return this.tiles.find((tile) => !tile.hasLinks())
  }

  // letter exists as a tile
  getTile(letter) {
    return this.tiles.find((tile) => letter === tile.letter)
  }

  // check each triplet hint is correct
  isCorrectTriplet(hint) {
    const isString = (letter) => typeof letter === 'string'
    return hint.length === 3 && Array.isArray(hint) && hint.every(isString)
  }

  // no tile exists
  isEmpty() {
    return this.tiles.length === 0
  }

  removeTile(tile) {
    console.log(tile)
  }

  revealSecret() {
    console.log('reveal secrets')
  }

  upsertTile(letter, letterAfter) {
    const existingTile = this.getTile(letter)
    if (!existingTile) {
      const newTile = new Tile(letter, letterAfter)
      this.tiles = this.tiles.concat(newTile)
    } else {
      existingTile.addLink(letterAfter)
    }
  }
}
