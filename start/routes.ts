/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import AuthValidator from 'App/Validators/AuthValidator'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {

  Route.get('/', async ({ inertia }) => {
    return inertia.render('App', { 
      testing: 'this is a test'
    })
  }).as('index')
  
  Route.get('/login', async ({ inertia }) => {
    return inertia.render('Auth/Login')
  }).as('login.show')

  Route.post('/login', async ({ request, response }) => {
    console.log({
      loginBody: request.body()
    })

    const data = await request.validate(AuthValidator)

    console.log({ data })

    return response.redirect().toRoute('app.index')
  }).as('login.store')

  Route.get('/register', async ({ inertia }) => {
    return inertia.render('Auth/Register')
  }).as('register.show')

  Route.post('/register', async ({ request, response }) => {
    console.log({
      registerBody: request.body()
    })

    const data = await request.validate(AuthValidator)

    console.log({ data })

    return response.redirect().toRoute('app.index')
  }).as('register.store')

}).prefix('app').as('app')