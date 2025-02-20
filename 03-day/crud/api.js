const usersUrl = 'http://localhost:3000/users'

// Create: POST http://localhost:3000/users
// Read:   (all) GET http://localhost:3000/users,
//         (one) GET http://localhost:3000/users/:id
// Update: (replace) PUT http://localhost:3000/users/:id,
//         (partial update) PATCH http://localhost:3000/users/:id
// Delete: DELETE http://localhost:3000/users/:id

export async function fetchUsers() {
  const users = await fetch(usersUrl)
  return users.json()
}

export async function findUser(id) {
  const user = await fetch(`${usersUrl}/${id}`)
  return user.json()
}

export async function removeUser(id) {
  fetch(`${usersUrl}/${id}`, {
    method: 'DELETE',
  })
}

export async function updateUser(id, user) {
  const updatedUser = await fetch(`${usersUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  return updatedUser.json()
}

export async function createUser(user) {}
