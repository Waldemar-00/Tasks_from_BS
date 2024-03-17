const array = ['abc', 'def', 'art']

function searchElement(array, search) {
  //return array.some(el => el === search)
  return array.includes(search)
}
console.log(searchElement(array, 'art'))
console.log(searchElement(array, 'jdjdj'))
