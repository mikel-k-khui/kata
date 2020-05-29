const Calcalutor = require('../src/Calc')

// describe the behaviours of the Calc class
describe('create Calc class', () => {
  // test whether you can create the class
  test('class exists and was called', () => {
    const Calc = new Calcalutor()
    expect(typeof Calc.plus).toBe('object')
  })

  // test methods that do not existss
  test('methods do not exist and returns undefined', () => {
    const Calc = new Calcalutor()
    expect(typeof Calc.twelve).toBe('undefined')
    expect(typeof Calc.new.twelve).toBe('undefined')
    expect(typeof Calc.new.five.add).toBe('undefined')
    expect(typeof Calc.new.five.plus.twelve).toBe('undefined')
  })

  // test whether you can call a method
  test('each methods exists and returns appropriate type', () => {
    const Calc = new Calcalutor()
    expect(typeof Calc.new).toBe('object')
    expect(typeof Calc.new.five).toBe('object')
    expect(typeof Calc.new.five.plus).toBe('object')
    expect(typeof Calc.new.five.plus.five).toBe('number')
  })
})
