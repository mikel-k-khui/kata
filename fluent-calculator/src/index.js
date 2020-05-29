const Calcalutor = require('../src/Calc')

// describe the behaviours of the Calc class
console.log('standard test provided:')
const Calc = new Calcalutor()
console.log(`Calc.new.one.plus.two # should return ${Calc.new.one.plus.two}`)
console.log(
  `Calc.new.five.minus.six # should return ${Calc.new.five.minus.six}`
)
console.log(
  `Calc.new.seven.times.two # should return ${Calc.new.seven.times.two}`
)
console.log(
  `Calc.new.nine.divided_by.three # should return ${Calc.new.nine.divided_by.three}`
)
