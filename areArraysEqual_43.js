const a1 = [1, 2, 3, 4, 5]
const a2 = [1, 2, 3, 4]
const a3 = [1, 2, 3, 4, 5, 6, undefined]
const a4 = [1, 2, 3, 4, 5]
const a5 = [7, 4, 3, 2, 5]

function areArraysEqual(a, b) {
  if (a.length !== b.length) return false
  return a.every((el, i) => el === b[i])
}

console.log(areArraysEqual(a1, a2))
console.log(areArraysEqual(a1, a3))
console.log(areArraysEqual(a1, a4))
console.log(areArraysEqual(a1, a5))
