import { v4 as uuidV4 } from 'uuid'
import { GroupDataValues, Groups } from './group.postgres'

export async function hasGroup(uuid: string) {
  const group = await Groups.findByPk(uuid)
  const hasGroup = Boolean(group?.dataValues)
  return hasGroup
}

export async function createGroup(data: GroupDataValues) {
  try {
    const uuid = uuidV4()
    const group = await Groups.create({ ...data, uuid })
    return { group, error: undefined }
  } catch (error) {
    if (!(error instanceof Error)) return { error, group: undefined }
    return { error: error.message, group: undefined }
  }
}
