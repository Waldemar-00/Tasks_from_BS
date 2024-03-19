//! VAR
// {
//   var name = 'Dillion'
// }
// console.log(name) - 'Dillion'

// if (true) {
//   var name = 'Dillion'
// }
// console.log(name) - 'Dillion'

// function print() {
//   var name = 'Dillion'
// }
// console.log( name ) - <empty string> - all browsers
//   VSC - name is not defined
//! LET
// {
//   let name = 'Dillion'
// }
// console.log(name) - 'Dillion' - <empty string> all browsers
// VSC - name is not defined

// if (true) {
//   let name = 'Dillion'
// }
// console.log( name ) - 'Dillion' - <empty string> all browsers
// VSC - name is not defined

// function print() {
//   let name = 'Dillion'
// }
// console.log( name ) - <empty string> - all browsers
//   VSC - name is not defined
//! CONST
// {
//   const name = 'Dillion'
// }
// console.log(name) - 'Dillion' - <empty string> all browsers
// VSC - name is not defined

// if (true) {
//   const name = 'Dillion'
// }
// console.log( name ) - 'Dillion' - <empty string> all browsers
// VSC - name is not defined

// function print() {
//   const name = 'Dillion'
// }
// console.log( name ) - <empty string> - all browsers
//   VSC - name is not defined
//!CLASS
//const Dog = new Animal('Bingo')
//ReferenceError:
//can't access lexical declaration 'Animal' before initialization
//- in Firefox and VSC
//! ReferenceError: Animal is not defined - in Chrome and EDGE
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
// }
//! Function
testScopeAndHosting()
function testScopeAndHosting() {
  console.log('Hosting!')
}

// testScopeAndHosting()
// {
//   function testScopeAndHosting() {
//     console.log('Hosting!')
//   }
// }
//testScopeAndHosting is not a function
// testScopeAndHosting()
// if (true) {
//   function testScopeAndHosting() {
//     console.log('Hosting!')
//   }
// }
//testScopeAndHosting is not a function
