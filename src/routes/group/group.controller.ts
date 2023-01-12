import { Request, Response } from 'express'
import { createGroup, getAllGroups } from '../../models/groups/group.model'
import { Group, Groups } from '../../models/groups/group.mongo'

export async function httpCreateGroup(req: Request<any, any, Group>, res: Response) {
  const data = req.body
  const { error, group } = await createGroup(data)
  if (error) return res.status(500).json({ error })
  return res.json({ ...group })
}

export async function httpGetAllGroups(req: Request, res: Response) {
  const { groups, error } = await getAllGroups()
  if (error) {
    return res.status(500).json({ message: 'Ocurred an error trying to fetch all groups', error })
  }
  return res.json({ ...groups })
}
