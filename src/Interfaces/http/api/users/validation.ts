import { t } from 'elysia';

export const addUserVal = {
  body: t.Object({
    firstName: t.String(),
    lastName: t.String()
  })
}

export const deleteUsersVal = {
  body: t.Object({
    id: t.Array(t.String())
  })
}
