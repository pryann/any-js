// closure
function counter() {
  let count = 0

  return function () {
    return ++count
  }
}

const count = counter()
console.log(typeof count)
count()
count()
count()
console.log(count())

// callback
function calculate(a, b, fn) {
  return fn(a, b)
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

console.log(calculate(10, 5, add))
console.log(calculate(10, 5, subtract))

console.log(multiply(10, 5))

function multiply(a, b) {
  return a * b
}

// overwrite function
// multiply = 10
// console.log(multiply(10, 5))

// throw error
// console.log(multiply(10, 5))

// function expression
// const multiply = function (a, b) {
//   return a * b
// }

// throw error
// multiply = 10

// arrow function
// const multiply = (a, b) => a * b
