const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 33,
  state: 'dead',
  walk() {
    console.log("I'm a walking dead")
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

// Accessing object properties

console.log(user.firstName) // John;

user.firstName = 'Jane'
console.log(user.firstName) // Jane

user.title = 'Mr.'
console.log(user)

delete user.title
console.log(user)

user.walk()
console.log(user.fullName())

let a = 10
let b = a
console.log(a, b)
a = 50
console.log(a, b)

const userCopy = user
console.log(userCopy.firstName)

user.firstName = 'Bob'
console.log(user.firstName, userCopy.firstName)
userCopy.lastName = 'Marley'
console.log(user.lastName, userCopy.lastName)

const salaries = [100, 200, 300, 400, 500]

function increaseSalaries(salaries, increaseByPercent = 10) {
  // const newSalaries = []
  // for (let i in salaries) {
  //   newSalaries[i] = salaries[i] * (1 + increaseByPercent / 100)
  // }
  // return newSalaries
  return salaries.map((salary) => salary * (1 + increaseByPercent / 100))
}

console.log(increaseSalaries(salaries, 20))
console.log(salaries)

let salary = 100
function increaseSalary(s, increaseByPercent = 10) {
  s = s * (1 + increaseByPercent / 100)
  return s
}

console.log(increaseSalary(salary, 20))
console.log(salary)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersCopy = [...numbers]
numbers.push(11)
console.log(numbers, numbersCopy)
