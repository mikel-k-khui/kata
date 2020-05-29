const Calcalutor = require('../src/Calc')

// describe the behaviours of the Calc class
describe('validate logic and edge cases', () => {
  // test standard sample case
  test('standard test provided', () => {
    const Calc = new Calcalutor()
    expect(Calc.new().one().plus.two()).toBe(3)
    expect(Calc.new().five().minus.six()).toBe(-1)
    expect(Calc.new().seven().times.two()).toBe(14)
    expect(Calc.new().nine().dividedBy.three()).toBe(3)
  })

  // test edge cases
  it('should return undefined, or this object', () => {
    const Calc = new Calcalutor()
    expect(Calc.new().plus.eight()).toBe(undefined)
    expect(typeof Calc.new().five()).toBe('object')
  })

  // test edge cases
  it('should be undefined if dividend or divisor are zero', () => {
    const Calc = new Calcalutor()
    expect(Calc.new().zero().dividedBy.zero()).toBe(undefined)
    expect(Calc.new().four().dividedBy.zero()).toBe(undefined)
    expect(Calc.new().zero().dividedBy.four()).toBe(undefined)
  })
})
