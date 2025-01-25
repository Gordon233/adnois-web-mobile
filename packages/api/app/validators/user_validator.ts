import vine from '@vinejs/vine'

/**
 * Validator schema for creating a new user
 */

export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().unique(async (db, value) => {
      const user = await db.from('users').where('email', value).first()
      return !user
    }),
    password: vine.string().trim().minLength(6),
    fullName: vine.string().trim().minLength(6),
  })
)
