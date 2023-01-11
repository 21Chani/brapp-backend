import { Request, Response } from 'express'
import { createGroup } from '../../models/groups/group.model'
import { Group, Groups } from '../../models/groups/group.mongo'
import { connectMongo, disconnectMongo } from '../../services/mongo'

export async function httpCreateGroup(req: Request<any, any, Group>, res: Response) {
  const data = req.body
  await connectMongo()
  const { error, group } = await createGroup(data)
  if (error) return res.status(500).json({ error })
  await disconnectMongo()
  return res.json({ status: 'ok', group: data })
}

export async function httpGetAllGroups(req: Request, res: Response) {
  await connectMongo()
  const groups = await Groups.find({}, { __id: 0, __v: 0 })
  await disconnectMongo()
  return res.json({ ...groups })
}
