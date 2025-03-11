import { t } from 'elysia';

export const addUserVal = {
  body: t.Object({
    name: t.String()
  })
}
