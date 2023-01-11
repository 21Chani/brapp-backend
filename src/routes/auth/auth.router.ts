import { Router } from 'express'
import { httpAuth } from './auth.controller'

export const authRouter = Router()

authRouter.post('/', httpAuth)
