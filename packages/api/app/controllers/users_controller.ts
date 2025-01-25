import { inject } from '@adonisjs/core'
import { UserService } from '#services/user_service'
import { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user_validator'

@inject()
export default class UsersController {
  constructor(
    protected userService: UserService,
    protected ctx: HttpContext
  ) {}

  async index() {
    return [
      {
        id: 1,
        username: 'virk',
      },
      {
        id: 2,
        username: 'romain',
      },
    ]
  }

  async find({ params }: HttpContext) {
    const user = await this.userService.find(params.id)
    return user
  }

  async create({ request }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const user = await this.userService.create(payload)
    return user
  }
}
