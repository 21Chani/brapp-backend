import { ReadStream } from 'fs'
import mongoose from 'mongoose'
export interface Group {
  uuid?: string
  image?: string
  latitude?: number
  description?: string
  longitude?: number
  name?: string
  category: string
}
export interface RawGroup {
  uuid?: string
  image?: {
    file: string | Buffer | ReadStream
    fileName: string
  }
  latitude?: number
  description?: string
  longitude?: number
  name?: string
  category: string
}

const GroupsSchema = new mongoose.Schema<Group>({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  description: { type: String, required: true },
  longitude: { type: Number, required: true },
  image: { type: String, required: true },
  uuid: { type: String, required: true },
  category: { type: String, required: true },
})

export const Groups = mongoose.model('groups', GroupsSchema)
