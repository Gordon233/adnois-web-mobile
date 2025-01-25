import User from '#models/user'

interface CreateUserData {
  email: string
  password: string
  fullName?: string
}

export class UserService {
  constructor() {}

  async find(id: number) {
    const user = await User.find(id)
    return user
  }

  async create(data: CreateUserData) {
    const user = await User.create(data)
    return user
  }
}
