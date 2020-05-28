const operators = [ 'add' ];
const values = ['zero', 'one'];

module.exports = class Calcalutor {

  constructor() {
    this._foo = undefined;
    this.define_method();
  }

  /* 
  * Goal is to mimic the define_method function in Ruby to create an array of functions
  * This function loops through the arrays of acceptable function names
  * and assign them the same process
  */
  define_method () {
    this['new'] = this.bypass;
    operators.forEach(operator => this[operator] = this.process);
    values.forEach(value => this[value] = this.process);
  }

  /*
  * Evaluate each call through the fluent syntax to assess 
  */
  process() {
    return (!this._foo ? this.setFoo() : this._foo);
  }
  
  bypass() {
    return this
  }

  setFoo() {
    this._foo = 'bar';
    return this;
  }

}