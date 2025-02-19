export function userFactory(name, age) {
  return {
    name,
    age,
  }
}

export default class Person {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}
