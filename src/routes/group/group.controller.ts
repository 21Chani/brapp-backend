import { Request, Response } from 'express'
import { createGroup } from '../../models/groups/group.model'
import { GroupDataValues, Groups } from '../../models/groups/group.postgres'

export async function httpCreateGroup(req: Request<any, any, GroupDataValues>, res: Response) {
  const data = req.body
  const { error, group } = await createGroup(data)
  if (error) return res.status(500).json({ error })
  return res.json({ ...group?.dataValues })
}

export async function httpGetAllGroups(req: Request, res: Response) {
  const groups = await Groups.findAll()
  return res.json({ ...groups })
}
