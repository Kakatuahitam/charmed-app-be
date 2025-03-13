import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { usersPlugin } from './Interfaces/http/api/users/routes'

new Elysia()
  .use(cors({}))
  .use(usersPlugin)
  .listen(3000)

console.log("Elysia is running.")
