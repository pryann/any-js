import bootstrap from 'bootstrap'

export function createCrud(fields, api) {
  const selectors = {
    deleteModal: '#deleteModal',
    updateModal: '#updateModal',
    createModal: '#createModal',
    updateForm: '#updateModal form',
    createForm: '#createModal form',
    updateButton: '#updateButton',
    deleteButton: '#deleteButton',
    createButton: '#createButton',
    tableBody: 'tbody',
    editButtons: '.edit-btn',
    deleteButtons: '.delete-btn',
  }

  const modals = {
    delete: new bootstrap.Modal(document.querySelector(selectors.deleteModal)),
    update: new bootstrap.Modal(document.querySelector(selectors.updateModal)),
    create: new bootstrap.Modal(document.querySelector(selectors.createModal)),
  }

  // UI Generation
  function generateRow(data) {
    const row = document.createElement('tr')
    row.dataset.id = data.id
    row.innerHTML = `
      ${fields.map((field) => `<td>${data[field]}</td>`).join('')}
      <td> 
        <button class="btn btn-primary edit-btn" data-id="${data.id}">Edit</button>
        <button class="btn btn-danger delete-btn" data-id="${data.id}">Delete</button>
      </td>
  `
    attachRowEventListeners(row)
    return row
  }

  // Event Handlers
  function attachRowEventListeners(row) {
    row.querySelector(selectors.editButtons).addEventListener('click', (e) => handleEdit(e.target.dataset.id))
    row.querySelector(selectors.deleteButtons).addEventListener('click', (e) => handleDelete(e.target.dataset.id))
  }

  // Modal Handlers
  async function handleEdit(id) {
    const data = await api.find(id)
    fillEditFormData(data)
    attachUpdateHandler()
    modals.update.show()
  }

  async function handleDelete(id) {
    const confirmButton = document.querySelector(selectors.deleteButton)
    confirmButton.onclick = async () => {
      await api.remove(id)
      document.querySelector(`tr[data-id="${id}"]`).remove()
      modals.delete.hide()
    }
    modals.delete.show()
  }

  function attachUpdateHandler() {
    const updateButton = document.querySelector(selectors.updateButton)
    updateButton.onclick = async () => {
      const data = getFormData(selectors.updateForm)
      const updatedData = await api.update(data.id, data)
      updateRow(updatedData)
      modals.update.hide()
    }
  }

  // Form Handlers
  function fillEditFormData(data) {
    const form = document.querySelector(selectors.updateForm)
    fields.forEach((field) => (form[field].value = data[field]))
  }

  function getFormData(formSelector) {
    const form = document.querySelector(formSelector)
    return Object.fromEntries(new FormData(form))
  }

  // Table Operations
  function updateRow(data) {
    const oldRow = document.querySelector(`tr[data-id="${data.id}"]`)
    const newRow = generateRow(data)
    oldRow.replaceWith(newRow)
  }

  function generateTable(dataArray) {
    const fragment = document.createDocumentFragment()
    dataArray.forEach((data) => fragment.appendChild(generateRow(data)))
    return fragment
  }

  // PUBLIC
  function handleCreate() {
    document.querySelector(selectors.createButton).onclick = async () => {
      const formData = getFormData(selectors.createForm)
      const newData = await api.create(formData)
      const dataRow = generateRow(newData)
      document.querySelector(selectors.table).appendChild(dataRow)
      document.querySelector(selectors.createForm).reset()
      modals.create.hide()
    }
  }

  async function renderTable() {
    const dataArray = await api.fetch()
    const table = document.querySelector(selectors.tableBody)
    table.innerHTML = ''
    table.appendChild(generateTable(dataArray))
  }

  return {
    renderTable,
    handleCreate,
  }
}
