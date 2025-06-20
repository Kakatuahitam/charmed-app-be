import { Elysia, t } from 'elysia'
import { getSKUs, addSKU, deleteSKUs } from './handler'
import { addSKUVal, deleteSKUsVal } from './validation'

export const usersPlugin = new Elysia({ prefix: '/skus'})
  .get('/', getSKUs)
  // .post('/', addUser())
  // .post('/', (context) => addUser(context), addUserVal)
  // .delete('/', (context) => deleteUsers(context), deleteUsersVal)
