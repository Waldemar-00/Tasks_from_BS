function pushElementIfItUnique(arr, el) {
  if(arr.includes(el))
  return console.log(`Already have – ${el}`)
  arr.push(el)
}
const array1 = [1,2,3,'abc']
pushElementIfItUnique(array1, 'abc')
console.log(array1)
pushElementIfItUnique(array1, 'CSS')
console.log(array1)