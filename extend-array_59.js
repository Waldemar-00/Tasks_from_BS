/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */
// class ExtendedArray extends Array {
//   constructor(arr) {
//     super(arr)
//     this.arr = arr
//   }
//   sum(arr) {
//     return arr.reduce((acc, current) => {
//       if (typeof current === 'number') return acc + current
//       return acc
//     })
//   }
//   onlyNumbers(arr) {
//     return arr.filter((item) => typeof item === 'number')
//   }
// }
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arr2 = [1, 2, true, 5, undefined, null, 'abc']

// console.log(new ExtendedArray().sum(arr1))
// console.log(new ExtendedArray().sum(arr2))
// console.log(new ExtendedArray().onlyNumbers(arr2))
// console.log(new ExtendedArray().onlyNumbers(arr1))

// class ExtendedArray extends Array {
//   constructor(arr) {
//     super(arr)
//     this.arr = arr
//   }
//   sum() {
//     return this.arr.reduce((acc, current) => {
//       if (typeof current === 'number') return acc + current
//       return acc
//     }, 0)
//   }
//   onlyNumbers() {
//     return this.arr.filter((item) => typeof item === 'number')
//   }
// }
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arr2 = [1, 2, true, 5, undefined, null, 'abc']

// console.log(new ExtendedArray(arr1).sum())
// console.log(new ExtendedArray(arr2).sum())
// console.log(new ExtendedArray(arr2).onlyNumbers())
// console.log(new ExtendedArray(arr1).onlyNumbers())
// const test1 = new ExtendedArray(arr1)
// console.log(test1.hasOwnProperty('map'))
// test1.map((el) => console.log(el))
// test1.forEach((el) => console.log(el))

class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, current) => {
      if (typeof current === 'number') return acc + current
      return acc
    }, 0)
  }
  onlyNumbers() {
    return this.filter((item) => typeof item === 'number')
  }
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [1, 2, true, 5, undefined, null, 'abc']

console.log(new ExtendedArray(...arr1).sum())
console.log(new ExtendedArray(...arr2).sum())
console.log(new ExtendedArray(...arr2).onlyNumbers())
console.log(new ExtendedArray(...arr1).onlyNumbers())
