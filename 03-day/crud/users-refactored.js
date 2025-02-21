import { fetchUsers, removeUser, findUser, updateUser, createUser } from './api.js'

const selectors = {
  deleteModal: '#deleteUserModal',
  updateModal: '#updateUserModal',
  createModal: '#createUserModal',
  updateForm: '#updateUserModal form',
  createForm: '#createUserModal form',
  updateButton: '#updateUser',
  deleteButton: '#deleteUser',
  createButton: '#createUser',
  usersTableBody: '#users tbody',
  editButtons: '.edit-user',
  deleteButtons: '.delete-user',
}

const userFields = ['id', 'firstName', 'lastName', 'email']

const modals = {
  delete: new bootstrap.Modal(document.querySelector(selectors.deleteModal)),
  update: new bootstrap.Modal(document.querySelector(selectors.updateModal)),
  create: new bootstrap.Modal(document.querySelector(selectors.createModal)),
}

// UI Generation
function generateUserRow(user) {
  const row = document.createElement('tr')
  row.dataset.userId = user.id
  row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td> 
        <button class="btn btn-primary edit-user" data-user-id="${user.id}">Edit</button>
        <button class="btn btn-danger delete-user" data-user-id="${user.id}">Delete</button>
      </td>
  `
  attachRowEventListeners(row)
  return row
}

// Event Handlers
function attachRowEventListeners(row) {
  row.querySelector(selectors.editButtons).addEventListener('click', (e) => handleEdit(e.target.dataset.userId))
  row.querySelector(selectors.deleteButtons).addEventListener('click', (e) => handleDelete(e.target.dataset.userId))
}

// Modal Handlers
async function handleEdit(id) {
  const user = await findUser(id)
  fillEditUserFormData(user)
  attachUpdateHandler()
  modals.update.show()
}

async function handleDelete(id) {
  const confirmButton = document.querySelector(selectors.deleteButton)
  confirmButton.onclick = async () => {
    await removeUser(id)
    document.querySelector(`tr[data-user-id="${id}"]`).remove()
    modals.delete.hide()
  }
  modals.delete.show()
}

function attachUpdateHandler() {
  const updateButton = document.querySelector(selectors.updateButton)
  updateButton.onclick = async () => {
    const userData = getFormData(selectors.updateForm)
    const updatedUser = await updateUser(userData.id, userData)
    updateUserRow(updatedUser)
    modals.update.hide()
  }
}

// Form Handlers
function fillEditUserFormData(user) {
  const form = document.querySelector(selectors.updateForm)
  userFields.forEach((field) => (form[field].value = user[field]))
}

function getFormData(formSelector) {
  const form = document.querySelector(formSelector)
  return Object.fromEntries(new FormData(form))
}

// Table Operations
function updateUserRow(user) {
  const oldRow = document.querySelector(`tr[data-user-id="${user.id}"]`)
  const newRow = generateUserRow(user)
  oldRow.replaceWith(newRow)
}

function generateUserTable(users) {
  const fragment = document.createDocumentFragment()
  users.forEach((user) => fragment.appendChild(generateUserRow(user)))
  return fragment
}

export function handleCreate() {
  document.querySelector(selectors.createButton).onclick = async () => {
    const userData = getFormData(selectors.createForm)
    const newUser = await createUser(userData)
    const userRow = generateUserRow(newUser)
    document.querySelector(selectors.usersTableBody).appendChild(userRow)
    document.querySelector(selectors.createForm).reset()
    modals.create.hide()
  }
}

export async function renderUserTable() {
  const users = await fetchUsers()
  console.log('USers fetched:', users)
  const table = document.querySelector(selectors.usersTableBody)
  table.innerHTML = ''
  table.appendChild(generateUserTable(users))
}
