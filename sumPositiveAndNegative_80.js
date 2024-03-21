/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

//const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь
/*function sumPositiveNegative(arr) {
  let positive = 0
  let negative = 0
  arr.forEach((num) => {
    if(num >= 0) positive += num
    if(num <= 0) negative += num
  })
  return {
    positive,
    negative
  }
}*/
const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]
function sumPositiveNegative(arr) {
  return arr.reduce(
    (returnedObj, num) => {
      return num > 0
        ? {
            negative: returnedObj.negative,
            positive: returnedObj.positive + num,
          }
        : {
            negative: returnedObj.negative + num,
            positive: returnedObj.positive,
          }
    },
    { positive: 0, negative: 0 },
  )
}
const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
