import { t } from 'elysia';

export const enum sex { "Male", "Female" }
export const enum religion { "Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu" }
export const enum golongan { "Siaga", "Penggalang", "Penegak", "Pandega" }
export const enum tingkatan { "Mula", "Bantu", "Tata", "Garuda (S)", "Ramu", "Rakit", "Terap", "Garuda (G)",
                              "Bantara", "Laksana", "Garuda (T)", "Pandega", "Garuda (D)"}

export const addUserVal = {
  body: t.Object({
    fullname: t.String(),
    nickname: t.String(),
    groupID: t.String(),
    parentName: t.String(),
    sex: t.Enum(sex),
    religion: t.Enum(religion),
    golongan: t.Enum(golongan),
    tingkatan: t.Enum(tingkatan)
  })
}


export const deleteUsersVal = {
  body: t.Object({
    id: t.Array(t.String())
  })
}
