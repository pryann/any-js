import { createApi } from './api-reusable'
import { createCrud } from './users-reusable'

// TODO: NEED TO ADD POSTFIX TO THE SELECTORS!!!
// TODO: USE ARRAY CRUD IMPLEMENTATION TOO!!!
// TODO: ADD VALIDATION TO THE FORM!!!
// TODO: ADD ERROR HANDLING!!!
// TODO: TEST IT!!!
const userApi = createApi('users')
const userFields = ['id', 'firstName', 'lastName', 'email']
const usersCrud = createCrud(userApi, userFields)
usersCrud.renderTable()
usersCrud.handleCreate()
