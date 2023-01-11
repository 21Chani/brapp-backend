import { v4 as uuidV4 } from 'uuid'
import { connectMongo, disconnectMongo } from '../../services/mongo'
import { Group, Groups } from './group.mongo'

export async function hasGroup(uuid: string) {
  await connectMongo()
  const group = await Groups.findOne({ uuid })
  const hasGroup = Boolean(group)
  await disconnectMongo()
  return hasGroup
}

export async function createGroup(data: Group) {
  try {
    await connectMongo()
    const uuid = uuidV4()
    const group = await Groups.create({ ...data, uuid })
    await disconnectMongo()
    return { group, error: undefined }
  } catch (error) {
    if (!(error instanceof Error)) return { error, group: undefined }
    return { error: error.message, group: undefined }
  }
}

export async function getAllGroups() {
  try {
    await connectMongo()
    const groups = await Groups.find({})
    await disconnectMongo()
    return { groups, error: undefined }
  } catch (error) {
    if (!(error instanceof Error)) return { error, group: undefined }
    return { error: error, group: undefined }
  }
}
