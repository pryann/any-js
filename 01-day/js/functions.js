// const netPrice = 100
// const vatPrecent = 27
// const discountPrecent = 10

// const grossPrice = netPrice * (1 + vatPrecent / 100) * (1 - discountPrecent / 100)
// console.log(grossPrice)

function sayHello(name) {
  // console.log(`Hello ${name}`)
  // local variable
  const upperCaseName = name.toLocaleUpperCase()
  return `Hello ${upperCaseName}`
}

// call the function
const result = sayHello('John')
console.log(result)

function calculateTotalPrice(netPrice, vatPrecent = 27, discountPrecent = 0) {
  return netPrice * (1 + vatPrecent / 100) * (1 - discountPrecent / 100)
}

console.log(calculateTotalPrice(100, 27, 10))
console.log(calculateTotalPrice(200, 27, 5))
console.log(calculateTotalPrice(2000, 27, 0))
console.log(calculateTotalPrice(20000, 5, 0))
console.log(calculateTotalPrice(20000))
console.log(calculateTotalPrice(20000, 5))
console.log(calculateTotalPrice(20000))

const price = {
  netPrice: 100,
  vatPrecent: 27,
  discountPrecent: 10,
}

// const netPrice = price.netPrice
// const vatPrecent = price.vatPrecent
// const discountPrecent = price.discountPrecent
const { netPrice } = price

// throw error if netPrice property is missing
// function calculateTotalPriceWithObject({ netPrice, vatPrecent = 27, discountPrecent = 0 }) {
// not throw error if netPrice property is missing
function calculateTotalPriceWithObject({ netPrice, vatPrecent = 27, discountPrecent = 0 } = {}) {
  console.log(netPrice, vatPrecent, discountPrecent)
  return netPrice * (1 + vatPrecent / 100) * (1 - discountPrecent / 100)
}

// same as function calculateTotalPriceWithObject({ netPrice, vatPrecent = 27, discountPrecent = 0 }) {
function calculateTotalPriceWithObject2(price) {
  const { netPrice, vatPrecent = 27, discountPrecent = 0 } = price
  return netPrice * (1 + vatPrecent / 100) * (1 - discountPrecent / 100)
}

console.log(calculateTotalPriceWithObject2({ netPrice: 100, vatPrecent: 27, discountPrecent: 10 }))

