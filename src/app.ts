import express from 'express'
import { authRouter } from './routes/auth/auth.router'
import { groupRouter } from './routes/group/group.router'
import cors from 'cors'
export const app = express()

app.use(express.json())
app.use(cors({ credentials: true, origin: '*', allowedHeaders: '' }))

app.use('/groups', groupRouter)
app.use('/auth', authRouter)
