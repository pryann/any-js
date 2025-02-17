let num = 1
// num = num + 1
// num = num - 1
// num = num * 2
// num = num / 2
// num = num % 2
// num = num ** 2

// compound oeprators
num += 1
num -= 1
num *= 2
num /= 2
num %= 2
num **= 2

// incerement, decrement
let counter = 10
console.log(counter++)
console.log(++counter)
console.log(counter)

// for (ciklusváltozó = kezdőérték; feltétel; léptetés)
// ciklusmag
// }

for (let i = 0; i < 10; i += 1) {
  console.log(i)
}

// console.log(i)
const yearlySalariesInUsd = [10000, 20000, 30000, 40000, 50000]
yearlySalariesInUsd[1000] = 100_000

// for (let i = 0; i < yearlySalariesInUsd.length; i += 1) {
//   console.log(yearlySalariesInUsd[i])
// }

for (let index in yearlySalariesInUsd) {
  console.log(yearlySalariesInUsd[index])
}

for (let salary of yearlySalariesInUsd) {
  console.log(salary)
}
