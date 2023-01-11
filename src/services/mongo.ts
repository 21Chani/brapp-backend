import { connect, disconnect } from 'mongoose'
import { config } from 'dotenv'
config()
const USERNAME = process.env.MONGO_USER
const PASSWORD = process.env.MONGO_PASSWORD
const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@server.cockr.mongodb.net/?retryWrites=true&w=majority`

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
