# Kata (4ryu): Fluent Calculator

## Summary

The Kata is inspired by the “Calculating with Functions Kata for JavaScript” on codewars.

The goal is to implement a simple calculator which uses fluent syntax:

- Calc.new.one.plus.two # Should return 3
- Calc.new.five.minus.six # Should return -1
- Calc.new.seven.times.two # Should return 14
- Calc.new.nine.divided_by.three # Should return 3

There are only four operations that are supported (**plus, minus, times, divided_by**) and 10 digits (**zero, one, two, three, four, five, six, seven, eight, nine**).

Each calculation consists of one operation only and will return an integer.

Note: This is not a string parsing problem. The calls above are a chain of methods. Some languages may require parenthesis in method calls. That is OK, but consider a different language what would support the above syntax if possible.

## Deliverables

[Private Repository page](https://github.com/mikel-k-khui/kata/tree/master/fluent-calculator)

[Project Plan](https://github.com/mikel-k-khui/kata/projects/1)

### Key Learning:

- Compare language possibilities and effectiveness to minimize the parenthesis: Ruby vs. Node.js.
- OOP with 2 methods vs. single function with get/set methods (i.e. no parenthesis): separation of concerns, effectiveness, and readability.

## Project Setup

### Dependencies

none

### DevDependencies

- eslint
- prettier
- husky

### Installation

1. Download zipped file or clone this private repo.

2. Install node dependencies: `npm install`.

3. Run the jest test: `npm run test`.
   _Note: root file index.js does not contain any useful code_

## Testing

- Developed with TDD
- Unit testing with Jest: inputs validations, different fluent syntax configurations, expected sample outputs, and expected error.

## Contributing

N/A

## Versioning

- [SemVer](http://semver.org/) for versioning: version 1.0.0.

## Authors

[**Michael Chui**](https://github.com/mikel-k-khui)

## License

This exercise was inspired by exercise sourced from codewars.com under the FreeBSD 2Clause License:
https://www.codewars.com/about/termsofservice
Copyright (c) , All rights reserved. Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions
   and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of
   conditions and the following disclaimer in the documentation and/or other materials provided
   with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. The views and
conclusions contained in the software and documentation are those of the authors and should
not be interpreted as representing official policies, either expressed or implied, of the FreeBSD
Project.
