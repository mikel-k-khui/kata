const Tile = require('../src/tile')

// describe the behaviours of the Calc class
describe('create Tile class', () => {
  // test whether you can create the class
  test('class exists and was called', () => {
    const tile = new Tile('a')
    expect(tile.letter).toEqual('a')
    expect(tile.links.length).toEqual(0)
  })

  // test whether you can call a method
  test('each methods exists and returns appropriate type or value', () => {
    let tile = new Tile('a')
    expect(tile.hasLinks()).toEqual(false)

    // add new directed to tile
    const testTile = new Tile('b')
    tile.addLink('b')
    expect(tile.linksTo(testTile)).toEqual(true)
    expect(tile.links).toEqual(['b'])

    // remove tile to directed
    tile.removeLink('b')
    expect(tile.linksTo(testTile)).toEqual(false)
    expect(tile.hasLinks()).toEqual(false)
    expect(tile.links).toEqual([])

    tile = new Tile('a', 'b')
    expect(tile.linksTo({ letter: 'b' })).toEqual(true)
    expect(tile.links).toEqual(['b'])
  })

  // test input errors
  test('incorrect inputs returns appropriate error', () => {
    const tile = new Tile('a')
    expect(() => tile.randomFunction()).toThrow(TypeError)
    expect(tile.hasLinks()).toEqual(false)

    // add new letter to tile
    const testTile = new Tile('b')
    expect(() => tile.addLink(testTile)).toThrow(TypeError)
    tile.addLink(testTile.letter)
    expect(tile.linksTo({ letter: 'c' })).toEqual(false)
  })

  // test console error outputs
  it("should return console error when tile's letter not found", () => {
    const spy = jest.spyOn(console, 'assert')
    const tile = new Tile('a', 'b')

    // cannot remove tile from to array
    expect(tile.removeLink('c')).toBe(undefined)
    expect(spy).toHaveBeenCalledTimes(1)

    const incorrectTile = new Tile('c')
    expect(tile.removeLink(incorrectTile)).toBe(undefined)
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
