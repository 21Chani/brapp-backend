import express from 'express'
import { authRouter } from './routes/auth/auth.router'
import { groupRouter } from './routes/group/group.router'
export const app = express()

app.use(express.json())

app.use('/groups', groupRouter)
app.use('/auth', authRouter)
