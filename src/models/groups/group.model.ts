import { v4 as uuidV4 } from 'uuid'
import { Group, Groups } from './group.mongo'

export async function hasGroup(uuid: string) {
  const group = await Groups.findOne({ uuid })
  const hasGroup = Boolean(group)
  return hasGroup
}

export async function createGroup(data: Group) {
  try {
    const uuid = uuidV4()
    const group = await Groups.create({ ...data, uuid })
    return { group, error: undefined }
  } catch (error) {
    if (!(error instanceof Error)) return { error, group: undefined }
    return { error: error.message, group: undefined }
  }
}
