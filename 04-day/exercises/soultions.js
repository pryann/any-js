/*
Írj egy függvényt `searchAndCount` néven, amely első paraméterként kap egy csak egész számokat tartalmazó tömböt és 
  másodikként egy egész számot! A függvény visszatérési értéke egy egész szám, amely megadja, hogy a tömbben hányszor fordult elő a paraméterként kapott szám.
 */

function searchAndCount(arr, searchValue) {
  let counter = 0
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchValue) {
      counter += 1
    }
  }
  return counter
}

const searchAndCountFunctional = (arr, searchValue) => arr.filter((item) => item === searchValue).length

/* Írj egy függvényt `getOddEvenElements` néven, amely paraméterként egy pozitív egész számokat tartalmazó tömböt kap!
A függvény visszatérési értéke egy olyan új tömb legyen, amely csak a páros számokat tartalmazza! */

function getEvenElements(arr) {
  const evenArr = []
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i])
    }
  }
  return evenArr
}

const getEvenElementsFunctional = (arr) => arr.filter((item) => item % 2 === 0)

/*
  Írj egy függvényt `getOddEvenElements` néven, amely paraméterként egy pozitív egész számokat tartalmazó tömböt kap!
  A függvény visszatérési értéke egy olyan új tömb legyen, amely csak a páratlan számokat tartalmazza!
   */
function getOddElements(arr) {
  const oddArr = []
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i])
    }
  }
  return oddArr
}

const getOddElementsFunctional = (arr) => arr.filter((item) => item % 2 !== 0)

/*  Írj egy függvényt `numberAndStringSorter` néven, amely paraméterként egy olyan tömböt kap, amely azonos darabú egész számot és string-et tartalmaz véletlenszerű sorrendben!
  Rendezd úgy a tömböt, hogy minden szám után egy string következzen!  
  Add vissza a tömböt! */
function getNumericValues(arr) {
  const numbers = []
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i])
    }
  }
  return numbers
}

function getStringValues(arr) {
  const strings = []
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') {
      strings.push(arr[i])
    }
  }
  return strings
}

function numberAndStringSorter(arr) {
  const numbers = getNumericValues(arr)
  const strings = getStringValues(arr)
  const sortedArr = []
  for (let i = 0; i < numbers.length; i += 1) {
    sortedArr.push(numbers[i], strings[i])
  }
  return sortedArr
}

const numberAndStringSorterFunctional = (arr) => {
  const numbers = arr.filter((item) => typeof item === 'number')
  const strings = arr.filter((item) => typeof item === 'string')
  // return numbers.map((item, index) => [item, strings[index]]).flat()
  // return numbers.flatMap((item, index) => [item, strings[index]])
  const mixedArray = []
  numbers.array.forEach((item, index) => {
    mixedArray.push(item, strings[index])
  })
}
