const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// procedural solution
const evenNumbers = []

for (let i of numbers) {
  if (i % 2 === 0) {
    evenNumbers.push(i)
  }
}

console.log(evenNumbers)

// functional solution
const isEven = (num) => num % 2 === 0
const evenNumbers2 = numbers.filter(isEven)

const summa = (acc, num) => acc + num
const sumOfNumbers = numbers.reduce(summa, 0)
console.log(sumOfNumbers)

/*
- adott egy szám tömb
- vegyük minden szám dupláját
- szűrjük le a 100-nál nagyobbakat
- összegezzük ezeket
*/

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const result = prices
  .map((price) => price * 2)
  .filter((price) => price > 100)
  .reduce((acc, price) => acc + price, 0)

console.log(result)

const products = [
  { id: 1, name: 'VGA', price: 100, count: 0 },
  { id: 2, name: 'CPU', price: 1000, count: 10 },
  { id: 3, name: 'RAM', price: 200, count: 0 },
  { id: 4, name: 'Cooler', price: 400, count: 5 },
  { id: 5, name: 'SSD', price: 10050, count: 41 },
]
// count > 0, csak az id kell a tömbbe
const aviabileProductIds = products.filter((product) => product.count > 0).map((product) => product.id)
console.log(aviabileProductIds)
// az össz daraszám, tehát minden termék darabszáma összegezve
const sumCountOfItems = products.reduce((acc, product) => acc + product.count, 0)
console.log(sumCountOfItems)
// tömb ami olyan objektumokat tartalmaz amibn az id és a termék össz ára van [{id: , sumPrice: }]
const sumPricePerProduct = products.map((product) => ({ id: product.id, sumPrice: product.price * product.count }))
console.log(sumPricePerProduct)
// const sumPricePerProduct = products.map(({id, price, count}) => ({id, sumPrice: price * count}))
// az össz ár, teljes készlet ára
const sumPriceOfItems = products.reduce((acc, product) => acc + product.price * product.count, 0)
console.log(sumPriceOfItems)
