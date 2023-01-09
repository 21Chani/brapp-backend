import express from 'express'
import { httpCreateGroup, httpGetAllGroups } from './group.controller'

export const groupRouter = express.Router()

groupRouter.post('/create', httpCreateGroup)
groupRouter.get('/get-all', httpGetAllGroups)
