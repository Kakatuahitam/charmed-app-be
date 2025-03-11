import { db } from '../../../../Infrastructures/database/mongodb/db'

export async function getUsers() {
  const users = await db.collection("users").find().toArray();

  return {
    success: true,
    message: "success",
    data: users
  }
}

export async function addUser(context) {
  // const users = await db.collection("users").find().toArray();
  const response = {
    success: true,
    message: "oke",
    data: context.body
  }

  return { body: response }
}
