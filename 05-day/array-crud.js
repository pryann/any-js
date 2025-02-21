let users = [
  {
    id: 1,
    firstName: 'CamalaA',
    lastName: 'Wogden',
    email: 'cwogden22@i2i.jp',
  },
  {
    id: 2,
    firstName: 'Jeana',
    lastName: 'McFaul',
    email: 'jmcfaul24@nifty.com',
  },
  {
    id: 3,
    firstName: 'Amberly',
    lastName: 'McLae',
    email: 'amclae25@163.com',
  },
  {
    id: 4,
    firstName: 'Trisha',
    lastName: 'Campanelli',
    email: 'tcampanelli26@youtube.com',
  },
]

// CRUD Operations
function getUsers() {
  return users
}

function findUser(id) {
  return users.find((user) => user.id === id)
}

function createUser(user) {
  // mutate the users array
  // users.push(user)
  // return users[users.length - 1]

  // not mutate
  users = [...users, user]
  return users[users.length - 1]
}

function updateUser(user) {
  // mutate
  // const index = users.findIndex((u) => u.id === user.id)
  // users[index] = user
  // return users[index]
  // not mutate
  users = users.map((u) => (u.id === user.id ? user : u))
  return findUser(user.id)
}

function removeUser(id) {
  // mutate
  // const index = users.findIndex((user) => user.id === id)
  // users.splice(index, 1)

  // not mutate
  users = users.filter((user) => user.id !== id)
}
