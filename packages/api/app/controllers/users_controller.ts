import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'
import { createUserValidator } from '#validators/user_validator'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return 'index users!!'
  }

  /**
   * Display form to create a new record
   */
  async create({ request }: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const user = await this.userService.create(payload)
    return user
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const user = await this.userService.find(params.id)
    return user
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}

  async findByEmail({ request }: HttpContext) {
    const email = request.body().email
    const user = await this.userService.findByEmail(email)
    return user
  }

  async findByName({ request }: HttpContext) {
    const name = request.body().name
    const user = await this.userService.findByName(name)
    return user
  }
}
