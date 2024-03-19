/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */
//! https://www.w3schools.com/js/js_hoisting.asp  !!!

const a = 5
const b = 10
//! console.log(c) - undefined! WITH VAR
if (b > a) {
  // var c = 2
  let c = 2
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  console.log(c, 'inside')
  // 17
}

console.log(c, 'outside')
// Uncaught ReferenceError: c is not defined

//! https://www.w3schools.com/js/js_hoisting.asp  !!!
