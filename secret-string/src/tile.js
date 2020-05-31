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
 * Tile class is responsible for a tile's creation and CUD of links tile letters
 */
module.exports = class Tile {
  constructor(letter, letterAfter = undefined) {
    this._letter = letter
    this._links = Object.is(letterAfter, undefined) ? [] : [letterAfter]
  }

  get letter() {
    return this._letter
  }

  get links() {
    return this._links
  }

  set links(newLinks) {
    if (Array.isArray(newLinks)) {
      this._links = newLinks
    } else {
      throw new TypeError('Incorrect type for tiles')
    }
  }

  addLink(newLink) {
    // cannot add self as link
    if (this.letter === newLink) {
      console.error('Cannot add self as link')
    } else if (typeof newLink !== 'string') {
      console.log('what is casugin newLink type error?', newLink)
      throw new TypeError('Incorrect type for new link')
    } else if (!this.linksTo({ letter: newLink })) {
      this.links = this.links.concat(newLink)
    }
  }

  copyLinks(newLinks) {
    this.links = newLinks
  }

  hasLinks() {
    return this.links.length > 0
  }

  linksTo(tile) {
    return this.links.includes(tile.letter)
  }

  removeLink(link) {
    const position = this.links.indexOf(link)
    console.assert(
      position !== -1,
      `${link} cannot be found in links array ${this.links}`
    )

    if (position !== -1) {
      const currentLinks = [...this.links]
      this.links = currentLinks
        .slice(0, position)
        .concat(currentLinks.slice(position + 1))
    }
  }
}
