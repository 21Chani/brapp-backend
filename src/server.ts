import http from 'http'
import { app } from './app'
import { DEFAULT_PORT } from './lib/constants'
import { connectDb } from './services/postgresql'

const PORT = process.env.PORT || DEFAULT_PORT
const server = http.createServer(app)
async function initializeServer() {
  await connectDb()
  server.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)
  })
}

initializeServer()
