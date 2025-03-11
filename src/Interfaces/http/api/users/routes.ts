import { Elysia, t } from 'elysia'
import { getUsers, addUser } from './handler'
import { addUserVal } from './validation'

export const usersPlugin = new Elysia({ prefix: '/users'})
  .get('/', getUsers)
  // .post('/', addUser())
  .post('/', (context) => addUser(context), addUserVal)
