import http from 'http'
import { app } from './app'
import { DEFAULT_PORT } from './lib/constants'
import { mongoConnect } from './services/mongo'

const PORT = process.env.PORT || DEFAULT_PORT
const server = http.createServer(app)
async function initializeServer() {
  await mongoConnect()
  server.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)
  })
}

initializeServer()
