const Calcalutor = require('../src/Calc')

// describe the behaviours of the Calc class
describe('create Calc class', () => {
  // test whether you can create the class
  test('class exists and was called', () => {
    const Calc = new Calcalutor()
    expect(Calc.new).toBeInstanceOf(Calcalutor)
  })

  // test methods that do not existss
  test('methods do not exist and returns undefined', () => {
    const Calc = new Calcalutor()
    expect(Calc.twelve).toBeUndefined()
    expect(Calc.new.twelve).toBeUndefined()
    expect(Calc.new.five.add).toBeUndefined()
    expect(Calc.new.five.plus.twelve).toBeUndefined()
  })

  // test whether you can call a method
  test('each methods exists and returns appropriate type', () => {
    const Calc = new Calcalutor()
    expect(Calc.new.five).toBeInstanceOf(Calcalutor)
    expect(Calc.new.five.plus).toHaveProperty('zero')
    expect(typeof Calc.new.five.plus.five).toBe('number')
  })
})
