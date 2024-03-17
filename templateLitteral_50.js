function templateLitteral(num) {
  return `Number ${num}.\nThis is number ${
    num < 10 ? 'less' : 'equal or more'
  }  than 10.\nSquare from this number ${Math.sqrt(num)}`
}

console.log(templateLitteral(9))
console.log(templateLitteral(25))
console.log(templateLitteral(81))
