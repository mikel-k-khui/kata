const Calcalutor = require('../src/Calc')

// describe the behaviours of the Calc class
describe('validate logic and edge cases', () => {
  // test standard sample case
  test('standard test provided', () => {
    const Calc = new Calcalutor()
    expect(Calc.new.one().plus.two()).toBe(3)
    expect(Calc.new.five().minus.six()).toBe(-1)
    expect(Calc.new.seven().times.two()).toBe(14)
    expect(Calc.new.nine().divided_by.three()).toBe(3)
  })

  // test edge cases
  it('should return Typeerror, undefined, or Calculator object without first digit or operator', () => {
    const Calc = new Calcalutor()
    expect(() => Calc.new.plus.eight()).toThrow(TypeError)
    expect(typeof Calc.new.five()).toBe('object')
    expect(Calc.new.eight().five).toBe(undefined)
  })

  // test edge cases
  it('should return undefined if dividend or divisor are zero', () => {
    const Calc = new Calcalutor()
    expect(Calc.new.zero().divided_by.zero()).toBe(undefined)
    expect(Calc.new.four().divided_by.zero()).toBe(undefined)
    expect(Calc.new.zero().divided_by.four()).toBe(undefined)
  })

  // test console output
  it('should return specific errors to console for edge cases', () => {
    const spy = jest.spyOn(console, 'error')
    const Calc = new Calcalutor()
    expect(Calc.new.zero().divided_by.zero()).toBe(undefined)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(Calc.plus.eight()).toBe(undefined)
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
