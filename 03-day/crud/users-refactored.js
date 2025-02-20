import { fetchUsers, removeUser, findUser, updateUser } from './api.js'

const selectors = {
  deleteModal: '#deleteUserModal',
  updateModal: '#updateUserModal',
  updateForm: '#updateUserModal form',
  updateButton: '#updateUser',
  deleteButton: '#deleteUser',
  usersTableBody: '#users tbody',
  editButtons: '.edit-user',
  deleteButtons: '.delete-user',
}

const userFields = ['id', 'firstName', 'lastName', 'email']

const modals = {
  delete: new bootstrap.Modal(document.querySelector(selectors.deleteModal)),
  update: new bootstrap.Modal(document.querySelector(selectors.updateModal)),
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
    const userData = getEditUserFormData()
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

function getEditUserFormData() {
  const form = document.querySelector(selectors.updateForm)
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

// Main Export
export async function renderUserTable() {
  const users = await fetchUsers()
  const table = document.querySelector(selectors.usersTableBody)
  table.innerHTML = ''
  table.appendChild(generateUserTable(users))
}
