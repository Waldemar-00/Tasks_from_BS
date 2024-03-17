const numbers1 = [1, 2, 3, 4, 5, 6, 7, 4.5]
const numbers2 = [111, 33, 3, 4, 10, 6, 7]
const numbers3 = [1, 22, 3, 4, 5, 456, 7]
const numbers4 = [1, 2, 3, 'abc', 5, 17, 7]

function medianValue(...numbers) {
  try {
    if (numbers.some((num) => typeof num !== 'number')) {
      throw new Error('Array has a not number value!')
    }
    return (
      numbers.reduce((acc, value) => {
        return acc + value
      }) / numbers.length
    ).toFixed(2)
  } catch (error) {
    console.error(error)
  }
}

console.log(medianValue(...numbers1, ...numbers2, ...numbers3, ...numbers4))
console.log(medianValue(...numbers1))
console.log(medianValue(...numbers1, ...numbers2))
console.log(medianValue(...numbers1, ...numbers2, ...numbers3))
