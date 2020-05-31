const Tile = require('../src/tile')

/**
 * Goal is to take in hints in order triplets letters then reveal the secret
 *
 * The secret is revealed by apply directed graph to work backwards:
 * - loop through all hints to create array of tiles.
 * - tiles contains letter and linked tiles by order of appearance.
 * - It starts with the tile (think scrabble) with no linked tiles.
 * - Append it to the message like a Queue (i.e. FIFO).
 * - Remove the tile and tile's letter from remaining tiles' links.
 * - complete this until no more tile is left
 *
 * Basic structure is:
 * tiles - collection of tile
 * tile class - letter of the tile, any tiles linked (i.e. appear after) it
 *
 * Decoder class deals with managing the tiles' CUD and reveal logic
 */
module.exports = class Decoder {
  constructor(letter) {
    this._tiles = []
  }

  get tiles() {
    return this._tiles
  }

  set tiles(newTiles) {
    if (Array.isArray(newTiles)) {
      this._tiles = newTiles
    } else {
      throw new TypeError('Incorrect type for tiles')
    }
  }

  decodeSecret(hints) {
    let currentHint
    try {
      hints.forEach((hint) => {
        currentHint = hint
        this.decodeTriplet(hint)
      })
    } catch (err) {
      console.error(
        this.tiles.map((t) => `${t.letter}->${t.links}`) +
          '\n' +
          currentHint +
          ' >> ' +
          err.name +
          ': ' +
          err.message
      )
      return false
    }
    return true
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

  // make a new copy of the links array
  perserveTiles(tiles) {
    return tiles.map((tile) => {
      const newTile = new Tile(tile.letter)
      newTile.copyLinks(tile.links)
      return newTile
    })
  }

  // remove a tile from given tiles
  // and remove letter in remaining tile's links
  removeTile(tiles, targetTile) {
    let position
    tiles.forEach((tile, index) => {
      if (tile.letter === targetTile.letter) {
        position = index
      }
    })

    console.assert(
      !Object.is(position, undefined),
      `${targetTile.letter} is not found in tiles ${tiles.map(
        (tile) => tile.letter
      )}`
    )

    if (!Object.is(position, undefined)) {
      const currentTiles = [...tiles]

      // update Tiles array and all tile
      this.tiles = currentTiles
        .slice(0, position)
        .concat(currentTiles.slice(position + 1))

      this.tiles.forEach(
        (tile) => tile.linksTo(targetTile) && tile.removeLink(targetTile.letter)
      )
    }
  }

  // display the secret message with option to perserve the message
  revealSecret(perserve = true) {
    let currentTiles = []
    if (perserve === true) {
      currentTiles = this.perserveTiles(this.tiles)
    }

    const message = []

    while (!this.isEmpty()) {
      const nullTile = this.getNullTile()
      message.unshift(nullTile.letter)
      this.removeTile(this.tiles, nullTile)
    }

    if (perserve === true) {
      this.tiles = [...currentTiles]
    }

    return message.join('')
  }

  upsertTile(letter, letterAfter = undefined) {
    const existingTile = this.getTile(letter)
    if (!existingTile) {
      const newTile = new Tile(letter, letterAfter)
      this.tiles = this.tiles.concat(newTile)
    } else if (!Object.is(letterAfter, undefined)) {
      existingTile.addLink(letterAfter)
    }
  }
}
