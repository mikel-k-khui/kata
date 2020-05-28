const Calcalutor = require('../src/Calc')

// describe the behaviours of the Calc class
describe('create Calc class', () => {
  // test whether you can create the class
  test('class exists and was called', () => {
    const Calc = new Calcalutor()
    expect(typeof Calc.plus).toBe('object')
  })

  // test methods that do not exists
  test('methods have the incorrect type and should throw TypeError', () => {
    const Calc = new Calcalutor()
    expect(() => Calc.new().five().plus()).toThrow(TypeError)
    expect(() => Calc.new().five().plus.fifteen()).toThrow(TypeError)
  })

  // test methods that do not exists
  test('methods do not exist and returns undefined', () => {
    const Calc = new Calcalutor()
    expect(typeof Calc.new().elevant).toBe('undefined')
    expect(typeof Calc.new().five().add).toBe('undefined')
    expect(typeof Calc.new().five().plus.fifteen).toBe('undefined')
  })

  // test whether you can call a method
  test('each methods exists and returns appropriate type', () => {
    const Calc = new Calcalutor()
    expect(typeof Calc.new).toBe('function')
    expect(typeof Calc.new()).toBe('object')
    expect(typeof Calc.new().five).toBe('function')
    expect(typeof Calc.new().five()).toBe('object')
    expect(typeof Calc.new().five().plus).toBe('object')
    expect(typeof Calc.new().five().plus.five).toBe('function')
    expect(typeof Calc.new().five().plus.five()).toBe('number')
  })
})
