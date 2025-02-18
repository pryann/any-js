'use strict'

const user = { id: 1, firstName: 'John', lastName: 'Lennon' }

user.hobies = ['music', 'reading', 'coding']
console.log(user)

// freeze - only the root level props
const cofing = { url: 'http://localhost:3000', timeout: 1000 }
Object.freeze(cofing)

// error
// cofing.url = 'http://localhost:3001'

// destructuring
const { id, job } = user
console.log(id, job)

const fullName = (user) => `${user.firstName} ${user.lastName}`
const fulleNameDest = ({ firstName, lastName }) => `${firstName} ${lastName}`

// spread
const userShallowCopy = { ...user }
// nums is an array, rest params
const summa = (a, b, ...nums) => a + b + nums.reduce((acc, num) => acc + num, 0)
console.log(summa(1, 2, 3, 4, 5))
console.log(summa(1, 2))
console.log(summa(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// dates
const now = new Date()
console.log(now)
console.log(now.getDay())
console.log(now.getMonth())
console.log(now.getFullYear())
now.setFullYear(2020)
console.log(now.getFullYear())

const intlDate = Intl.DateTimeFormat('hu-HU', { dateStyle: 'full' }).format(now)
console.log(intlDate)

const money = 100_000_000
const formattedMoney = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(money)
console.log(formattedMoney)
