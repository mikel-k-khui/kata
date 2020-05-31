# Kata (4ryu): Secret String

[*—your secrets are never safe*]

## Summary

The Kata is inspired by the one of kata codewars: There is a secret string which is unknown to you. Given a collection of random triplets from the
string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere
before the next in the given string. "whi" is a triplet for the string "whatisup". As a simplification, you may assume:

- **no letter occurs more than once** in the secret string.
- nothing about the triplets given to you other than that they are valid triplets.
- they contain sufficient information to deduce the original string.

In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

secret_1 = "whatisup"

triplets_1 = [
['t','u','p'],
['w','h','i'],
['t','s','u'],
['a','t','s'],
['h','a','p'],
['t','i','s'],
['w','h','s']
]

## Deliverables

[Private Repository page](https://github.com/mikel-k-khui/kata/tree/master/secret-string)

[Project Plan](https://github.com/mikel-k-khui/kata/projects/2)

### Key Learning:

- Further apply CS/math strucutre theory to problem and data structure to simplify solution
- Apply separation of concerns and OOP

## Project Setup

### Dependencies

none

### DevDependencies

- eslint
- prettier
- husky

### Installation

1. Download zipped file or clone this private repo.

2. Navigate to the fluent-calculator folder `cd secret-string`.

3. Install node dependencies: `npm install`.

4. Run the jest test: `npm run test` from fluent-calculator folder or `npm run secret-string-test` from root folder.

5. Run the console test: `node src/index.js` from fluent-calculator folder or `npm run secret-string` from root folder.

## Testing

- Developed with TDD
- Unit testing with Jest: get/set methods, unit test, and integrate unit tests for interaction between classes.

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
