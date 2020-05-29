// define constants
const operators = {
  'plus': (x, y) => x + y,
  'minus': (x, y) => x - y,
  'times': (x, y) => Math.round(x * y),
  'dividedBy': (x, y) => {
    const quotient = (a, b) => Math.floor(a / b)
    return x > 0 && y > 0 ? quotient(x, y) : undefined
  },
}

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

module.exports = class Calcalutor {
  constructor() {
    this.defineMethods()
  }

  /**
   * Goal is to mimic the define_method function in Ruby to create an array of functions
   * This function loops through the arrays of acceptable function names
   * and assign them the same process
   */
  defineMethods() {
    this['new'] = () => this

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

          return this.firstDigit !== undefined
            ? operatorFunction(this.firstDigit, index)
            : missingFirstDigit(this.firstDigit, index)
        }
      })
    })

    digits.forEach((digit, index) => {
      this[digit] = () => {
        this.firstDigit = index
        return this
      }
    })
  }
}
