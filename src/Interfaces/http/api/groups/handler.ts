import { nanoid } from 'nanoid'
import { db } from '../../../../Infrastructures/database/mongodb/db'

export async function getGroups() {
  const groups = await db.collection("groups").aggregate([
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "groupID",
        as: "members"
      }
    },
    {
      $project: {
        _id: 0, // Exclude _id
        id: "$_id",
        name: 1,
        type: 1,
        memberCount: { $size: "$members" }
      }
    }
  ]).toArray();

  return {
    success: true,
    message: "success",
    data: groups
  };
}

export async function addGroup(context) {
  const id = nanoid(10)
  await db.collection("groups").insertOne({
    _id: id,
    name: context.body.name,
    type: context.body.type,
    members: [],
  })

  const response = {
    success: true,
    message: `Group ${context.body.name} successfully added`,
  }

  return { body: response }
}

export async function deleteGroups(context) {
  // console.log(context.body)
  const deletedGroup = await db.collection("groups").deleteMany({"_id": { '$in': context.body.id }})
  const response = {
    success: true,
    message: `Groups successfully deleted`,
    data: deletedGroup
  }

  return { body: response }
}
