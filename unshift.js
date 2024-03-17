const array = []
array.unshift('Hi', 100)
const length = array.unshift(100)
console.log(array, length)

const object = {
  key1: 'a',
  key2: 'b',
  key3: 'c',
  key4: 'd',
}
Object.keys(object).forEach((key) => {
  if (key === 'key1' || key === 'key3') {
    console.log(object[key])
  }
})
