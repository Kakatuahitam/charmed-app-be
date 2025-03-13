import { nanoid } from 'nanoid'
import { db } from '../../../../Infrastructures/database/mongodb/db'

export async function getUsers() {
  const users = await db.collection("users").find().toArray();

  const formattedData = users.map(({ _id, ...rest }) => ({
    id: _id,
    ...rest
  }));

  return {
    success: true,
    message: "success",
    data: formattedData
  }
}

export async function addUser(context) {
  const id = nanoid(10)
  const users = await db.collection("users").insertOne({
    _id: id,
    firstName: context.body.firstName,
    lastName: context.body.lastName
  })

  const response = {
    success: true,
    message: `User ${context.body.firstName} successfully added`,
  }

  return { body: response }
}

export async function deleteUsers(context) {
  // console.log(context.body)
  const deletedUser = await db.collection("users").deleteMany({"_id": { '$in': context.body.id }})
  const response = {
    success: true,
    message: `Users successfully deleted`,
    data: deletedUser
  }

  return { body: response }
}
