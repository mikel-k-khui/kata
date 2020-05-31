// expected to return whatisup
console.log(
  recoverSecret([
    ['w', 'h', 's'],
    ['t', 'i', 's'],
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
  ])
)

// wicked
console.log(
  recoverSecret([
    ['w', 'i', 'c'],
    ['k', 'e', 'd'],
    ['w', 'c', 'e'],
    ['i', 'k', 'd'],
    ['i', 'c', 'k'],
  ])
)
