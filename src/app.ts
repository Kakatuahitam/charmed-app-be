import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { usersPlugin } from './Interfaces/http/api/users/routes'
import { groupsPlugin } from './Interfaces/http/api/groups/routes'

new Elysia()
  .use(cors())
  .use(usersPlugin)
  .use(groupsPlugin)
  .listen(3000)

console.log("Elysia is running.")
