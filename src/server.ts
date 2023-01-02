import http from 'http'
import { app } from './app'
import { DEFAULT_PORT } from './lib/constants'

const PORT = process.env.PORT || DEFAULT_PORT
const server = http.createServer(app)
async function initializeServer() {
  server.listen(PORT, () => {
    console.log(`\n\n\n Server running in port: ${PORT}`)
  })
}

initializeServer()
