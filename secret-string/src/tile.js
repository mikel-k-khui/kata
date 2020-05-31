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
      const notString = new TypeError('Incorrect type for new link')
      throw notString
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
    if (position !== -1) {
      const currentLinks = [...this.links]
      this.links = currentLinks
        .slice(0, position)
        .concat(currentLinks.slice(position + 1))
    } else {
      console.log(link, ' cannot be found in links array', this)
    }
  }
}
