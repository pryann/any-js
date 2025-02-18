'use strict'

const names = ['john', 'paul', 'george', 'ringo']

// for (let i in names) {
//   names[i] = names[i][0].toLocaleUpperCase() + names[i].slice(1)
// }

const upperCaseFirstLetter = (text) => text[0].toLocaleUpperCase() + text.slice(1)

// for (let i in names) {
//   names[i] = upperCaseFirstLetter(names[i])
// }

// const capitalizedNames = names.map((text) => text[0].toLocaleUpperCase() + text.slice(1))
const capitalizedNames = names.map(upperCaseFirstLetter)
console.log(capitalizedNames)

const numbers = [1, 2, 3, 4, 5]
const exponent = (num) => num ** 2
const exponentNumbers = numbers.map(exponent)
console.log(exponentNumbers)
