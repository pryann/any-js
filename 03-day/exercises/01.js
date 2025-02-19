/*
Írj egy függvényt `getTheSmallestElement` néven, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb legkisebb elemét!
 */

// Nevezete algoritmus - minimum kiválasztás
function getTheSmallestElement(arr) {
  // if the length of array is not 0
  let smallets = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallets) {
      smallets = arr[i]
    }
  }
  return smallets

  // alternative solution, check arr length too
  // let smallets = Infinity
  // for (let i of arr) {
  //   if (arr[i] < smallets) {
  //     smallets = arr[i]
  //   }
  // }
  // return arr.length === 0 ? null : smallets
}
