const user = {
  name: 'John',
  age: 30,
  isAdmin: true,
  email: 'john@gmail.com',
}

console.log(user)
// use this
console.log(user.name)
// instead of this
console.log(user['name'])

user.hobbies = ['reading', 'coding', 'running']
console.log(user)
console.log(user.hobbies[0])

for (let key in user) {
  console.log(user[key])
}

const grade = 4
const textGrade = {
  1: 'Elégtelen',
  2: 'Elégséges',
  3: 'Közepes',
  4: 'Jó',
  5: 'Jeles',
}

// v1
console.log(textGrade[grade])

// v2 and v3
// if (grade > 0 && grade < 6) {
if (textGrade[grade]) {
  console.log(textGrade[grade])
} else {
  console.log('Nem értékelhető')
}

// v4 - ternary operator (feltétel ? érték igaz esetén : érték hamis esetén)
const result = textGrade[grade] ? textGrade[grade] : 'Nem értékelhető'
console.log(result)

// v5
const result2 = textGrade[grade] || 'Nem értékelhető'
console.log(result2)
