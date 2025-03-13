import { Elysia, t } from 'elysia'
import { getUsers, addUser, deleteUsers } from './handler'
import { addUserVal, deleteUsersVal } from './validation'

export const usersPlugin = new Elysia({ prefix: '/users'})
  .get('/', getUsers)
  // .post('/', addUser())
  .post('/', (context) => addUser(context), addUserVal)
  .delete('/', (context) => deleteUsers(context), deleteUsersVal)
