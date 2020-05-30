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
  'divided_by': (x, y) => {
    const quotient = (a, b) => Math.floor(a / b)
    const divisionWithZero = () => {
      console.error(`Dividend ${x} or divisor ${y} is zero`)
      return undefined
    }
    return x > 0 && y > 0 ? quotient(x, y) : divisionWithZero()
  },
}

/**
 * Goal is to mimic the define_method function in Ruby to create an array of functions
 *
 * Create getter functions for new, operators and digits.  Basic structure is:
 * Calc - class object
 * new - getter function return Calc object
 * <digit> - getter function to update first digit return Calc object
 * <operator> - object of getter functions to pass first digit and value for operator function
 *
 * Calculator is cleared for each operation to ensure independent calculation
 */
module.exports = class Calcalutor {
  constructor(firstDigit = undefined) {
    this._firstDigit = firstDigit
    this.defineNewMethod()
    this.defineDigitMethods()
    this.defineOperatorMethods()
  }

  get firstDigit() {
    return this._firstDigit
  }

  set firstDigit(newDigit) {
    if (!Object.is(this.firstDigit, undefined)) {
      console.error(`Incorrect inputs ${this.firstDigit}`)
      this.resetCalculator()
    } else {
      this._firstDigit = newDigit
    }
  }

  resetCalculator() {
    this._firstDigit = undefined
  }

  // new method also checks if firstDigit is undefined to reset the calculator
  defineNewMethod() {
    Object.defineProperty(this, 'new', {
      get: () => {
        if (!Object.is(this.firstDigit, undefined)) {
          this.resetCalculator()
        }
        return this
      },
    })
  }

  defineDigitMethods() {
    digits.forEach((digit, index) => {
      Object.defineProperty(this, digit, {
        get: () => {
          this.firstDigit = index
          return this
        },
      })
    })
  }

  defineOperatorMethods() {
    Object.entries(operators).forEach(([operator, operatorFunction]) => {
      // set getter function for each digit within operator
      const operatorObject = {}
      digits.forEach((digit, index) => {
        Object.defineProperty(operatorObject, digit, {
          get: () => {
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
          },
        })
      })

      // set getter function to class object
      Object.defineProperty(this, operator, {
        get: () => operatorObject,
      })
    })
  }
}
