import { fetchUsers, removeUser, findUser, updateUser } from './api.js'

// továbbfejelsztés:
// használjunk try catch-et
// a js kódot szervezzük ki külön fileokba
// a confirm helyett legyen BS modal window
// legyen pagination (lazy loading), és egyszerre csak X usert kérjünk el, ne mindet

function generateUserRow(user) {
  return `
    <tr data-user-id="${user.id}">
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td> 
        <button class="btn btn-primary edit-user" data-user-id="${user.id}">Edit</button>
        <button class="btn btn-danger delete-user" data-user-id="${user.id}">Delete</button>
      </td>
    </tr>
  `
}

async function deleteUser(id) {
  await removeUser(id)
  const userRow = document.querySelector(`tr[data-user-id="${id}"]`)
  userRow.remove()
}

function showDeleteConfirmation(id) {
  const modal = new bootstrap.Modal(document.querySelector('#deleteUserModal'))
  modal.show()
  document.querySelector('#deleteUser').onclick = () => {
    deleteUser(id)
    modal.hide()
  }
}

function initializeUserUpdateForm(user) {
  // v1
  // document.querySelector('#id').value = user.id
  // document.querySelector('#firstName').value = user.firstName
  // document.querySelector('#lastName').value = user.lastName
  // document.querySelector('#email').value = user.email
  // v1.2
  // const fields = ['id', 'firstName', 'lastName', 'email']
  // fields.forEach((field) => {
  //   document.querySelector(`#${field}`).value = user[field]
  // })

  //v3
  // const form = document.querySelector('#updateUserModal form')

  // form.id.value = user.id
  // form.firstName.value = user.firstName
  // form.lastName.value = user.lastName
  // form.email.value = user.email

  //v4
  const form = document.querySelector('#updateUserModal form')
  const fields = ['id', 'firstName', 'lastName', 'email']

  fields.forEach((field) => {
    form[field].value = user[field]
  })
}

async function showEditModal(id) {
  const modal = new bootstrap.Modal(document.querySelector('#updateUserModal'))
  modal.show()
  const user = await findUser(id)
  initializeUserUpdateForm(user)
  handleUpdateUserClick(modal)
}

function updateTableRow(user) {
  const userRow = document.querySelector(`tr[data-user-id="${user.id}"]`)
  const fields = ['firstName', 'lastName', 'email']
  fields.forEach((field, index) => {
    userRow.children[index + 1].textContent = user[field]
  })
}

function handleUpdateUserClick(modal) {
  const updateUserButton = document.querySelector('#updateUser')
  updateUserButton.onclick = async () => {
    const form = document.querySelector('#updateUserModal form')
    const formData = new FormData(form)
    const user = Object.fromEntries(formData)
    const updatedUser = await updateUser(user.id, user)
    updateTableRow(updatedUser)
    modal.hide()
  }
}

function addEditUserEventListener() {
  const editButtons = document.querySelectorAll('.edit-user')
  editButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = event.target.dataset.userId
      showEditModal(id)
    })
  })
}

function addRemoveUserEventListener() {
  const removeButtons = document.querySelectorAll('.delete-user')
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = event.target.dataset.userId
      showDeleteConfirmation(id)
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
  addEditUserEventListener()
}
