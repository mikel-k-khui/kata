// define constants
const digits = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]
const operators = {
  'plus': (x, y) => x + y,
  'minus': (x, y) => x - y,
  'times': (x, y) => Math.round(x * y),
  'dividedBy': (x, y) => {
    const quotient = (a, b) => Math.floor(a / b)
    const divisionWithZero = () => {
      console.error(`Dividend ${x} or divisor ${y} is zero`)
      return undefined
    }
    return x > 0 && y > 0 ? quotient(x, y) : divisionWithZero()
  },
}

module.exports = class Calcalutor {
  constructor() {
    this.defineMethods()
  }

  /**
   * Goal is to mimic the define_method function in Ruby to create an array of functions
   * This function loops through the arrays of digits and operators to create objects
   * then assigns each digits a function within the operator's digit
   *
   * Calculator is cleared for each operation to ensure independent calculation
   */
  defineMethods() {
    Object.entries(operators).forEach(([operator, operatorFunction]) => {
      this[operator] = {}

      digits.forEach((digit, index) => {
        this[operator][digit] = () => {
          const missingFirstDigit = (firstDigit, index) => {
            console.error(
              `Term, multipler, or dividend is ${firstDigit} to ${operator} ${index}`
            )
            return undefined
          }
          const action =
            this.firstDigit !== undefined
              ? operatorFunction(this.firstDigit, index)
              : missingFirstDigit(this.firstDigit, index)
          this.resetCalculator()

          return action
        }
      })
    })

    this.new = {}
    digits.forEach((digit, index) => {
      this.new[digit] = () => {
        this.firstDigit = index
        return this
      }
    })
  }

  resetCalculator() {
    delete this.firstDigit
  }
}
