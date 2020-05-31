const Decoder = require('../src/decoder')
const Tile = require('../src/tile')

// describe the behaviours of the Calc class
describe('create Decoder class', () => {
  // test whether you can create the class
  test('class exists and was called', () => {
    const decoder = new Decoder()
    expect(decoder.tiles).toEqual([])
  })

  // test whether you can call a method
  test('each methods (exclude, decodeAll) exists and returns appropriate type or value', () => {
    const decoder = new Decoder()
    expect(decoder.isEmpty()).toEqual(true)

    // add new hint to decoder
    decoder.decodeTriplet(['a', 'b', 'c'])
    const testTileA = new Tile('a', 'b')
    const testTileB = new Tile('b', 'c')
    const testTileC = new Tile('c')
    expect(decoder.tiles).toEqual([testTileA, testTileB, testTileC])
    expect(decoder.getNullTile()).toEqual(testTileC)

    // test upsertTile to add new tile and update existing tile
    decoder.decodeTriplet(['a', 'c', 'd'])
    const testTileD = new Tile('d')
    testTileA.addLink(testTileC.letter) // add 'c' to a.links
    testTileC.addLink(testTileD.letter) // add 'd' to c.links
    expect(decoder.tiles).toEqual([testTileA, testTileB, testTileC, testTileD])
    expect(decoder.getNullTile()).toEqual(testTileD)

    // reveal the secret
    expect(decoder.revealSecret()).toBe('abcd')
    expect(decoder.isEmpty()).toEqual(false)
    expect(decoder.tiles).toEqual([testTileA, testTileB, testTileC, testTileD])

    // remove a tile with 1 link
    decoder.removeTile(decoder.tiles, testTileD)
    testTileC.removeLink(testTileD.letter) // remove 'd' from c.links
    expect(decoder.tiles).toEqual([testTileA, testTileB, testTileC])
    expect(decoder.getNullTile()).toEqual(testTileC)

    // remove a tile with 2 links
    decoder.removeTile(decoder.tiles, testTileC)
    testTileA.removeLink(testTileC.letter) // remove 'c' from a.links
    testTileB.removeLink(testTileC.letter) // remove 'c' from b.links
    expect(decoder.tiles).toEqual([testTileA, testTileB])
    expect(decoder.getNullTile()).toEqual(testTileB)

    // reveal and destroy the secret after removal
    expect(decoder.revealSecret(false)).toBe('ab')
    expect(decoder.isEmpty()).toEqual(true)
  })

  // test input errors and messages
  test('incorrect inputs returns appropriate error and/or message', () => {
    const decoder = new Decoder()

    // add incorrect hint to decoder
    expect(() => decoder.decodeTriplet([NaN, 'a'])).toThrow(TypeError)
    expect(decoder.isEmpty()).toEqual(true)

    // update tiles without an array
    expect(() => (decoder.tiles = 'a')).toThrow(TypeError)
    expect(decoder.isEmpty()).toEqual(true)

    // remove non-existent
    decoder.decodeTriplet(['a', 'b', 'c'])
    const testTileD = new Tile('d')
    const spy = jest.spyOn(console, 'assert')
    expect(decoder.removeTile(decoder.tiles, testTileD)).toBe(undefined)
    expect(spy).toHaveBeenCalledTimes(1)
  })

  // test whether you can call a method
  it('should take an array of hints to revreal the message', () => {
    console.log('holding place')
  })
})
