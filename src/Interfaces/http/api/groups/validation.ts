import { t } from 'elysia';

export const enum type { "Barung", "Regu" }

export const addGroupVal = {
  body: t.Object({
    name: t.String(),
    type: t.Enum(type),
  })
}

export const deleteGroupsVal = {
  body: t.Object({
    id: t.Array(t.String())
  })
}
