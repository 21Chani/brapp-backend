import { DataTypes, Model } from 'sequelize'
import { postgres } from '../../services/postgresql'

export interface GroupDataValues {
  uuid?: string
  image?: string
  latitude?: number
  description?: string
  longitude?: number
  name?: string
}
export interface GroupModel extends Model<GroupDataValues, GroupDataValues> {}

export const Groups = postgres.define<GroupModel>('groups', {
  uuid: { type: DataTypes.UUID, primaryKey: true, allowNull: false, unique: true },
  description: { type: DataTypes.STRING, allowNull: false },
  longitude: { type: DataTypes.INTEGER, allowNull: false },
  latitude: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
})
