const array_1 = [1, 2, 3, 3, 4, 5]
const array_2 = [5, 4, 4, 3, 2, 1]
const array_3 = [5, 4, NaN, 3, 2, 1]
const array_4 = [5, 4, 7, 3, 2, 1]
const array_5 = [5, 4, 'abc', 3, 2, 1]
const array_6 = [5, 4, '', 3, 2, 1]
const array_7 = [5, 4, undefined, 3, 2, 1]

function infoArray(array) {
  if (array.some((elem) => typeof elem !== 'number' || elem !== elem)) return 'Не все значения числа'
  if (array.every((el, i, arr) => (i ? el >= arr[i - 1] : true))) return 'По возрастанию'
  if (array.every((el, i, arr) => (i ? el <= arr[i - 1] : true))) return 'По убыванию'
  return 'Не сортированный'
}

console.log(infoArray(array_1))
console.log(infoArray(array_2))
console.log(infoArray(array_3))
console.log(infoArray(array_4))
console.log(infoArray(array_5))
console.log(infoArray(array_6))
console.log(infoArray(array_7))
