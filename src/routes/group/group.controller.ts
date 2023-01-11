import { Request, Response } from 'express'
import { createGroup } from '../../models/groups/group.model'
import { Group, Groups, RawGroup } from '../../models/groups/group.mongo'
import { imagekit } from '../../services/imagekit.io'

export async function httpCreateGroup(req: Request<any, any, RawGroup>, res: Response) {
  const data = req.body
  const { image: rawImage, ...raw } = data

  if (!rawImage) return res.status(400).json({ error: 'Invalid base64 image' })
  const response = await imagekit.upload({ ...rawImage })
  const image = response.url

  const { error, group } = await createGroup({ ...raw, image })
  if (error) return res.status(500).json({ error })
  return res.json({ status: 'ok', group })
}

export async function httpGetAllGroups(req: Request, res: Response) {
  const groups = await Groups.find({}, { __id: 0, __v: 0 })
  return res.json({ ...groups })
}
