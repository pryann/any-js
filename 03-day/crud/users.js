import { fetchUsers, removeUser } from './api.js'

// továbbfejelsztés:
// használjunk try catch-et
// a js kódot szervezzük ki külön fileokba
// a confirm helyett legyen BS modal window
// legyen pagination (lazy loading), és egyszerre csak X usert kérjünk el, ne mindet

function generateUserRow(user) {
  return `
    <tr data-user-id="${user.id}">
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td> 
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger delete-user" data-user-id="${user.id}">Delete</button>
      </td>
    </tr>
  `
}

async function deleteUser(id) {
  const confirmed = confirm('Are you sure?')
  if (confirmed) {
    await removeUser(id)
    const userRow = document.querySelector(`tr[data-user-id="${id}"]`)
    userRow.remove()
  }
}

function addRemoveUserEventListener() {
  const removeButtons = document.querySelectorAll('.delete-user')
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = event.target.dataset.userId
      deleteUser(id)
    })
  })
}

function generateTable(users) {
  return users.map((user) => generateUserRow(user)).join('')
}

export async function renderTable() {
  const users = await fetchUsers()
  const table = document.querySelector('#users tbody')
  table.innerHTML = generateTable(users)
  addRemoveUserEventListener()
}
