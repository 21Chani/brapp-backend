import dotenv from 'dotenv'
dotenv.config()

export const MONGO_USER = process.env.MONGO_USER
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD
export const MONGO_SERVER = process.env.MONGO_SERVER
export const IMAGEKIT_PUBLIC = process.env.IMAGEKIT_PUBLIC
export const IMAGEKIT_PRIVATE = process.env.IMAGEKIT_PRIVATE
export const IMAGEKIT_ENDPOINT = process.env.IMAGEKIT_ENDPOINT
