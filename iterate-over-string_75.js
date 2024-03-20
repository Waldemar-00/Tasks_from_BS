/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Tooday is the best day of my lifee'

// Напишите код здесь
// function counterOfWowels() {
//   vowelCount = [...str].filter(
//     (sign) => sign === 'a' || sign === 'e' || sign === 'i' || sign === 'o' || sign === 'u',
//   ).length
//   return vowelCount
// }
// counterOfWowels()

str.split('').forEach((char) => {
  if (vowels.includes(char)) vowelCount++
})
console.log(vowelCount)
// 9
