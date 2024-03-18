/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */
/*
const array = [ 1, 2, 3 ]
class CustomArray extends Array {
  constructor(array) {
    super()
    this.arr = array
  }
  customPush(newElement) {
    this.arr[this.arr.length] = newElement
    console.log(`Новый элемент "${newElement}" был только что добавлен в массив`)
    return this.arr
  }
}
const customArray1 = new CustomArray(array)
console.log(customArray1.customPush('abc'))
*/
const array = [ 1, 2, 3 ]
class CustomArray extends Array {
  customPush(newElement) {
    //console.log(this, 'THIS')
    this[this.length] = newElement
    console.log(`Новый элемент "${newElement}" был только что добавлен в массив`)
    return this
  }
}
const customArray1 = new CustomArray(...array)
console.log(customArray1.customPush('abc'))