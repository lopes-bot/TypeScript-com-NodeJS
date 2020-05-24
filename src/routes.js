import { Router } from 'express'

import UserController from './controllers/Usercontroller'

const routes = Router()

routes.get('/users', UserController.index)

export default routes
