import { connect } from 'mongoose'
import { config } from 'dotenv'
config()
const USERNAME = process.env.MONGO_USER
const PASSWORD = process.env.MONGO_PASSWORD
const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@server.cockr.mongodb.net/?retryWrites=true&w=majority`

export async function mongoConnect() {
  const date = Date.now()
  console.log('\nConnecting to mongodb instance...')
  try {
    await connect(MONGO_URL)
    const ms = Date.now() - date

    console.log(`Database connected successfuly. ${ms}ms\n`)
  } catch (e) {
    console.log('Ocurred an error connecting to db.\n')
    if (e instanceof Error) console.log('error:', e.message)
  }
}
