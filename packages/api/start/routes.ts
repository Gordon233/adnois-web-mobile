/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import HomeController from '#controllers/home_controller'
import UsersController from '#controllers/users_controller'

router.get('/', async () => {
  return {
    hello: 'world!!!!',
  }
})

router.get('/home', [HomeController])

router.get('/users', [UsersController, 'index'])

router.get('/users/:id', [UsersController, 'find'])

router.post('/users', [UsersController, 'create'])
