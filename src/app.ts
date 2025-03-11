import { Elysia } from 'elysia'
import { usersPlugin } from './Interfaces/http/api/users/routes'

new Elysia()
  .use(usersPlugin)
  .listen(3000)

console.log("Elysia is running.")
