import { t } from 'elysia';

export const enum sex { "Male", "Female" }
// export const enum religion { "Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu" }
// export const enum golongan { "Siaga", "Penggalang", "Penegak", "Pandega" }
// export const enum tingkatan { "Mula", "Bantu", "Tata", "Garuda (S)", "Ramu", "Rakit", "Terap", "Garuda (G)",
//                               "Bantara", "Laksana", "Garuda (T)", "Pandega", "Garuda (D)"}

export const addSKUVal = {
  body: t.Object({
    tingkatan: t.String(),
    desc: t.String(),
    check: t.String(),
  })
}


export const deleteSKUsVal = {
  body: t.Object({
    id: t.Array(t.String())
  })
}
