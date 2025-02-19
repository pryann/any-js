// import { summation, subtraction } from './mathematical.js'
// import * as mathematical from './mathematical.js'
import { summation as summa, subtraction as subs } from './mathematical.js'
import User from './User.js'
import Person, { userFactory } from './mixed.js'

// console.log(mathematical.summation(10, 1))
// console.log(mathematical.subtraction(10, 1))

console.log(summa(10, 1))
console.log(subs(10, 1))

const user = new User('Lulu')
user.sayHi()

const person = new Person('Anulu')
person.sayHi()

const globalUser = userFactory('Lulu', 20)
console.log(globalUser)
