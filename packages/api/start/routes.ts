/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
// import HomeController from '#controllers/home_controller'
// import UsersController from '#controllers/users_controller'

router.resource('users', '#controllers/users_controller')
// router.get('users/findByEmail', [UsersController, 'findByEmail'])
router
  .group(() => {
    router.post('/findByName', '#controllers/users_controller.findByName')
  })
  .prefix('users')
