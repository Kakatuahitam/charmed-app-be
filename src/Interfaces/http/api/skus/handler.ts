import { customAlphabet } from 'nanoid'
import { db } from '../../../../Infrastructures/database/mongodb/db'

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid_10 = customAlphabet(alphabet, 10);

export async function getUsers() {
  const users = await db.collection("users").aggregate([
    {
      $lookup: {
        from: "groups",
        localField: "groupID",
        foreignField: "_id",
        as: "group"
      }
    },
    {
      $unwind: {
        path: "$group",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        _id: 0,
        id: "$_id",
        fullname: 1,
        nickname: 1,
        groupID: 1,
        parentName: 1,
        sex: 1,
        religion: 1,
        golongan: 1,
        tingkatan: 1,
        groupName: { $ifNull: ["$group.name", null] }
      }
    }
  ]).toArray();

  return {
    success: true,
    message: "Users fetched successfully",
    data: users.map(({ sex, religion, golongan, tingkatan, ...rest }) => ({
      ...rest,
      sex: sex === 1 ? "Laki-laki" : sex === 2 ? "Perempuan" : null,
      religion: ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu"][religion - 1] || null,
      golongan: ["Siaga", "Penggalang", "Penegak", "Pandega"][golongan - 1] || null,
      tingkatan: [
        "Mula", "Bantu", "Tata", "Garuda (S)", "Ramu", "Rakit", "Terap", "Garuda (G)",
        "Bantara", "Laksana", "Garuda (T)", "Pandega", "Garuda (D)"
      ][tingkatan - 1] || null
    }))
  };

}


export async function addUser(context) {
  const id = nanoid_10();
  const users = await db.collection("users").insertOne({
    _id: id,
    fullname: context.body.fullname,
    nickname: context.body.nickname,
    groupID: context.body.groupID,
    parentName: context.body.parentName,
    sex: context.body.sex, // Should be 1 (Male) or 2 (Female)
    religion: context.body.religion, // One of Indonesia's six recognized religions
    golongan: context.body.golongan, // Siaga, Penggalang, Penegak, Pandega
    tingkatan: context.body.tingkatan // Depends on golongan
  });

  const response = {
    success: true,
    message: `User ${context.body.fullname} successfully added`,
  };

  return { body: response };
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
