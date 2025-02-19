class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}

export default User
