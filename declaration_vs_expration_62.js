/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */
//Function can be called before declaration
console.log(firstFunction(1, 3))

function firstFunction(a, b) {
  return a + b
}

console.log(firstFunction)
//We can assign a new value
firstFunction = 'ABC'
console.log(firstFunction)

//Cannot access before initialization
const secondFunction = function (a, b) {
  return a + b
}
console.log(secondFunction(5, 2))
