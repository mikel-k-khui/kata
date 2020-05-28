const Calcalutor = require('../src/Calc');

// describe the behaviours of the Calc class
describe('create Calc class', () => {
  
  // test whether you can create the class
  // test('class exists and was called', () => {
  //   const Calc = new Calcalutor();
  //   expect(Calc.foo).toBe(undefined);
  // })

  // test whether you can call a method
  test('methods exists', () => {
    const Calc = new Calcalutor();
    console.log(Object.getOwnPropertyNames(Calc))
    expect(Calc.new().zero().add()).toBe('bar');
  })
  
})