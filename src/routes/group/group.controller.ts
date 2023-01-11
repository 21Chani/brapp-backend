import { Request, Response } from 'express'
import { createGroup } from '../../models/groups/group.model'
import { Group, Groups } from '../../models/groups/group.mongo'

export async function httpCreateGroup(req: Request<any, any, Group>, res: Response) {
  const data = req.body
  const { error, group } = await createGroup(data)
  if (error) return res.status(500).json({ error })
  return res.json({ status: 'ok', group })
}

export async function httpGetAllGroups(req: Request, res: Response) {
  const groups = await Groups.find({}, { __id: 0, __v: 0 })
  return res.json({ ...groups })
}
