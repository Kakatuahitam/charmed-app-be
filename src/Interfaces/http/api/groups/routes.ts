import { Elysia, t } from 'elysia'
import { getGroups, addGroup, deleteGroups } from './handler'
import { addGroupVal, deleteGroupsVal } from './validation'

export const groupsPlugin = new Elysia({ prefix: '/groups'})
  .get('/', getGroups)
  // .post('/', addGroup())
  .post('/', (context) => addGroup(context), addGroupVal)
  .delete('/', (context) => deleteGroups(context), deleteGroupsVal)
