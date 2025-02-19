const usersUrl = 'http://localhost:3000/users'

// Create: POST http://localhost:3000/users
// Read:   (all) GET http://localhost:3000/users,
//         (one) GET http://localhost:3000/users/:id
// Update: (replace) PUT http://localhost:3000/users/:id,
//         (partial update) PATCH http://localhost:3000/users/:id
// Delete: DELETE http://localhost:3000/users/:id

export async function fetchUsers() {
  const response = await fetch(usersUrl)
  return response.json()
}

export async function removeUser(id) {
  fetch(`${usersUrl}/${id}`, {
    method: 'DELETE',
  })
}

export async function updateUser(id, user) {}

export async function createUser(user) {}
