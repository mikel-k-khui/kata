const Decoder = require('../src/decoder')

// expected to return 'whatisup'
const whatIsSecret = [
  ['w', 'h', 's'],
  ['t', 'i', 's'],
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
]

// expected to return 'wicked
const wickedSecret = [
  ['w', 'i', 'c'],
  ['k', 'e', 'd'],
  ['w', 'c', 'e'],
  ['i', 'k', 'd'],
  ['i', 'c', 'k'],
]

const decoder = new Decoder()

// decode a secret and destroy it
decoder.decodeSecret(wickedSecret)
console.log(
  wickedSecret,
  ' secret string is [' + decoder.revealSecret(1) + '] and reset the decoder.'
)
console.log('...decoder is empty ([' + decoder.revealSecret() + ']).')

// decode second secret and keep it
decoder.decodeSecret(whatIsSecret)
console.log(whatIsSecret, ' secret string is [' + decoder.revealSecret() + '].')
console.log(
  "...decoder's secret is kept and it is [" + decoder.revealSecret() + '].'
)
