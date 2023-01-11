import { connect, disconnect } from 'mongoose'
import { config } from 'dotenv'
import { MONGO_PASSWORD, MONGO_DATABASE, MONGO_USER } from '../lib/process.env'
config()

const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DATABASE}.cockr.mongodb.net/?retryWrites=true&w=majority`
export async function connectMongo() {
  try {
    await connect(MONGO_URL, { dbName: 'brapp' })
  } catch (e) {
    if (e instanceof Error) console.log('error:', e.message)
  }
}

export async function disconnectMongo() {
  try {
    await disconnect()
  } catch (e) {
    if (e instanceof Error) console.log('error:', e.message)
  }
}
