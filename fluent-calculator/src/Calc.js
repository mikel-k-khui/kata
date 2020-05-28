// define constants
const operators = {
    plus: (x, y) => Math.round(x + y),
    minus: (x, y) => Math.round(x - y),
}

const values = ['zero', 'one']

module.exports = class Calcalutor {
    /**
     * Adds two numbers together.
     * @param {int} num1 The first number.
     * @param {int} num2 The second number.
     */
    constructor() {
        this._foo = undefined
        this.defineMethod()
    }

    /*
     * Goal is to mimic the define_method function in Ruby to create an array of functions
     * This function loops through the arrays of acceptable function names
     * and assign them the same process
     */
    static defineMethod() {
        this['new'] = this.bypass
        operators.forEach((operator) => (this[operator] = this.process))
        values.forEach((value) => (this[value] = this.process))
    }

    /*
     * Evaluate each call through the fluent syntax to assess
     */
    process() {
        return !this._foo ? this.setFoo() : this._foo
    }

    bypass() {
        return this
    }

    setFoo() {
        this._foo = 'bar'
        return this
    }
}
