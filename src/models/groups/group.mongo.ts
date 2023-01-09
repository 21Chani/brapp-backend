import mongoose from 'mongoose'
export interface Group {
  uuid?: string
  image?: string
  latitude?: number
  description?: string
  longitude?: number
  name?: string
}

const GroupsSchema = new mongoose.Schema<Group>({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  description: { type: String, required: true },
  longitude: { type: Number, required: true },
  image: { type: String, required: true },
  uuid: { type: String, required: true },
})

export const Groups = mongoose.model('groups', GroupsSchema)
