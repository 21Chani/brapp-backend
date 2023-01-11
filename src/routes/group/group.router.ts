import express from 'express'
import { requireBody } from '../../lib/http/requireBody'
import { httpCreateGroup, httpGetAllGroups } from './group.controller'

export const groupRouter = express.Router()

const requires = ['image', 'name', 'description', 'longitude', 'latitude', 'category']
groupRouter.post('/create', requireBody(...requires), httpCreateGroup)
groupRouter.get('/get-all', httpGetAllGroups)
