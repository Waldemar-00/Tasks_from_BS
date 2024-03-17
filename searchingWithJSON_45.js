function isElementInData(data, lookup) {
  const jsonData = JSON.stringify(data)
  if(typeof lookup !== 'object')
  return jsonData.includes(lookup)
  //if(Array.isArray(lookup))
  //return lookup.filter(el => 
  //jsonData.includes(el))
  return Object.values(lookup).filter(el => jsonData.includes(el))
}
console.log(isElementInData('string odndn', 'string'))
console.log(isElementInData(548, 4))
console.log(isElementInData(['string', 'odndn'], 'string'))
console.log(isElementInData({a: 'string', b: 'odndn'}, 'string'))
console.log(isElementInData(['odndn', 'string'], ['string', 'odndn', 'dhdhddb']))
console.log(isElementInData('string object, lookup', {a: 'object', b: 'odndn', c: 'lookup'}))
const a1 = [
  [1,2,3,4,5],
  [1,2,3,4], 
  [1,2,3,4,5,6,undefined], 
  [1,2,3,4,5],[7,4,3,2,5],
  ]
console.log(isElementInData(a1, {a: [1,2,3,4,5],b: [1,2,3,4,5, 6, undefined], c: 'lookup'}))
const b2 = {
  a: [1,2,3,4,5],
  b: [1,2,3,4], 
  c: [1,2,3,4,5,6,undefined], 
  f: [7,4,3,2,5],
}
console.log(isElementInData(b2, 
{
a: [1,2,3,4,5],
b: [1,2,3,4,5,6,undefined], 
c: 'lookup',
}))


