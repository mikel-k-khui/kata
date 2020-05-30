const Tile = require('../src/tile')

// describe the behaviours of the Calc class
describe('create Tile class', () => {
  // test whether you can create the class
  test('class exists and was called', () => {
    const tile = new Tile('a')
    expect(tile.letter).toEqual('a')
    expect(tile.to.length).toEqual(0)
  })

  // test whether you can call a method
  test('each methods exists and returns appropriate type or value', () => {
    const tile = new Tile('a')
    expect(tile.isEmpty()).toEqual(true)

    // add new directed to tile
    const testTile = new Tile('b')
    tile.addTo(testTile)
    expect(tile.pointsTo(testTile)).toEqual(true)
    expect(tile.to).toEqual(['b'])

    // remove tile to directed
    tile.removeTo(testTile)
    expect(tile.pointsTo(testTile)).toEqual(false)
    expect(tile.isEmpty()).toEqual(true)
    expect(tile.to).toEqual([])
  })

  // test input errors
  test('incorrect inputs returns appropriate error', () => {
    const tile = new Tile('a')
    expect(() => tile.randomFunction()).toThrow(TypeError)
    expect(tile.isEmpty()).toEqual(true)

    // add new letter to tile
    expect(() => tile.addTo('a')).toThrow(TypeError)

    const testTile = new Tile('b')
    tile.addTo(testTile)
    expect(tile.pointsTo('a')).toEqual(false)
  })

  // test console error outputs
  it("should return console error when tile's letter not found", () => {
    const spy = jest.spyOn(console, 'error')
    const tile = new Tile('a')
    const testTile = new Tile('b')
    const incorrectTile = new Tile('c')

    // cannot remove tile from to array
    tile.addTo(testTile)
    expect(tile.removeTo('b')).toBe(undefined)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(tile.removeTo(incorrectTile)).toBe(undefined)
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
