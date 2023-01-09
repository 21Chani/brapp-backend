import express from 'express'
import { groupRouter } from './routes/group/group.router'
export const app = express()

app.use(express.json())

app.use('/groups', groupRouter)
