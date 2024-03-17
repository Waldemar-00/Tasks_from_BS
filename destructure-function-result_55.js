/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */

let min, max
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
function minmax(...rest) {
  min = Math.min(...rest)
  max = Math.max(...rest)
  return [min, max]
}
console.log(minmax(5, 34)) // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
console.log(minmax(18, 103)) // 18, 103
console.log(minmax(18, 23, 103, 70, 80, 25))
