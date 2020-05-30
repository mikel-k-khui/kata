/**
 * Use directed graph links create
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

  addLink(newLink) {
    // cannot add self as link
    if (this.letter === newLink) {
      console.error('Cannot add self as link')
    } else if (typeof newLink !== 'string') {
      const notString = new TypeError('Incorrect type for new link')
      throw notString
    } else if (!this.linksTo({ letter: newLink })) {
      this._links = this.links.concat(newLink)
    }
  }

  removeLink(link) {
    const position = this.links.indexOf(link)
    if (position !== -1) {
      const currentTo = this.links
      this._links = currentTo
        .slice(0, position)
        .concat(currentTo.slice(position + 1))
    } else {
      console.error(link, ' cannot be found in links array')
    }
  }

  linksTo(tile) {
    return this.links.includes(tile.letter)
  }

  hasLinks() {
    return this._links.length > 0
  }
}
