const tempreature = 30

if (tempreature > 20) {
  console.log('Nincs hideg')
} else {
  console.log('Hideg van')
}

console.log('end script')

const grade = 4

// > < >= <= == === != !==
// == loose equality
// === strict equality
console.log(5 === '5')

if (grade === 5) {
  console.log('Jeles')
} else if (grade === 4) {
  console.log('Jó')
} else if (grade === 3) {
  console.log('Közepes')
} else if (grade === 2) {
  console.log('Elégséges')
} else if (grade === 1) {
  console.log('Elégtelen')
} else {
  console.log('Nem értékelhető')
}
